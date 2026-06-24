import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FileText, ArrowLeft, Monitor, Apple, Smartphone } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "iPartyUp Release Notes - What's New & App Updates",
  description: "Stay updated with the latest iPartyUp releases. View detailed logs of new streaming features, bug fixes, performance improvements, and additions as we ship them.",
}

export default function UpdatesPage() {
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
            <Link
              href="/download"
              className="mb-10 inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-white/40 transition-colors hover:text-stremio-green"
            >
              <ArrowLeft size={12} />
              Back to Download
            </Link>

            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              What&apos;s <span className="text-stremio-green">New</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Every iPartyUp release, documented. New features, bug fixes, and performance improvements in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section - Skewed Green (Fixed) */}
      <section className="relative -mt-24 z-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        {/* Dark background fill layer (unskewed) */}
        <div className="absolute inset-0 bg-stremio-dark z-0 pointer-events-none" />
        
        {/* Skewed background layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-[1] pointer-events-none" />

        {/* Content wrapper (unskewed) */}
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Empty State Card */}
          <div className="mx-auto max-w-xl rounded-3xl border border-white/20 bg-white/10 backdrop-blur-sm p-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-white/30 bg-white/10">
              <FileText size={22} className="text-white" />
            </div>
            <h3 className="mb-2 text-xl font-black uppercase italic tracking-tighter text-white">
              Release Notes Coming Soon
            </h3>
            <p className="mb-8 text-[13px] text-white/80">
              Check back soon — we ship updates often.
            </p>

            {/* Platform Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
                <Monitor size={16} />
                <span>Windows</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
                <Apple size={16} />
                <span>macOS</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
                <Smartphone size={16} />
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
