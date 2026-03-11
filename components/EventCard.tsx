"use client";
import { useState } from "react";
import { Event } from "@/utils/supabase";

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

export default function EventCard({ event }: { event: Event }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tagBg = TYPE_COLORS[event.type] ?? "rgba(99,102,241,0.2)";

  return (
    <>
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
        <div 
          className="group cursor-pointer event-img-container" 
          onClick={() => setIsModalOpen(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={event.image_url}
            alt={event.title}
            className="transition-transform duration-500 group-hover:scale-105 group-active:scale-105"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", backgroundColor: "rgba(15,23,42,0.9)", opacity: 0.95 }}
          />

          {/* İTÜ Tarzı Hover İç Border Efekti */}
          <div className="hidden md:block absolute inset-0 border-2 border-transparent group-hover:border-[#6366f1]/50 transition-colors duration-300 pointer-events-none z-10"></div>
          
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(15,23,42,0.4)", opacity: 0, transition: "opacity 0.3s", zIndex: 20
          }} className="group-hover:opacity-100">
             <span style={{
               background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
               padding: "8px 16px", borderRadius: "999px", color: "white", fontSize: "13px", fontWeight: 600,
             }}>Büyüt 🔍</span>
          </div>
        </div>
      )}
      {!event.image_url && (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg,rgba(99,102,241,0.08),rgba(167,139,250,0.05))",
          fontSize: "2.5rem", aspectRatio: "16 / 9"
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

      {/* Lightbox / Modal */}
      {isModalOpen && event.image_url && (
        <div 
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 99999,
            background: "rgba(9, 14, 26, 0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            animation: "fadeIn 0.2s ease-out forwards",
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()} // İçine tıklayınca kapanmasın
          >
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img
                src={event.image_url}
                alt={event.title}
                style={{
                  maxWidth: "100%", maxHeight: "90vh", objectFit: "contain", borderRadius: "12px",
                  boxShadow: "0 24px 80px rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.1)",
                }}
             />
             <button
               onClick={() => setIsModalOpen(false)}
               style={{
                 position: "absolute", top: "-16px", right: "-16px", width: "40px", height: "40px", borderRadius: "50%",
                 background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.2)", color: "white",
                 display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "20px",
                 boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
               }}
             >
               ✕
             </button>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            .event-img-container {
              position: relative;
              overflow: hidden;
              background: #0f172a;
              width: 100%;
              padding-top: 56.25%; /* 16:9 Aspect Ratio */
            }
          `}} />
        </div>
      )}
    </>
  );
}
