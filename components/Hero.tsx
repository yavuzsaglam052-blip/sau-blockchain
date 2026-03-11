"use client";
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "96px",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingBottom: "40px",
      }}
    >
      {/* Large center glow */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 0,
      }}>
        <div style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)",
        }} />
      </div>

      {/* Content — centered with max-width */}
      <div style={{
        position: "relative",
        zIndex: 10,
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 16px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: 500,
          color: "#a5b4fc",
          marginBottom: "32px",
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.25)",
        }}>
          <span style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#34d399",
            display: "inline-block",
            animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
          }} />
          Sakarya Üniversitesi Blockchain Topluluğu
        </div>

        {/* Headline */}
        <h1 style={{ fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "24px" }}>
          <span style={{ display: "block", fontSize: "clamp(2.5rem, 7vw, 4.5rem)", color: "white" }}>Geleceği Birlikte</span>
          <span style={{
            display: "block",
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Merkeziyetsizleştiriyoruz
          </span>
        </h1>

        <p style={{
          color: "#94a3b8",
          fontSize: "clamp(15px, 2vw, 18px)",
          maxWidth: "560px",
          margin: "0 auto 48px",
          lineHeight: 1.75,
        }}>
          Web3, Akıllı Sözleşmeler ve Merkeziyetsiz Teknolojiler alanında öğrenip
          üretiyoruz. SAÜ Blockchain ile teknolojinin öncüleri arasına katıl.
        </p>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "64px",
        }}>
          <a
            href="#about"
            id="hero-learn-more"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              borderRadius: "16px",
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              background: "linear-gradient(135deg, #6366f1, #a78bfa)",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 50px rgba(99,102,241,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Bizi Keşfet
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/saublockchain/"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-instagram"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 32px",
              borderRadius: "16px",
              color: "#cbd5e1",
              fontWeight: 600,
              fontSize: "15px",
              background: "rgba(15,23,42,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(16px)",
              textDecoration: "none",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "white";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#cbd5e1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @saublockchain
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          maxWidth: "420px",
          margin: "0 auto",
        }}>
          {[
            { value: "50+", label: "Aktif Üye" },
            { value: "10+", label: "Proje" },
            { value: "3+", label: "Yıllık Deneyim" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(1.5rem, 4vw, 2rem)",
                fontWeight: 900,
                background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>{stat.value}</div>
              <div style={{ fontSize: "11px", color: "#475569", marginTop: "4px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        color: "#475569",
      }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase" }}>Keşfet</span>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #475569, transparent)" }} />
        <div style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#818cf8",
          animation: "bounce 1s infinite",
        }} />
      </div>
    </section>
  );
}
