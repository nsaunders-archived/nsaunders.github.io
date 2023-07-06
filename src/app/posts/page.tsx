import Link from "next/link";
import * as Posts from "@/data/Posts";

export default async function Blog() {
  const posts = await Posts.listWithDetails();
  return (
    <ul>
      {posts.map(({ name, data: { title } }) => (
        <li key={name}>
          <Link href={`./posts/${name}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
