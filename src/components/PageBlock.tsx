import type {
  CSSProperties,
  ComponentProps,
  ComponentType,
  FunctionComponent,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";

export type PageBlockForwardProps = { style?: CSSProperties };

export type PageBlockProps = U.Strict<
  ComponentProps<"div"> | { children: FunctionComponent<PageBlockForwardProps> }
>;

export const PageBlock = forwardRef<
  HTMLDivElement,
  O.Omit<PageBlockProps, "ref">
>(function PageBlock({ children, style, ...restProps }, ref) {
  const forwardProps: PageBlockForwardProps = {
    style: {
      margin: "0 auto",
      width: "calc(100vw - (var(--desktop) * 64px + var(--mobile) * 32px) * 2)",
      maxWidth: 832,
      boxSizing: "border-box",
      ...style,
    },
  };

  return isFunctionComponent(children) ? (
    children(forwardProps)
  ) : (
    <div ref={ref} {...forwardProps} {...restProps}>
      {children}
    </div>
  );
}) as ComponentType<PageBlockProps>;
