import type {
  CSSProperties,
  ComponentProps,
  ComponentType,
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
> & {
  theme?: "black" | "dark-gray";
};

export default forwardRef<HTMLDivElement, O.Omit<Props, "ref">>(
  function Surface({ children, style, theme, ...restProps }, ref) {
    const forwardProps: ForwardProps = {
      style: {
        background: "var(--bg)",
        color: "var(--fg)",
        "--bg": `var(--${
          { "dark-gray": "gray-800", black: "black", default: "gray-900" }[
            theme || "default"
          ]
        })`,
        ...(theme === "dark-gray" || theme === "black"
          ? {
              "--fg": "var(--white)",
              "--fg-bright": "var(--gold-200)",
              "--fg-muted": "var(--gray-300)",
            }
          : undefined),
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
