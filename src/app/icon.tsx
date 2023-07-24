import { ImageResponse } from "next/server";
import fs from "fs/promises";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default async function Icon() {
  const montserrat = await fs.readFile(
    "node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff"
  );
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontFamily: "'Montserrat'",
          fontSize: 24,
          background: "linear-gradient(0,#4551d2,#252983)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f7f8f8",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: size.height * 0.5,
            left: size.width * -4,
            width: size.width * 9,
            height: size.height * 9,
            background: "#151953",
            borderRadius: 9999,
          }}
        />
        N
        <div
          style={{
            position: "absolute",
            ...size,
            top: 0,
            left: 0,
            boxShadow: "inset 0 0 0 1px #f7f8f8",
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: montserrat, weight: 400, style: "normal" },
      ],
    }
  );
}
