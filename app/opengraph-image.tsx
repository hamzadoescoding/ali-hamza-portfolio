import { ImageResponse } from "next/og";

export const alt = "Ali Hamza — Software Engineer & Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#222222",
          color: "#F8F8F6",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#28C76F",
            marginBottom: 24,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C76F" }} />
          Available for New Projects
        </div>
        <div style={{ display: "flex", fontSize: 108, fontWeight: 900, textTransform: "uppercase", lineHeight: 0.95 }}>
          Ali Hamza
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 24, color: "#B8B8B2", textTransform: "uppercase", letterSpacing: 2 }}>
          Software Engineer &amp; Web Developer
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 40, color: "#6F6F6B" }}>
          alihamzamughal.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
