import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KoruFlux — Global Intelligence, Local Execution",
  description:
    "KoruFlux orchestrates complex market entries and digital transformations for Web3 protocols, DeFi platforms, and RWA projects expanding globally.",
  keywords: [
    "Web3 market entry",
    "RWA tokenization compliance",
    "crypto jurisdiction intelligence",
    "DeFi expansion",
    "global market entry",
  ],
  openGraph: {
    title: "KoruFlux — Global Intelligence, Local Execution",
    description: "De-risk your global market entry. Jurisdiction intelligence, compliant infrastructure, and vetted network access — in one engagement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
