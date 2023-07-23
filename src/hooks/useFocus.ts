import { FocusEvent, useMemo, useState } from "react";

export default function useFocus(): [
  boolean,
  { onBlur?(): void; onFocus?(e: FocusEvent): void }
] {
  const [focus, setFocus] = useState(false);
  return useMemo(
    () => [
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
    ],
    [focus]
  );
}
