import { FocusEvent, useMemo, useState } from "react";

export default function useFocus() {
  const [focus, setFocus] = useState(false);
  return useMemo(
    () =>
      [
        focus,
        {
          onFocus({ currentTarget }: FocusEvent) {
            if (currentTarget.matches(":focus-visible")) {
              setFocus(true);
            }
          },
          onBlur() {
            setFocus(false);
          },
        },
      ] as const,
    [focus]
  );
}
