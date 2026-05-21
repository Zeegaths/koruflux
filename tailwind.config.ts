import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── BRAND PALETTE (from design system) ──────────────────
        teal: {
          950: "#060e0d",   // deepest bg
          900: "#091918",   // page bg
          800: "#0d2421",   // card bg
          700: "#122e2a",   // card hover / borders
          600: "#1a4a43",   // muted border
          500: "#2d8a7a",   // primary accent (nav btn, links)
          400: "#3aafa0",   // lighter accent
          300: "#5ecfbf",   // highlight
        },
        orange: {
          700: "#c44e1a",
          600: "#e8622a",   // primary CTA — "Partner With Us"
          500: "#f07540",
          400: "#f5a07a",
        },
        copper: {
          700: "#8b4510",
          600: "#b86020",   // eyebrow / tertiary
          500: "#d47830",
          400: "#e8a060",
        },
        neutral: {
          950: "#0a0c0b",
          900: "#111613",
          800: "#1a1f1c",
          700: "#252c28",
          600: "#374038",
          500: "#4e5a52",
          400: "#6b7a70",
          300: "#9aaba0",
          200: "#c8d4cc",
          100: "#edf2ee",
        },
      },
      fontFamily: {
        heading: ["var(--font-barlow)", "Barlow", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["5rem", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-xl":  ["4rem", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-lg":  ["3rem", { lineHeight: "1.0",  letterSpacing: "-0.025em", fontWeight: "800" }],
        "display-md":  ["2.25rem", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "800" }],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #091918 0%, #0d2e28 35%, #1a4a43 65%, #091918 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(45,138,122,0.04) 0%, transparent 100%)",
      },
      animation: {
        "fade-up":      "fadeUp 0.6s ease both",
        "orb-drift":    "orbDrift 18s ease-in-out infinite alternate",
        "orb-drift-r":  "orbDrift 22s ease-in-out infinite alternate-reverse",
        "tag-float":    "tagFloat 3s ease-in-out infinite alternate",
        "win-pulse":    "winPulse 3s ease-in-out infinite",
        "win-pulse-2":  "winPulse 4.5s ease-in-out infinite",
        "win-pulse-3":  "winPulse 2.8s ease-in-out infinite",
        "scroll-sweep": "scrollSweep 2s ease-in-out infinite",
        "globe-spin":   "globeSpin 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        orbDrift: {
          from: { transform: "translate(0,0)" },
          to:   { transform: "translate(40px, 30px)" },
        },
        tagFloat: {
          from: { transform: "translateY(0)" },
          to:   { transform: "translateY(-8px)" },
        },
        winPulse: {
          "0%,100%": { opacity: "0.2" },
          "50%":     { opacity: "0.7" },
        },
        scrollSweep: {
          to: { left: "100%" },
        },
        globeSpin: {
          from: { transform: "translateY(-50%) rotate(0deg)" },
          to:   { transform: "translateY(-50%) rotate(360deg)" },
        },
      },
      animationDelay: {
        "100":  "100ms",
        "250":  "250ms",
        "400":  "400ms",
        "550":  "550ms",
        "700":  "700ms",
        "800":  "800ms",
        "1500": "1500ms",
      },
    },
  },
  plugins: [],
};

export default config;
