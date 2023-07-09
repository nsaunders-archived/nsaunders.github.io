import type { CSSProperties, ComponentProps, ComponentType } from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isComponent from "@/utils/isComponent";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"p"> | { children: ComponentType<ForwardProps> }
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

    if (isComponent(children)) {
      const Component = children;
      return <Component {...forwardProps} />;
    }

    return (
      <p {...forwardProps} {...restProps} ref={ref}>
        {children}
      </p>
    );
  }
) as ComponentType<Props>;
