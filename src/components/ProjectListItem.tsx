import exhausted from "@/utils/exhausted";
import Anchor from "./Anchor";
import Typography from "./Typography";
import type * as Projects from "@/data/Projects";
import { ReactNode } from "react";
import StarIcon from "./StarIcon";
import ForkIcon from "./ForkIcon";
import Surface from "./Surface";

function ProjectListItemDetail({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.375em" }}>
      {children}
    </div>
  );
}

export type Props = {
  children: Awaited<ReturnType<(typeof Projects)["list"]>>[number];
};

function ProjectListItemContent({
  children: { url, name, description, language, stars, forks },
}: Props) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="boldLarge">
        {({ style, ...restProps }) =>
          exhausted(restProps) && (
            <Anchor href={url} style={style}>
              {name}
            </Anchor>
          )
        }
      </Typography>
      <Typography variant="regularBase">
        {({ style, ...restProps }) =>
          exhausted(restProps) && (
            <p style={{ ...style, margin: "0.75em 0", flex: 1 }}>
              {description}
            </p>
          )
        }
      </Typography>
      <div style={{ display: "flex", alignItems: "center", gap: "1.25em" }}>
        <ProjectListItemDetail>
          <div
            style={{
              width: "0.75em",
              height: "0.75em",
              borderRadius: 999,
              backgroundColor: language.color,
            }}
          />
          {language.name}
        </ProjectListItemDetail>
        <ProjectListItemDetail>
          <StarIcon />
          {stars}
        </ProjectListItemDetail>
        {!!forks && (
          <ProjectListItemDetail>
            <ForkIcon />
            {forks}
          </ProjectListItemDetail>
        )}
      </div>
    </div>
  );
}

export default function ProjectListItem(props: Props) {
  return (
    <Surface theme="dark-gray">
      {({ style, ...restProps }) =>
        exhausted(restProps) && (
          <div style={{ ...style, padding: "1.25em 1.5em" }}>
            <ProjectListItemContent {...props} />
          </div>
        )
      }
    </Surface>
  );
}
