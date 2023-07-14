import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  forwardRef,
  ReactNode,
} from "react";
import { U } from "ts-toolbelt";
import isFunctionComponent from "@/utils/isFunctionComponent";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  | ComponentProps<"span">
  | {
      children: ReactNode;
    }
>;

export default forwardRef(function ScreenReaderOnly(
  { children, style, ...restProps },
  ref
) {
  const forwardProps: ForwardProps = {
    style: {
      position: "absolute",
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: "hidden",
      clip: "rect(0, 0, 0, 0)",
      border: 0,
      ...style,
    },
  };
  return isFunctionComponent(children) ? (
    children(forwardProps)
  ) : (
    <span {...forwardProps} {...restProps} ref={ref}>
      {children}
    </span>
  );
}) as ComponentType<Props>;
