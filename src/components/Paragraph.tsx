import type {
  CSSProperties,
  ComponentProps,
  ComponentType,
  FunctionComponent,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"p"> | { children: FunctionComponent<ForwardProps> }
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

    return isFunctionComponent(children) ? (
      children(forwardProps)
    ) : (
      <p {...forwardProps} {...restProps} ref={ref}>
        {children}
      </p>
    );
  }
) as ComponentType<Props>;
