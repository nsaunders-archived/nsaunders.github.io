import { list } from "@/data/Projects";
import PageBlock from "@/components/PageBlock";
import exhausted from "@/utils/exhausted";
import Heading from "@/components/Heading";
import * as meta from "@/meta";
import ProjectListItem from "@/components/ProjectListItem";

export const metadata = {
  title: `Projects — ${meta.title}`,
  description: meta.description,
};

export default async function Projects() {
  const projects = await list();
  return (
    <PageBlock>
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <main style={style}>
            <Heading level={3}>
              {({ style, ...restProps }) =>
                exhausted(restProps) && <h1 style={style}>Projects</h1>
              }
            </Heading>
            <ul
              style={{
                all: "unset",
                listStyle: "none",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2em",
                marginTop: "2em",
              }}
            >
              {projects.map((project) => (
                <li key={project.name} style={{ display: "contents" }}>
                  <ProjectListItem>{project}</ProjectListItem>
                </li>
              ))}
            </ul>
          </main>
        )
      }
    </PageBlock>
  );
}
