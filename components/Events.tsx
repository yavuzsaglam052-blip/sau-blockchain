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
    <section id="events" className="events-section">
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
      <style dangerouslySetInnerHTML={{__html: `
        .events-section { padding: 80px 24px; max-width: 1100px; margin: 0 auto; }
        .events-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 24px;
          gap: 24px;
        }
        .events-carousel::-webkit-scrollbar { height: 8px; }
        .events-carousel::-webkit-scrollbar-track { background: rgba(15,23,42,0.5); border-radius: 999px; }
        .events-carousel::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.5); border-radius: 999px; }
        .events-carousel::-webkit-scrollbar-thumb:hover { background: rgba(99,102,241,0.8); }
        .event-slide {
          min-width: 320px;
          flex-shrink: 0;
          scroll-snap-align: start;
        }
        @media (max-width: 800px) {
          .events-section { padding: 40px 16px; }
          .event-slide { min-width: 85vw; }
        }
      `}} />
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
        <div className="events-carousel">
          {events.map((ev) => (
            <div key={ev.id} className="event-slide">
              <EventCard event={ev} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
