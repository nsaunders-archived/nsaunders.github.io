import * as PageData from "@/data/Page";
import { resolveURL } from "ufo";
import Markdown from "@/components/Markdown";
import Heading from "@/components/Heading";
import { PageBlock } from "@/components/PageBlock";
import { ifExhausted } from "@/utils/ifExhausted";
import Image from "next/image";
import portrait from "./me.jpg";

export default async function Page() {
  const page = await PageData.getByName("about");
  return (
    <main>
      <div style={{ background: "var(--gray-800)", marginBottom: 16 }}>
        <Heading level={1}>
          {({ style, ...restProps }) =>
            ifExhausted(
              restProps,
              <PageBlock
                style={{
                  ...style,
                  marginBlockStart: 0,
                  marginBlockEnd: 0,
                  padding: "2em 0",
                  position: "relative",
                }}
              >
                <h1 style={{ all: "unset" }}>About</h1>
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
              </PageBlock>
            )
          }
        </Heading>
      </div>
      <PageBlock>
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
      </PageBlock>
    </main>
  );
}
