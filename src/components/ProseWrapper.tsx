import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  FunctionComponent,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"div"> | { children: FunctionComponent<ForwardProps> }
>;

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function ProseWrapper({ children, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        lineHeight: 1.5,
        padding: 0.02,
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
