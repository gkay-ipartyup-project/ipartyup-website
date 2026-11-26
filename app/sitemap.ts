import type { MetadataRoute } from "next"
import { fetchInitialPublishedUpdates } from "@/lib/public-data"
import { SITE_URL } from "@/lib/seo"

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const updates = await fetchInitialPublishedUpdates()
  const latestUpdateIso =
    updates?.[0]?.published_at ?? updates?.[0]?.created_at ?? null
  const latestReleaseDate = latestUpdateIso
    ? new Date(latestUpdateIso)
    : new Date("2026-11-25T00:00:00Z")

  const safeReleaseDate = Number.isNaN(latestReleaseDate.getTime())
    ? new Date("2026-11-25T00:00:00Z")
    : latestReleaseDate

  const staticLastModified = new Date("2026-11-26T00:00:00Z")

  return [
    {
      url: SITE_URL,
      lastModified: safeReleaseDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/download`,
      lastModified: safeReleaseDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/updates`,
      lastModified: safeReleaseDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
