import exhausted from "@/utils/exhausted";
import { CSSProperties } from "react";
import useFocus from "./useFocus";

export default function useFocusOutline(): [
  boolean,
  ReturnType<typeof useFocus>[1] & { style?: CSSProperties }
] {
  const [focus, { onFocus, onBlur, ...restProps }] = useFocus();
  exhausted(restProps);

  return [
    focus,
    {
      onFocus,
      onBlur,
      style: {
        outlineColor: "transparent",
        outlineWidth: 2,
        outlineStyle: "dotted",
        boxShadow: focus
          ? "0 0 0 2px var(--bg),0 0 0 4px var(--blue-500)"
          : undefined,
      },
    },
  ];
}
