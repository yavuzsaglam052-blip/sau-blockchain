"use server";
import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function addEvent(formData: FormData) {
  const title       = formData.get("title")       as string;
  const event_date  = formData.get("event_date")  as string;
  const type        = formData.get("type")        as string;
  const description = formData.get("description") as string;
  const status      = formData.get("status")      as "upcoming" | "past";
  
  // Resim dosyası işlemleri
  const imageFile = formData.get("image_file") as File | null;
  let finalImageUrl = null;

  if (imageFile && imageFile.size > 0 && imageFile.name !== "undefined") {
    const fileExt = imageFile.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("event-images")
      .upload(filePath, imageFile);

    if (uploadError) {
      throw new Error(`Resim yüklenemedi: ${uploadError.message}`);
    }

    const { data: publicUrlData } = supabase.storage
      .from("event-images")
      .getPublicUrl(filePath);

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
