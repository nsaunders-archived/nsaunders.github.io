import * as Post from "@/data/Post";
import { resolveURL } from "ufo";
import Markdown from "@/components/Markdown";
import Article from "@/components/Article";
import Heading from "@/components/Heading";
import ifExhausted from "@/utils/ifExhausted";
import Typography from "@/components/Typography";
import Highlight from "@/components/Highlight";
import * as Posts from "@/data/Posts";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams() {
  const posts = await Posts.list();
  return posts.map(({ name }) => name);
}

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <Article
        intro={
          <Typography variant="regularBase">
            {({ style, ...restProps }) =>
              ifExhausted(
                restProps,
                <div style={style}>
                  <Heading level={1}>{post.title}</Heading>
                  <Heading level={3}>
                    {({ style, ...restProps }) =>
                      ifExhausted(
                        restProps,
                        <h2 style={style}>
                          <Highlight as="muted">{post.description}</Highlight>
                        </h2>
                      )
                    }
                  </Heading>
                </div>
              )
            }
          </Typography>
        }
      >
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
