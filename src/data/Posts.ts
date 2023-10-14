import * as t from "io-ts";
import * as tPromise from "io-ts-promise";
import * as Post from "./Post";

const Posts = t.array(
  t.type({
    name: t.string,
  })
);

export async function list() {
  const res = await fetch(
    "https://api.github.com/repos/nsaunders/writing/contents/posts",
    { next: { revalidate: 60 } }
  );
  return await tPromise.decode(Posts, await res.json());
}

export async function listWithDetails() {
  const posts = await list();
  let postsWithDetails = await Promise.all(
    posts.map(({ name }) => Post.getByName(name))
  );
  if (process.env.NODE_ENV !== "development") {
    const now = new Date();
    postsWithDetails = postsWithDetails.filter(
      ({ published }) => published < now
    );
  }
  return postsWithDetails.sort((a, b) =>
    a.published < b.published ? 1 : a.published > b.published ? -1 : 0
  );
}

export async function getByLatest() {
  const [post] = await listWithDetails();
  return post as typeof post | null;
}
