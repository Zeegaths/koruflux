import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://koruflux.com"),
  title: "KoruFlux — Global Intelligence, Local Execution",
  description:
    "KoruFlux orchestrates complex market entries and digital transformations for Web3 protocols, DeFi platforms, and RWA projects expanding globally.",
  keywords: [
    "Web3 market entry",
    "RWA tokenization compliance",
    "crypto jurisdiction intelligence",
    "DeFi expansion Africa",
    "global market entry consultancy",
    "East Africa Web3",
    "frontier markets intelligence",
    "blockchain compliance Kenya",
  ],
  alternates: {
    canonical: "https://koruflux.com",
  },
  openGraph: {
    title: "KoruFlux — Global Intelligence, Local Execution",
    description:
      "De-risk your global market entry. Jurisdiction intelligence, compliant infrastructure, and vetted network access — in one engagement.",
    type: "website",
    url: "https://koruflux.com",
    siteName: "KoruFlux",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KoruFlux — Global Intelligence, Local Execution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KoruFlux — Global Intelligence, Local Execution",
    description:
      "De-risk your global market entry. Jurisdiction intelligence, compliant infrastructure, and vetted network access.",
    images: ["/og-image.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KoruFlux",
  url: "https://koruflux.com",
  description:
    "Global market entry intelligence for Web3, DeFi, and RWA projects.",
  areaServed: "Worldwide",
  serviceType: "Market Entry Consultancy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
