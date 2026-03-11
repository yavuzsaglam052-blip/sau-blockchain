import { supabase, Event } from "@/utils/supabase";

export const revalidate = 0; // Next.js önbelleğini devre dışı bırak, her istekte canlı veriyi getir

/* ─── küçük yardımcılar ─── */
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const TYPE_COLORS: Record<string, string> = {
  Workshop:   "rgba(99,102,241,0.25)",
  Hackathon:  "rgba(244,114,182,0.25)",
  Seminer:    "rgba(96,165,250,0.25)",
  Panel:      "rgba(52,211,153,0.25)",
};

/* ─── Server Component — veri Supabase'den gelir ─── */
export default async function Events() {
  /* Tüm etkinlikleri getir */
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: false });

  if (error) {
    console.error("Supabase events error:", error.message);
  }

  const events: Event[] = data ?? [];
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past     = events.filter((e) => e.status === "past");

  return (
    <section id="events" style={{ padding: "80px 24px", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Başlık */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "6px 16px", borderRadius: "999px", fontSize: "12px",
          fontWeight: 600, color: "#a5b4fc", letterSpacing: "0.1em",
          textTransform: "uppercase",
          background: "rgba(99,102,241,0.08)",
          border: "1px solid rgba(99,102,241,0.25)",
          marginBottom: "20px",
        }}>
          📅 Etkinlikler
        </div>
        <h2 style={{
          fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 900,
          background: "linear-gradient(to right,#60a5fa,#a78bfa,#f472b6)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          backgroundClip: "text", marginBottom: "16px",
        }}>
          Topluluk Etkinlikleri
        </h2>
        <p style={{ color: "#64748b", maxWidth: "520px", margin: "0 auto", lineHeight: 1.75 }}>
          Workshop&apos;lardan hackathon&apos;lara, blockchain dünyasını birlikte deneyimliyoruz.
        </p>
      </div>

      {/* Gelecek Etkinlikler */}
      <EventGroup title="🚀 Gelecek Etkinlikler" events={upcoming} empty="Yakında etkinlik duyurulacak." />

      {/* Geçmiş Etkinlikler */}
      <EventGroup title="📚 Geçmiş Etkinlikler" events={past} empty="Henüz geçmiş etkinlik yok." />
    </section>
  );
}

/* ─── Grup bileşeni ─── */
function EventGroup({ title, events, empty }: { title: string; events: Event[]; empty: string }) {
  return (
    <div style={{ marginBottom: "56px" }}>
      <h3 style={{
        fontSize: "1.25rem", fontWeight: 700, color: "#e2e8f0",
        marginBottom: "28px", paddingBottom: "12px",
        borderBottom: "1px solid rgba(99,102,241,0.2)",
      }}>
        {title}
      </h3>

      {events.length === 0 ? (
        <p style={{ color: "#475569", textAlign: "center", padding: "32px 0" }}>{empty}</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "24px",
        }}>
          {events.map((ev) => <EventCard key={ev.id} event={ev} />)}
        </div>
      )}
    </div>
  );
}

/* ─── Kart bileşeni (glassmorphism korundu) ─── */
function EventCard({ event }: { event: Event }) {
  const tagBg = TYPE_COLORS[event.type] ?? "rgba(99,102,241,0.2)";

  return (
    <div
      style={{
        background: "rgba(15,23,42,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        overflow: "hidden",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-6px)";
        el.style.border = "1px solid rgba(167,139,250,0.4)";
        el.style.boxShadow = "0 20px 60px rgba(99,102,241,0.2)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.border = "1px solid rgba(255,255,255,0.08)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Fotoğraf alanı */}
      {event.image_url && (
        <div style={{ height: "180px", overflow: "hidden", background: "#0f172a" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.image_url}
            alt={event.title}
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
          />
        </div>
      )}
      {!event.image_url && (
        <div style={{
          height: "120px", display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg,rgba(99,102,241,0.08),rgba(167,139,250,0.05))",
          fontSize: "2.5rem",
        }}>
          {event.type === "Workshop" ? "🔧" : event.type === "Hackathon" ? "⚡" : "📖"}
        </div>
      )}

      {/* İçerik */}
      <div style={{ padding: "20px 22px 24px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
        {/* Tip etiketi + tarih */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <span style={{
            padding: "4px 12px", borderRadius: "999px", fontSize: "11px",
            fontWeight: 700, color: "#c4b5fd", background: tagBg,
            textTransform: "uppercase", letterSpacing: "0.08em",
          }}>
            {event.type}
          </span>
          <span style={{ fontSize: "12px", color: "#64748b" }}>
            🗓 {formatDate(event.event_date)}
          </span>
        </div>

        {/* Başlık */}
        <h4 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#f1f5f9", lineHeight: 1.4, margin: 0 }}>
          {event.title}
        </h4>

        {/* Açıklama */}
        <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.7, margin: 0, flex: 1 }}>
          {event.description}
        </p>
      </div>
    </div>
  );
}
