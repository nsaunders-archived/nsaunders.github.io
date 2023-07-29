import {
  CSSProperties,
  ComponentProps,
  ComponentType,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  (
    | ComponentProps<"div">
    | { children: (forwardProps: ForwardProps) => ReactElement }
  ) & {
    theme?: "black" | "dark-gray" | "light-gray" | "white";
    static?: boolean;
  }
>;

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function Surface(
    { children, static: staticProp, style, theme, ...restProps },
    ref
  ) {
    const staticPrefix = staticProp ? "static-" : "";
    const forwardProps: ForwardProps = {
      style: {
        background: "var(--bg)",
        color: "var(--fg)",
        "--bg": `var(--${staticPrefix}${
          {
            black: "black",
            "dark-gray": "gray-800",
            "light-gray": "gray-200",
            white: "white",
            default: "gray-900",
          }[theme || "default"]
        })`,
        "--fg": `var(--${staticPrefix}${
          theme === "white" || theme === "light-gray" ? "black" : "white"
        })`,
        "--fg-muted": `var(--${staticPrefix}gray-${
          theme === "white" || theme === "dark-gray" ? 4 : 5
        }00)`,
        "--fg-bright": `var(--${staticPrefix}gold-${
          theme === "white" ? "400" : theme === "light-gray" ? "500" : "200"
        })`,
        "--fg-success": `var(--${staticPrefix}green-${
          theme === "white" || theme === "light-gray" ? 6 : 3
        }00)`,
        "--fg-error": `var(--${staticPrefix}red-${
          theme === "white" || theme === "light-gray" ? 6 : 3
        }00)`,
        "--fg-link": `var(--${staticPrefix}blue-${
          theme === "dark-gray" ? 3 : 4
        }00)`,
        "--fg-link-bright": `var(--${staticPrefix}blue-${
          theme === "dark-gray" ? 2 : 3
        }00)`,
        ...style,
      },
    };

    return typeof children === "function" ? (
      children(forwardProps)
    ) : (
      <div {...forwardProps} {...restProps} ref={ref}>
        {children}
      </div>
    );
  }
) as ComponentType<Props>;
