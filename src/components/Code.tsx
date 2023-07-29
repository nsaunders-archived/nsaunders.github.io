import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";
import { Inconsolata } from "next/font/google";
import cx from "clsx";
import Highlight from "./Highlight";
import exhausted from "@/utils/exhausted";

export type ForwardProps = {
  className?: string;
  style?: CSSProperties;
};

export type Props = U.Strict<
  | ComponentProps<"code">
  | { children: (forwardProps: ForwardProps) => ReactElement }
>;

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export default forwardRef<HTMLElement, O.Omit<Props, "ref">>(function Code(
  { children, className, style, ...restProps },
  ref
) {
  return (
    <Highlight as="bright">
      {({ style: highlightStyle, ...restProps }) => {
        exhausted(restProps);

        const forwardProps: ForwardProps = {
          className: cx(className, inconsolata.className),
          style: { ...highlightStyle, ...style },
        };

        return typeof children === "function" ? (
          children(forwardProps)
        ) : (
          <code {...forwardProps} {...restProps} ref={ref}>
            {children}
          </code>
        );
      }}
    </Highlight>
  );
}) as ComponentType<Props>;
