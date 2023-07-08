import { useMemo, useState } from "react";

export default function useHover() {
  const [hover, setHover] = useState(false);
  return useMemo(
    () =>
      [
        hover,
        {
          onMouseEnter: () => {
            setHover(true);
          },
          onMouseLeave: () => {
            setHover(false);
          },
        },
      ] as const,
    [hover]
  );
}
