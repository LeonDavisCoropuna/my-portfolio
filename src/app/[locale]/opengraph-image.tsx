import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = siteConfig.title;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, opacity: 0.7 }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.author.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 36,
              opacity: 0.7,
              maxWidth: 900,
              lineHeight: 1.3,
            }}
          >
            {siteConfig.description}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
