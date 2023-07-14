// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./fetch.d.ts" />

import fs from "fs/promises";
import path from "path";
import RSS from "rss";
import * as Posts from "../../data/Posts";
import * as meta from "@/meta";

async function main() {
  const rss = new RSS({
    title: meta.title,
    description: meta.description,
    feed_url: meta.rss,
    site_url: meta.publicURL,
    image_url: `${meta.publicURL}/photo.jpg`,
  });
  const posts = await Posts.listWithDetails();
  posts.forEach(({ name, title, description, date }) => {
    rss.item({
      title,
      description,
      url: `${meta.posts}/${name}`,
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
