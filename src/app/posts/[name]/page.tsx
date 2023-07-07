import Markdown from "@/components/markdown";
import { resolveURL } from "ufo";
import * as Post from "@/data/Post";
import { Heading } from "@/components/prose";

type Props = {
  params: {
    name: string;
  };
};

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <Heading level={1} style={{ margin: 0 }}>
        {post.data.title}
      </Heading>
      <Markdown
        components={{
          img: ({ alt, src, style, ...restProps }) =>
            src ? (
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
    </main>
  );
}
