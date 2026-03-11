"use client";

function LinkedInIcon() {
  return (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function Avatar({ name, size = "md" }: { name: string; size?: "sm" | "md" | "lg" }) {
  const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
  const dims = { sm: 44, md: 56, lg: 80 };
  const fonts = { sm: 14, md: 16, lg: 24 };
  const dim = dims[size];
  const font = fonts[size];
  return (
    <div style={{
      width: dim, height: dim, borderRadius: "50%",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: font, color: "white", flexShrink: 0,
      background: "linear-gradient(135deg, #6366f1, #a78bfa, #f472b6)",
    }}>
      {initials}
    </div>
  );
}

function MemberCard({
  name, role, sub, isLead = false, size = "md", avatarUrl, linkedinUrl
}: {
  name: string; role: string; sub?: string; isLead?: boolean; size?: "sm" | "md" | "lg";
  avatarUrl?: string; linkedinUrl?: string;
}) {
  return (
    <div
      style={{
        position: "relative", padding: size === "lg" ? "24px 28px" : size === "sm" ? "14px 16px" : "18px 20px",
        borderRadius: "18px", background: "rgba(15,23,42,0.65)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        border: isLead ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: isLead ? "0 0 40px rgba(99,102,241,0.15)" : "none",
        transition: "all 0.3s", cursor: "default",
        display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
        gap: size === "lg" ? "14px" : "8px", width: "100%",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.boxShadow = "0 16px 50px rgba(99,102,241,0.3)";
        el.style.borderColor = "rgba(99,102,241,0.5)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = isLead ? "0 0 40px rgba(99,102,241,0.15)" : "none";
        el.style.borderColor = isLead ? "rgba(99,102,241,0.4)" : "rgba(255,255,255,0.08)";
      }}
    >
      {isLead && (
        <div style={{
          position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)",
          padding: "4px 12px", borderRadius: "999px", fontSize: "9px", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase", color: "white", whiteSpace: "nowrap",
          background: "linear-gradient(135deg, #6366f1, #a78bfa)",
        }}>Başkan</div>
      )}
      
      {/* ── Avatar veya Resim ── */}
      {avatarUrl ? (
        <div style={{
          width: size === "lg" ? 80 : size === "sm" ? 44 : 56,
          height: size === "lg" ? 80 : size === "sm" ? 44 : 56,
          borderRadius: "50%", overflow: "hidden", flexShrink: 0,
          border: "2px solid rgba(255,255,255,0.1)",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatarUrl} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      ) : (
        <Avatar name={name} size={size} />
      )}
      {/* ── İsim ve Rol ── */}
      <div>
        <div style={{ fontWeight: 700, color: "white", fontSize: size === "lg" ? "17px" : size === "sm" ? "12px" : "13px", marginBottom: "3px" }}>{name}</div>
        <div style={{
          fontWeight: 500, fontSize: size === "lg" ? "12px" : "10px",
          background: "linear-gradient(to right, #60a5fa, #a78bfa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
        }}>{role}</div>
        {sub && <div style={{ color: "#475569", fontSize: "9px", marginTop: "2px" }}>{sub}</div>}
      </div>

      {/* ── LinkedIn Linki ── */}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`}
          style={{
            display: "inline-flex", alignItems: "center", gap: "5px", padding: "4px 10px",
            borderRadius: "7px", fontSize: "10px", fontWeight: 500, color: "#64748b",
            textDecoration: "none", transition: "all 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0A66C2"; (e.currentTarget as HTMLAnchorElement).style.background = "rgba(10,102,194,0.1)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748b"; (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
        ><LinkedInIcon />LinkedIn</a>
      )}
    </div>
  );
}

function DeptLabel({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to right, transparent, ${color})` }} />
      <div style={{
        padding: "6px 16px", borderRadius: "999px", fontSize: "10px", fontWeight: 600,
        letterSpacing: "0.12em", textTransform: "uppercase", whiteSpace: "nowrap",
        color: color, background: `${color}18`, border: `1px solid ${color}40`,
      }}>{label}</div>
      <div style={{ flex: 1, height: "1px", background: `linear-gradient(to left, transparent, ${color})` }} />
    </div>
  );
}

const connV = (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.15))" }} />
  </div>
);

export default function Team() {
  return (
    <section id="team" className="py-16 md:py-24 px-6 overflow-hidden">
      <div style={{ maxWidth: "980px", margin: "0 auto", width: "100%" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, transparent, rgba(99,102,241,0.5))" }} />
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#818cf8" }}>Ekibimiz</span>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to left, transparent, rgba(99,102,241,0.5))" }} />
          </div>
          <h2 style={{ fontWeight: 900, color: "white", marginBottom: "12px", lineHeight: 1.2, fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Organizasyon{" "}
            <span style={{ background: "linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Yapısı</span>
          </h2>
          <p style={{ color: "#64748b", maxWidth: "460px", margin: "0 auto", fontSize: "14px", lineHeight: 1.7 }}>
            SAÜ Blockchain&apos;i yöneten lider kadromuz — her biri kendi alanında uzmanlaşmış, tutkulu bireyler.
          </p>
        </div>

        {/* ─── LEVEL 1: Başkan ─── */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "260px" }}>
            <MemberCard 
              name="Agah" 
              role="Yönetim Kurulu Başkanı" 
              isLead 
              size="lg" 
              // linkedinUrl="https://linkedin.com/in/agah..." 
              // avatarUrl="/images/agah.jpg" 
            />
          </div>
        </div>

        {connV}

        {/* Horizontal branch from L1 to two VPs — hide on mobile */}
        <div className="hidden md:block relative max-w-[600px] mx-auto">
          <div style={{ height: "1px", background: "rgba(99,102,241,0.3)" }} />
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "8px", height: "8px", borderRadius: "50%", background: "#6366f1" }} />
        </div>

        {/* ─── LEVEL 2: İki VP ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-[600px] mx-auto mt-6 md:mt-0">
          {/* Sol: Kurumsal İlişkiler VP */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {connV}
            <MemberCard 
              name="Arkın" 
              role="Başkan Yardımcısı" 
              sub="Kurumsal İlişkilerden Sorumlu" 
              // linkedinUrl="https://linkedin.com/..." 
              // avatarUrl="/images/arkin.jpg"
            />
          </div>
          {/* Sağ: Sosyal Medya VP */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {connV}
            <MemberCard 
              name="Özgür" 
              role="Başkan Yardımcısı" 
              sub="Sosyal Medyadan Sorumlu" 
              // linkedinUrl="https://linkedin.com/..."
              // avatarUrl="/images/ozgur.jpg"
            />
          </div>
        </div>

        {/* ─── LEVEL 3: İki departman yan yana ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[600px] mx-auto mt-12 md:mt-8">

          {/* SOL: Kurumsal İlişkiler Departmanı (4 üye) */}
          <div>
            {/* Connector + branch */}
            {connV}
            <div style={{ height: "1px", background: "rgba(99,102,241,0.2)", marginBottom: "0" }} />
            <div style={{ marginTop: "8px" }}>
              <DeptLabel label="Kurumsal İlişkiler" color="#6366f1" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {[
                  { name: "Meriç", sub: "Kurumsal İlişkiler", linkedinUrl: undefined, avatarUrl: undefined },
                  { name: "Yavuz Sağlam", sub: "Kurumsal İlişkiler", linkedinUrl: undefined, avatarUrl: undefined },
                  { name: "Abdurrahman", sub: "Kurumsal İlişkiler", linkedinUrl: undefined, avatarUrl: undefined },
                  { name: "Elif", sub: "Kurumsal İlişkiler", linkedinUrl: undefined, avatarUrl: undefined }
                ].map((person) => (
                  <MemberCard 
                    key={person.name} 
                    name={person.name} 
                    role="Üye" 
                    sub={person.sub} 
                    size="sm" 
                    linkedinUrl={person.linkedinUrl}
                    avatarUrl={person.avatarUrl}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* SAĞ: Sosyal Medya Departmanı (2 üye) */}
          <div>
            {connV}
            <div style={{ height: "1px", background: "rgba(244,114,182,0.2)", marginBottom: "0" }} />
            <div style={{ marginTop: "8px" }}>
              <DeptLabel label="Sosyal Medya" color="#f472b6" />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  { name: "Evra", sub: "Sosyal Medya", linkedinUrl: undefined, avatarUrl: undefined },
                  { name: "Ahmet", sub: "Sosyal Medya", linkedinUrl: undefined, avatarUrl: undefined }
                ].map((person) => (
                  <MemberCard 
                    key={person.name} 
                    name={person.name} 
                    role="Üye" 
                    sub={person.sub} 
                    size="sm" 
                    linkedinUrl={person.linkedinUrl}
                    avatarUrl={person.avatarUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
