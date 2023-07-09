import type { ComponentProps, ComponentType, CSSProperties } from "react";

export type Props = {
  color?: CSSProperties["color"];
  size?: ComponentProps<"svg">["width"];
};

export default function withIconContainer(
  Component: ComponentType<unknown>
): ComponentType<Props> {
  return function IconContainer({ size = 16, color = "currentColor" }) {
    return (
      <svg
        width={size}
        height={size}
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <Component />
      </svg>
    );
  };
}
