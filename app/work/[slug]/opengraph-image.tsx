import { ImageResponse } from "next/og";
import { projects } from "@/data/projects";

export const alt = "Ali Hamza — Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

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
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6F6F6B",
            marginBottom: 24,
          }}
        >
          Case Study — Ali Hamza
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 900, textTransform: "uppercase", lineHeight: 1.02 }}>
          {project?.title ?? "Project"}
        </div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 28, color: "#28C76F", textTransform: "uppercase", letterSpacing: 2 }}>
          {project?.category ?? ""}
        </div>
      </div>
    ),
    { ...size }
  );
}
