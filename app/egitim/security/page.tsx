"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert, BugPlay, SearchCode, Lock } from "lucide-react";

export default function SecurityPage() {
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
        background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)",
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
            background: "rgba(52,211,153,0.1)",
            border: "1px solid rgba(52,211,153,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 10px 30px rgba(52,211,153,0.2)",
          }}>
            🔒
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Blockchain Güvenliği</h1>
            <p style={{ color: "#6ee7b7", fontSize: "16px", marginTop: "4px" }}>Zaafların Keşfi ve Milyarder Uygulamaların Denetimi</p>
          </div>
        </div>

        {/* Yeni Başlayanlar İçin Analoji */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          border: "1px solid rgba(148,163,184,0.1)",
          borderLeft: "4px solid #34d399",
          borderRadius: "16px",
          padding: "32px",
          backdropFilter: "blur(12px)",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <ShieldAlert color="#6ee7b7" size={24} />
            <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: 0 }}>
              Kısaca: Neden Güvenlik Hayati Önem Taşıyor?
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            Normal dünyada bankanız hacklenirse, banka bunu kendi sigortasından telafi edebilir ve sunucudaki o işlemi geriye alabilir (geri sarabilir). <br/><br/>
            Ancak Blockchain dünyasında temel prensip, işlemlerin <strong>geriye döndürülemez</strong> (Immutable) olmasıdır. Eğer yazdığınız akıllı bir kontratta açık varsa, bir hacker 1 saniye içinde sözleşmedeki milyonlarca dolarlık varlığı kendine transfer edebilir. "Geri Al" butonu yoktur, polisi arayıp durduramazsınız. <br/><br/>
            İşte bu yüzden, kontratları yayınlamadan önce hackerlardan önce açık arayan <strong>Smart Contract Auditor (Denetçi)</strong> rolü, sektörün en çok aranan (ve en yüksek maaşlı) rollerinden biridir.
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
            <Lock color="#6ee7b7" size={24} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Web3 Dünyasında Denetim</h2>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px", marginTop: "24px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><BugPlay color="#10b981" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Bug Bounties (Ödül Avcılığı)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Büyük protokoller (Örn: Immunefi üzerinde) kodlarındaki bir açığı bulup kötüye kullanmak yerine onlara bildiren etik hackerlara devasa ödüller (10M$+ kadar) öderler.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ marginTop: "4px" }}><SearchCode color="#10b981" size={20} /></div>
              <div>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px", marginTop: 0 }}>Denetim Süreci (Auditing)</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>Yazılan kodlar yayına alınmadan önce satır satır analiz edilir, olası flash-loan veya reentrancy saldırılarına karşı test simülasyonları çalıştırılır.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Konular */}
        <div style={{
          background: "linear-gradient(to right, rgba(52,211,153,0.05), rgba(96,165,250,0.05))",
          border: "1px solid rgba(52,211,153,0.15)",
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
            {["Reentrancy ve Front-Running Saldırıları", "Yaygın Zafiyet Türleri ve SWC Registry", "EVM Bytecode ve Assembly (Yul) Kavramı", "Slither ve Mythril gibi Statik Analiz Kod Testleri", "Foundry Fuzzing / Otomatik Hata Test Teknikleri", "Bug Bounty Kariyeri ve Pratik Zafiyet Çözümleri"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34d399" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
