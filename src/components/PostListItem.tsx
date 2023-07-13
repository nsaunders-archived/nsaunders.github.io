import { forwardRef } from "react";
import { format } from "date-fns";
import { Post } from "@/data/Post";
import ifExhausted from "@/utils/ifExhausted";
import LinkAnchor from "./LinkAnchor";
import ProseWrapper from "./ProseWrapper";
import Typography from "./Typography";
import Highlight from "./Highlight";

export type Props = {
  children: Post;
};

export default forwardRef<HTMLDivElement, Props>(function PostListItem(
  { children: { name, title, date, description, readingTime } },
  ref
) {
  return (
    <div ref={ref}>
      <div
        style={{
          display: "flex",
          gap: "0.5em",
        }}
      >
        <span>
          <Highlight as="muted">{format(date, "MMM d, yyyy")}</Highlight>
        </span>
        <span>
          <Highlight as="muted">
            {readingTime.minutes.toFixed()} min read
          </Highlight>
        </span>
      </div>
      <Typography variant="regularXL">
        {({ style, ...restProps }) =>
          ifExhausted(
            restProps,
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
