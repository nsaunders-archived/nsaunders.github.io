import * as PageData from "@/data/Page";
import { resolveURL } from "ufo";
import Article from "@/components/Article";
import Markdown from "@/components/Markdown";
import Image from "next/image";
import portrait from "./me.jpg";
import Heading from "@/components/Heading";

export default async function Page() {
  const page = await PageData.getByName("about");
  return (
    <main>
      <Article
        intro={
          <>
            <Heading level={1}>About</Heading>
            <Image
              src={portrait}
              alt="Nick"
              width={128}
              height={128}
              style={{
                borderRadius: 999,
                position: "absolute",
                right: 0,
                top: "calc(50% - 64px)",
              }}
            />
          </>
        }
      >
        <Markdown
          components={{
            img: ({ alt, src, style, ...restProps }) =>
              src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resolveURL(page.imagePath, src)}
                  alt={alt || ""}
                  style={{ display: "block", margin: "2em auto", ...style }}
                  {...restProps}
                />
              ) : (
                <></>
              ),
          }}
        >
          {page.content}
        </Markdown>
      </Article>
    </main>
  );
}
