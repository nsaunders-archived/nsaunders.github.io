import * as CSS from "csstype";

declare module "react" {
  interface CSSProperties {
    "--background"?: CSS.Property.BackgroundColor;
  }
}
