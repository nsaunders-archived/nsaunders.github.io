import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";
import { isComponent } from "@/utils/react";
import { Inconsolata } from "next/font/google";
import cx from "clsx";
export * from "./client";

export type WrapperForwardProps = {
  style?: CSSProperties;
};

export type WrapperProps = U.Strict<
  ComponentProps<"div"> | { children: ComponentType<WrapperForwardProps> }
>;

export const Wrapper = forwardRef<HTMLDivElement, O.Omit<WrapperProps, "ref">>(
  function Wrapper({ children, style, ...restProps }, ref) {
    const forwardProps: WrapperForwardProps = {
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
      <div {...forwardProps} {...restProps}>
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

export type HeadingForwardProps = {
  style?: CSSProperties;
};

export type HeadingProps = U.Strict<
  ComponentProps<"h1"> | { children: ComponentType<HeadingForwardProps> }
> & { level?: 1 | 2 | 3 | 4 | 5 | 6 };

export const Heading = forwardRef<
  HTMLHeadingElement,
  O.Omit<HeadingProps, "ref">
>(function Heading({ children, level = 1, style, ...restProps }, ref) {
  const forwardProps: HeadingForwardProps = {
    style: {
      ...headingStyles[level],
      ...style,
    },
  };

  if (isComponent(children)) {
    const Component = children;
    return <Component {...forwardProps}>{children}</Component>;
  }

  const Component = `h${level}` as const;
  return (
    <Component {...forwardProps} {...restProps} ref={ref}>
      {children}
    </Component>
  );
}) as ComponentType<HeadingProps>;

export type ParagraphForwardProps = {
  style?: CSSProperties;
};

export type ParagraphProps = U.Strict<
  ComponentProps<"p"> | { children: ComponentType<ParagraphForwardProps> }
>;

export const Paragraph = forwardRef<
  HTMLParagraphElement,
  O.Omit<ParagraphProps, "ref">
>(function Paragraph({ children, style, ...restProps }, ref) {
  const forwardProps: ParagraphForwardProps = {
    style: {
      lineHeight: 1.5,
      marginBlockStart: "1.5em",
      marginBlockEnd: "1.5em",
      ...style,
    },
  };

  if (isComponent(children)) {
    const Component = children;
    return <Component {...forwardProps}>{children}</Component>;
  }

  return (
    <p {...forwardProps} {...restProps}>
      {children}
    </p>
  );
}) as ComponentType<CodeProps>;

export type CodeForwardProps = {
  className?: string;
};

export type CodeProps = U.Strict<
  ComponentProps<"code"> | { children: ComponentType<CodeForwardProps> }
>;

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export const Code = forwardRef<HTMLElement, Omit<CodeProps, "ref">>(
  ({ children, className, ...restProps }, ref) => {
    const Component = isComponent(children)
      ? children
      : (forwardProps: CodeForwardProps) => (
          <code ref={ref} {...forwardProps} {...restProps}>
            {children}
          </code>
        );

    return <Component className={cx(className, inconsolata.className)} />;
  }
) as ComponentType<CodeProps>;
