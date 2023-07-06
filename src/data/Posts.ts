import * as t from "io-ts";
import * as tPromise from "io-ts-promise";
import * as Post from "./Post";

const Posts = t.array(
  t.type({
    name: t.string,
  })
);

export async function listWithDetails() {
  const res = await fetch(
    "https://api.github.com/repos/nsaunders/writing/contents/posts"
  );
  const posts = await tPromise.decode(Posts, await res.json());
  return await Promise.all(posts.map(({ name }) => Post.getByName(name)));
}
