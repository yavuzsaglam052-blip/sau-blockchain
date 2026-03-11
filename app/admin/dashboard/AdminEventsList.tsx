"use client";

import { useTransition } from "react";
import { deleteEvent } from "./actions";
import { Event } from "@/utils/supabase";

export default function AdminEventsList({ events }: { events: Event[] }) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    if (confirm("Bu etkinliği silmek istediğine emin misin?")) {
      startTransition(() => {
        deleteEvent(id);
      });
    }
  };

  if (events.length === 0) {
    return <p style={{ color: "#94a3b8", textAlign: "center" }}>Kayıtlı etkinlik yok.</p>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "16px" }}>
      {events.map((ev) => (
        <div
          key={ev.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(15,23,42,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "16px",
            borderRadius: "12px"
          }}
        >
          <div>
            <h4 style={{ margin: 0, color: "#f1f5f9", fontSize: "14px", fontWeight: 600 }}>{ev.title}</h4>
            <div style={{ fontSize: "12px", color: "#64748b", marginTop: "4px" }}>
              {ev.type} • {ev.status === "upcoming" ? "Gelecek" : "Geçmiş"}
            </div>
          </div>
          <button
            onClick={() => handleDelete(ev.id)}
            disabled={isPending}
            style={{
              background: "rgba(239, 68, 68, 0.15)",
              color: "#ef4444",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: isPending ? "wait" : "pointer",
              fontSize: "12px",
              fontWeight: 600,
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => {
              if (!isPending) e.currentTarget.style.background = "rgba(239, 68, 68, 0.25)";
            }}
            onMouseLeave={(e) => {
              if (!isPending) e.currentTarget.style.background = "rgba(239, 68, 68, 0.15)";
            }}
          >
            {isPending ? "Siliniyor..." : "🗑 Sil"}
          </button>
        </div>
      ))}
    </div>
  );
}
