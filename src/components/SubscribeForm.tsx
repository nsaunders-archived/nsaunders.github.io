"use client";

import { useEffect, useMemo, useReducer } from "react";
import fetchJsonp from "fetch-jsonp";
import * as t from "io-ts";
import * as tPromise from "io-ts-promise";
import exhausted from "@/utils/exhausted";
import Button from "./Button";
import Highlight from "./Highlight";
import Surface from "./Surface";
import TextInput from "./TextInput";
import Typography from "./Typography";

const SubscribeResult = t.type({
  result: t.union([t.literal("success"), t.literal("error")]),
  msg: t.string,
});

type SubscribeResult = t.TypeOf<typeof SubscribeResult>;

async function subscribe({ name, email }: { name: string; email: string }) {
  const res = await fetchJsonp(
    `https://dev.us21.list-manage.com/subscribe/post-json?u=1961e884a06fdad7a53bc160e&id=3f29e7fcdf&f_id=00905ce1f0&FNAME=${encodeURIComponent(
      name
    )}&EMAIL=${encodeURIComponent(email)}`,
    { jsonpCallback: "c" }
  );
  const payload = await tPromise.decode(SubscribeResult, await res.json());
  if (payload.result === "error") {
    // Drop error code prefix if applicable:
    payload.msg = payload.msg.match(/([0-9\s]+\-\s+)?(.*)/)?.[2] || payload.msg;
  }
  return payload;
}

export default function Subscribe() {
  const [state, dispatch] = useReducer(
    function (
      state: {
        data: { name: string; email: string };
        visited: { name: boolean; email: boolean };
        status:
          | { tag: "pending" | "processing" }
          | ({ tag: "completed" } & SubscribeResult);
      },
      action:
        | ({ tag: "visited" | "data"; field: "name" | "email" } & (
            | { tag: "visited"; value?: undefined }
            | { tag: "data"; value: string }
          ))
        | { tag: "submit" }
        | ({ tag: "completed" } & SubscribeResult)
    ) {
      const next: typeof state = JSON.parse(JSON.stringify(state));
      switch (action.tag) {
        case "data":
        case "visited":
          next[action.tag][action.field] =
            action.tag === "visited" ? true : action.value;
          next.status = { tag: "pending" };
          break;
        case "submit":
          const { name, email } = state.data;
          next.visited.name = true;
          next.visited.email = true;
          if (name && email) {
            next.status = { tag: "processing" };
          }
          break;
        case "completed":
          next.status = action;
          break;
        default:
          break;
      }
      return next;
    },
    {
      data: { name: "", email: "" },
      visited: { name: false, email: false },
      status: { tag: "pending" },
    }
  );

  useEffect(() => {
    if (state.status.tag === "processing") {
      let canceler = false;
      subscribe(state.data)
        .then((res) => {
          if (!canceler) {
            dispatch({ tag: "completed", ...res });
          }
        })
        .catch(() => {
          if (!canceler) {
            dispatch({
              tag: "completed",
              result: "error",
              msg: "I'm sorry, but something went wrong. Please try submitting the form again.",
            });
          }
        });
      return () => {
        canceler = true;
      };
    }
  }, [state]);

  const disabled = useMemo(() => {
    const status = state.status;
    return (
      status.tag === "processing" ||
      (status.tag === "completed" && status.result === "success")
    );
  }, [state.status]);

  return (
    <Surface theme="dark-gray">
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <form
            style={{
              display: "inline-flex",
              flexDirection: "column",
              gap: "0.5em",
              padding: "2em",
              ...style,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ tag: "submit" });
            }}
          >
            <label style={{ display: "contents" }}>
              <Typography variant="boldBase">First name</Typography>
              <TextInput
                disabled={disabled}
                value={state.data.name}
                onChange={(e) => {
                  dispatch({
                    tag: "data",
                    field: "name",
                    value: e.target.value,
                  });
                }}
                onBlur={() => {
                  dispatch({ tag: "visited", field: "name" });
                }}
              />
              <Highlight as="error">
                {state.visited.name && !state.data.name ? (
                  "Please provide your name."
                ) : (
                  <>&#x200b;</>
                )}
              </Highlight>
            </label>
            <div />
            <label style={{ display: "contents" }}>
              <Typography variant="boldBase">Email address</Typography>
              <TextInput
                disabled={disabled}
                value={state.data.email}
                onChange={(e) => {
                  dispatch({
                    tag: "data",
                    field: "email",
                    value: e.target.value,
                  });
                }}
                onBlur={() => {
                  dispatch({ tag: "visited", field: "email" });
                }}
              />
              <Highlight as="error">
                {state.visited.email && !state.data.email ? (
                  "Please provide your email."
                ) : (
                  <>&#x200b;</>
                )}
              </Highlight>
            </label>
            <div />
            <Button
              type="submit"
              disabled={disabled}
              style={{ alignSelf: "center" }}
            >
              Subscribe
            </Button>
            <div />
            <Highlight
              style={{ textAlign: "center" }}
              as={
                state.status.tag === "completed" ? state.status.result : "muted"
              }
            >
              {state.status.tag === "completed" ? (
                state.status.msg
              ) : (
                <>
                  &#x200b;
                  <br />
                  &#x200b;
                </>
              )}
            </Highlight>
          </form>
        )
      }
    </Surface>
  );
}
