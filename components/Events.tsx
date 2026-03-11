import { supabase, Event } from "@/utils/supabase";
import EventCard from "./EventCard";

export const revalidate = 0; // Next.js önbelleğini devre dışı bırak, her istekte canlı veriyi getir

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
    <section id="events" className="py-16 md:py-24 px-6 max-w-[1100px] mx-auto">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((ev) => <EventCard key={ev.id} event={ev} />)}
        </div>
      )}
    </div>
  );
}
