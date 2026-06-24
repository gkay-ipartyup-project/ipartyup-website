import { createClient } from "@supabase/supabase-js";

/**
 * Public Supabase client for the landing page.
 * Only uses the anon key — reads publicly-readable tables like `footer_socials`.
 * Writes are locked down via RLS and happen exclusively from the iPartyUp desktop app admin.
 */
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://ohsiwpkykkgmaxsivhzp.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oc2l3cGt5a2tnbWF4c2l2aHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjMyNjEsImV4cCI6MjA4Njg5OTI2MX0.Qpwr6C53oIGjCfqNhBneVQm93kzfB8IQcdnzVA5zD9I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

export type FooterSocial = {
  id: string;
  platform:
    | "twitter"
    | "instagram"
    | "youtube"
    | "github"
    | "tiktok"
    | "discord"
    | "facebook"
    | "linkedin"
    | "threads"
    | "twitch";
  url: string;
  icon_size: number;
  visible: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};
