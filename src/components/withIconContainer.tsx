import type { ComponentProps, ComponentType, CSSProperties } from "react";

export type Props = {
  "aria-hidden"?: boolean;
  color?: CSSProperties["color"];
  size?: ComponentProps<"svg">["width"];
};

export default function withIconContainer(
  Component: ComponentType<unknown>,
  viewBox = 24
): ComponentType<Props> {
  return function IconContainer({
    size = 16,
    color = "currentColor",
    ...restProps
  }) {
    return (
      <svg
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        aria-hidden={restProps["aria-hidden"]}
      >
        <Component />
      </svg>
    );
  };
}
