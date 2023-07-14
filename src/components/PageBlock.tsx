import type {
  CSSProperties,
  ComponentProps,
  ComponentType,
  FunctionComponent,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";

export type ForwardProps = { style?: CSSProperties };

export type Props = U.Strict<
  ComponentProps<"div"> | { children: FunctionComponent<ForwardProps> }
>;

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function PageBlock({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        margin: "0 auto",
        width:
          "calc(100vw - (var(--desktop) * 64px + var(--mobile) * 32px) * 2)",
        maxWidth: 832,
        boxSizing: "border-box",
        ...style,
      },
    };

    return isFunctionComponent(children) ? (
      children(forwardProps)
    ) : (
      <div {...forwardProps} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }
) as ComponentType<Props>;
