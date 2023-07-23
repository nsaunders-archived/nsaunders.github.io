import { useMemo, useState } from "react";

export default function useHover(): [
  boolean,
  { onMouseEnter?(): void; onMouseLeave?(): void }
] {
  const [hover, setHover] = useState(false);
  return useMemo(
    () => [
      hover,
      {
        onMouseEnter: () => {
          setHover(true);
        },
        onMouseLeave: () => {
          setHover(false);
        },
      },
    ],
    [hover]
  );
}
