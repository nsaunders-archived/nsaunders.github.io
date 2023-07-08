"use client";

import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  DOMAttributes,
  forwardRef,
  useState,
} from "react";
import { isComponent } from "@/utils/react";
import useHover from "@/hooks/useHover";
import { O, U } from "ts-toolbelt";
import useFocus from "@/hooks/useFocus";

export type AnchorForwardProps = {
  style?: CSSProperties;
} & DOMAttributes<HTMLElement>;

export type AnchorProps = U.Strict<
  ComponentProps<"a"> | { children: ComponentType<AnchorForwardProps> }
>;

export const Anchor = forwardRef<HTMLAnchorElement, O.Omit<AnchorProps, "ref">>(
  function Anchor({ children, ...restProps }, ref) {
    const [focus, { onFocus, onBlur }] = useFocus();
    const [hover, { onMouseEnter, onMouseLeave }] = useHover();

    const forwardProps: AnchorForwardProps = {
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      style: {
        outlineColor: "transparent",
        outlineWidth: 2,
        outlineStyle: "dotted",
        color: hover ? "var(--blue-300)" : "var(--blue-400)",
        boxShadow: focus
          ? "0 0 0 2px var(--background), 0 0 0 4px var(--blue-400)"
          : undefined,
        borderRadius: 2,
        ...restProps.style,
      },
    };

    if (isComponent(children)) {
      const Component = children;
      return <Component {...forwardProps} />;
    }

    return (
      <a ref={ref} {...forwardProps} {...restProps}>
        {children}
      </a>
    );

    /*
    const Component = isComponent(children)
      ? children
      : (forwardProps: AnchorForwardProps) => (
          <a
            ref={ref}
            href="#"
            {...forwardProps}
            {...restProps}
            style={{ ...forwardProps.style, ...restProps.style }}
          >
            {children}
          </a>
        );

    return (
      <Component
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        style={{ color: focus ? "red" : "blue" }}
      />
    );*/
  }
) as ComponentType<AnchorProps>;
