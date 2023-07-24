import * as Posts from "@/data/Posts";
import PageBlock from "@/components/PageBlock";
import exhausted from "@/utils/exhausted";
import Heading from "@/components/Heading";
import PostListItem from "@/components/PostListItem";
import * as meta from "@/meta";

export const metadata = {
  title: `Blog — ${meta.title}`,
  description: meta.description,
};

export default async function Blog() {
  const posts = await Posts.listWithDetails();
  return (
    <PageBlock>
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <main style={style}>
            <Heading level={3}>
              {({ style, ...restProps }) =>
                exhausted(restProps) && <h1 style={style}>Blog</h1>
              }
            </Heading>
            <ul
              style={{
                all: "unset",
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "2em",
                marginTop: "2em",
              }}
            >
              {posts.map((post) => (
                <li key={post.name}>
                  <PostListItem>{post}</PostListItem>
                </li>
              ))}
            </ul>
          </main>
        )
      }
    </PageBlock>
  );
}
