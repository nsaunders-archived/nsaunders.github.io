import { ComponentProps, forwardRef } from "react";

export type Props = {
  as?: "muted" | "bright";
} & ComponentProps<"span">;

export default forwardRef<HTMLSpanElement, Props>(function Highlight(
  { as, style, ...restProps },
  ref
) {
  return (
    <span
      {...restProps}
      style={{
        ...style,
        color: as ? `var(--fg-${as})` : undefined,
      }}
      ref={ref}
    />
  );
});
