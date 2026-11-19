"use client"

import { useEffect, useState } from "react"
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

            <div className="flex flex-col items-start lg:items-end gap-3">
              <span className="text-xs font-medium text-white/55">
                {t.footer.infoProvidedBy}
              </span>
              <div dir="ltr" className="flex items-center gap-4">
                <a
                  href="https://www.themoviedb.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="The Movie Database (TMDB)"
                  title="The Movie Database (TMDB)"
                  className="inline-flex items-center transition-opacity hover:opacity-85"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 71.4 512.02 369.1"
                    className="h-11 sm:h-12 lg:h-14 w-auto"
                    role="img"
                    aria-label="TMDB"
                  >
                    <defs>
                      <linearGradient
                        id="tmdb-footer-grad"
                        x1="0"
                        x2="512"
                        y1="258.6"
                        y2="258.6"
                        gradientTransform="matrix(1 0 0 -1 0 514.6)"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stopColor="#90cea1" />
                        <stop offset="0.56" stopColor="#3cbec9" />
                        <stop offset="1" stopColor="#00b3e5" />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#tmdb-footer-grad)"
                      d="M141.2 256c0-27 21.8-48.9 48.8-49h.1-.3c27 0 48.9 21.9 48.9 48.9v.1c0 27-21.9 48.9-48.9 48.9h.3c-27 0-48.9-21.9-48.9-48.9m228.7-86.7h91c27 0 48.9-21.9 48.9-48.9S488 71.5 461 71.4h-91.1c-27 0-48.9 21.9-48.9 48.9v.1c0 27.1 21.9 48.9 48.9 48.9M57.3 440.4h176.8c27 0 48.9-21.9 48.9-48.9s-21.8-48.9-48.8-49H57.3c-27 0-48.9 21.9-48.9 48.9v.1c.1 27 21.9 48.9 48.9 48.9m232.2-135.5h17.3l40.4-97.8h-23.1l-24.6 64.2h-.3L275 207h-24.6zm89.7 0h21.6V207h-21.6zm61.4 0h69V285h-47.4v-19.9h42.5v-19.9h-42.5V227h44.9v-20h-66.4zM27.9 169.4h21.6V90.6h27.9V71.5H0v19.1h27.9zm80 0h21.6v-42.3h41.8v42.3h21.6V71.5h-21.6V108h-41.9V71.5H108v97.9zm114.1 0h69.2v-19.9h-47.7v-19.9H286v-19.9h-42.5V91.4h44.9V71.5H222zM3.5 305h21.4v-75.1h.3L50.1 305h16.3l25.7-75.1h.3V305H114v-98H81.5l-22.7 63.9h-.3L36 207H3.3zm310 135.5h35c7.1 0 14.1-1 20.9-3.2 6.4-2 12.3-5.2 17.6-9.3 5.1-4.1 9.2-9.3 12.1-15.2 3.2-6.5 4.8-13.7 4.8-21 .2-7.9-1.4-15.7-4.6-22.8-2.9-6-7.2-11.3-12.5-15.3-5.6-4-11.9-6.8-18.6-8.4-7.3-1.8-14.8-2.8-22.3-2.8h-32.4zm21.6-78h12.7c4.4 0 8.7.6 12.9 1.7 3.9 1.1 7.5 2.8 10.7 5.2 3.1 2.3 5.5 5.3 7.2 8.8 1.9 3.9 2.8 8.2 2.8 12.5.1 4.8-.8 9.6-2.8 14.1-1.7 3.6-4.2 6.8-7.4 9.2-3.3 2.4-7.1 4.1-11.1 5.1-4.5 1-9.2 1.6-13.8 1.5H335zm100 78h40.1c4.4 0 8.8-.5 13.1-1.4 4.2-.8 8.2-2.4 11.8-4.6 3.5-2.1 6.4-4.9 8.6-8.3 2.3-3.9 3.5-8.4 3.3-12.9 0-3-.5-6-1.5-8.9-1-2.7-2.4-5.1-4.3-7.2s-4.2-3.8-6.8-5.1c-2.8-1.4-5.7-2.3-8.8-2.8v-.3c4.8-1.4 9-4.1 12.3-7.8 3.2-3.9 4.8-8.8 4.6-13.8.2-4.5-.9-9-3.2-12.9-2.1-3.2-4.9-5.8-8.3-7.6-3.6-1.8-7.5-3.1-11.5-3.6-4.2-.6-8.5-.9-12.8-.9h-36.5v98.1zm21.6-79.7h14.7c1.7 0 3.4.2 5.1.5 1.6.3 3.2.8 4.7 1.6 1.4.7 2.6 1.8 3.4 3.1.9 1.5 1.4 3.3 1.3 5 0 1.7-.4 3.4-1.2 5-.7 1.4-1.8 2.5-3.1 3.3-1.3.9-2.8 1.5-4.3 1.8-1.6.4-3.3.6-4.9.6h-15.9zm0 39.2H473c1.9 0 3.8.1 5.7.4s3.8.8 5.5 1.5 3.2 1.8 4.4 3.2c1.2 1.6 1.8 3.5 1.7 5.5.1 1.9-.4 3.7-1.3 5.4-.8 1.4-2 2.7-3.4 3.6s-3 1.6-4.6 1.9c-1.7.4-3.4.5-5.1.6h-19.4z"
                    />
                  </svg>
                </a>

                <span className="h-9 w-px bg-white/15" aria-hidden="true" />

                <a
                  href="https://www.thetvdb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TheTVDB"
                  title="TheTVDB"
                  className="inline-flex items-center transition-opacity hover:opacity-85"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-11 sm:h-12 lg:h-14 w-auto"
                    role="img"
                    aria-label="TheTVDB"
                  >
                    <path
                      fill="#555"
                      d="M413.9 512H98.1C43.9 512 0 468.1 0 413.9V98.1C0 43.9 43.9 0 98.1 0H414c54.1 0 98 43.9 98 98.1V414c0 54.1-43.9 98-98.1 98"
                    />
                    <path
                      fill="#6cd591"
                      d="M38.2 160.7c0-14.3 12.9-24.1 28.1-21.9l198.7 26c8.9 1.3 16 10.9 16 21.4v27.1c-16.7 11.2-27.7 30-27.7 51.2 0 21.5 10.7 40.1 27.7 51.2v11.9c0 10.5-7.1 20.1-16 21.4L88.7 373.2c-15.2 2.2-28.1-7.6-28.1-21.9zm85.7 24.9H97.7v34.3H81.1v19.8h16.6v38.1c-.8 24 8.6 34.7 30.3 34.9h20.2v-19.8h-10.4c-11.7-.6-14.3-4-13.9-19.4v-33.7h32.2l29.8 73h28.2l41.1-92.8h-27.8l-26.6 63.9-24.2-63.9H124z"
                    />
                    <path
                      fill="#fff"
                      d="M423.9 218c17 0 28.3 4.2 36.9 13.7 7 7.6 10.7 18.9 10.7 31.5 0 18.3-7.4 32.6-20.9 40.8-8.8 5.3-16.4 6.9-33.6 6.9h-42.6V183.7h26.2V218zm-23.3 73.1H420c15.4 0 24.8-10.3 24.8-27.1 0-17.5-8.2-26.1-24.8-26.1h-19.4zm-66.4-107.4h26.2v127.1h-45.2c-18.4 0-27.2-2.7-36.6-10.9-9.6-8.6-14.5-20.8-14.5-36.2 0-16 5.3-28.2 16.4-37.2 7-5.7 16.6-8.6 28.9-8.6H334zm0 54.2h-19c-15.2 0-24.4 9.7-24.4 25.9 0 17 9.4 27.3 24.4 27.3h19z"
                    />
                  </svg>
                </a>
              </div>
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
