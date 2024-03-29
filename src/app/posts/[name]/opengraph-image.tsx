import { ImageResponse } from "next/server";
import * as Post from "@/data/Post";
import fs from "fs/promises";

// Route segment config
export const runtime = process.env.VERCEL ? "edge" : "nodejs";

// Image metadata
export const size = {
  width: 1200,
  height: 627,
};

export const contentType = "image/png";

async function getFont(): Promise<ArrayBuffer> {
  if (process.env.VERCEL) {
    return await fetch(
      `https://${process.env.VERCEL_URL}/lato-latin-400-normal.woff`
    ).then((res) => res.arrayBuffer());
  }
  return await fs.readFile(
    "node_modules/@fontsource/lato/files/lato-latin-400-normal.woff"
  );
}

export default async function Image({
  params: { name },
}: {
  params: { name: string };
}) {
  const { title, description } = await Post.getByName(name);

  return new ImageResponse(
    (
      <div
        style={{
          position: "absolute",
          ...size,
          background: "#1c1e26",
          padding: 96,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          fontFamily: "'Lato'",
          fontSize: 24,
          color: "#f7f7f8",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: "2em" }}>{title}</div>
          <div style={{ fontSize: "1.333em", color: "rgb(138,152,173)" }}>
            {description}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://avatars.githubusercontent.com/u/2517229?v=4"
            alt="Nick Saunders"
            style={{ width: 64, height: 64, borderRadius: 9999 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Nick Saunders</span>
            <span style={{ color: "rgb(138,152,173)" }}>nsaunders.dev</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Lato",
          data: await getFont(),
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
