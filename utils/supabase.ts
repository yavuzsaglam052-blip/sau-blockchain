import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ── Tip tanımları ── */
export type EventStatus = "upcoming" | "past";

export interface Event {
  id: string;
  title: string;
  event_date: string;   // "YYYY-MM-DD"
  type: string;         // Workshop, Hackathon, Seminer …
  description: string;
  image_url: string | null;
  status: EventStatus;
  created_at: string;
}
