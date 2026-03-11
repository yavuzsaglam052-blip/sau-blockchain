"use server";
import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function addEvent(formData: FormData) {
  const title       = formData.get("title")       as string;
  const event_date  = formData.get("event_date")  as string;
  const type        = formData.get("type")        as string;
  const description = formData.get("description") as string;
  const status      = formData.get("status")      as "upcoming" | "past";
  
  // Resim dosyası işlemleri (Artık Base64 String - Cropped)
  const imageBase64 = formData.get("image_base64") as string | null;
  let finalImageUrl = null;

  if (imageBase64 && imageBase64.length > 50) {
    // 1) Base64 string'i Blob nesnesine dönüştür
    const response = await fetch(imageBase64);
    const blob = await response.blob();
    
    // 2) Rastgele İsim oluştur
    const fileExt = blob.type.split("/")[1] || "jpeg";
    const fileName = `${Math.random().toString(36).substring(7)}.${fileExt}`;

    // 3) Supabase'e Yükle
    const { error: uploadError } = await supabase.storage
      .from("event-images")
      .upload(fileName, blob, {
        contentType: blob.type
      });

    if (uploadError) {
      throw new Error(`Resim yüklenemedi: ${uploadError.message}`);
    }

    // 4) Public URL Al
    const { data: publicUrlData } = supabase.storage
      .from("event-images")
      .getPublicUrl(fileName);

    finalImageUrl = publicUrlData.publicUrl;
  }

  const { error } = await supabase
    .from("events")
    .insert([{ title, event_date, type, description, image_url: finalImageUrl, status }]);

  if (error) throw new Error(error.message);
  revalidatePath("/");            // anasayfayı yenile
  revalidatePath("/admin/dashboard");
}

export async function deleteEvent(id: string) {
  const { error } = await supabase.from("events").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/");
  revalidatePath("/admin/dashboard");
}
