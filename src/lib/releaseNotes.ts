/**
 * Client for the `website-release-notes` Supabase Edge Function. Returns the
 * published release history in the same `ReleaseNoteSection` shape used by
 * the in-app PostUpdateModal so the web renderer mirrors it exactly.
 */

/**
 * TipTap JSON document shape — produced by the desktop RichNoteEditor.
 * Loosely typed because the full ProseMirror schema is wide; the renderer
 * walks `content` recursively without needing exhaustive typings.
 */
export interface RichDoc {
    type: "doc";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content?: any[];
}

/** Type-guard — distinguishes legacy plain-string items from new rich docs. */
export function isRichDoc(v: unknown): v is RichDoc {
    return !!v && typeof v === "object" && (v as { type?: string }).type === "doc";
}

export interface ReleaseNoteSection {
    /**
     * Legacy plain-string category heading. Still written for backwards
     * compatibility but `category_doc` is preferred when present.
     */
    category: string;
    /** NEW — rich category heading. When present, takes precedence over `category`. */
    category_doc?: RichDoc | null;
    icon: string;
    /**
     * Each item is either a legacy plain-string OR a TipTap JSON doc emitted
     * by the in-app RichNoteEditor. The renderer auto-detects via isRichDoc().
     */
    items: (string | RichDoc)[];
    /** Legacy section-level styling — only applied to plain-string items. */
    fontWeight?: number;
    textAlign?: "left" | "center" | "right";
    fontSize?: "sm" | "md" | "lg";
}

export interface Release {
    version: string;
    published_at: string | null;
    release_notes: ReleaseNoteSection[];
    windows_available: boolean;
    macos_available: boolean;
}

interface ReleasesResponse {
    releases: Release[];
}

export async function getReleaseNotes(signal?: AbortSignal): Promise<Release[]> {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!base) {
        if (process.env.NODE_ENV !== "production") {
            console.warn("[releaseNotes] NEXT_PUBLIC_SUPABASE_URL is not set");
        }
        return [];
    }

    try {
        const res = await fetch(
            `${base.replace(/\/$/, "")}/functions/v1/website-release-notes`,
            {
                method: "GET",
                signal,
                cache: "no-store",
            },
        );
        if (!res.ok) {
            console.warn("[releaseNotes] non-OK response:", res.status);
            return [];
        }
        const json = (await res.json()) as ReleasesResponse;
        return Array.isArray(json.releases) ? json.releases : [];
    } catch (err) {
        if ((err as any)?.name !== "AbortError") {
            console.warn("[releaseNotes] fetch failed:", err);
        }
        return [];
    }
}

/** Format ISO date → "Apr 18, 2026". */
export function formatExactReleaseDate(iso: string | null | undefined): string {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

/** Map section fontSize token → CSS px (matches PostUpdateModal). */
export function sectionFontSizePx(size: ReleaseNoteSection["fontSize"]): string {
    if (size === "lg") return "13px";
    if (size === "sm") return "10px";
    return "11px";
}

/** Minimum version exposed on the public website. Older releases are hidden. */
export const MIN_PUBLIC_VERSION = "0.1.57";

/** Dotted-semver comparison — returns true when a >= b. */
export function versionGte(a: string, b: string): boolean {
    const pa = a.split(".").map((n) => parseInt(n, 10) || 0);
    const pb = b.split(".").map((n) => parseInt(n, 10) || 0);
    const len = Math.max(pa.length, pb.length);
    for (let i = 0; i < len; i++) {
        const na = pa[i] ?? 0;
        const nb = pb[i] ?? 0;
        if (na > nb) return true;
        if (na < nb) return false;
    }
    return true;
}

/** Filter releases down to the ones allowed for public display. */
export function publicReleases(releases: Release[]): Release[] {
    return releases.filter((r) => versionGte(r.version, MIN_PUBLIC_VERSION));
}

/**
 * Map a release-note section category (or similar label) to a Lottie animation
 * path under /animated-icons. Falls back to a chat bubble for custom sections.
 */
export function iconForCategory(category: string): string {
    const c = category.toLowerCase().trim();
    if (c.includes("bug") || c.includes("fix")) return "/animated-icons/bug.json";
    if (c.includes("feature") || c.includes("new")) return "/animated-icons/flash.json";
    if (c.includes("improve") || c.includes("polish") || c.includes("ux") || c.includes("ui"))
        return "/animated-icons/tick-circle.json";
    if (c.includes("perf") || c.includes("speed") || c.includes("fast"))
        return "/animated-icons/flash.json";
    if (c.includes("secur") || c.includes("privacy")) return "/animated-icons/security.json";
    if (c.includes("sync")) return "/animated-icons/sync.json";
    if (c.includes("user") || c.includes("community") || c.includes("social"))
        return "/animated-icons/users.json";
    if (c.includes("platform") || c.includes("global")) return "/animated-icons/globe.json";
    if (c.includes("watch") || c.includes("stream") || c.includes("play"))
        return "/animated-icons/play.json";
    if (c.includes("check") || c.includes("done")) return "/animated-icons/check.json";
    return "/animated-icons/chat.json";
}
