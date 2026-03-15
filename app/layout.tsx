import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Schema from "@/components/Schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sau-blockchain.vercel.app"), // Kendi vercel domainini ya da asıl domaini yaz
  title: {
    default: "SAÜ Blockchain Topluluğu | Sakarya Üniversitesi Web3 Merkezi",
    template: "%s | SAÜ Blockchain",
  },
  description:
    "Sakarya Üniversitesi (SAÜ) Blockchain Topluluğu. Web3, kripto, akıllı sözleşmeler (smart contracts) ve merkeziyetsiz teknolojiler (DeFi, NFT, Solana) alanında proje geliştirme, eğitim ve araştırma merkezi. Block chain nedir öğrenmek için katılın.",
  keywords: [
    // Brand & Variations
    "SAÜ Blockchain",
    "SAÜ Blockchain Topluluğu",
    "Sakarya Üniversitesi Blockchain",
    "Sakarya Blockchain",
    "SAÜ Web3",
    "Sakarya Kripto",
    "Sau block",
    "Sau blockchain",
    "saü block chain",
    "sakarya üniversitesi block chain",
    "sakarya block",
    // Core Topics
    "Blockchain",
    "Block chain",
    "Blockchain nedir",
    "Block chain nedir",
    "Web3",
    "Web3 nedir",
    "Kripto Para",
    "Kripto",
    // Technical Terms
    "Solana",
    "Solana ekosistemi",
    "Akıllı Sözleşme",
    "Akıllı Kontratlar",
    "Smart Contract",
    "DeFi",
    "Merkeziyetsiz Finans",
    "NFT",
    "Dijital Sanat",
    "Blockchain Güvenliği",
    "Rust",
    "Solidity",
    "Yazılım",
    "Bootcamp",
  ],
  authors: [{ name: "SAÜ Blockchain Topluluğu" }],
  creator: "SAÜ Blockchain Topluluğu",
  openGraph: {
    title: "SAÜ Blockchain Topluluğu | Sakarya Web3 Merkezi",
    description:
      "Sakarya Üniversitesi Blockchain Topluluğu — Geleceğin teknolojilerini (Web3, Kripto, Smart Contract) birlikte inşa ediyoruz. Blockchain nedir öğrenmek ve ekosisteme katılmak için doğru yerdesiniz.",
    url: "https://sau-blockchain.vercel.app",
    siteName: "SAÜ Blockchain",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "SAÜ Blockchain Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://sau-blockchain.vercel.app" />
      </head>
      <body className="antialiased">
        <Schema />
        {children}
      </body>
    </html>
  );
}
