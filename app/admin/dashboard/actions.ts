"use server";
import { supabase } from "@/utils/supabase";
import { revalidatePath } from "next/cache";

export async function addEvent(formData: FormData) {
  const title       = formData.get("title")       as string;
  const event_date  = formData.get("event_date")  as string;
  const type        = formData.get("type")        as string;
  const description = formData.get("description") as string;
  const image_url   = (formData.get("image_url")  as string) || null;
  const status      = formData.get("status")      as "upcoming" | "past";

  const { error } = await supabase
    .from("events")
    .insert([{ title, event_date, type, description, image_url, status }]);

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
