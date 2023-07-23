import { ComponentProps, ComponentType, ReactElement, forwardRef } from "react";
import { O, U } from "ts-toolbelt";
import { Inconsolata } from "next/font/google";
import cx from "clsx";

export type ForwardProps = {
  className?: string;
};

export type Props = U.Strict<
  | ComponentProps<"code">
  | { children: (forwardProps: ForwardProps) => ReactElement }
>;

const inconsolata = Inconsolata({ weight: "400", subsets: ["latin"] });

export default forwardRef<HTMLElement, O.Omit<Props, "ref">>(function Code(
  { children, className, ...restProps },
  ref
) {
  const forwardProps: ForwardProps = {
    className: cx(className, inconsolata.className),
  };

  return typeof children === "function" ? (
    children(forwardProps)
  ) : (
    <code {...forwardProps} {...restProps} ref={ref}>
      {children}
    </code>
  );
}) as ComponentType<Props>;
