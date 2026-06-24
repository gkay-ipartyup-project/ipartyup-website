"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield, Zap, RefreshCw, Monitor, Apple, Smartphone, AlertTriangle, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

interface PlatformDownload {
  version: string
  published_at: string | null
  url: string
  size: number | null
}

interface LatestDownloads {
  latest_version: string | null
  latest_published_at: string | null
  windows: PlatformDownload | null
  macos: PlatformDownload | null
}

const EMPTY: LatestDownloads = {
  latest_version: null,
  latest_published_at: null,
  windows: null,
  macos: null,
}

async function getLatestDownloads(): Promise<LatestDownloads> {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!base) return EMPTY

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/functions/v1/website-download`, {
      method: "GET",
      cache: "no-store",
    })
    if (!res.ok) return EMPTY
    const json = (await res.json()) as LatestDownloads
    return {
      latest_version: json.latest_version ?? null,
      latest_published_at: json.latest_published_at ?? null,
      windows: json.windows ?? null,
      macos: json.macos ?? null,
    }
  } catch {
    return EMPTY
  }
}

function formatVersion(v: string | null | undefined): string {
  if (!v) return ""
  return v.startsWith("v") ? v : `v${v}`
}

function formatReleaseDate(iso: string | null | undefined): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function PlatformCard({
  name,
  icon: Icon,
  download,
  latestVersion,
  loading,
}: {
  name: string
  icon: typeof Monitor
  download: PlatformDownload | null
  latestVersion: string | null
  loading: boolean
}) {
  const available = !!download
  const version = download ? formatVersion(download.version) : null
  const dateLabel = download ? formatReleaseDate(download.published_at) : ""
  const isBackVersion =
    available && latestVersion && download!.version !== latestVersion

  let tag: string
  if (loading) tag = "Checking latest…"
  else if (!available) tag = name === "Android" ? "Being Ready" : "Coming Soon"
  else if (isBackVersion) tag = "Previous Build"
  else tag = "Latest Stable"

  const handleDownload = () => {
    if (!download) return
    const a = document.createElement("a")
    a.href = download.url
    const fileName = download.url.split("?")[0].split("/").pop()
    if (fileName) a.download = fileName
    a.rel = "noopener"
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-stremio-green/30 hover:bg-white/[0.04]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stremio-green/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-white/90 transition-all duration-300 group-hover:border-stremio-green group-hover:bg-stremio-green group-hover:text-black">
          <Icon className="h-10 w-10" />
        </div>

        <h3 className="mb-2 text-xl font-bold text-white">{name}</h3>

        <div className="mb-6 flex min-h-[48px] flex-col items-center gap-2">
          <span
            className={`rounded-lg border px-3 py-1 text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              !available
                ? "border-white/5 bg-white/[0.03] text-white/30"
                : isBackVersion
                  ? "border-amber-500/20 bg-amber-500/10 text-amber-300/80"
                  : "border-white/5 bg-white/5 text-white/40 group-hover:border-stremio-green/20 group-hover:text-stremio-green"
            }`}
          >
            {tag}
          </span>
          {available ? (
            <span className="text-xs font-bold text-white/20">
              {version}
              {dateLabel ? ` • ${dateLabel}` : ""}
            </span>
          ) : loading ? (
            <span className="text-xs font-bold text-white/10">&nbsp;</span>
          ) : (
            <span className="text-xs font-bold text-white/20">
              {name === "Android" ? "APK coming soon" : "No installer yet"}
            </span>
          )}
          {isBackVersion && latestVersion && (
            <span className="text-[10px] font-semibold tracking-wide text-amber-300/50">
              {formatVersion(latestVersion)} available — {name} build pending
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={!available}
          className={`mb-2 w-full rounded-2xl border px-6 py-4 text-xs font-black uppercase tracking-widest transition-all duration-300 ${
            available
              ? "border-white/10 bg-white/5 text-white hover:border-stremio-green hover:bg-stremio-green hover:text-black"
              : "cursor-not-allowed border-white/5 bg-white/[0.02] text-white/30"
          }`}
        >
          {available ? "Download" : "Coming Soon"}
        </button>

        <Link
          href="/updates"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-3 text-[10px] font-black uppercase tracking-widest text-white/45 transition-all duration-300 hover:border-stremio-green/30 hover:bg-stremio-green/[0.04] hover:text-stremio-green"
        >
          <span>View Update Notes</span>
        </Link>
      </div>
    </div>
  )
}

function SmartScreenNotice() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-5 text-left transition-all hover:border-amber-500/30 hover:bg-amber-500/[0.07]"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10">
          <AlertTriangle size={16} className="text-amber-300/90" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-bold text-amber-100/90">
            Browser warned you the file is suspicious?
          </div>
          <div className="mt-0.5 text-xs font-medium text-amber-100/50">
            iPartyUp is safe — here's why you might see a warning and how to continue.
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-amber-300/60 transition-transform duration-300 group-hover:text-amber-300/90 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-3 space-y-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
          <p className="text-sm leading-relaxed text-white/60">
            iPartyUp is an indie project and our installers are not yet covered by a paid
            code-signing certificate. Chrome, Edge, and macOS Gatekeeper flag any new app
            they haven't seen thousands of times before — it's a reputation check, not a
            virus detection. The file is clean.
          </p>

          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Monitor size={14} className="text-white/50" />
              <span className="text-[11px] font-black uppercase tracking-widest text-white/50">
                Windows — Chrome / Edge
              </span>
            </div>
            <ol className="list-inside list-decimal space-y-1.5 text-[13px] text-white/60 marker:text-white/30">
              <li>
                If Chrome says <span className="font-semibold text-white/80">"This file isn't commonly downloaded"</span>, click
                <span className="font-semibold text-white/80"> Keep </span> or
                <span className="font-semibold text-white/80"> Download suspicious file</span>.
              </li>
              <li>
                When SmartScreen shows <span className="font-semibold text-white/80">"Windows protected your PC"</span>, click
                <span className="font-semibold text-white/80"> More info </span>→
                <span className="font-semibold text-white/80"> Run anyway</span>.
              </li>
              <li>Then continue the installer normally.</li>
            </ol>
          </div>

          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Apple size={14} className="text-white/50" />
              <span className="text-[11px] font-black uppercase tracking-widest text-white/50">
                macOS — Gatekeeper
              </span>
            </div>
            <ol className="list-inside list-decimal space-y-1.5 text-[13px] text-white/60 marker:text-white/30">
              <li>Open the downloaded <span className="font-semibold text-white/80">.dmg</span> and drag iPartyUp to <span className="font-semibold text-white/80">Applications</span>.</li>
              <li>
                Right-click (or Control-click) iPartyUp in Applications →
                <span className="font-semibold text-white/80"> Open</span>.
              </li>
              <li>In the dialog, click <span className="font-semibold text-white/80">Open</span> once more. macOS remembers this for future launches.</li>
            </ol>
          </div>

          <p className="text-xs leading-relaxed text-white/35">
            Prefer extra peace of mind? Scan the installer yourself at{" "}
            <a
              href="https://www.virustotal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stremio-green hover:underline"
            >
              virustotal.com
            </a>{" "}
            before running it.
          </p>
        </div>
      )}
    </div>
  )
}

export default function DownloadPage() {
  const [data, setData] = useState<LatestDownloads | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLatestDownloads()
      .then((d) => setData(d))
      .finally(() => setLoading(false))
  }, [])

  const platforms = [
    {
      name: "Windows",
      icon: Monitor,
      download: data?.windows ?? null,
      latestVersion: data?.latest_version ?? null,
      loading,
    },
    {
      name: "macOS",
      icon: Apple,
      download: data?.macos ?? null,
      latestVersion: data?.latest_version ?? null,
      loading,
    },
    {
      name: "Android",
      icon: Smartphone,
      download: null,
      latestVersion: null,
      loading,
    },
  ]

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 pb-[150px] pt-[200px] lg:pb-[180px]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              Start Your Party
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Download iPartyUp for Windows, macOS, or Android and start streaming your favorite content today.
            </p>
          </div>
        </div>
      </section>

      {/* Download Cards - Skewed Green */}
      <section className="relative -mt-24 z-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {platforms.map((platform, index) => (
              <PlatformCard key={platform.name} {...platform} />
            ))}
          </div>

          <SmartScreenNotice />
        </div>
      </section>

      {/* Features Section - Dark */}
      <section className="bg-stremio-dark pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                  <Shield className="h-7 w-7 text-stremio-green" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Clean & Safe</h3>
              <p className="text-neutral-400">
                Every build is signed and scanned before release. No bundled trackers, no adware, no shady extras — just the app.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                  <Zap className="h-7 w-7 text-stremio-green" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Fast Installation</h3>
              <p className="text-neutral-400">
                Up and running in under a minute. iPartyUp is lightweight by design so it stays out of your way.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-stremio-green bg-stremio-green/10">
                  <RefreshCw className="h-7 w-7 text-stremio-green" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">Automatic Updates</h3>
              <p className="text-neutral-400">
                New features, fresh content, and security improvements roll in quietly in the background.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
