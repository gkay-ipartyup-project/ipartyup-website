"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Downloads", href: "/download", green: true },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-stremio-dark/95 backdrop-blur border-white/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center" aria-label="iPartyUp home">
          <Logo className="h-8 w-auto text-white" />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 transition-colors ${
                      link.green
                        ? "text-stremio-green hover:text-stremio-green"
                        : active
                          ? "text-white"
                          : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded bg-white" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <a
            href="#"
            className="rounded-full border-2 border-white px-6 py-2 text-[15px] font-semibold text-white transition-colors hover:bg-white hover:text-stremio-dark"
          >
            Login
          </a>

          <div className="flex items-center gap-2 text-[15px] font-medium">
            <span className="text-white">EN</span>
            <span className="text-white/50">BR</span>
          </div>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-stremio-dark/95 px-6 py-4 backdrop-blur lg:hidden">
          <ul className="flex flex-col gap-4 text-[15px] font-medium">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href)
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={
                      link.green
                        ? "text-stremio-green"
                        : active
                          ? "font-bold text-white"
                          : "text-white/90"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <a href="#" className="text-white">
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
