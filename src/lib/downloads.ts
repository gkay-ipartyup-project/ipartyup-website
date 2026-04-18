/**
 * Client for the `website-download` Supabase Edge Function.
 * Returns the latest available `.exe` / `.dmg` fresh-install URLs that are
 * uploaded via the Tauri admin panel into R2.
 */

export interface PlatformDownload {
    version: string;
    published_at: string | null;
    url: string;
    size: number | null;
}

export interface LatestDownloads {
    latest_version: string | null;
    latest_published_at: string | null;
    windows: PlatformDownload | null;
    macos: PlatformDownload | null;
}

const EMPTY: LatestDownloads = {
    latest_version: null,
    latest_published_at: null,
    windows: null,
    macos: null,
};

export async function getLatestDownloads(signal?: AbortSignal): Promise<LatestDownloads> {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!base) {
        if (process.env.NODE_ENV !== "production") {
            console.warn("[downloads] NEXT_PUBLIC_SUPABASE_URL is not set");
        }
        return EMPTY;
    }

    try {
        const res = await fetch(`${base.replace(/\/$/, "")}/functions/v1/website-download`, {
            method: "GET",
            signal,
            // Let the CDN cache help; function sets its own Cache-Control too.
            cache: "no-store",
        });
        if (!res.ok) {
            console.warn("[downloads] non-OK response:", res.status);
            return EMPTY;
        }
        const json = (await res.json()) as LatestDownloads;
        return {
            latest_version: json.latest_version ?? null,
            latest_published_at: json.latest_published_at ?? null,
            windows: json.windows ?? null,
            macos: json.macos ?? null,
        };
    } catch (err) {
        if ((err as any)?.name !== "AbortError") {
            console.warn("[downloads] fetch failed:", err);
        }
        return EMPTY;
    }
}

/** Format an ISO date into "Apr 2026" style label. */
export function formatReleaseDate(iso: string | null | undefined): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

/** Prefix a version string with "v" if it doesn't already start with one. */
export function formatVersion(v: string | null | undefined): string {
    if (!v) return "";
    return v.startsWith("v") ? v : `v${v}`;
}
