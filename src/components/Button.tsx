import useActive from "@/hooks/useActive";
import useFocusOutline from "@/hooks/useFocusOutline";
import useHover from "@/hooks/useHover";
import exhausted from "@/utils/exhausted";
import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  forwardRef,
  ReactElement,
} from "react";
import { O, U } from "ts-toolbelt";
import Typography from "./Typography";

export type ForwardProps = Partial<
  ReturnType<typeof useHover>[1] &
    ReturnType<typeof useFocusOutline>[1] &
    ReturnType<typeof useActive>[1] & {
      style?: CSSProperties;
    }
>;

export type Props = U.Strict<
  (
    | ComponentProps<"button">
    | { children: (forwardProps: ForwardProps) => ReactElement }
  ) & { variant?: "primary" }
>;

export default forwardRef<HTMLButtonElement, O.Omit<Props, "ref">>(
  function Button(
    {
      children,
      className = "",
      onAnimationStart,
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
      style,
      variant: _variant = "primary",
      ...restProps
    },
    ref
  ) {
    const [
      hover,
      {
        onMouseEnter: hoverOnMouseEnter,
        onMouseLeave: hoverOnMouseLeave,
        ...hoverRest
      },
    ] = useHover();
    exhausted(hoverRest);

    const [
      ,
      {
        onBlur: focusOutlineOnBlur,
        onFocus: focusOutlineOnFocus,
        style: focusOutlineStyle,
        ...focusOutlineRest
      },
    ] = useFocusOutline();
    exhausted(focusOutlineRest);

    const [
      active,
      {
        className: activeClassName,
        onAnimationStart: activeOnAnimationStart,
        ...activeRest
      },
    ] = useActive();
    exhausted(activeRest);

    return (
      <Typography>
        {({ style: typographyStyle, ...restTypography }) => {
          exhausted(restTypography);

          const forwardCommon: Pick<ForwardProps, "className" | "style"> = {
            className: `${activeClassName || ""} ${className || ""}`,
            style: {
              appearance: "none",
              outline: "none",
              margin: "0",
              padding: "0.5em 0.75em",
              border: 0,
              borderRadius: "0.25em",
              background: `var(--static-${
                active ? "blue-500" : `blue-${hover ? 6 : 7}00`
              })`,
              color: "var(--static-white)",
              ...focusOutlineStyle,
              ...typographyStyle,
              ...style,
            },
          };

          if (typeof children === "function") {
            return children({
              onAnimationStart: activeOnAnimationStart,
              onBlur: focusOutlineOnBlur,
              onFocus: focusOutlineOnFocus,
              onMouseEnter: hoverOnMouseEnter,
              onMouseLeave: hoverOnMouseLeave,
              ...forwardCommon,
            });
          }

          return (
            <button
              onAnimationStart={(e) => {
                onAnimationStart?.(e);
                activeOnAnimationStart?.(e);
              }}
              onFocus={(e) => {
                focusOutlineOnFocus?.(e);
                onFocus?.(e);
              }}
              onBlur={(e) => {
                focusOutlineOnBlur?.();
                onBlur?.(e);
              }}
              onMouseEnter={(e) => {
                hoverOnMouseEnter?.();
                onMouseEnter?.(e);
              }}
              onMouseLeave={(e) => {
                hoverOnMouseLeave?.();
                onMouseLeave?.(e);
              }}
              {...forwardCommon}
              {...restProps}
              ref={ref}
            >
              {children}
            </button>
          );
        }}
      </Typography>
    );
  }
) as ComponentType<Props>;
