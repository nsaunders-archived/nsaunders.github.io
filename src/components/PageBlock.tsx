import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";

export type ForwardProps = { style?: CSSProperties };

export type Props = U.Strict<
  | ComponentProps<"div">
  | { children: (forwardProps: ForwardProps) => ReactElement }
>;

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function PageBlock({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        margin: "0 auto",
        width:
          "calc(100vw - (var(--desktop) * 64px + var(--mobile) * 48px) * 2)",
        maxWidth: 832,
        boxSizing: "border-box",
        ...style,
      },
    };

    return typeof children === "function" ? (
      children(forwardProps)
    ) : (
      <div {...forwardProps} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }
) as ComponentType<Props>;
