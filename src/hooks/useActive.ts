import { AnimationEvent, useState } from "react";

export default function useActive(): [
  boolean,
  {
    className?: string;
    onAnimationStart?(e: AnimationEvent): void;
  }
] {
  const [active, setActive] = useState(false);
  return [
    active,
    {
      onAnimationStart({ animationName }: { animationName: string }) {
        if (animationName === "active") {
          setActive(true);
        } else if (animationName === "not-active") {
          setActive(false);
        }
      },
      className: "detect-active",
    },
  ];
}
