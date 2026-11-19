"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Download,
  FileText,
  RefreshCw,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RichNoteRenderer, PlainNoteItem } from "@/components/rich-note-renderer"
import { useLanguage } from "@/lib/language-context"
import {
  supabase,
  isRichDoc,
  type AppUpdateRow,
  type ReleaseNoteSection,
} from "@/lib/supabase"
import {
  ARABIC_RELEASE_NOTES_BY_VERSION,
  translateCategoryToArabic,
} from "@/lib/release-notes-ar"
import { GOOGLE_PLAY_URL } from "@/lib/constants"

function formatVersion(version: string): string {
  return version.startsWith("v") ? version : `v${version}`
}

function formatDate(iso: string | null | undefined, isArabic: boolean): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d.toLocaleDateString(isArabic ? "ar-EG" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function isDeveloperNote(category: string): boolean {
  const lower = category.toLowerCase()
  return (
    lower.includes("note from") ||
    lower.includes("developer") ||
    lower.includes("رسالة من المطور")
  )
}

export function UpdatesClient() {
  const { t, isArabic } = useLanguage()
  const [updates, setUpdates] = useState<AppUpdateRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchUpdates = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const { data, error: queryError } = await supabase
        .from("app_updates")
        .select(
          "id, version, release_notes, is_mandatory, is_published, published_at, created_at, publish_windows, publish_macos"
        )
        .eq("is_published", true)
        .order("published_at", { ascending: false, nullsFirst: false })
        .order("created_at", { ascending: false })
        .limit(20)

      if (queryError) {
        setError(true)
        setUpdates([])
      } else {
        setUpdates((data ?? []) as AppUpdateRow[])
      }
    } catch {
      setError(true)
      setUpdates([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUpdates()
  }, [fetchUpdates])

  return (
    <main className="relative overflow-x-clip bg-stremio-dark min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-6 pb-[110px] pt-[140px] sm:pt-[170px] lg:pb-[150px] lg:pt-[190px]">
          <div className="mx-auto max-w-3xl text-center">
            <Link
              href="/download"
              className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/55 transition-colors hover:text-[#1ed765]"
            >
              {isArabic ? (
                <ArrowRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowLeft className="h-3.5 w-3.5" />
              )}
              <span>{t.updates.backToDownload}</span>
            </Link>

            <h1 className="text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
              {t.updates.heroPrefix}{" "}
              <span className="text-[#1ed765]">{t.updates.heroAccent}</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/80">
              {t.updates.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Live Release Notes List */}
      <section className="relative -mt-16 z-10 pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#1ed765]" />
              <p className="text-sm font-medium text-white/60">{t.updates.loading}</p>
            </div>
          ) : error ? (
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <RefreshCw className="h-6 w-6 text-[#1ed765]" />
              </div>
              <h2 className="text-xl font-bold text-white">{t.updates.errorTitle}</h2>
              <p className="mt-2 text-sm text-white/60">{t.updates.errorDesc}</p>
              <button
                type="button"
                onClick={fetchUpdates}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1ed765]/50 bg-[#1ed765] px-6 py-2.5 text-sm font-bold text-black transition-colors hover:bg-[#4de087] cursor-pointer"
              >
                <RefreshCw className="h-4 w-4" />
                <span>{t.updates.retry}</span>
              </button>
            </div>
          ) : updates.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#111111] p-12 text-center shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <FileText className="h-6 w-6 text-[#1ed765]" />
              </div>
              <h2 className="text-xl font-bold text-white">{t.updates.emptyTitle}</h2>
              <p className="mt-2 text-sm text-white/60">{t.updates.emptyDesc}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {updates.map((update, idx) => {
                const isLatest = idx === 0
                const dbNotes = Array.isArray(update.release_notes) ? update.release_notes : []
                const dbArabicNotes = Array.isArray(update.release_notes_ar)
                  ? update.release_notes_ar
                  : null
                const builtInArabic =
                  ARABIC_RELEASE_NOTES_BY_VERSION[update.version.replace(/^v/i, "")]

                let sections: ReleaseNoteSection[] = dbNotes
                let usingEnglishFallbackInArabic = false

                if (isArabic) {
                  if (dbArabicNotes && dbArabicNotes.length > 0) {
                    sections = dbArabicNotes
                  } else if (builtInArabic && builtInArabic.length > 0) {
                    sections = builtInArabic
                  } else {
                    sections = dbNotes
                    usingEnglishFallbackInArabic = true
                  }
                }

                const dateLabel = formatDate(update.published_at ?? update.created_at, isArabic)

                return (
                  <article
                    key={update.id}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
                  >
                    {/* Clean Card Header: solid version badge + crisp inline label + date */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] px-5 py-5 sm:px-8 sm:py-6">
                      <div className="flex flex-wrap items-center gap-3.5">
                        <span
                          dir="ltr"
                          className="inline-flex items-center rounded-full bg-[#1ed765] px-4 py-1 text-sm sm:text-base font-extrabold text-black"
                        >
                          {formatVersion(update.version)}
                        </span>

                        {isLatest && (
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                            <span className="h-2 w-2 rounded-full bg-[#1ed765]" aria-hidden="true" />
                            <span>{t.updates.latestLabel}</span>
                          </span>
                        )}

                        {usingEnglishFallbackInArabic && (
                          <span className="text-xs font-medium text-white/50">
                            ({t.updates.englishNotesTag})
                          </span>
                        )}
                      </div>

                      {dateLabel && (
                        <p className="text-xs sm:text-sm font-medium text-white/55">
                          {t.updates.publishedOn}: {dateLabel}
                        </p>
                      )}
                    </div>

                    {/* Release Note Sections (clean headings with NO header icons) */}
                    <div className="space-y-8 px-5 py-7 sm:px-8 sm:py-8">
                      {sections.map((section, sIdx) => {
                        const devNote = isDeveloperNote(section.category || "")
                        const displayCategory = isArabic
                          ? translateCategoryToArabic(section.category || "")
                          : section.category || ""

                        return (
                          <div
                            key={sIdx}
                            className={
                              devNote
                                ? "rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
                                : "space-y-3.5"
                            }
                          >
                            {!isArabic && section.category_doc && isRichDoc(section.category_doc) ? (
                              <RichNoteRenderer
                                doc={section.category_doc}
                                className="text-lg font-bold text-[#1ed765]"
                              />
                            ) : (
                              <h2 className="text-lg font-bold text-[#1ed765]">
                                {displayCategory}
                              </h2>
                            )}

                            <ul
                              dir={usingEnglishFallbackInArabic ? "ltr" : isArabic ? "rtl" : "ltr"}
                              className={
                                devNote
                                  ? "mt-3 space-y-2 text-[15px] text-white/85"
                                  : "space-y-3.5 text-[15px] text-white/80"
                              }
                            >
                              {(section.items ?? []).map((item, iIdx) => (
                                <li
                                  key={iIdx}
                                  className={devNote ? "" : "flex items-start gap-3"}
                                >
                                  {!devNote && (
                                    <span
                                      aria-hidden="true"
                                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1ed765]"
                                    />
                                  )}
                                  <div className="min-w-0 flex-1">
                                    {isRichDoc(item) ? (
                                      <RichNoteRenderer doc={item} />
                                    ) : (
                                      <PlainNoteItem
                                        text={typeof item === "string" ? item : ""}
                                      />
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )
                      })}
                    </div>

                    {/* Quick Download Footer on Latest Release */}
                    {isLatest && (
                      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 border-t border-white/10 bg-white/[0.02] px-5 py-5 sm:px-8">
                        <Link
                          href="/download"
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1ed765] px-6 py-3 text-sm font-bold text-black transition-colors hover:bg-[#4de087]"
                        >
                          <Download className="h-4 w-4" />
                          <span>{t.updates.downloadThisVersion}</span>
                        </Link>
                        <a
                          href={GOOGLE_PLAY_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#1ed765] hover:bg-[#1ed765] hover:text-black"
                        >
                          <Image
                            src="/Play-store-colored.webp"
                            alt="Google Play"
                            width={18}
                            height={18}
                            className="h-4 w-4 object-contain"
                          />
                          <span>{t.updates.getOnGooglePlay}</span>
                        </a>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
