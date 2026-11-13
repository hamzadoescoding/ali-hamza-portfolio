import { ImageResponse } from "next/og";

export const alt = "Ali Hamza Studio — More bookings. Less busywork.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 75px",
        background: "#172b25",
        color: "#f2f7ee",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 25, color: "#c5f277" }}>
        Ali Hamza Studio / Websites, apps & CRMs
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 100,
          fontWeight: 500,
          lineHeight: 1.04,
          letterSpacing: -5,
        }}
      >
        <span>More bookings.</span>
        <span style={{ color: "#c5f277" }}>Less busywork.</span>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#b1c0ab" }}
      >
        <span>For small businesses · From $500</span>
        <span>alihamzamughal.dev</span>
      </div>
    </div>,
    { ...size },
  );
}
