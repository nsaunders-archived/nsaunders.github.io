import { CSSProperties, forwardRef, ReactNode } from "react";

export type Props = {
  label: ReactNode;
  value: ReactNode;
  style?: CSSProperties;
};

export default forwardRef<HTMLDivElement, Props>(function LabelValuePair(
  { label, value, style },
  ref
) {
  return (
    <div style={{ display: "inline-flex", gap: 8, ...style }} ref={ref}>
      <div style={{ display: "grid", placeItems: "center" }}>{label}</div>
      <div style={{ display: "grid", placeItems: "center" }}>{value}</div>
    </div>
  );
});
