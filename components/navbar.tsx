"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t, isArabic } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when navigating
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const navLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    { label: t.nav.pricing, href: "/pricing" },
    { label: t.nav.updates, href: "/updates" },
    { label: t.nav.downloads, href: "/download", green: true },
  ]

  return (
    <header
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b ${
        scrolled || open
          ? "bg-stremio-dark/95 backdrop-blur border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1320px] items-center justify-between px-5 sm:px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3.5" : "py-4 sm:py-5"
        }`}
      >
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          aria-label="iPartyUp home"
        >
          <Logo className="text-white" />
        </Link>

        {/* Desktop & Tablet-landscape Nav */}
        <div className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative pb-1 transition-colors duration-200 ${
                      link.green
                        ? "font-semibold text-stremio-green hover:text-stremio-green-light"
                        : active
                          ? "text-white"
                          : "text-white/75 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-current transition-transform duration-200 origin-center ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          <div
            dir="ltr"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[13px] font-semibold"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition-colors duration-200 cursor-pointer ${
                language === "en"
                  ? "text-stremio-green font-bold"
                  : "text-white/55 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-white/25 font-light select-none">|</span>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              className={`transition-colors duration-200 cursor-pointer ${
                language === "ar"
                  ? "text-stremio-green font-bold"
                  : "text-white/55 hover:text-white"
              }`}
              aria-label="التبديل إلى العربية"
            >
              AR
            </button>
          </div>
        </div>

        {/* Mobile / Tablet controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <div
            dir="ltr"
            className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold"
          >
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`cursor-pointer ${
                language === "en" ? "text-stremio-green font-bold" : "text-white/60"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span className="text-white/25">|</span>
            <button
              type="button"
              onClick={() => setLanguage("ar")}
              className={`cursor-pointer ${
                language === "ar" ? "text-stremio-green font-bold" : "text-white/60"
              }`}
              aria-label="التبديل إلى العربية"
            >
              AR
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          dir={isArabic ? "rtl" : "ltr"}
          className="border-t border-white/10 bg-stremio-dark/98 px-5 py-5 backdrop-blur lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-[16px] font-medium">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-xl px-3.5 py-2.5 transition-colors ${
                      link.green
                        ? "text-stremio-green font-bold hover:bg-white/[0.05]"
                        : active
                          ? "bg-white/[0.08] font-bold text-white"
                          : "text-white/85 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
