import ReactMarkdown from "react-markdown";
import { resolveURL } from "ufo";
import { ComponentProps, FC, ReactNode } from "react";
import remarkRemoveComments from "remark-remove-comments";
import * as Post from "@/data/Post";

type Props = {
  params: {
    name: string;
  };
};

const Heading: Exclude<
  ComponentProps<typeof ReactMarkdown>["components"],
  undefined
>["h1"] = function Heading({ level, children }) {
  if (
    level === 1 ||
    level === 2 ||
    level === 3 ||
    level === 4 ||
    level === 5 ||
    level === 6
  ) {
    const Component = `h${level}` as const;
    return (
      <Component style={{ marginBlockStart: "1.5em", marginBlockEnd: "1.5em" }}>
        {children}
      </Component>
    );
  }
  return <>{children}</>;
};

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <h1 style={{ marginBlockStart: "1.25em", marginBlockEnd: "1.25em" }}>
        {post.data.title}
      </h1>
      <ReactMarkdown
        remarkPlugins={[remarkRemoveComments]}
        components={{
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          h5: Heading,
          h6: Heading,
          img: ({ src, alt }) =>
            src ? (
              <img
                src={resolveURL(
                  `https://media.githubusercontent.com/media/nsaunders/writing/master/posts/${name}/`,
                  src
                )}
                alt={alt || ""}
                style={{ display: "block", margin: "0 auto" }}
              />
            ) : (
              <></>
            ),
          p: ({ children }) => (
            <p
              style={{
                lineHeight: 1.5,
                marginBlockStart: "1.5em",
                marginBlockEnd: "1.5em",
              }}
            >
              {children}
            </p>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </main>
  );
}
