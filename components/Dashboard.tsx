"use client";
import { useEffect, useState } from "react";
import { DASHBOARD_CARDS, DASHBOARD_STAT, DASHBOARD_BOT } from "@/lib/constants";

const glass: React.CSSProperties = {
  background: "rgba(10,22,18,0.65)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: 8,
  boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
};

const lbl: React.CSSProperties = {
  fontFamily: "Inter,sans-serif", fontSize: 11, letterSpacing: "0.16em",
  textTransform: "uppercase" as const, color: "#4a8070", marginBottom: 8, fontWeight: 700,
};
const title: React.CSSProperties = {
  fontFamily: "Barlow,sans-serif", fontSize: 17, fontWeight: 700,
  color: "#ffffff", marginBottom: 10,
};
const body: React.CSSProperties = {
  fontFamily: "Inter,sans-serif", fontSize: 15, fontWeight: 300,
  color: "#a8c4ba", lineHeight: 1.6,
};

export default function Dashboard() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── MOBILE layout: simple stacked list, no transform ── */
  if (mobile) {
    return (
      <div style={{ padding: "0 16px 32px", display: "flex", flexDirection: "column", gap: 10 }}>

        {/* Stat bar — compact horizontal strip */}
        <div style={{ ...glass, padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ ...lbl, marginBottom: 2 }}>Active Jurisdictions</div>
            <div style={{ fontFamily: "Barlow Condensed,sans-serif", fontSize: 48, fontWeight: 800, color: "var(--teal-400)", lineHeight: 1, letterSpacing: "-0.04em", textShadow: "0 0 28px rgba(58,175,160,0.5)" }}>
              {DASHBOARD_STAT.value}
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ ...lbl, marginBottom: 2 }}>Entry Success</div>
            <div style={{ fontFamily: "Barlow Condensed,sans-serif", fontSize: 48, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
              85%
            </div>
          </div>
        </div>

        {/* Content cards — 2 column grid on mobile */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {[...DASHBOARD_CARDS, ...DASHBOARD_BOT].map(card => (
            <div key={card.title} style={{ ...glass, padding: "18px 16px 20px" }}>
              <div style={{ ...lbl }}>{card.label}</div>
              <div style={{ fontFamily: "Barlow,sans-serif", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6 }}>
                {card.title}
              </div>
              <div style={{ fontFamily: "Inter,sans-serif", fontSize: 13, fontWeight: 300, color: "#a8c4ba", lineHeight: 1.5 }}>
                {card.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* ── DESKTOP layout: original 4-col grid ── */
  return (
    <div style={{ position: "relative", zIndex: 20, margin: "0 48px", transform: "translateY(-52px)" }}>
      {/* TOP ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr auto", gap: 10, marginBottom: 10 }}>
        {DASHBOARD_CARDS.map(card => (
          <div key={card.title} style={{ ...glass, padding: "26px 28px 28px" }}>
            <div style={lbl}>{card.label}</div>
            <div style={title}>{card.title}</div>
            <div style={body}>{card.body}</div>
          </div>
        ))}
        {/* 12+ stat */}
        <div style={{ ...glass, padding: "26px 28px 28px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", minWidth: 130 }}>
          <div style={{ fontFamily: "Barlow Condensed,sans-serif", fontSize: 60, fontWeight: 800, color: "var(--teal-400)", lineHeight: 1, letterSpacing: "-0.04em", textShadow: "0 0 30px rgba(58,175,160,0.55)" }}>
            {DASHBOARD_STAT.value}
          </div>
          <div style={{ fontFamily: "Inter,sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a8070", marginTop: 4 }}>
            {DASHBOARD_STAT.label}
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 10 }}>
        {DASHBOARD_BOT.map(card => (
          <div key={card.title} style={{ ...glass, padding: "20px 24px 22px" }}>
            <div style={lbl}>{card.label}</div>
            <div style={{ ...title, fontSize: 15 }}>{card.title}</div>
            <div style={{ ...body, fontSize: 13 }}>{card.body}</div>
          </div>
        ))}
        {/* 85% stat */}
        <div style={{ ...glass, padding: "20px 24px 22px", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", minWidth: 130 }}>
          <div style={{ fontFamily: "Barlow Condensed,sans-serif", fontSize: 42, fontWeight: 800, color: "#ffffff", lineHeight: 1, letterSpacing: "-0.04em", textShadow: "0 0 20px rgba(255,255,255,0.25)" }}>
            85%
          </div>
          <div style={{ fontFamily: "Inter,sans-serif", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4a8070", marginTop: 3 }}>
            Entry Success
          </div>
        </div>
      </div>
    </div>
  );
}
