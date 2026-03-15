"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Scroll, Code, Terminal, Gavel } from "lucide-react";

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

        {/* Hero Section */}
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
            <p style={{ color: "#c4b5fd", fontSize: "16px", marginTop: "4px" }}>Kod İşlediği Sürece Kurallar Geçerlidir</p>
          </div>
        </div>

        {/* Yeni Başlayanlar İçin Analoji */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          border: "1px solid rgba(148,163,184,0.1)",
          borderLeft: "4px solid #a78bfa",
          borderRadius: "16px",
          padding: "32px",
          backdropFilter: "blur(12px)",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <Scroll color="#c4b5fd" size={24} />
            <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: 0 }}>
              Kısaca: Akıllı Kontrat Nedir?
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            Akıllı kontratları (Smart Contracts) bir <strong>Otomat Makinesi (Vending Machine)</strong> gibi düşünebilirsiniz. <br/><br/>
            Normalde bir ürün almak isterseniz bir satıcıya (aracıya) para verirsiniz, o da size ürünü verir. Satıcı size yalan söyleyebilir veya paranızı alıp ürünü vermeyebilir. 
            Ancak otomat makinesine paranızı atıp "B3" tuşuna basarsanız (koşullar sağlanırsa), makinenin mekanizması suyu otomatik olarak aşağı düşürür. <br/><br/>
            İşte akıllı kontratlar da böyledir: İçine yazılan kodlar (kurallar) ağ üzerinde barınır. "A kişisi B kişisine 100 coin gönderirse, dijital tapuyu A'ya geçir" kodu, şartlar sağlandığında <strong>otomatik ve hatasız olarak</strong> çalışır. Kasiyere, notere veya bankaya ihtiyaç yoktur.
          </p>
        </div>

        {/* Neden Önemli */}
        <div style={{
          background: "rgba(30,41,59,0.3)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Gavel color="#c4b5fd" size={24} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Geleceğin Dijital Anlaşmaları</h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            Bugün finans (DeFi), oyun sektörü, oylama sistemleri ve dijital kimlikler sadece kod parçacıkları üzerinden çalışabiliyor. 
            Bu kod parçalarını yazan kişilere <strong>Web3 Geliştiricisi / Smart Contract Yazılımcısı</strong> diyoruz.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><Code color="#8b5cf6" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Değiştirilemez (Immutable)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Kontrat bir kez ağa yüklendiğinde kuralları kimse değiştiremez. Bu, %100 güven yaratır.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><Terminal color="#8b5cf6" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Solidity ve Diğerleri</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Ethereum için Solidity, Solana ve Aptos için Rust/Move dilleri kullanılarak bu kontratlar yazılır.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konular */}
        <div style={{
          background: "linear-gradient(to right, rgba(167,139,250,0.05), rgba(244,114,182,0.05))",
          border: "1px solid rgba(167,139,250,0.15)",
          borderRadius: "24px",
          padding: "40px",
        }}>
          <h3 style={{ color: "white", fontSize: "20px", fontWeight: 600, marginBottom: "20px" }}>Bu Alanda Neler Öğretiyoruz?</h3>
          <ul style={{ 
            color: "#cbd5e1", 
            fontSize: "15px", 
            lineHeight: 1.8, 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "16px",
            padding: 0,
            listStyleType: "none",
            margin: 0
          }}>
            {["EVM (Ethereum Virtual Machine) Temelleri", "Solidity Sözdizimi ve Veri Tipleri", "Kontrat Optimizasyonu ve Gas (Ücret) Yönetimi", "Hardhat ve Foundry gibi Test Araçları", "ERC-20 (Token) ve ERC-721 (NFT) Standartları", "Farklı Ağlarda (Testnet/Mainnet) Kontrat Yayınlama"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
