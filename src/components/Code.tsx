import type { ComponentProps, ComponentType, FunctionComponent } from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";
import { Inconsolata } from "next/font/google";
import cx from "clsx";

export type ForwardProps = {
  className?: string;
};

export type Props = U.Strict<
  ComponentProps<"code"> | { children: FunctionComponent<ForwardProps> }
>;

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export default forwardRef<HTMLElement, O.Omit<Props, "ref">>(function Code(
  { children, className, ...restProps },
  ref
) {
  const forwardProps: ForwardProps = {
    className: cx(className, inconsolata.className),
  };

  return isFunctionComponent(children) ? (
    children(forwardProps)
  ) : (
    <code {...forwardProps} {...restProps} ref={ref}>
      {children}
    </code>
  );
}) as ComponentType<Props>;
