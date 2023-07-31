import { forwardRef } from "react";
import { Post } from "@/data/Post";
import exhausted from "@/utils/exhausted";
import LinkAnchor from "./LinkAnchor";
import ProseWrapper from "./ProseWrapper";
import Typography from "./Typography";
import Highlight from "./Highlight";
import FormatDate from "./FormatDate";
import FormatReadingTime from "./FormatReadingTime";

export type Props = {
  children: Post;
};

export default forwardRef<HTMLDivElement, Props>(function PostListItem(
  { children: { name, title, published, description, readingTime } },
  ref
) {
  return (
    <div
      ref={ref}
      style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.5em",
        }}
      >
        <span>
          <Highlight as="muted">
            <FormatDate>{published}</FormatDate>
          </Highlight>
        </span>
        <span>
          <Highlight as="muted">
            <FormatReadingTime>{readingTime}</FormatReadingTime>
          </Highlight>
        </span>
      </div>
      <Typography variant="regularXL">
        {({ style, ...restProps }) =>
          exhausted(restProps) && (
            <LinkAnchor style={style} href={`/posts/${name}`}>
              {title}
            </LinkAnchor>
          )
        }
      </Typography>
      <ProseWrapper>{description}</ProseWrapper>
    </div>
  );
});
