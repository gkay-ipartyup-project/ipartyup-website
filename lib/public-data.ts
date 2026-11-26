import { SUPABASE_PUBLIC_URL } from "./constants"
import type { AppUpdateRow } from "./supabase"

const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9oc2l3cGt5a2tnbWF4c2l2aHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEzMjMyNjEsImV4cCI6MjA4Njg5OTI2MX0.Qpwr6C53oIGjCfqNhBneVQm93kzfB8IQcdnzVA5zD9I"

export interface PlatformDownload {
  version: string
  published_at: string | null
  url: string
  size: number | null
}

export interface LatestDownloads {
  latest_version: string | null
  latest_published_at: string | null
  windows: PlatformDownload | null
  macos: PlatformDownload | null
}

/**
 * Fetches published release notes on the server (ISR 5 min) so crawlers and
 * visitors immediately receive full changelog HTML without a loading spinner.
 */
export async function fetchInitialPublishedUpdates(): Promise<AppUpdateRow[] | null> {
  try {
    const base = SUPABASE_PUBLIC_URL.replace(/\/$/, "")
    const url =
      `${base}/rest/v1/app_updates` +
      `?select=id,version,release_notes,is_mandatory,is_published,published_at,created_at,publish_windows,publish_macos` +
      `&is_published=eq.true` +
      `&order=published_at.desc.nullslast,created_at.desc` +
      `&limit=20`

    const res = await fetch(url, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4500),
    })

    if (!res.ok) return null
    const data = await res.json()
    return Array.isArray(data) ? (data as AppUpdateRow[]) : null
  } catch {
    return null
  }
}

/**
 * Fetches current download metadata on the server (ISR 5 min) so /download
 * renders up-to-date build details in SSR HTML on first paint.
 */
export async function fetchInitialLatestDownloads(): Promise<LatestDownloads | null> {
  try {
    const base = SUPABASE_PUBLIC_URL.replace(/\/$/, "")
    const res = await fetch(`${base}/functions/v1/website-download`, {
      method: "GET",
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(4500),
    })
    if (!res.ok) return null
    const json = (await res.json()) as LatestDownloads
    return {
      latest_version: json.latest_version ?? null,
      latest_published_at: json.latest_published_at ?? null,
      windows: json.windows ?? null,
      macos: json.macos ?? null,
    }
  } catch {
    return null
  }
}
