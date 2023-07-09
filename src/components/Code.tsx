import type { ComponentProps, ComponentType } from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isComponent from "@/utils/isComponent";
import { Inconsolata } from "next/font/google";
import cx from "clsx";

export type ForwardProps = {
  className?: string;
};

export type Props = U.Strict<
  ComponentProps<"code"> | { children: ComponentType<ForwardProps> }
>;

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export default forwardRef<HTMLElement, O.Omit<Props, "ref">>(function Code(
  { children, className, ...restProps },
  ref
) {
  const forwardProps: ForwardProps = {
    className: cx(className, inconsolata.className),
  };

  if (isComponent(children)) {
    const Component = children;
    return <Component {...forwardProps} />;
  }

  return (
    <code {...forwardProps} {...restProps} ref={ref}>
      {children}
    </code>
  );
}) as ComponentType<Props>;
