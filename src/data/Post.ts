import * as t from "io-ts";
import * as tt from "io-ts-types";
import * as tPromise from "io-ts-promise";
import matter from "gray-matter";

const Post = t.type({
  content: t.string,
  data: t.type({
    title: t.string,
    date: tt.date,
    tags: t.array(t.string),
  }),
});

export async function getByName(name: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/nsaunders/writing/master/posts/${name}/index.md`
  );
  return {
    name,
    ...(await tPromise.decode(Post, matter(await res.text(), {}))),
  };
}
