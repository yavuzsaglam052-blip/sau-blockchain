import { addEvent } from "./actions";
import AdminEventsList from "./AdminEventsList";
import AddEventForm from "./AddEventForm";
import { supabase, Event } from "@/utils/supabase";

export const revalidate = 0; // Her girişte verileri tazele

export default async function AdminDashboard() {
  const { data } = await supabase
    .from("events")
    .select("*")
    .order("event_date", { ascending: false });

  const events: Event[] = data ?? [];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #090e1a, #0f172a)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "60px 24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px",
        }}
        className="admin-layout"
      >
        {/* SOL TARAF - ETKİNLİK EKLEME FORMU */}
        <div
          style={{
            background: "rgba(15,23,42,0.70)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(99,102,241,0.25)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.08)",
            height: "fit-content",
          }}
        >
          <div style={{ marginBottom: "36px", textAlign: "center" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "11px",
                fontWeight: 700,
                color: "#a5b4fc",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                background: "rgba(99,102,241,0.1)",
                border: "1px solid rgba(99,102,241,0.3)",
                marginBottom: "16px",
              }}
            >
              🔐 Admin Paneli
            </div>
            <h1
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                background: "linear-gradient(to right,#60a5fa,#a78bfa,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                margin: 0,
              }}
            >
              Etkinlik Ekle
            </h1>
          </div>

          {/* Yeni React-Image-Crop Form Modülü */}
          <AddEventForm addEventAction={addEvent} />
        </div>

        {/* SAĞ TARAF - MEVCUT ETKİNLİKLER (SİLME) */}
        <div
          style={{
            background: "rgba(15,23,42,0.50)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "24px",
            padding: "40px",
            height: "fit-content",
            maxHeight: "800px",
            overflowY: "auto",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
             <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "#f1f5f9",
                margin: 0,
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              Mevcut Etkinlikler
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "8px" }}>
              Silmek istediğiniz etkinliğin yanındaki butona tıklayın.
            </p>
          </div>
          
          <AdminEventsList events={events} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 800px) {
          .admin-layout { grid-template-columns: 1fr !important; }
        }
        .add-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(99,102,241,0.45) !important;
        }
      `}} />
    </main>
  );
}



