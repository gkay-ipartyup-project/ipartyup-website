import type { Metadata } from "next"

export const SITE_URL = "https://ipartyup.party"

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "iPartyUp - Watch Movies, Series & Anime Together in Perfect Sync",
} as const

export const NOINDEX_ROBOTS: Metadata["robots"] = {
  index: false,
  follow: false,
  nocache: true,
  googleBot: {
    index: false,
    follow: false,
  },
}

interface PageMetadataOptions {
  title: string
  description: string
  path: string
}

/**
 * Generates consistent page-level SEO metadata with an explicit self-referencing
 * canonical URL plus Open Graph and Twitter large-image preview tags.
 */
export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const normalizedPath = path === "/" ? "/" : path.replace(/\/+$/, "")
  const canonicalUrl =
    normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`

  return {
    title,
    description,
    alternates: {
      canonical: normalizedPath,
    },
    openGraph: {
      type: "website",
      siteName: "iPartyUp",
      locale: "en_US",
      url: canonicalUrl,
      title,
      description,
      images: [{ ...DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  }
}
