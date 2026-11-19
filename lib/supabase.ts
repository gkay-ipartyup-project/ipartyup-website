import { createClient } from "@supabase/supabase-js"
import { SUPABASE_PUBLIC_URL } from "./constants"

/**
 * Public Supabase client for the landing page.
 * Only uses the public anon key — reads publicly-readable tables like
 * `footer_socials`, `site_settings`, and published `app_updates`.
 * Writes are locked down via RLS and happen exclusively from the admin app.
 */
const supabaseUrl = SUPABASE_PUBLIC_URL

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oc2l3cGt5a2tnbWF4c2l2aHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjMyNjEsImV4cCI6MjA4Njg5OTI2MX0.Qpwr6C53oIGjCfqNhBneVQm93kzfB8IQcdnzVA5zD9I"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
})

export type FooterSocial = {
  id: string
  platform:
    | "twitter"
    | "instagram"
    | "youtube"
    | "github"
    | "tiktok"
    | "discord"
    | "telegram"
    | "facebook"
    | "linkedin"
    | "threads"
    | "twitch"
  url: string
  icon_size: number
  visible: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface RichDocMark {
  type: string
  attrs?: Record<string, unknown>
}

export interface RichDocNode {
  type: string
  text?: string
  attrs?: Record<string, unknown>
  marks?: RichDocMark[]
  content?: RichDocNode[]
}

export interface RichDoc {
  type: "doc"
  content?: RichDocNode[]
}

export function isRichDoc(v: unknown): v is RichDoc {
  return !!v && typeof v === "object" && (v as { type?: unknown }).type === "doc"
}

export interface ReleaseNoteSection {
  category: string
  category_doc?: RichDoc | null
  icon?: string
  items: (string | RichDoc)[]
  fontWeight?: number
  textAlign?: "left" | "center" | "right"
  fontSize?: "sm" | "md" | "lg"
}

export interface AppUpdateRow {
  id: string
  version: string
  release_notes: ReleaseNoteSection[] | null
  release_notes_ar?: ReleaseNoteSection[] | null
  is_mandatory: boolean
  is_published: boolean
  published_at: string | null
  created_at: string
  publish_windows: boolean
  publish_macos: boolean
  publish_android?: boolean | null
}
