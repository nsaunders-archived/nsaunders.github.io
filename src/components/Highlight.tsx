import { ComponentProps, forwardRef } from "react";

export type Props = {
  as?: "muted";
} & ComponentProps<"span">;

export default forwardRef<HTMLSpanElement, Props>(function Highlight({
  as,
  style,
  ...restProps
}) {
  return (
    <span
      {...restProps}
      style={{
        ...style,
        color: as === "muted" ? "var(--fg-muted)" : undefined,
      }}
    />
  );
});
