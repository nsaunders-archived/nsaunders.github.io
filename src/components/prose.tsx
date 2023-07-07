import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";
import { isComponent } from "@/utils/react";

export type WrapperChildProps = {
  style?: CSSProperties;
};

export type WrapperProps = U.Strict<
  ComponentProps<"div"> | { children?: ComponentType<WrapperChildProps> }
>;

export const Wrapper = forwardRef<HTMLDivElement, O.Omit<WrapperProps, "ref">>(
  function Wrapper({ children, ...restProps }, ref) {
    const childProps: WrapperChildProps = {
      style: {
        lineHeight: 1.5,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...childProps}>{children}</Component>;
    }

    return (
      <div {...childProps} {...restProps}>
        {children}
      </div>
    );
  }
) as ComponentType<WrapperProps>;

function makeHeadingStyle(fontSizeEm: number, fontWeight: 400 | 700 = 400) {
  const margin = `${1.5 / fontSizeEm}em`;
  return {
    fontSize: `${fontSizeEm}em`,
    fontWeight,
    lineHeight: 1.25,
    marginBlockStart: margin,
    marginBlockEnd: margin,
  };
}

const headingStyles = [
  {},
  makeHeadingStyle(3),
  makeHeadingStyle(2.4),
  makeHeadingStyle(2),
  makeHeadingStyle(1.601),
  makeHeadingStyle(1.2, 700),
  makeHeadingStyle(1, 700),
] as const;

export type HeadingChildProps = {
  style?: CSSProperties;
};

export type HeadingProps = U.Strict<
  ComponentProps<"h1"> | { children?: ComponentType<HeadingChildProps> }
> & { level?: 1 | 2 | 3 | 4 | 5 | 6 };

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading({ children, level = 1, style, ...restProps }, ref) {
    const childProps: HeadingChildProps = {
      style: {
        ...headingStyles[level],
        ...style,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...childProps}>{children}</Component>;
    }

    const Component = `h${level}` as const;
    return (
      <Component {...childProps} {...restProps} ref={ref}>
        {children}
      </Component>
    );
  }
) as ComponentType<HeadingProps>;
