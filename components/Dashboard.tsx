"use client";
import { DASHBOARD_STAT } from "@/lib/constants";

export default function Dashboard() {
  const stats = [
    { value: "12+",  label: "Active Jurisdictions" },
    { value: "$2B+", label: "Assets Advised" },
    { value: "85%",  label: "Entry Success Rate" },
    { value: "48h",  label: "Response Time" },
  ];

  return (
    <div style={{ background: "#fff", borderTop: "1px solid #e0ddd6", borderBottom: "1px solid #e0ddd6" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="stats-grid-3">
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: "32px 40px",
            borderRight: i < 3 ? "1px solid #e0ddd6" : "none",
          }}>
            <p style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 36, fontWeight: 700,
              color: "#1a2420", marginBottom: 6, lineHeight: 1,
            }}>{s.value}</p>
            <p style={{
              fontFamily: "Inter,sans-serif",
              fontSize: 11, fontWeight: 500,
              letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#aaa",
            }}>{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
