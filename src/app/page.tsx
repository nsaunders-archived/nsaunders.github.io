import Article from "@/components/Article";
import Highlight from "@/components/Highlight";
import PostListItem from "@/components/PostListItem";
import Typography from "@/components/Typography";
import * as Posts from "@/data/Posts";
import * as Projects from "@/data/Projects";
import * as Project from "@/data/Project";
import exhausted from "@/utils/exhausted";
import * as meta from "@/meta";
import ProjectListItem from "@/components/ProjectListItem";
import LinkAnchor from "@/components/LinkAnchor";
import Surface from "@/components/Surface";
import Paragraph from "@/components/Paragraph";

export const metadata = {
  title: `Nick Saunders — ${meta.title}`,
  description: meta.description,
};

export default async function Home() {
  const latestPost = await Posts.getByLatest();
  const featuredProject = await Projects.getFeatured();
  const projectSummary = await Project.getSummary(
    featuredProject.name,
    featuredProject.owner
  );
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
        <div
          style={{
            marginTop: "3em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.5em",
          }}
        >
          {latestPost && (
            <section style={{ display: "contents" }}>
              <Typography variant="regular2XL">
                {({ style, ...restProps }) =>
                  exhausted(restProps) && <h1 style={style}>Latest post</h1>
                }
              </Typography>
              <Surface
                theme="black"
                style={{
                  width: "100%",
                  padding: "1.5em",
                }}
              >
                <PostListItem>{latestPost}</PostListItem>
              </Surface>
              <LinkAnchor href="/projects">View more&hellip;</LinkAnchor>
            </section>
          )}
          <Surface theme="dark-gray">
            {({ style, ...restProps }) =>
              exhausted(restProps) && (
                <hr style={{ ...style, border: 0, width: "100%", height: 1 }} />
              )
            }
          </Surface>
          {featuredProject && (
            <section style={{ display: "contents" }}>
              <Typography variant="regular2XL">
                {({ style, ...restProps }) =>
                  exhausted(restProps) && (
                    <h1 style={style}>Featured project</h1>
                  )
                }
              </Typography>
              <Surface
                theme="black"
                style={{
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5em",
                  padding: "1.5em",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    flexBasis: "calc((60ch - 100%) * 999)",
                    flexGrow: 1,
                  }}
                >
                  <ProjectListItem>{featuredProject}</ProjectListItem>
                </div>
                <Paragraph
                  style={{
                    margin: 0,
                    flexBasis: "calc((60ch - 100%) * 999)",
                    flexGrow: 1,
                  }}
                >
                  {projectSummary}
                </Paragraph>
              </Surface>
              <LinkAnchor href="/projects">View more&hellip;</LinkAnchor>
            </section>
          )}
        </div>
      </Article>
    </main>
  );
}
