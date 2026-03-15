"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NFTArtPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 relative" style={{ backgroundColor: "#0f172a" }}>
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: "-100px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,114,182,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/#ecosystem" 
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#94a3b8",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "32px",
            transition: "color 0.2s"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
        >
          <ArrowLeft size={16} />
          Geri Dön
        </Link>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "40px",
        }}>
          <div style={{
            width: "80px",
            height: "80px",
            borderRadius: "24px",
            background: "rgba(244,114,182,0.12)",
            border: "1px solid rgba(244,114,182,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 10px 30px rgba(244,114,182,0.2)",
          }}>
            🎨
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>NFT & Dijital Sanat</h1>
            <p style={{ color: "#f9a8d4", fontSize: "16px", marginTop: "4px" }}>Metaverse, Oyun İçi Varlıklar ve Dijital Sahiplik</p>
          </div>
        </div>

        <div style={{
          background: "rgba(30,41,59,0.5)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          backdropFilter: "blur(12px)",
        }}>
          <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>Dijital Sahipliğin Kanıtı</h2>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Non-Fungible Tokens (NFT&apos;ler), dijital varlıkların benzersizliğini ve sahipliğini kanıtlayan kriptografik ögelerdir. 
            Sanat eserlerinden oyun içi eşyalara ve gerçek dünya varlıklarının (RWA) tokenizasyonuna kadar yepyeni fırsatlar sunarlar.
          </p>

          <h3 style={{ color: "white", fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>Öğreneceğimiz Konular</h3>
          <ul style={{ 
            color: "#94a3b8", 
            fontSize: "15px", 
            lineHeight: 1.8, 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "12px",
            paddingLeft: "20px"
          }}>
            <li style={{ listStyleType: "circle" }}>NFT Standartları: ERC-721 ve ERC-1155</li>
            <li style={{ listStyleType: "circle" }}>IPFS Kullanarak Metaveri (Metadata) Depolama</li>
            <li style={{ listStyleType: "circle" }}>Generative Art Kodlama ve Koleksiyon Basımı</li>
            <li style={{ listStyleType: "circle" }}>Metaverse Temelleri Geleceği</li>
            <li style={{ listStyleType: "circle" }}>Pazar Yeri (Marketplace) Mimarisi ve Telifler</li>
            <li style={{ listStyleType: "circle" }}>GameFi: Kazanmak İçin Oyna Modeli</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
