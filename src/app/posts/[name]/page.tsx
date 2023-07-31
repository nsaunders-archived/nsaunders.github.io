import { Metadata } from "next";
import { resolveURL } from "ufo";
import * as Post from "@/data/Post";
import Markdown from "@/components/Markdown";
import Article from "@/components/Article";
import Heading from "@/components/Heading";
import exhausted from "@/utils/exhausted";
import Highlight from "@/components/Highlight";
import * as Posts from "@/data/Posts";
import LabelValuePair from "@/components/LabelValuePair";
import CalendarIcon from "@/components/CalendarIcon";
import FormatDate from "@/components/FormatDate";
import ScreenReaderOnly from "@/components/ScreenReaderOnly";
import FormatReadingTime from "@/components/FormatReadingTime";
import ClockIcon from "@/components/ClockIcon";
import Anchor from "@/components/Anchor";
import * as meta from "@/meta";
import Subscribe from "@/components/Subscribe";
import PageBlock from "@/components/PageBlock";

type Props = {
  params: {
    name: string;
  };
};

export async function generateStaticParams(): Promise<Props["params"][]> {
  return await Posts.list();
}

export async function generateMetadata({
  params: { name },
}: Props): Promise<Metadata> {
  const post = await Post.getByName(name);
  const title = `${post.title} — ${meta.title}`;
  const { description } = post;
  return {
    metadataBase: new URL(meta.publicURL),
    title: `${title} — ${meta.title}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      title: post.title,
      card: "summary_large_image",
    },
  };
}

export default async function Page({ params: { name } }: Props) {
  const post = await Post.getByName(name);
  return (
    <main>
      <Article
        intro={
          <div>
            <Heading level={1} style={{ marginBlockStart: 0 }}>
              {post.title}
            </Heading>
            <Heading level={3}>
              {({ style, ...restProps }) =>
                exhausted(restProps) && (
                  <h2 style={style}>
                    <Highlight as="muted">{post.description}</Highlight>
                  </h2>
                )
              }
            </Heading>
            <div style={{ display: "flex", gap: "2em", marginTop: "3em" }}>
              <LabelValuePair
                label={
                  <>
                    <CalendarIcon aria-hidden />
                    <ScreenReaderOnly>Posted date</ScreenReaderOnly>
                  </>
                }
                value={<FormatDate>{post.published}</FormatDate>}
              />
              <LabelValuePair
                label={<ClockIcon aria-hidden />}
                value={
                  <FormatReadingTime>{post.readingTime}</FormatReadingTime>
                }
              />
            </div>
          </div>
        }
      >
        <Markdown
          components={{
            img: ({ alt, src, style, ...restProps }) =>
              src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={resolveURL(post.imageBase, src)}
                  alt={alt || ""}
                  style={{
                    display: "block",
                    margin: "2em auto",
                    maxWidth: "100%",
                    ...style,
                  }}
                  {...restProps}
                />
              ) : (
                <></>
              ),
          }}
        >
          {post.content}
        </Markdown>
        <div style={{ display: "flex", gap: "0.5em" }}>
          <Anchor
            href={`https://twitter.com/search?q=${encodeURIComponent(
              `${meta.posts}/${post.name}`
            )}`}
          >
            Discuss this post
          </Anchor>
          <Highlight as="muted">|</Highlight>
          <Anchor
            href={`https://github.com/nsaunders/writing/edit/master/posts/${post.name}/index.md`}
          >
            Suggest an edit
          </Anchor>
        </div>
      </Article>
      <PageBlock style={{ marginTop: "4em" }}>
        <Subscribe />
      </PageBlock>
    </main>
  );
}
