import Link from "next/link";
import * as Posts from "@/data/Posts";
import { PageBlock } from "@/components/PageBlock";
import ifExhausted from "@/utils/ifExhausted";
import Heading from "@/components/Heading";
import readingTime from "reading-time";
import { format } from "date-fns";
import LinkAnchor from "@/components/LinkAnchor";
import Typography from "@/components/Typography";
import ProseWrapper from "@/components/ProseWrapper";

export default async function Blog() {
  const posts = await Posts.listWithDetails();
  return (
    <PageBlock>
      {({ style, ...restProps }) =>
        ifExhausted(
          restProps,
          <main style={style}>
            <Heading level={3}>
              {({ style, ...restProps }) =>
                ifExhausted(restProps, <h1 style={style}>Blog</h1>)
              }
            </Heading>
            <ul style={{ all: "unset", listStyle: "none" }}>
              {posts.map(
                ({ name, content, data: { date, title, description } }) => (
                  <li key={name} style={{ marginTop: "2em" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5em",
                        color: "var(--gray-500)",
                      }}
                    >
                      <span>{format(date, "MMM d, yyyy")}</span>
                      <span>
                        {readingTime(content).minutes.toFixed()} min read
                      </span>
                    </div>
                    <Typography variant="regularXL">
                      {({ style, ...restProps }) =>
                        ifExhausted(
                          restProps,
                          <LinkAnchor style={style} href={`/posts/${name}`}>
                            {title}
                          </LinkAnchor>
                        )
                      }
                    </Typography>
                    <ProseWrapper>{description}</ProseWrapper>
                  </li>
                )
              )}
            </ul>
          </main>
        )
      }
    </PageBlock>
  );
}
