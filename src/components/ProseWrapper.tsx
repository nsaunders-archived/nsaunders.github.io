import type { ComponentProps, ComponentType, CSSProperties } from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isComponent from "@/utils/isComponent";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"div"> | { children: ComponentType<ForwardProps> }
>;

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function ProseWrapper({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        lineHeight: 1.5,
        ...style,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...forwardProps}>{children}</Component>;
    }

    return (
      <div {...forwardProps} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }
) as ComponentType<Props>;
