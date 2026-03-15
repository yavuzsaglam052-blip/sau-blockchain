"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Image as ImageIcon, CheckCircle, Fingerprint, Codesandbox } from "lucide-react";

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

        {/* Yeni Başlayanlar İçin Analoji */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          border: "1px solid rgba(148,163,184,0.1)",
          borderLeft: "4px solid #f472b6",
          borderRadius: "16px",
          padding: "32px",
          backdropFilter: "blur(12px)",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <ImageIcon color="#f9a8d4" size={24} />
            <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: 0 }}>
              Kısaca: NFT Nedir ve Sadece Resim mi Demektir?
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            NFT (Non-Fungible Token), kabaca <strong>"Dijital Orijinallik Sertifikası"</strong> demektir. <br/><br/>
            Mona Lisa tablosunun milyonlarca kopyası veya fotoğrafı vardır ama <em>gerçek</em> olanına sahip olan kişi sadece Paris'teki Louvre Müzesi'dir (ve bunun kanıtı vardır). 
            İnternette de bir resmi kopyalayabilir/indirebilirsiniz, ancak NFT teknolojisi sayesinde o resmin (veya dosyanın) dijital dünyada <strong>asıl sahibinin kim olduğu</strong> blockchain'e kazınır.<br/><br/>
            NFT'ler sadece maymun resimleri değildir; gelecekte ev tapuları, konser biletleri, üniversite diplomaları ve oyun içi kılıçlarınız tamamen NFT formatında olacaktır.
          </p>
        </div>

        {/* Detaylar */}
        <div style={{
          background: "rgba(30,41,59,0.3)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Fingerprint color="#f9a8d4" size={24} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Sahipliğin Kanıtı</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><CheckCircle color="#ec4899" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Telif Hakları (Royalties)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Bir sanatçı eseri satıldıktan sonra, elden ele her dijital satışta sözleşme gereği otomatik olarak %5 - %10 telif alır.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><Codesandbox color="#ec4899" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Eşsiz Standartlar (ERC-721)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Sıradan tokenların hepsi birbirinin aynısıdır (1 BTC = 1 BTC), ancak her NFT'nin kodu, id'si ve özelliği tamamen eşsizdir.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konular */}
        <div style={{
          background: "linear-gradient(to right, rgba(244,114,182,0.05), rgba(167,139,250,0.05))",
          border: "1px solid rgba(244,114,182,0.15)",
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
            {["NFT Standartları: ERC-721 ve ERC-1155", "IPFS Kullanarak Metaveri (Metadata) Depolama", "Generative Art (Üretken Sanat) Kodlama Algoritmaları", "Metaverse Mimarisi ve Geleceği", "Pazar Yeri (Marketplace) Mimarisi ve Telif Dağıtımı", "Dinamik NFT'ler ve RWA (Gerçek Dünya Varlıkları)"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#f472b6" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
