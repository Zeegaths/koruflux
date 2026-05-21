// ── SGP ──────────────────────────────────────────────────────
import { SGP } from "@/lib/constants";

export function StrategicGrowthPartner() {
  return (
    <section
      id="sgp"
      className="section-pad"
      style={{
        background: "var(--bg-card2)",
        borderTop: "1px solid var(--border-w)",
        borderBottom: "1px solid var(--border-w)",
      }}
    >
      <div
        className="sgp-grid-2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 70,
          alignItems: "center",
        }}
      >
        {/* Image / market scene */}
        <div className="sgp-img-wrap" style={{ height: 360, borderRadius: 4, overflow: "hidden", position: "relative" }}>
          <svg
            width="100%" height="100%"
            viewBox="0 0 480 360"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="480" height="360" fill="#1c1006" />
            <rect width="480" height="170" fill="#231508" />
            <radialGradient id="wgsgp" cx="50%" cy="25%" r="60%">
              <stop offset="0%" stopColor="#d97c2a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#1c1006" stopOpacity="0" />
            </radialGradient>
            <rect width="480" height="360" fill="url(#wgsgp)" />
            {/* Awnings */}
            <rect x="-10" y="108" width="185" height="14" rx="2" fill="#2e1c08" />
            <rect x="175"  y="98"  width="162" height="14" rx="2" fill="#361e08" />
            <rect x="345"  y="103" width="158" height="14" rx="2" fill="#2e1c08" />
            {/* Stall 1 */}
            {[5,32,56,78,104,128,156].map((x,i)=>(
              <rect key={i} x={x} y="122" width={[24,21,19,23,21,25,19][i]} height="138"
                fill={["#8B2500","#C4500A","#7B3500","#D4680C","#9B4010","#B85A14","#7B3200"][i]} />
            ))}
            {/* Stall 2 */}
            {[175,203,227,253,284,308,336].map((x,i)=>(
              <rect key={i} x={x} y="112" width={[25,21,23,28,21,25,19][i]} height="148"
                fill={["#5A1A00","#C87020","#8B4500","#D4841E","#6B3010","#B86010","#9B4808"][i]} />
            ))}
            {/* Stall 3 */}
            {[345,371,395,423,449,473].map((x,i)=>(
              <rect key={i} x={x} y="117" width={[23,21,25,23,21,20][i]} height="143"
                fill={["#9B3500","#D46A10","#7B2800","#C45A0C","#8B4000","#B85010"][i]} />
            ))}
            {/* Baskets */}
            <ellipse cx="45"  cy="274" rx="40" ry="23" fill="#6B3A0A" />
            <rect x="5"   y="251" width="80"  height="23" rx="4" fill="#6B3A0A" />
            <ellipse cx="45"  cy="251" rx="40" ry="13" fill="#7B4A18" />
            <ellipse cx="145" cy="282" rx="48" ry="27" fill="#5A3208" />
            <rect x="97"  y="255" width="96"  height="27" rx="4" fill="#5A3208" />
            <ellipse cx="145" cy="255" rx="48" ry="15" fill="#7B4A18" />
            <ellipse cx="278" cy="278" rx="55" ry="30" fill="#633810" />
            <rect x="223" y="248" width="110" height="30" rx="4" fill="#633810" />
            <ellipse cx="278" cy="248" rx="55" ry="16" fill="#7B4A18" />
            <ellipse cx="412" cy="275" rx="50" ry="28" fill="#5A3208" />
            <rect x="362" y="247" width="100" height="28" rx="4" fill="#5A3208" />
            <ellipse cx="412" cy="247" rx="50" ry="15" fill="#7B4A18" />
            {/* Silhouettes */}
            <ellipse cx="82"  cy="308" rx="15" ry="32" fill="#120805" opacity="0.92" />
            <ellipse cx="208" cy="312" rx="13" ry="28" fill="#120805" opacity="0.92" />
            <ellipse cx="345" cy="306" rx="14" ry="30" fill="#120805" opacity="0.92" />
            <ellipse cx="462" cy="310" rx="12" ry="26" fill="#120805" opacity="0.92" />
            <rect x="0" y="295" width="480" height="65" fill="#130c04" />
            <linearGradient id="mkfsgp" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c1006" stopOpacity="0" />
              <stop offset="100%" stopColor="#0b1e1b" stopOpacity="0.88" />
            </linearGradient>
            <rect width="480" height="360" fill="url(#mkfsgp)" />
          </svg>
          <div
            style={{
              position: "absolute", top: 16, left: 16,
              background: "rgba(9,25,24,0.85)",
              border: "1px solid rgba(45,138,122,0.3)",
              borderRadius: 2, padding: "5px 12px",
              fontFamily: "Inter, sans-serif",
              fontSize: 12, letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--teal-400)", fontWeight: 600,
            }}
          >
            {SGP.badge}
          </div>
        </div>

        {/* Text */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 14 }}>{SGP.eyebrow}</div>
          <h2
            className="h-section"
            style={{ fontSize: "clamp(31px,3.8vw,49px)", color: "var(--text-base)", marginBottom: 14 }}
          >
            {SGP.title[0]}<br />{SGP.title[1]}
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14, fontWeight: 700,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "var(--teal-500)", marginBottom: 14,
            }}
          >
            {SGP.subtitle}
          </p>
          <p
            className="section-sub"
            style={{ marginBottom: 0 }}
          >
            {SGP.body}
          </p>
          <div style={{ display: "flex", gap: 52, marginTop: 42 }}>
            {SGP.stats.map((s) => (
              <div key={s.label}>
                <div
                  className="font-condensed"
                  style={{
                    fontSize: 45, fontWeight: 800,
                    color: "var(--teal-500)", lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13, letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)", marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
