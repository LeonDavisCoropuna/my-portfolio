import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const alt = "LD";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: "-0.06em",
        }}
      >
        LD
      </div>
    ),
    { ...size }
  );
}
