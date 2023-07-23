import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  | ComponentProps<"p">
  | { children: (forwardProps: ForwardProps) => ReactElement }
>;

export default forwardRef<HTMLParagraphElement, O.Omit<Props, "ref">>(
  function Paragraph({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        lineHeight: 1.5,
        marginBlockStart: "1.5em",
        marginBlockEnd: "1.5em",
        ...style,
      },
    };

    return typeof children == "function" ? (
      children(forwardProps)
    ) : (
      <p {...forwardProps} {...restProps} ref={ref}>
        {children}
      </p>
    );
  }
) as ComponentType<Props>;
