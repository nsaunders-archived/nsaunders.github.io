// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./fetch.d.ts" />

import fs from "fs/promises";
import path from "path";
import RSS from "rss";
import * as Posts from "../../data/Posts";

async function main() {
  const rss = new RSS({
    title: "Nick Saunders - nsaunders.dev",
    description: "Nick Saunders' technology profile and blog",
    feed_url: "https://nsaunders.dev/rss.xml",
    site_url: "https://nsaunders.dev",
    image_url: "https://nsaunders.dev/photo.jpg",
  });
  const posts = await Posts.listWithDetails();
  posts.forEach(({ name, title, description, date }) => {
    rss.item({
      title,
      description,
      url: `https://nsaunders.dev/posts/${name}`,
      date,
    });
  });
  const xml = rss.xml();
  await fs.writeFile(path.resolve(process.cwd(), "public", "rss.xml"), xml);
  process.stdout.write("Successfully wrote rss.xml.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
