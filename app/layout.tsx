import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    "Sakarya Üniversitesi (SAÜ) Blockchain Topluluğu. Web3, kripto, akıllı sözleşmeler ve merkeziyetsiz teknolojiler alanında proje, eğitim ve gelişim merkezi.",
  keywords: [
    "SAÜ Blockchain",
    "SAÜ Blockchain Topluluğu",
    "Sakarya Üniversitesi Blockchain",
    "Sakarya Blockchain",
    "SAÜ Web3",
    "Sakarya Kripto",
    "Sau block",
    "Blockchain",
    "Web3",
    "Solana",
    "Akıllı Sözleşme",
    "Kripto Para",
    "Yazılım",
  ],
  authors: [{ name: "SAÜ Blockchain" }],
  creator: "SAÜ Blockchain",
  openGraph: {
    title: "SAÜ Blockchain Topluluğu | Sakarya Üniversitesi",
    description:
      "Sakarya Üniversitesi Blockchain Topluluğu — Geleceğin teknolojilerini (Web3, Kripto, Smart Contract) birlikte inşa ediyoruz.",
    url: "https://sau-blockchain.vercel.app",
    siteName: "SAÜ Blockchain Topluluğu",
    locale: "tr_TR",
    type: "website",
    /* Sitenin logusunu veya havalı bir kapağını OG image olarak ekleyebilirsin
    images: [
      {
        url: "/logo.png", // public klasöründeki bir resim
        width: 800,
        height: 600,
      },
    ],
    */
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
