"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, ExternalLink } from "lucide-react";

export default function EducationPage() {
  const btkCourses = [
    {
      title: "Blokzincir Teknolojisine Giriş",
      description: "Blokzincir teknolojisinin temelleri ve kriptografik altyapısı.",
      link: "https://www.btkakademi.gov.tr/portal/course/blokzincir-teknolojisine-giris-11728"
    },
    {
      title: "Solidity ile Akıllı Sözleşme Geliştirme",
      description: "EVM tabanlı ağlar için Solidity programlama dili ile kontrat yazımı.",
      link: "https://www.btkakademi.gov.tr/portal/course/solidity-ile-akilli-sozlesme-gelistirme-11729"
    },
    {
      title: "Rust Programlama Temelleri",
      description: "Solana ve diğer modern ağlar için sistem programlama dili pas (Rust).",
      link: "https://www.btkakademi.gov.tr/portal/course/rust-programlama-temelleri-11730" // Example / Placeholder link assumption
    }
  ];

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
        background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
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
            background: "rgba(251,191,36,0.08)",
            border: "1px solid rgba(251,191,36,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            boxShadow: "0 10px 30px rgba(251,191,36,0.15)",
          }}>
            🎓
          </div>
          <div>
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>Web3 Eğitimleri</h1>
            <p style={{ color: "#fcd34d", fontSize: "16px", marginTop: "4px" }}>Temelden İleri Seviyeye Blockchain Yolculuğu</p>
          </div>
        </div>

        <div style={{
          background: "rgba(30,41,59,0.5)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          backdropFilter: "blur(12px)",
          marginBottom: "32px",
        }}>
          <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, marginBottom: "20px" }}>Nasıl Öğreniyoruz?</h2>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            SAÜ Blockchain olarak, üyelerimizin ekosisteme en hızlı ve etkili şekilde entegre olabilmesi için çeşitli 
            eğitim metodolojileri uyguluyoruz. Deneyimli üyelerin rehberliğinde bootcamp'ler, workshop'lar ve 
            grup çalışmaları düzenliyoruz.
          </p>

          <h3 style={{ color: "white", fontSize: "20px", fontWeight: 600, marginBottom: "16px" }}>Eğitim Modellerimiz</h3>
          <ul style={{ 
            color: "#94a3b8", 
            fontSize: "15px", 
            lineHeight: 1.8, 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "12px",
            paddingLeft: "20px"
          }}>
            <li style={{ listStyleType: "circle" }}>Sıfırdan Başlayanlar İçin Bootcamp</li>
            <li style={{ listStyleType: "circle" }}>Proje Odaklı Workshoplar</li>
            <li style={{ listStyleType: "circle" }}>Hackathon Hazırlık Süreçleri</li>
            <li style={{ listStyleType: "circle" }}>Topluluk İçi Sunumlar</li>
          </ul>
        </div>

        {/* BTK Academy Videos Section */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))",
          border: "1px solid rgba(251,191,36,0.3)",
          borderRadius: "24px",
          padding: "40px",
          backdropFilter: "blur(12px)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <PlayCircle color="#fbbf24" size={28} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Önerilen Kaynaklar: BTK Akademi</h2>
          </div>
          
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}>
            Öğrenim sürecinizi hızlandırmak için devlet destekli BTK Akademi platformundaki ücretsiz eğitimlerden yararlanabilirsiniz.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {btkCourses.map((course, idx) => (
              <a 
                key={idx}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(148,163,184,0.1)",
                  textDecoration: "none",
                  transition: "all 0.2s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(251,191,36,0.4)";
                  e.currentTarget.style.background = "rgba(30,41,59,0.8)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(148,163,184,0.1)";
                  e.currentTarget.style.background = "rgba(15,23,42,0.6)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div>
                  <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{course.title}</h4>
                  <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>{course.description}</p>
                </div>
                <ExternalLink color="#94a3b8" size={20} />
              </a>
            ))}
          </div>

          <div style={{ marginTop: "32px", padding: "16px", background: "rgba(16,185,129,0.1)", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.2)" }}>
            <p style={{ color: "#34d399", fontSize: "14px", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>💡</span>
              BTK Akademi platformuna e-Devlet şifrenizle giriş yaparak sertifikalı eğitimlere ücretsiz katılabilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
