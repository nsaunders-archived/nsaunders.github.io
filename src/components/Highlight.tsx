import { ComponentProps, ReactElement, forwardRef, CSSProperties } from "react";
import { O, U } from "ts-toolbelt";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  (
    | ComponentProps<"span">
    | { children: (forwardProps: ForwardProps) => ReactElement }
  ) & {
    as?: "muted" | "bright" | "error";
  }
>;

export default forwardRef<HTMLSpanElement, O.Omit<Props, "ref">>(
  function Highlight({ as, children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        color: as ? `var(--fg-${as})` : undefined,
        ...style,
      },
    };

    return typeof children === "function" ? (
      children(forwardProps)
    ) : (
      <span {...forwardProps} {...restProps} ref={ref}>
        {children}
      </span>
    );
  }
);
