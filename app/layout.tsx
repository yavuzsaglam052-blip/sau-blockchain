import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SAÜ Blockchain Topluluğu | Sakarya Üniversitesi",
  description:
    "Sakarya Üniversitesi Blockchain Topluluğu — Blockchain, Web3, Akıllı Sözleşmeler ve Merkeziyetsiz Teknolojiler alanında eğitim ve proje geliştirme topluluğu.",
  keywords: [
    "SAÜ Blockchain",
    "Sakarya Üniversitesi",
    "Blockchain",
    "Web3",
    "Solana",
    "Akıllı Sözleşme",
    "Kripto",
  ],
  openGraph: {
    title: "SAÜ Blockchain Topluluğu",
    description:
      "Sakarya Üniversitesi Blockchain Topluluğu — Geleceğin teknolojilerini birlikte inşa ediyoruz.",
    type: "website",
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
