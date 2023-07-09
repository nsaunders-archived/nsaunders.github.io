import { isComponent } from "@/utils/react";
import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";

export type PageBlockForwardProps = { style?: CSSProperties };

export type PageBlockProps = U.Strict<
  ComponentProps<"div"> | { children: ComponentType<PageBlockForwardProps> }
>;

export const PageBlock = forwardRef<
  HTMLDivElement,
  O.Omit<PageBlockProps, "ref">
>(function PageBlock({ children, style, ...restProps }, ref) {
  const forwardProps: PageBlockForwardProps = {
    style: {
      margin: "0 auto",
      width: "calc(100vw - var(--margin-x) * 2)",
      maxWidth: 832,
      boxSizing: "border-box",
      ...style,
    },
  };

  if (isComponent(children)) {
    const Component = children;
    return <Component {...forwardProps} />;
  }

  return (
    <div ref={ref} {...forwardProps} {...restProps}>
      {children}
    </div>
  );
}) as ComponentType<PageBlockProps>;
