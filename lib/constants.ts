// ─────────────────────────────────────────────────────────────
//  KORUFLUX — Site Constants
//  Edit copy here; components pull from this file.
// ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Services",   href: "#services" },
  { label: "Capabilities",   href: "#tech" },
  { label: "Engagements",   href: "#pricing-anchor" },
  { label: "About", href: "#sgp" },
  { label: "Contact",      href: "#cta" },
] as const;

export const HERO = {
  eyebrow: "Global Intelligence, Local Execution.",
  headline: ["Bridging Global", "Innovation with", "Frontier Markets"],
  accentWord: "Frontier Markets",   // coloured teal
  description:
    "KoruFlux orchestrates complex market entries and digital transformations for Web3 protocols, DeFi platforms, and RWA projects. Structural intelligence meets deep on-the-ground expertise.",
  cta1: { label: "Partner With Us",  href: "#cta" },
  cta2: { label: "Strategy Design",  href: "#services" },
  floatingTags: [
    "12+ Active Jurisdictions",
    "RWA Tokenization Ready",
    "East African Gateway",
  ],
} as const;

export const DASHBOARD_CARDS = [
  {
    label: "KoruFlux",
    title: "Executive Summary",
    body: "Our methodology is built on architectural precision. We engineer the frameworks that allow global ventures to scale across complex, high-growth markets.",
    hasIcon: true,
  },
  {
    label: "Framework",
    title: "Structural Strategy",
    body: "Defining the foundational layers of your expansion through data-driven roadmaps, risk mitigation, and global standards alignment.",
  },
  {
    label: "Intelligence",
    title: "Market Sovereignty",
    body: "Navigating regulatory landscapes and cultural nuances with calibrated intelligence across multiple global jurisdictions.",
  },
] as const;

export const DASHBOARD_STAT = { value: "12+", label: "Active Jurisdictions" };

export const DASHBOARD_BOT = [
  {
    label: "Execution",
    title: "Operational Excellence",
    body: "Deploying teams and technologies that drive high-stakes, fast-growth environments across multiple markets.",
  },
  {
    label: "Jurisdiction",
    title: "Compliance Architecture",
    body: "Programmable compliance built into every local entry plan, bridging physical ops to decentralized rails.",
  },
  {
    label: "Network",
    title: "Partner Access",
    body: "Vetted Web3 infrastructure providers and Agentic AI specialists. We make introductions when they count.",
  },
] as const;

export const TECH_CARDS = [
  {
    tag: "Infrastructure",
    title: "Web3 & Decentralization",
    description:
      "Building Web3 infrastructure and payment rails tailored for each market's unique regulatory and consumer landscape.",
    items: ["Tokenomics design", "Smart contract audit", "Cross-border DeFi rails", "On/off ramp optimization"],
    visual: "web3",
  },
  {
    tag: "AI Systems",
    title: "Applied Intelligence",
    description:
      "Deploying specialized AI models that solve real-world logistical and operational challenges in complex emerging markets.",
    items: ["Predictive logistics", "NLP for local languages", "Computer vision", "Agentic AI integration"],
    visual: "ai",
  },
  {
    tag: "Analytics",
    title: "Strategic Analytics",
    description:
      "Transforming raw market data into actionable intelligence with proprietary modelling techniques for expansion decisions.",
    items: ["Market sentiment analysis", "Consumer behaviour", "Risk assessment", "Competitive intelligence"],
    visual: "analytics",
  },
] as const;

export const SGP = {
  eyebrow: "Global Market Entry",
  title: ["Strategic Growth", "Partner"],
  subtitle: "Unlocking Frontier Market Entry",
  body: "From East Africa's Silicon Savannah to Southeast Asia and the Gulf, we provide the technical bridge and executive network required to navigate high-potential corridors. From licensing to local partnerships, KoruFlux is your architectural partner in every region.",
  stats: [
    { value: "400+", label: "Market Insights Delivered" },
    { value: "85%",  label: "Entry Success Rate" },
  ],
  badge: "End With Engine",
} as const;

export const SERVICES = [
  {
    num: "01",
    title: "Jurisdiction Intelligence",
    description:
      "Regulatory status, tax exposure, and compliance frameworks across 12+ global jurisdictions. We translate complex regulatory terrain into actionable entry intelligence.",
    tags: ["Regulatory", "Tax", "Compliance", "Risk"],
    highlight: false,
  },
  {
    num: "02",
    title: "Market Entry Operations",
    description:
      "Entity structure, sequenced entry plan, and operational activation. We audit data flows, facilitate RWA tokenization, and define compliant tech architecture for safe, scalable operations.",
    tags: ["Entity Setup", "RWA", "Tokenization", "Architecture"],
    highlight: true,
  },
  {
    num: "03",
    title: "Relationship & Network Access",
    description:
      "Working relationships with regulators and legal firms across jurisdictions. Access to our vetted Partner Network of compliant Web3 infrastructure providers and Agentic AI tool specialists.",
    tags: ["Regulators", "Legal", "Partners", "AI Partners"],
    highlight: false,
  },
  {
    num: "04",
    title: "Ongoing Intelligence Retainer",
    description:
      "Continuous monitoring of regulatory shifts, market movements, and competitive signals so your strategy stays ahead of the curve across all active markets.",
    tags: ["Monitoring", "Reports", "Signals", "Advisory"],
    highlight: false,
  },
] as const;

export const ENGAGEMENTS = [
  {
    price: "USD 5k",
    priceLabel: "Entry Diagnostic",
    title: "Diagnostic Session",
    subtitle: "Initial market assessment",
    features: [
      "2-hour strategy session",
      "Jurisdiction overview report",
      "Risk identification matrix",
      "Recommended entry pathways",
    ],
    featured: false,
  },
  {
    price: "USD 25k",
    priceLabel: "Full Entry Programme",
    title: "Entry Programme",
    subtitle: "End-to-end market entry",
    features: [
      "Full jurisdiction intelligence",
      "Entity structuring support",
      "Sequenced entry plan",
      "Regulator introductions",
      "RWA & compliance de-risking",
      "Partner network access",
      "90-day advisory support",
    ],
    featured: true,
    featuredLabel: "Most Popular",
  },
  {
    price: "Custom",
    priceLabel: "Monthly retainer",
    title: "Intelligence Retainer",
    subtitle: "Continuous strategic support",
    features: [
      "Monthly intelligence reports",
      "Regulatory change alerts",
      "Ongoing network access",
      "Quarterly strategy reviews",
      "Priority consultation access",
    ],
    featured: false,
  },
] as const;

export const CTA = {
  eyebrow: "Get Started",
  title: ["Secure Your Position in", "the Future Economy"],
  body: "Join an elite cohort of global firms successfully navigating frontier market expansion through KoruFlux's architectural intelligence.",
  cta1: { label: "Book a Strategy Session",    href: "#" },
  cta2: { label: "Request Capabilities Deck",  href: "#" },
} as const;

export const FOOTER_LINKS = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "Global Offices",
  "Careers",
] as const;
