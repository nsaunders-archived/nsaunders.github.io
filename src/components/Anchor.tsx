"use client";

import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  FocusEvent,
  FunctionComponent,
  MouseEvent,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";
import useHover from "@/hooks/useHover";
import useFocus from "@/hooks/useFocus";

export type ForwardProps = {
  style?: CSSProperties;
  tabIndex?: -1;
  onClick?: (e: MouseEvent) => void;
  onFocus?: (e: FocusEvent) => void;
  onBlur?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type Props = U.Strict<
  ComponentProps<"a"> | { children: FunctionComponent<ForwardProps> }
> & { disabled?: boolean; selected?: boolean };

export default forwardRef<HTMLAnchorElement, O.Omit<Props, "ref">>(
  function Anchor({ children, disabled, selected, style, ...restProps }, ref) {
    const [focus, { onFocus, onBlur }] = useFocus();
    const [hover, { onMouseEnter, onMouseLeave }] = useHover();

    const forwardProps: ForwardProps = {
      onClick(e) {
        if (disabled) {
          e.preventDefault();
        }
      },
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      style: {
        textDecoration: hover && !focus ? "underline" : "none",
        outlineColor: "transparent",
        outlineWidth: 2,
        outlineStyle: "dotted",
        color: hover ? "var(--blue-300)" : "var(--blue-400)",
        boxShadow:
          focus && !disabled
            ? "0 0 0 2px var(--bg), 0 0 0 4px var(--blue-500)"
            : undefined,
        borderRadius: 2,
        ...(selected && { color: "var(--blue-100)" }),
        ...(disabled && { cursor: "default", textDecoration: "none" }),
        ...style,
      },
      tabIndex: disabled ? -1 : undefined,
    };

    return isFunctionComponent(children) ? (
      children(forwardProps)
    ) : (
      <a {...forwardProps} {...restProps} ref={ref}>
        {children}
      </a>
    );
  }
) as ComponentType<Props>;
