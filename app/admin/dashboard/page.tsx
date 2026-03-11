"use client";
import { addEvent } from "./actions";

export default function AdminDashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #090e1a, #0f172a)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "620px",
          background: "rgba(15,23,42,0.70)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(99,102,241,0.25)",
          borderRadius: "24px",
          padding: "40px 40px 48px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 60px rgba(99,102,241,0.08)",
        }}
      >
        {/* Başlık */}
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

        {/* Form */}
        <form action={addEvent} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Etkinlik Adı */}
          <FieldGroup label="Etkinlik Adı" htmlFor="title">
            <input
              id="title"
              name="title"
              type="text"
              required
              placeholder="ör. Solidity Workshop #3"
              style={inputStyle}
            />
          </FieldGroup>

          {/* Tarih + Tip */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <FieldGroup label="Tarih" htmlFor="event_date">
              <input
                id="event_date"
                name="event_date"
                type="date"
                required
                style={inputStyle}
              />
            </FieldGroup>

            <FieldGroup label="Tip" htmlFor="type">
              <select id="type" name="type" required style={inputStyle}>
                <option value="">Seç…</option>
                <option value="Workshop">Workshop</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Seminer">Seminer</option>
                <option value="Panel">Panel</option>
              </select>
            </FieldGroup>
          </div>

          {/* Açıklama */}
          <FieldGroup label="Açıklama" htmlFor="description">
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              placeholder="Etkinlik hakkında kısa bir açıklama…"
              style={{ ...inputStyle, resize: "vertical" }}
            />
          </FieldGroup>

          {/* Fotoğraf URL */}
          <FieldGroup label="Fotoğraf URL'si (isteğe bağlı)" htmlFor="image_url">
            <input
              id="image_url"
              name="image_url"
              type="url"
              placeholder="https://…"
              style={inputStyle}
            />
          </FieldGroup>

          {/* Durum */}
          <FieldGroup label="Durum" htmlFor="status">
            <select id="status" name="status" required style={inputStyle}>
              <option value="upcoming">🚀 Gelecek Etkinlik</option>
              <option value="past">📚 Geçmiş Etkinlik</option>
            </select>
          </FieldGroup>

          {/* Submit */}
          <button
            type="submit"
            style={{
              marginTop: "8px",
              padding: "14px",
              borderRadius: "14px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "15px",
              color: "white",
              background: "linear-gradient(135deg,#6366f1,#a78bfa)",
              boxShadow: "0 8px 32px rgba(99,102,241,0.35)",
              transition: "all 0.2s",
              width: "100%",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 16px 48px rgba(99,102,241,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(99,102,241,0.35)";
            }}
          >
            ✅ Etkinliği Ekle
          </button>
        </form>
      </div>
    </main>
  );
}

/* ── Yardımcılar ── */
function FieldGroup({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label
        htmlFor={htmlFor}
        style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(99,102,241,0.25)",
  background: "rgba(15,23,42,0.8)",
  color: "#e2e8f0",
  fontSize: "14px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};
