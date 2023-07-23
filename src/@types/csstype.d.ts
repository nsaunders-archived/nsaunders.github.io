import * as CSS from "csstype";

declare module "react" {
  interface CSSProperties {
    "--bg"?: CSS.Property.BackgroundColor;
    "--fg"?: CSS.Property.Color;
    "--fg-bright"?: CSS.Property.Color;
    "--fg-muted"?: CSS.Property.Color;
    "--fg-error"?: CSS.Property.Color;
  }
}
