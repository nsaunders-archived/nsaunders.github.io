"use client";

import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  DOMAttributes,
} from "react";
import type { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isComponent from "@/utils/isComponent";
import useHover from "@/hooks/useHover";
import useFocus from "@/hooks/useFocus";

export type ForwardProps = {
  style?: CSSProperties;
} & DOMAttributes<HTMLElement>;

export type Props = U.Strict<
  ComponentProps<"a"> | { children: ComponentType<ForwardProps> }
>;

export default forwardRef<HTMLAnchorElement, O.Omit<Props, "ref">>(
  function Anchor({ children, style, ...restProps }, ref) {
    const [focus, { onFocus, onBlur }] = useFocus();
    const [hover, { onMouseEnter, onMouseLeave }] = useHover();

    const forwardProps: ForwardProps = {
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
        boxShadow: focus
          ? "0 0 0 2px var(--background), 0 0 0 4px var(--blue-500)"
          : undefined,
        borderRadius: 2,
        ...style,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...forwardProps} />;
    }

    return (
      <a {...forwardProps} {...restProps} ref={ref}>
        {children}
      </a>
    );
  }
) as ComponentType<Props>;
