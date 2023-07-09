import type { ComponentProps, ComponentType, CSSProperties } from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isComponent from "@/utils/isComponent";

const headingStyles = [
  {},
  makeStyle(3),
  makeStyle(2.4),
  makeStyle(2),
  makeStyle(1.601),
  makeStyle(1.2, 700),
  makeStyle(1, 700),
] as const;

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"h1"> | { children: ComponentType<ForwardProps> }
> & { level?: 1 | 2 | 3 | 4 | 5 | 6 };

export default forwardRef<HTMLHeadingElement, O.Omit<Props, "ref">>(
  function Heading({ children, level = 1, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        ...headingStyles[level],
        ...style,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...forwardProps} />;
    }

    const Component = `h${level}` as const;
    return (
      <Component {...forwardProps} {...restProps} ref={ref}>
        {children}
      </Component>
    );
  }
) as ComponentType<Props>;

function makeStyle(fontSizeEm: number, fontWeight: 400 | 700 = 400) {
  const margin = `${1.5 / fontSizeEm}em`;
  return {
    fontSize: `${fontSizeEm}em`,
    fontWeight,
    lineHeight: 1.25,
    marginBlockStart: margin,
    marginBlockEnd: margin,
  };
}
