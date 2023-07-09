import * as Post from "@/data/Post";
import { resolveURL } from "ufo";
import Markdown from "@/components/Markdown";
import Heading from "@/components/Heading";
import { PageBlock } from "@/components/PageBlock";
import { ifExhausted } from "@/utils/ifExhausted";

type Props = {
  params: {
    name: string;
  };
};

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <div style={{ background: "var(--gray-800)" }}>
        <Heading level={1}>
          {({ style, ...restProps }) =>
            ifExhausted(
              restProps,
              <PageBlock
                style={{
                  ...style,
                  marginBlockStart: 0,
                  marginBlockEnd: 0,
                  padding: "2em 0",
                }}
              >
                <h1
                  style={{ marginInline: 0, marginBlock: 0, font: "inherit" }}
                >
                  {post.data.title}
                </h1>
              </PageBlock>
            )
          }
        </Heading>
      </div>
      <PageBlock>
        <Markdown
          components={{
            img: ({ alt, src, style, ...restProps }) =>
              src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resolveURL(
                    `https://media.githubusercontent.com/media/nsaunders/writing/master/posts/${name}/`,
                    src
                  )}
                  alt={alt || ""}
                  style={{ display: "block", margin: "2em auto", ...style }}
                  {...restProps}
                />
              ) : (
                <></>
              ),
          }}
        >
          {post.content}
        </Markdown>
      </PageBlock>
    </main>
  );
}
