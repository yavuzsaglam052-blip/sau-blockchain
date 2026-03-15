"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SmartContractsPage() {
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
        background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
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
            background: "rgba(167,139,250,0.12)",
            border: "1px solid rgba(167,139,250,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 10px 30px rgba(167,139,250,0.2)",
          }}>
            📝
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Akıllı Kontratlar</h1>
            <p style={{ color: "#c4b5fd", fontSize: "16px", marginTop: "4px" }}>Solidity, Rust ve Move ile Merkeziyetsiz Kodlama</p>
          </div>
        </div>

        <div style={{
          background: "rgba(30,41,59,0.5)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          backdropFilter: "blur(12px)",
        }}>
          <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>Kod İşlediği Sürece Kurallar Geçerlidir</h2>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Akıllı kontratlar (Smart Contracts), blockchain ağlarında barındırılan ve önceden belirlenmiş koşullar karşılandığında 
            otomatik olarak çalışan programlardır. Finanstan sağlığa kadar dijital anlaşmaları değiştirilemez (immutable) hale getirirler.
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
            <li style={{ listStyleType: "circle" }}>EVM (Ethereum Virtual Machine) Temelleri</li>
            <li style={{ listStyleType: "circle" }}>Solidity Sözdizimi ve Veri Tipleri</li>
            <li style={{ listStyleType: "circle" }}>Kontrat Optimizasyonu ve Gas Yönetimi</li>
            <li style={{ listStyleType: "circle" }}>Hardhat ve Foundry Test Araçları</li>
            <li style={{ listStyleType: "circle" }}>ERC-20 ve ERC-721 Standartları</li>
            <li style={{ listStyleType: "circle" }}>Farklı Ağlarda Kontrat Yayınlama</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
