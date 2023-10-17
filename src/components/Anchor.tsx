import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";
import hooks from "@/utils/css-hooks";

export type ForwardProps = {
  style?: CSSProperties;
  tabIndex?: -1;
};

export type Props = U.Strict<
  (
    | ComponentProps<"a">
    | { children: (forwardProps: ForwardProps) => ReactElement }
  ) & {
    disabled?: boolean;
    selected?: boolean;
  }
>;

export default forwardRef<HTMLAnchorElement, O.Omit<Props, "ref">>(
  function Anchor({ children, disabled, selected, style, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        ...hooks({
          textDecoration: "none",
          outlineColor: "transparent",
          outlineWidth: 2,
          outlineStyle: "dotted",
          color: "var(--fg-link)",
          borderRadius: 2,
          ...(disabled
            ? {
                cursor: "default",
              }
            : {
                hover: {
                  color: "var(--fg-link-bright)",
                  textDecoration: "underline",
                },
                focusVisible: {
                  boxShadow: "0 0 0 2px var(--bg), 0 0 0 4px var(--blue-500)",
                  textDecoration: "none",
                },
              }),
          ...(selected && { color: "var(--blue-100)" }),
        }),
        ...style,
      },
      tabIndex: disabled ? -1 : undefined,
    };

    return typeof children === "function" ? (
      children(forwardProps)
    ) : (
      <a {...forwardProps} {...restProps} ref={ref}>
        {children}
      </a>
    );
  }
) as ComponentType<Props>;
