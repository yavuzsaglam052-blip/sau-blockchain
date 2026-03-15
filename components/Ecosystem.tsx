"use client";
import Link from 'next/link';

const focusAreas = [
  {
    emoji: "◎",
    title: "Solana Ekosistemi",
    desc: "Rust & Anchor framework ile yüksek performanslı dApp geliştirme ve Solana Program kütüphanesi.",
    accent: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.25)",
    glow: "rgba(99,102,241,0.3)",
    href: "/egitim/solana",
  },
  {
    emoji: "📝",
    title: "Akıllı Kontratlar",
    desc: "Solidity, Rust ve Move dilleriyle güvenli ve optimize edilmiş akıllı kontrat yazımı.",
    accent: "rgba(167,139,250,0.12)",
    border: "rgba(167,139,250,0.25)",
    glow: "rgba(167,139,250,0.3)",
    href: "/egitim/smart-contracts",
  },
  {
    emoji: "🌐",
    title: "Web3 & DeFi",
    desc: "Merkeziyetsiz finans protokolleri, DEX entegrasyonları ve yield farming stratejileri.",
    accent: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.25)",
    glow: "rgba(96,165,250,0.3)",
    href: "/egitim/web3-defi",
  },
  {
    emoji: "🎨",
    title: "NFT & Dijital Sanat",
    desc: "NFT standartları, metaverse entegrasyonları ve dijital varlık yönetimi.",
    accent: "rgba(244,114,182,0.12)",
    border: "rgba(244,114,182,0.25)",
    glow: "rgba(244,114,182,0.3)",
    href: "/egitim/nft-art",
  },
  {
    emoji: "🔒",
    title: "Blockchain Güvenliği",
    desc: "Akıllı kontrat denetimi, exploit analizi ve zincir üstü güvenlik pratikleri.",
    accent: "rgba(52,211,153,0.1)",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.3)",
    href: "/egitim/security",
  },
  {
    emoji: "🎓",
    title: "Web3 Eğitimleri",
    desc: "Bootcamp, hackathon ve workshop etkinlikleriyle kapsamlı blockchain eğitim programları.",
    accent: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.2)",
    glow: "rgba(251,191,36,0.3)",
    href: "/egitim/web3-egitimleri",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="eco-section" style={{ padding: "96px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .eco-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
          @media (max-width: 900px) {
            .eco-grid { grid-template-columns: 1fr; }
            .eco-section { padding: 48px 16px !important; }
          }
        `}} />

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          {/* Label */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5))" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#818cf8" }}>
              Ekosistem
            </span>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to left, transparent, rgba(99,102,241,0.5))" }} />
          </div>

          <h2 style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "white",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}>
            Odak{" "}
            <span style={{
              background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Noktalarımız
            </span>
          </h2>

          <p style={{
            color: "#64748b",
            fontSize: "16px",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Blockchain dünyasının en kritik alanlarında uzmanlaşıyoruz ve
            üyelerimize en güncel bilgileri sunuyoruz.
          </p>
        </div>

        {/* 3-column card grid */}
        <div className="eco-grid">
          {focusAreas.map((area) => (
            <Link href={area.href} key={area.title} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  padding: "28px 24px",
                  borderRadius: "20px",
                  background: area.accent,
                  border: `1px solid ${area.border}`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  transition: "all 0.3s",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = `0 20px 60px ${area.glow}`;
                  el.style.borderColor = area.glow;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                  el.style.borderColor = area.border;
                }}
              >
                {/* Subtle top-right glow */}
                <div style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: area.glow,
                  filter: "blur(30px)",
                  opacity: 0.3,
                  pointerEvents: "none",
                }} />

                {/* Emoji icon */}
                <div style={{
                  fontSize: "32px",
                  marginBottom: "16px",
                  display: "block",
                  lineHeight: 1,
                }}>
                  {area.emoji}
                </div>

                {/* Title */}
                <h3 style={{
                  color: "white",
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "10px",
                  lineHeight: 1.3,
                }}>
                  {area.title}
                </h3>

                {/* Description */}
                <p style={{
                  color: "#64748b",
                  fontSize: "13px",
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {area.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
