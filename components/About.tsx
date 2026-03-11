"use client";

const techCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" stroke="url(#solGrad)" strokeWidth="1.5"/>
        <path d="M7 9l5-3 5 3v6l-5 3-5-3V9z" fill="url(#solGrad)" opacity="0.3"/>
        <path d="M7 9l5 3 5-3" stroke="url(#solGrad)" strokeWidth="1.2"/>
        <path d="M12 12v6" stroke="url(#solGrad)" strokeWidth="1.2"/>
        <defs>
          <linearGradient id="solGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="100%" stopColor="#a78bfa"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Solana",
    desc: "Hızlı ve düşük maliyetli blockchain ağı üzerinde proje geliştirme",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="url(#scGrad)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="url(#scGrad)" strokeWidth="1.5"/>
        <path d="M9 12h6M9 16h4" stroke="url(#scGrad)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="scGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa"/>
            <stop offset="100%" stopColor="#f472b6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Smart Contract",
    desc: "Ethereum ve Solana üzerinde akıllı sözleşme yazma ve denetimi",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" stroke="url(#w3Grad)" strokeWidth="1.5"/>
        <defs>
          <linearGradient id="w3Grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f472b6"/>
            <stop offset="100%" stopColor="#60a5fa"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Web3",
    desc: "Merkeziyetsiz uygulama (dApp) geliştirme ve entegrasyon",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 14l9-5-9-5-9 5 9 5z" stroke="url(#eduGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke="url(#eduGrad)" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M20 9v6" stroke="url(#eduGrad)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs>
          <linearGradient id="eduGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa"/>
            <stop offset="50%" stopColor="#a78bfa"/>
            <stop offset="100%" stopColor="#f472b6"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Eğitim",
    desc: "Workshop, seminer ve bootcamp etkinlikleriyle sürekli öğrenim",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section" style={{ padding: "96px 24px" }}>
      {/* Max-width centered container */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .about-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 64px; align-items: center; }
          .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          @media (max-width: 900px) {
            .about-section { padding: 48px 16px !important; }
            .about-grid { grid-template-columns: 1fr; gap: 40px; }
            .tech-grid { grid-template-columns: 1fr; }
          }
        `}} />

        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5))" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#818cf8" }}>
            Hakkımızda
          </span>
        </div>

        {/* 2-column grid */}
        <div className="about-grid">

          {/* LEFT: Text content */}
          <div>
            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              color: "white",
              marginBottom: "24px",
              lineHeight: 1.2,
            }}>
              Blockchain Dünyasının{" "}
              <span style={{
                background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Öncü Topluluğu
              </span>
            </h2>

            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.75, marginBottom: "20px" }}>
              SAÜ Blockchain olarak, Sakarya Üniversitesi bünyesinde blockchain
              teknolojileri, Web3 ve merkeziyetsiz sistemler alanında faaliyet
              gösteriyoruz. Öğrenci topluluğumuz, akademik bilgiyi pratik projelerle
              buluşturarak geleceğin teknoloji liderlerini yetiştiriyor.
            </p>
            <p style={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.75, marginBottom: "40px" }}>
              Düzenlediğimiz etkinlikler, hackathon&apos;lar ve eğitim programlarıyla
              üyelerimizin blockchain ekosisteminde söz sahibi olmalarını sağlıyoruz.
              Birlikte öğreniyor, birlikte inşa ediyoruz.
            </p>

            {/* Feature list */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "12px", padding: 0, listStyle: "none" }}>
              {[
                "Endüstri uzmanlarıyla networking",
                "Gerçek dünya projeleri geliştirme",
                "Sertifika ve staj fırsatları",
                "Hackathon&apos;larda temsil",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#cbd5e1", fontSize: "14px" }}>
                  <span style={{
                    flexShrink: 0,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  }}>
                    <svg width="12" height="12" fill="none" stroke="white" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  {item.replace("&apos;", "'")}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: Glow box with 2x2 tech cards */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Glow backdrop */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, rgba(99,102,241,0.25) 0%, rgba(167,139,250,0.12) 40%, transparent 70%)",
              filter: "blur(40px)",
              pointerEvents: "none",
            }} />

            {/* Glass container */}
            <div style={{
              position: "relative",
              width: "100%",
              padding: "28px",
              borderRadius: "20px",
              background: "rgba(15,23,42,0.65)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}>
              <div style={{ textAlign: "center", marginBottom: "20px" }}>
                <h3 style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#64748b" }}>
                  Uzmanlık Alanlarımız
                </h3>
              </div>

              {/* 2×2 grid */}
              <div className="tech-grid">
                {techCards.map((card) => (
                  <div
                    key={card.title}
                    style={{
                      padding: "16px",
                      borderRadius: "14px",
                      background: "rgba(99,102,241,0.06)",
                      border: "1px solid rgba(99,102,241,0.15)",
                      cursor: "default",
                      transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 50px rgba(99,102,241,0.3)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.5)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(99,102,241,0.15)";
                    }}
                  >
                    <div style={{ marginBottom: "10px" }}>{card.icon}</div>
                    <div style={{ color: "white", fontWeight: 600, fontSize: "13px", marginBottom: "4px" }}>{card.title}</div>
                    <div style={{ color: "#64748b", fontSize: "11px", lineHeight: 1.5 }}>{card.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
