"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { AlertTriangle, ChevronDown, ExternalLink } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"
import { GOOGLE_PLAY_URL, SUPABASE_PUBLIC_URL } from "@/lib/constants"

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
  try {
    const res = await fetch(
      `${SUPABASE_PUBLIC_URL.replace(/\/$/, "")}/functions/v1/website-download`,
      {
        method: "GET",
        cache: "no-store",
      }
    )
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

function formatReleaseDate(iso: string | null | undefined, isArabic: boolean): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function PlatformCard({
  name,
  iconSrc,
  download,
  externalUrl,
  latestVersion,
  loading,
}: {
  name: string
  iconSrc: string
  download: PlatformDownload | null
  externalUrl?: string
  latestVersion: string | null
  loading: boolean
}) {
  const { t, isArabic } = useLanguage()
  const isExternalStore = !!externalUrl
  const available = isExternalStore || !!download
  const version = download ? formatVersion(download.version) : null
  const dateLabel = download ? formatReleaseDate(download.published_at, isArabic) : ""
  const isBackVersion =
    !isExternalStore && available && latestVersion && download!.version !== latestVersion

  let statusLabel: string
  if (isExternalStore) {
    statusLabel = t.download.availableOnPlay
  } else if (loading) {
    statusLabel = t.download.checkingLatest
  } else if (!available) {
    statusLabel = t.download.comingSoon
  } else if (isBackVersion) {
    statusLabel = t.download.previousBuild
  } else {
    statusLabel = t.download.latestStable
  }

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
    <div className="group relative rounded-3xl border border-white/15 bg-[#0e0e0e]/95 p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors duration-200 hover:border-[#1ed765]/60">
      <div className="relative flex flex-col items-center text-center">
        {/* Project OS image icon (not Lucide) */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.07] transition-colors duration-200 group-hover:border-[#1ed765] group-hover:bg-[#1ed765]">
          <Image
            src={iconSrc}
            alt={`${name} icon`}
            width={40}
            height={40}
            className="h-10 w-10 object-contain brightness-0 invert transition-[filter] duration-200 group-hover:invert-0"
          />
        </div>

        <h3 className="mb-2 text-2xl font-bold text-white">{name}</h3>

        {/* Clean high-contrast typography (no dull stroke pill boxes) */}
        <div className="mb-6 flex min-h-[44px] flex-col items-center justify-center gap-1">
          <span
            className={`text-xs font-bold uppercase tracking-wider ${
              !available
                ? "text-white/40"
                : isBackVersion
                  ? "text-amber-300"
                  : "text-[#1ed765]"
            }`}
          >
            {statusLabel}
          </span>

          {isExternalStore ? (
            <span className="text-xs font-medium text-white/55">
              {latestVersion ? `${formatVersion(latestVersion)} · Google Play` : "Google Play"}
            </span>
          ) : available ? (
            <span className="text-xs font-medium text-white/55">
              {version}
              {dateLabel ? ` · ${dateLabel}` : ""}
            </span>
          ) : loading ? (
            <span className="text-xs font-medium text-white/20">&nbsp;</span>
          ) : (
            <span className="text-xs font-medium text-white/40">
              {t.download.comingSoon}
            </span>
          )}

          {isBackVersion && latestVersion && (
            <span className="text-[11px] font-medium text-amber-300/75">
              {formatVersion(latestVersion)} {isArabic ? "متوفر" : "available"}
            </span>
          )}
        </div>

        {isExternalStore ? (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#1ed765]/50 bg-[#1ed765] px-6 py-4 text-xs font-extrabold uppercase tracking-wider text-black transition-colors duration-200 hover:bg-[#4de087]"
          >
            <span>{t.download.getOnPlay}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : (
          <button
            type="button"
            onClick={handleDownload}
            disabled={!available}
            className={`mb-2.5 w-full rounded-2xl border px-6 py-4 text-xs font-extrabold uppercase tracking-wider transition-colors duration-200 ${
              available
                ? "border-[#1ed765]/50 bg-[#1ed765] text-black hover:bg-[#4de087] cursor-pointer"
                : "cursor-not-allowed border-white/10 bg-white/[0.04] text-white/35"
            }`}
          >
            {available ? t.download.download : t.download.comingSoon}
          </button>
        )}

        <Link
          href="/updates"
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-white/75 transition-colors duration-200 hover:border-[#1ed765]/60 hover:text-[#1ed765]"
        >
          <span>{t.download.viewUpdateNotes}</span>
        </Link>
      </div>
    </div>
  )
}

function SmartScreenNotice() {
  const [open, setOpen] = useState(false)
  const { isArabic } = useLanguage()

  return (
    <div className="mx-auto mt-8 max-w-2xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group flex w-full items-center gap-3.5 rounded-2xl border border-white/15 bg-[#0e0e0e]/95 p-4 sm:p-5 text-start shadow-[0_2px_8px_rgba(0,0,0,0.3)] transition-colors hover:border-white/30 cursor-pointer"
      >
        <AlertTriangle size={20} className="shrink-0 text-amber-400" />
        <div className="min-w-0 flex-1">
          <div className="text-sm font-bold text-white">
            {isArabic
              ? "هل حذرك المتصفح من أن الملف غير معتاد؟"
              : "Browser acting dramatic and warning you about the installer?"}
          </div>
          <div className="mt-0.5 text-xs font-medium text-white/60">
            {isArabic
              ? "برنامج iPartyUp آمن 100%. إليك سبب ظهور التحذير وكيفية المتابعة."
              : "iPartyUp is completely safe. Here is why new indie apps trigger that popup and how to continue."}
          </div>
        </div>
        <ChevronDown
          size={18}
          className={`shrink-0 text-white/55 transition-transform duration-300 group-hover:text-white ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="mt-3 space-y-5 rounded-2xl border border-white/10 bg-[#0e0e0e]/95 p-5 sm:p-6 text-start">
          <p className="text-sm leading-relaxed text-white/75">
            {isArabic
              ? "iPartyUp مشروع مستقل وبرامج التثبيت جديدة، لذا قد تظهر رسالة من Windows Defender أو Gatekeeper لأنها لم تسجل آلاف التنزيلات بعد. هذا فحص سمعة وليس اكتشاف فيروس، والملف آمن ونظيف تماماً."
              : "iPartyUp is an independent project and our desktop installers do not yet carry a costly enterprise code-signing certificate. Chrome, Edge, and macOS Gatekeeper flag any newer installer they have not seen thousands of times. It is just a reputation check, not a virus detection. The file is clean."}
          </p>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/windows.webp"
                alt="Windows"
                width={16}
                height={16}
                className="h-4 w-4 object-contain brightness-0 invert"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                Windows (Chrome / Edge)
              </span>
            </div>
            <ol className="list-inside list-decimal space-y-1.5 text-[13px] text-white/75 marker:text-white/40">
              <li>
                {isArabic ? (
                  <>
                    إذا ظهر في Chrome أن &quot;الملف غير شائع التنزيل&quot;، انقر على{" "}
                    <span className="font-semibold text-white">الاحتفاظ</span> أو{" "}
                    <span className="font-semibold text-white">متابعة التنزيل</span>.
                  </>
                ) : (
                  <>
                    If Chrome says{" "}
                    <span className="font-semibold text-white">
                      &quot;This file isn&apos;t commonly downloaded&quot;
                    </span>
                    , click <span className="font-semibold text-white">Keep</span> or{" "}
                    <span className="font-semibold text-white">Download suspicious file</span>.
                  </>
                )}
              </li>
              <li>
                {isArabic ? (
                  <>
                    عندما يظهر Windows SmartScreen، انقر على{" "}
                    <span className="font-semibold text-white">مزيد من المعلومات (More info)</span>{" "}
                    ثم{" "}
                    <span className="font-semibold text-white">تشغيل على أي حال (Run anyway)</span>.
                  </>
                ) : (
                  <>
                    When SmartScreen shows{" "}
                    <span className="font-semibold text-white">
                      &quot;Windows protected your PC&quot;
                    </span>
                    , click <span className="font-semibold text-white">More info</span>, then{" "}
                    <span className="font-semibold text-white">Run anyway</span>.
                  </>
                )}
              </li>
              <li>
                {isArabic
                  ? "ثم تابع التثبيت بشكل طبيعي."
                  : "Then continue the installer normally."}
              </li>
            </ol>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/apple-logo.webp"
                alt="macOS"
                width={16}
                height={16}
                className="h-4 w-4 object-contain brightness-0 invert"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                macOS (Gatekeeper)
              </span>
            </div>
            <ol className="list-inside list-decimal space-y-1.5 text-[13px] text-white/75 marker:text-white/40">
              <li>
                {isArabic
                  ? "افتح ملف .dmg واسحب iPartyUp إلى مجلد التطبيقات (Applications)."
                  : "Open the downloaded .dmg and drag iPartyUp into Applications."}
              </li>
              <li>
                {isArabic ? (
                  <>
                    انقر بزر الماوس الأيمن على iPartyUp في Applications واختر{" "}
                    <span className="font-semibold text-white">فتح (Open)</span>.
                  </>
                ) : (
                  <>
                    Right-click (or Control-click) iPartyUp in Applications and choose{" "}
                    <span className="font-semibold text-white">Open</span>.
                  </>
                )}
              </li>
              <li>
                {isArabic
                  ? "في النافذة المنبثقة، اختر Open مرة أخرى. سيتذكر النظام ذلك في المرات القادمة."
                  : "In the dialog, click Open once more. macOS remembers this for future launches."}
              </li>
            </ol>
          </div>

          <p className="text-xs leading-relaxed text-white/55">
            {isArabic
              ? "للاطمئنان التام، يمكنك فحص الملف بنفسك على "
              : "Want extra peace of mind? Scan the installer yourself at "}
            <a
              href="https://www.virustotal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1ed765] hover:underline"
            >
              virustotal.com
            </a>{" "}
            {isArabic ? "قبل تشغيله." : "before running it."}
          </p>
        </div>
      )}
    </div>
  )
}

export default function DownloadPage() {
  const [data, setData] = useState<LatestDownloads | null>(null)
  const [loading, setLoading] = useState(true)
  const { t, isArabic } = useLanguage()

  useEffect(() => {
    getLatestDownloads()
      .then((d) => setData(d))
      .finally(() => setLoading(false))
  }, [])

  const platforms = [
    {
      name: "Windows",
      iconSrc: "/windows.webp",
      download: data?.windows ?? null,
      latestVersion: data?.latest_version ?? null,
      loading,
    },
    {
      name: "macOS",
      iconSrc: "/apple-logo.webp",
      download: data?.macos ?? null,
      latestVersion: data?.latest_version ?? null,
      loading,
    },
    {
      name: "Android",
      iconSrc: "/android.webp",
      download: null,
      externalUrl: GOOGLE_PLAY_URL,
      latestVersion: data?.latest_version ?? null,
      loading: false,
    },
  ]

  const highlights = [
    {
      iconSrc: "/icon-clean-safe.webp",
      title: isArabic ? "آمن ونظيف تماماً" : "Clean & Safe",
      desc: isArabic
        ? "كل إصدار يتم فحصه وتجهيزه بعناية قبل النشر. لا برامج تتبع خفية ولا ملحقات مزعجة، التطبيق الصافي فقط."
        : "Every build is verified before release. Zero bundled trackers, zero adware, zero shady extras. Just the app.",
    },
    {
      iconSrc: "/icon-fast-install.webp",
      title: isArabic ? "تثبيت فائق السرعة" : "Fast Installation",
      desc: isArabic
        ? "جاهز لسهرتك في أقل من دقيقة. صممنا iPartyUp ليكون خفيفاً وسريعاً حتى تبدأ المشاهدة قبل أن يبرد الفشار."
        : "Up and running in under a minute. Built lightweight so you can launch a room before the popcorn even cools down.",
    },
    {
      iconSrc: "/icon-always-updated.webp",
      title: isArabic ? "محدّث باستمرار" : "Always Up to Date",
      desc: isArabic
        ? "ميزات جديدة، تحسينات لمزودي البث، وإصلاحات سريعة تصل باستمرار على الحاسوب ومتجر Google Play."
        : "Fresh features, tuned streaming providers, and quick fixes roll out continuously across Desktop and Google Play.",
    },
  ]

  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 pb-[120px] pt-[150px] sm:pt-[180px] lg:pb-[170px] lg:pt-[200px]">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              {t.download.heroTitle}
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/80">
              {t.download.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Download Cards - Skewed Green */}
      <section
        id="platforms"
        className="relative -mt-20 sm:-mt-24 z-10 scroll-mt-24 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {platforms.map((platform) => (
              <PlatformCard key={platform.name} {...platform} />
            ))}
          </div>

          <SmartScreenNotice />
        </div>
      </section>

      {/* Cardless 3D Highlights Section */}
      <section className="bg-stremio-dark pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-12 sm:gap-14 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    width={96}
                    height={96}
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="max-w-xs text-[15px] leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
