import ReactMarkdown from "react-markdown";
import { resolveURL } from "ufo";
import remarkRemoveComments from "remark-remove-comments";
import * as Post from "@/data/Post";
import { Heading as HeadingImpl, Wrapper } from "@/components/prose";
import { ComponentProps } from "react";

type Props = {
  params: {
    name: string;
  };
};

const Heading: Exclude<
  ComponentProps<typeof ReactMarkdown>["components"],
  undefined
>["h1"] = function Heading({ children, level, ...restProps }) {
  if (
    level === 1 ||
    level === 2 ||
    level === 3 ||
    level === 4 ||
    level === 5 ||
    level === 6
  ) {
    return (
      <HeadingImpl level={level} {...restProps}>
        {children}
      </HeadingImpl>
    );
  }
  return <>{children}</>;
};

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <HeadingImpl level={1} style={{ margin: 0 }}>
        {post.data.title}
      </HeadingImpl>
      <Wrapper>
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
      </Wrapper>
    </main>
  );
}
