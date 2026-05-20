# KoruFlux — Next.js Project

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

## Deploy to Vercel (recommended)
```bash
npm i -g vercel
vercel
```

---

## Project Structure

```
koruflux/
├── app/
│   ├── layout.tsx       ← Root layout + metadata (SEO)
│   ├── page.tsx         ← Main page — assembles all sections
│   └── globals.css      ← CSS tokens, utility classes, animations
│
├── components/
│   ├── Nav.tsx                    ← Fixed navigation bar
│   ├── Hero.tsx                   ← Animated hero (particles, globe, skyline)
│   ├── Dashboard.tsx              ← Info card strip below hero
│   ├── TechCapabilities.tsx       ← 3-column tech card grid with SVG visuals
│   ├── StrategicGrowthPartner.tsx ← Market image + stats section
│   └── Sections.tsx               ← Services, Engagements, CTA, Footer
│
├── lib/
│   └── constants.ts     ← ALL site copy lives here — edit this file to update text
│
├── tailwind.config.ts   ← Full brand token system (colors, fonts, animations)
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Brand Colors (from design system)

| Token              | Hex       | Usage                        |
|--------------------|-----------|------------------------------|
| `--teal-500`       | `#2d8a7a` | Primary accent, nav btn      |
| `--teal-400`       | `#3aafa0` | Hover states, headline em    |
| `--orange-600`     | `#e8622a` | Primary CTA (Partner With Us)|
| `--copper-500`     | `#d47830` | Eyebrow labels               |
| `--bg-page`        | `#091918` | Page background              |
| `--bg-card`        | `#0d2421` | Card backgrounds             |
| `--text-base`      | `#ddeade` | Body text                    |
| `--text-muted`     | `#6b8c79` | Secondary text               |

## Fonts
- **Barlow** (900 weight) — All headings, uppercase display text  
- **Barlow Condensed** — Large stat numbers  
- **Inter** — Body copy, labels, navigation

## Updating Copy
All text content is in `lib/constants.ts`. Change headlines, descriptions,
pricing, nav links — nothing to hunt through components.

## Adding Pages
Create `app/[page]/page.tsx` and Next.js handles routing automatically.
# koruflux
