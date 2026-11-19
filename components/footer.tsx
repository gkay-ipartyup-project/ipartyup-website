"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/lib/language-context"
import { supabase, type FooterSocial } from "@/lib/supabase"
import {
  GOOGLE_PLAY_URL,
  TELEGRAM_COMMUNITY_URL,
  TELEGRAM_LIBRARY_URL,
} from "@/lib/constants"

function SocialIcon({
  platform,
  className = "h-5 w-5",
}: {
  platform: FooterSocial["platform"]
  className?: string
}) {
  switch (platform) {
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M21.9 4.2a1.3 1.3 0 0 0-1.35-.2L2.8 10.95a1.25 1.25 0 0 0 .06 2.35l4.4 1.45 1.67 5.2a1 1 0 0 0 1.64.42l2.45-2.28 4.46 3.26a1.3 1.3 0 0 0 2.04-.78L22.3 5.5a1.3 1.3 0 0 0-.4-1.3Zm-3.6 3.5-8.2 7.36-.34 2.82-1.15-3.6 9.69-6.58Z" />
        </svg>
      )
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.6l8-9.2L.9 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.5l11 16Z" />
        </svg>
      )
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23 7.5a3 3 0 0 0-2.1-2.1C19 5 12 5 12 5s-7 0-8.9.4A3 3 0 0 0 1 7.5 31 31 0 0 0 .6 12c0 1.5.1 3 .4 4.5a3 3 0 0 0 2.1 2.1C5 19 12 19 12 19s7 0 8.9-.4a3 3 0 0 0 2.1-2.1c.3-1.5.4-3 .4-4.5s-.1-3-.4-4.5ZM9.8 15V9l5.6 3-5.6 3Z" />
        </svg>
      )
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M16.6 5.8A4.8 4.8 0 0 1 15.4 2h-3.1v13.1a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.4a5.7 5.7 0 1 0 4.9 5.7V8.4a7.9 7.9 0 0 0 4.6 1.5V6.8a4.8 4.8 0 0 1-3.4-1Z" />
        </svg>
      )
    case "discord":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.2a18.3 18.3 0 0 0-5.6 0L8.6 3a19.8 19.8 0 0 0-4.9 1.4C.6 9 .1 13.5.4 17.9a20 20 0 0 0 6 3l1.3-2.1a13 13 0 0 1-2-.9l.5-.4a14 14 0 0 0 11.6 0l.5.4a13 13 0 0 1-2 .9l1.3 2.1a20 20 0 0 0 6-3c.4-5.1-.7-9.6-3.3-13.5ZM8.5 15.2c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm7 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" />
        </svg>
      )
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.45 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
        </svg>
      )
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.5 9.5 0 0 1 5 0c2-1.3 2.8-1 2.8-1a3.6 3.6 0 0 1 .1 2.7 3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />
        </svg>
      )
    case "twitch":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M4.3 2 2 5.4V19h4.6v3l3-3h3.8L22 11.4V2H4.3Zm15.4 8.4-3.4 3.4h-4.6l-2.6 2.6v-2.6H5.4V4.3h14.3v6.1ZM15.7 7v4.3h-1.8V7h1.8Zm-4.3 0v4.3H9.6V7h1.8Z" />
        </svg>
      )
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 17.5V10H5.8v7.5h2.5ZM7 8.9a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Zm11.2 8.6v-4.2c0-2.2-1.2-3.3-2.8-3.3-1.3 0-1.9.7-2.2 1.2V10h-2.5v7.5h2.5v-4c0-1 .2-2 1.5-2s1.3 1.2 1.3 2.1v3.9h2.2Z" />
        </svg>
      )
    case "threads":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
          <circle cx="12" cy="12" r="9" />
          <path d="M15.5 11.5c0 2.5-1.5 4-3.8 4-2 0-3.2-1.2-3.2-2.7 0-1.7 1.3-2.7 3.4-2.7 1.4 0 2.5.4 3.6 1.2 0-2.1-1.2-3.3-3.2-3.3-1.5 0-2.6.6-3.1 1.6" />
        </svg>
      )
    default:
      return null
  }
}

function isSafeHttpUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "https:" || parsed.protocol === "http:"
  } catch {
    return false
  }
}

export function Footer() {
  const { t, isArabic } = useLanguage()
  const [socials, setSocials] = useState<FooterSocial[]>([])

  useEffect(() => {
    let cancelled = false
    const loadSocials = async () => {
      const { data, error } = await supabase
        .from("footer_socials")
        .select("*")
        .eq("visible", true)
        .order("order_index", { ascending: true })

      if (cancelled || error || !data) return
      const valid = (data as FooterSocial[]).filter(
        (s) => s.visible && typeof s.url === "string" && isSafeHttpUrl(s.url.trim())
      )
      setSocials(valid)
    }

    loadSocials()
    return () => {
      cancelled = true
    }
  }, [])

  const columns: {
    title: string
    links: { label: string; href: string; external?: boolean }[]
  }[] = [
    {
      title: t.footer.product,
      links: [
        { label: t.footer.home, href: "/" },
        { label: t.footer.pricing, href: "/pricing" },
        { label: t.footer.downloads, href: "/download" },
        { label: t.footer.updates, href: "/updates" },
      ],
    },
    {
      title: t.footer.community,
      links: [
        { label: t.footer.telegramCommunity, href: TELEGRAM_COMMUNITY_URL, external: true },
        { label: t.footer.hdLibrary, href: TELEGRAM_LIBRARY_URL, external: true },
        { label: t.footer.googlePlay, href: GOOGLE_PLAY_URL, external: true },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: t.footer.about, href: "/about" },
        { label: t.footer.faq, href: "/#faq" },
        { label: t.footer.termsConditions, href: "/terms" },
        { label: t.footer.privacyPolicy, href: "/privacy" },
      ],
    },
  ]

  const hasCustomTelegram = socials.some((s) => s.platform === "telegram")

  return (
    <footer
      dir={isArabic ? "rtl" : "ltr"}
      className="relative bg-[linear-gradient(164deg,#031a0a_0%,#0a3d1a_100%)] pt-16 pb-12 z-0"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-3 lg:grid-cols-4">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h5 className="text-xs sm:text-sm font-semibold tracking-wider text-white/50">
                {col.title}
              </h5>
              <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] sm:text-[15px] text-white/90 transition-colors hover:text-[#1ed765]"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] sm:text-[15px] text-white/90 transition-colors hover:text-[#1ed765]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 flex flex-col items-start gap-7 md:col-span-3 lg:col-span-1 lg:items-end">
            <div className="flex flex-wrap items-center gap-3 text-white/80">
              {!hasCustomTelegram && (
                <>
                  <a
                    href={TELEGRAM_COMMUNITY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.telegramCommunity}
                    title={t.footer.telegramCommunity}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/85 transition-colors hover:border-[#1ed765] hover:bg-[#1ed765] hover:text-black"
                  >
                    <SocialIcon platform="telegram" className="h-5 w-5" />
                  </a>
                  <a
                    href={TELEGRAM_LIBRARY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.hdLibrary}
                    title={t.footer.hdLibrary}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-white/85 transition-colors hover:border-[#1ed765] hover:bg-[#1ed765] hover:text-black"
                  >
                    <SocialIcon platform="telegram" className="h-4 w-4" />
                    <span>{t.footer.hdLibrary}</span>
                  </a>
                </>
              )}

              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  title={social.platform}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] text-white/85 transition-colors hover:border-[#1ed765] hover:bg-[#1ed765] hover:text-black"
                >
                  <SocialIcon platform={social.platform} className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="flex flex-col items-start lg:items-end gap-2">
              <span className="text-xs font-medium text-white/55">
                {t.footer.infoProvidedBy}
              </span>
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="The Movie Database (TMDB)"
                className="inline-block transition-opacity hover:opacity-85"
              >
                <Image
                  src="/tmdb-logo.webp"
                  alt="The Movie Database (TMDB)"
                  width={240}
                  height={173}
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <Logo className="text-white/80" />
          <p className="text-sm text-white/50">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
