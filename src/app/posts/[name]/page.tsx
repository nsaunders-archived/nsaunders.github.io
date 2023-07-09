import * as Post from "@/data/Post";
import { resolveURL } from "ufo";
import Markdown from "@/components/Markdown";
import Article from "@/components/Article";

type Props = {
  params: {
    name: string;
  };
};

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <Article intro={<h1 style={{ all: "unset" }}>{post.data.title}</h1>}>
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
      </Article>
    </main>
  );
}
