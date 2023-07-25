import * as t from "io-ts";
import * as tt from "io-ts-types";
import * as tPromise from "io-ts-promise";
import matter from "gray-matter";
import readingTime from "reading-time";

const Post = t.type({
  content: t.string,
  data: t.type({
    title: t.string,
    description: t.string,
    published: tt.date,
    tags: t.array(t.string),
  }),
});

export async function getByName(name: string) {
  const res = await fetch(
    `https://raw.githubusercontent.com/nsaunders/writing/master/posts/${name}/index.md`
  );
  const {
    content,
    data: { title, published, description, tags },
  } = await tPromise.decode(Post, matter(await res.text(), {}));
  return {
    imageBase: `https://media.githubusercontent.com/media/nsaunders/writing/master/posts/${name}/`,
    name,
    title,
    published,
    description,
    tags,
    content,
    readingTime: readingTime(content),
  };
}

export type Post = Awaited<ReturnType<typeof getByName>>;
