
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Landmark, Percent, RefreshCw, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Web3 & DeFi (Merkeziyetsiz Finans) | SAÜ Blockchain",
  description: "Sakarya Üniversitesi Blockchain Topluluğu ile bankasız finansal sistem olan DeFi'yi (Merkeziyetsiz Finans) öğrenin. DEX, Yield Farming ve Swap entegrasyonları.",
  keywords: ["Web3", "Web3 Nedir", "DeFi", "DeFi Eğitim", "Merkeziyetsiz Finans", "SAÜ Blockchain DeFi", "DEX", "Yield Farming"],
  alternates: {
    canonical: "https://sau-blockchain.vercel.app/egitim/web3-defi",
  },
};

export default function Web3DefiPage() {
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
        background: "radial-gradient(circle, rgba(96,165,250,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <Link 
          href="/#ecosystem" 
          className="text-slate-400 hover:text-white transition-colors duration-200"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "32px",
          }}
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
            background: "rgba(96,165,250,0.12)",
            border: "1px solid rgba(96,165,250,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 10px 30px rgba(96,165,250,0.2)",
          }}>
            🌐
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Web3 & DeFi</h1>
            <p style={{ color: "#93c5fd", fontSize: "16px", marginTop: "4px" }}>Geleceğin Bankasız Finansal Sistemi</p>
          </div>
        </div>

        {/* Yeni Başlayanlar İçin Analoji */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          border: "1px solid rgba(148,163,184,0.1)",
          borderLeft: "4px solid #60a5fa",
          borderRadius: "16px",
          padding: "32px",
          backdropFilter: "blur(12px)",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <Landmark color="#93c5fd" size={24} />
            <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: 0 }}>
              Kısaca: DeFi Nedir?
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            Geleneksel dünyada kredi çekmek veya paranızı faize yatırmak için bir <strong>Bankaya</strong> gidersiniz. Banka ikinizin arasında bir <em>aracı</em> olur ve komisyonun çoğunu kendisi alır. <br/><br/>
            DeFi (Decentralized Finance - Merkeziyetsiz Finans) ise, bankaları ortadan kaldırır ve onların işini <strong>Akıllı Kontratlara</strong> (otomatik kodlara) verir. Biri borç vermek ister, diğeri borç almak ister. DeFi protokolü bu iki kişiyi yazılım üzerinden anında, evraksız, mesaisiz (7/24) ve aracı komisyonu olmadan buluşturur.
          </p>
        </div>

        {/* Finansal Vizyon */}
        <div style={{
          background: "rgba(30,41,59,0.3)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <BarChart color="#93c5fd" size={24} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Gelenekten Geleceğe Finans</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><RefreshCw color="#3b82f6" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Merkeziyetsiz Borsalar (DEX)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Alıcı ve satıcıyı doğrudan eşleştiren, hesap dondurulamayan Uniswap ve Raydium gibi borsalar.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><Percent color="#3b82f6" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Getiri Çiftçiliği (Yield Farming)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Kripto varlıklarınızı sistemin işleyişine (likidite) katkıda bulunması için kilitleyerek pasif getiri sağlama stratejileri.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konular */}
        <div style={{
          background: "linear-gradient(to right, rgba(96,165,250,0.05), rgba(52,211,153,0.05))",
          border: "1px solid rgba(96,165,250,0.15)",
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
            {["Otomatik Piyasa Yapıcı (AMM) Mantığı", "Merkeziyetsiz Borsa (DEX) Entegrasyonları", "Lending & Borrowing (Borç/Kredi) Protokolleri", "Likidite Sağlama ve Yield Farming Stratejisi", "Likit Staking ve Restaking (Örn: EigenLayer)", "Flash Kredi Arbitraj Stratejileri"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60a5fa" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
