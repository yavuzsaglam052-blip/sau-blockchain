"use client";

import React, { useState, useRef, FormEvent } from "react";
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

function centerAspectCrop(mediaWidth: number, mediaHeight: number, aspect: number) {
  return centerCrop(
    makeAspectCrop({ unit: "%", width: 90 }, aspect, mediaWidth, mediaHeight),
    mediaWidth,
    mediaHeight
  );
}

export default function AddEventForm({ addEventAction }: { addEventAction: (formData: FormData) => Promise<void> }) {
  const [imgSrc, setImgSrc] = useState("");
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [finalBase64, setFinalBase64] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Reset crop
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgSrc(reader.result?.toString() || "");
        setIsModalOpen(true);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    const { width, height } = e.currentTarget;
    setCrop(centerAspectCrop(width, height, 4 / 3));
  }

  async function generateCroppedImage() {
    if (!completedCrop || !imgRef.current) {
        setIsModalOpen(false); // Just close if there's no crop
        return;
    }

    const canvas = document.createElement("canvas");
    const image = imgRef.current;
    
    // Scale crop coordinates to the actual natural image size
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    
    canvas.width = completedCrop.width * scaleX;
    canvas.height = completedCrop.height * scaleY;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(
      image,
      completedCrop.x * scaleX,
      completedCrop.y * scaleY,
      completedCrop.width * scaleX,
      completedCrop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );

    // Get high quality jpeg base64 string
    const base64Image = canvas.toDataURL("image/jpeg", 0.95);
    setFinalBase64(base64Image);
    setIsModalOpen(false);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    try {
      const formData = new FormData(form);
      await addEventAction(formData);
      form.reset();
      setFinalBase64("");
      setImgSrc("");
      alert("✅ Etkinlik başarıyla eklendi! Resim kırpılıp yüklendi.");
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      if (errorMsg.includes("NEXT_REDIRECT")) {
         // Next.js'in revalidate/redirect işlemleri "Error" olarak fırlatılır. Ancak bu gerçekte sorunsuzdur.
         return; 
      }
      alert("❌ Hata: " + errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <FieldGroup label="Etkinlik Adı" htmlFor="title">
          <input id="title" name="title" type="text" required placeholder="ör. Solidity Workshop #3" style={inputStyle} />
        </FieldGroup>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <FieldGroup label="Tarih" htmlFor="event_date">
            <input id="event_date" name="event_date" type="date" required style={inputStyle} />
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

        <FieldGroup label="Açıklama" htmlFor="description">
          <textarea id="description" name="description" rows={3} required placeholder="Kısa bir açıklama…" style={{ ...inputStyle, resize: "vertical" }} />
        </FieldGroup>

        <FieldGroup label="Fotoğraf Seç & Kırp (Admin Özel - 4:3)" htmlFor="image_file_dummy">
            <input 
                id="image_file_dummy" 
                type="file" 
                accept="image/*" 
                onChange={onSelectFile} 
                style={inputStyle} 
            />
            {/* Hidden input to pass base64 to server action */}
            <input type="hidden" name="image_base64" value={finalBase64} />
            
            {finalBase64 && (
                <div style={{ marginTop: "12px", border: "1px dashed #6366f1", padding: "8px", borderRadius: "12px" }}>
                    <p style={{ fontSize: "12px", color: "#a5b4fc", marginBottom: "8px", fontWeight: 600 }}>✂️ Kırpılmış Önizleme (Bu haliyle yüklenecek):</p>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={finalBase64} alt="Cropped" style={{ width: "100%", borderRadius: "8px", aspectRatio: "4/3", objectFit: "cover" }} />
                    <button 
                        type="button"
                        onClick={() => { setFinalBase64(""); setImgSrc(""); }}
                        style={{ marginTop: "8px", fontSize: "12px", color: "#ef4444", background: "none", border: "none", cursor: "pointer", textDecoration: "underline" }}
                    >Resmi İptal Et</button>
                </div>
            )}
        </FieldGroup>

        <FieldGroup label="Durum" htmlFor="status">
          <select id="status" name="status" required style={inputStyle}>
            <option value="upcoming">🚀 Gelecek Etkinlik</option>
            <option value="past">📚 Geçmiş Etkinlik</option>
          </select>
        </FieldGroup>

        <button
          type="submit"
          className="add-btn"
          disabled={isSubmitting}
          style={{
            marginTop: "8px",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            fontWeight: 700,
            fontSize: "15px",
            color: "white",
            background: isSubmitting ? "gray" : "linear-gradient(135deg,#6366f1,#a78bfa)",
            boxShadow: isSubmitting ? "none" : "0 8px 32px rgba(99,102,241,0.35)",
            transition: "all 0.2s",
            width: "100%",
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting ? "⏳ Ekleniyor..." : "✅ Etkinliği Ekle"}
        </button>
      </form>

      {/* CROP MODAL */}
      {isModalOpen && !!imgSrc && (
        <div style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999999,
            background: "rgba(9, 14, 26, 0.95)", backdropFilter: "blur(12px)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "20px"
        }}>
            <h3 style={{ color: "white", marginBottom: "20px", fontSize: "1.5rem", fontWeight: 700 }}>Resmi Kırp (4:3)</h3>
            
            <div style={{ maxWidth: "90vw", maxHeight: "70vh", overflow: "auto", border: "2px solid rgba(99,102,241,0.5)", borderRadius: "12px", background: "#000" }}>
                <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={4 / 3}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        ref={imgRef}
                        alt="Crop me"
                        src={imgSrc}
                        onLoad={onImageLoad}
                        style={{ maxHeight: "65vh" }}
                    />
                </ReactCrop>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "24px" }}>
                <button 
                    onClick={() => { setIsModalOpen(false); setImgSrc(""); setFinalBase64(""); }}
                    style={{ padding: "12px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "white", cursor: "pointer", fontWeight: 600 }}
                >
                    İptal
                </button>
                <button 
                    onClick={generateCroppedImage}
                    style={{ padding: "12px 32px", borderRadius: "12px", border: "none", background: "#6366f1", color: "white", cursor: "pointer", fontWeight: 700, boxShadow: "0 8px 32px rgba(99,102,241,0.4)" }}
                >
                    ✂️ Kes ve Onayla
                </button>
            </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .add-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 16px 48px rgba(99,102,241,0.45) !important;
        }
      `}} />
    </>
  );
}

function FieldGroup({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor={htmlFor} style={{ fontSize: "13px", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.04em" }}>
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
