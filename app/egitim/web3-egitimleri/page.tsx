
import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, PlayCircle, ExternalLink, Lightbulb, Blocks } from "lucide-react";

export const metadata: Metadata = {
  title: "Web3 Eğitim Seminerleri & Bootcamp | SAÜ Blockchain",
  description: "Sakarya Üniversitesi Blockchain Topluluğu Bootcamp, Hackathon hazırlık ve teknik Web3 atölyeleri. BTK Akademi işbirlikli ücretsiz blokzincir eğitimleri.",
  keywords: ["Web3 Eğitim", "Blockchain Bootcamp", "BTK Akademi", "Sakarya Üniversitesi Etkinlik", "SAÜ Hackathon", "Yazılım Eğitimleri", "Sakarya Web3"],
  alternates: {
    canonical: "https://sau-blockchain.vercel.app/egitim/web3-egitimleri",
  },
};

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
      title: "Kurumsal Blokzincir Teknolojileri",
      description: "İşletmeler ve kurumlar için özel blockchain çözümleri ve kullanım senaryoları.",
      link: "https://www.btkakademi.gov.tr/portal/course/kurumsal-blokzincir-teknolojileri-11730"
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
            <h1 style={{ color: "white", fontSize: "40px", fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
              Web3 Eğitimleri
            </h1>
            <p style={{ color: "#fcd34d", fontSize: "16px", marginTop: "4px" }}>
              Sıfırdan İleri Seviyeye Blockchain Yolculuğu
            </p>
          </div>
        </div>

        {/* Yeni Başlayanlar İçin: Blockchain Nedir? */}
        <div style={{
          background: "linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
          border: "1px solid rgba(148,163,184,0.1)",
          borderLeft: "4px solid #fbbf24",
          borderRadius: "16px",
          padding: "32px",
          backdropFilter: "blur(12px)",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <Blocks color="#fbbf24" size={24} />
            <h2 style={{ color: "white", fontSize: "22px", fontWeight: 700, margin: 0 }}>
              Hiç Bilmeyenler İçin: Blockchain Nedir?
            </h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Blockchain&apos;i devasa, dijital bir <strong>açık muhasebe defteri</strong> gibi düşünebilirsiniz. 
            Ancak bu defter tek bir kişinin veya bankanın elinde durmaz; ağdaki binlerce bilgisayarda (düğüm/node) eşzamanlı olarak bulunur.
          </p>
          <div style={{ display: "flex", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 calc(50% - 16px)", minWidth: "250px", background: "rgba(15,23,42,0.5)", padding: "16px", borderRadius: "12px" }}>
              <span style={{ fontSize: "20px", display: "block", marginBottom: "8px" }}>🏦 Geleneksel Sistem (Merkezi)</span>
              <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Para gönderdiğinizde banka (merkez), "Ahmet'ten Ayşe'ye 100₺ gitti" diye kendi defterine yazar. Bankaya güvenmek zorundasınız.</p>
            </div>
            <div style={{ flex: "1 1 calc(50% - 16px)", minWidth: "250px", background: "rgba(251,191,36,0.05)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(251,191,36,0.1)" }}>
              <span style={{ fontSize: "20px", display: "block", marginBottom: "8px" }}>🔗 Blockchain Sistemi (Merkeziyetsiz)</span>
              <p style={{ color: "#e2e8f0", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>Transfer yapıldığında ağdaki <em>herkesin</em> defterine aynı anda yazılır. Geçmiş kayıtlar değiştirilemez, hacklenmesi neredeyse imkansızdır. Aracıya ihtiyaç yoktur.</p>
            </div>
          </div>
        </div>

        {/* Eğitim Modelimiz */}
        <div style={{
          background: "rgba(30,41,59,0.3)",
          border: "1px solid rgba(148,163,184,0.1)",
          borderRadius: "24px",
          padding: "40px",
          marginBottom: "40px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <Lightbulb color="#818cf8" size={24} />
            <h2 style={{ color: "white", fontSize: "24px", fontWeight: 700, margin: 0 }}>Nasıl Öğreniyoruz?</h2>
          </div>
          <p style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
            SAÜ Blockchain olarak, üyelerimizin ekosisteme en hızlı ve etkili şekilde entegre olabilmesi için 
            aktif öğrenme ve projelerle &quot;yaparak öğrenme&quot; metodunu benimsiyoruz.
          </p>

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "20px" 
          }}>
            {[
              { title: "Giriş Seviyesi Bootcamp", desc: "Sıfırdan başlayanlar için temel kriptografi ve cüzdan kullanımı eğitimleri." },
              { title: "Kodlama Workshopları", desc: "Rust ve Solidity ile ilk akıllı kontratınızı canlı yayında birlikte yazıyoruz." },
              { title: "Hackathon Kampları", desc: "Küresel yarışmalara katılmadan önce 48 saatlik simülasyon ve proje fikir üretimi." },
              { title: "Akran Eğitimi", desc: "Bilen üyelerin bilmeyenlere anlattığı, hiyerarşisiz bilgi paylaşım oturumları." },
            ].map((item, i) => (
              <div key={i} style={{ 
                background: "rgba(15,23,42,0.4)", 
                padding: "20px", 
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.05)"
              }}>
                <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "8px" }}>{item.title}</h4>
                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
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
            Topluluğumuza katılmadan önce veya paralel olarak, devlet onaylı ve tamamen ücretsiz BTK Akademi 
            platformundaki bu temel kursları bitirmenizi şiddetle tavsiye ederiz.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {btkCourses.map((course, idx) => (
              <a 
                key={idx}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:-translate-y-1 hover:border-amber-400/40 hover:bg-slate-800/80 transition-all duration-200"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "rgba(15,23,42,0.6)",
                  border: "1px solid rgba(148,163,184,0.1)",
                  textDecoration: "none",
                }}
              >
                <div>
                  <h4 style={{ color: "white", fontSize: "16px", fontWeight: 600, marginBottom: "4px" }}>{course.title}</h4>
                  <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0 }}>{course.description}</p>
                </div>
                <div style={{ background: "rgba(251,191,36,0.1)", padding: "8px", borderRadius: "50%" }}>
                  <ExternalLink color="#fbbf24" size={20} />
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: "32px", padding: "16px", background: "rgba(16,185,129,0.1)", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.2)" }}>
            <p style={{ color: "#34d399", fontSize: "14px", margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "18px" }}>💡</span>
              BTK Akademi platformuna e-Devlet şifrenizle giriş yaparak sertifikalı eğitimlere anında başlayabilirsiniz.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
