import Article from "@/components/Article";
import Heading from "@/components/Heading";
import Highlight from "@/components/Highlight";
import PostListItem from "@/components/PostListItem";
import Typography from "@/components/Typography";
import * as Posts from "@/data/Posts";
import exhausted from "@/utils/exhausted";

export default async function Home() {
  const latestPost = await Posts.getByLatest();
  return (
    <main>
      <Article
        intro={
          <>
            <Typography variant="regular3XL" margins>
              {({ style, ...restProps }) =>
                exhausted(restProps) && (
                  <p style={{ ...style, marginBlockStart: 0 }}>
                    <Highlight as="bright">Hi there, I&apos;m Nick.</Highlight>
                  </p>
                )
              }
            </Typography>
            <Typography variant="regularXL" margins>
              {({ style, ...restProps }) =>
                exhausted(restProps) && (
                  <p style={{ ...style, marginBlockEnd: 0 }}>
                    I&apos;m an experienced software engineer focused on React,
                    TypeScript, and Design Systems. I also dabble in functional
                    programming via PureScript.
                  </p>
                )
              }
            </Typography>
          </>
        }
      >
        {latestPost && (
          <section style={{ marginTop: "3em" }}>
            <Heading level={3}>Latest post</Heading>
            <PostListItem>{latestPost}</PostListItem>
          </section>
        )}
      </Article>
    </main>
  );
}
