import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  forwardRef,
  ReactElement,
} from "react";
import { O, U } from "ts-toolbelt";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  | ComponentProps<"span">
  | {
      children: (forwardProps: ForwardProps) => ReactElement;
    }
>;

export default forwardRef<HTMLSpanElement, O.Omit<Props, "ref">>(
  function ScreenReaderOnly({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        position: "absolute",
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: 0,
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
) as ComponentType<Props>;
