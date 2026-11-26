"use client"

import Link from "next/link"
import { Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export function PricingClient() {
  const { t, isArabic } = useLanguage()

  const freeFeatures = isArabic
    ? [
        "الوصول الكامل إلى الباقة المجانية من مكتبة iPartyUp",
        "تشغيل مقاطع YouTube وبثوثها المباشرة وملفات Google Drive مدمجة",
        "استضافة غرف مشاهدة تسع حتى 3 مشاهدين",
        "محادثة فورية وتفاعلات ودردشة صوتية وتحكم كامل للمضيف",
        "قائمتي (المفضلة والمشاهدة لاحقاً) وفلاتر المكتبة والترجمة السحابية",
        "إمكانية طلب محتوى جديد (تتجدد كل 72 ساعة)",
      ]
    : [
        "Access to the free tier of the iPartyUp library",
        "YouTube, YouTube Live, and Google Drive sync built in",
        "Host watch rooms with up to 3 viewers",
        "Real-time text chat, voice chat, reactions, and host controls",
        "My List (Favorites & Watch Later), library filters, and cloud subtitles",
        "Content requests (refreshes every 72 hours)",
      ]

  const premiumFeatures = isArabic
    ? [
        "وصول كامل وغير محدود لكافة محتويات مكتبة iPartyUp بجودة HD",
        "استضافة حفلات مشاهدة ضخمة تسع حتى 12 مستخدماً",
        "دعوة صديق من الفئة المجانية لمشاهدة محتوى Premium معك",
        "نافذة محادثة عائمة بملء الشاشة ولوحة إشعارات الإصدارات الجديدة",
        "زينة الملف الشخصي الحصرية ومزامنة متابعة المشاهدة وشارة الداعم",
        "أولوية طلبات المحتوى (كل 24 ساعة بدلاً من 72) ومحادثة مباشرة مع المطور",
      ]
    : [
        "Full access to the entire iPartyUp HD content library",
        "Host watch parties with up to 12 viewers",
        "Invite 1 free-tier friend to enjoy Premium content with you",
        "Floating fullscreen chat overlay and dashboard release notifications",
        "Synced Continue Watching, exclusive Profile Decorations, and Supporter badge",
        "Priority content requests (24h instead of 72h) and direct chat with the developer",
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl">
              {t.pricing.title}
            </h1>
            <p className="mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed text-white/80">
              {t.pricing.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Skewed Green */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28 -mt-20 sm:-mt-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="flex flex-col rounded-3xl border border-white/15 bg-[#0e0e0e]/95 p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <h2 className="text-2xl font-bold text-white">{t.pricing.freePlan}</h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$0</span>
                <span className="text-base sm:text-lg text-white/75">{t.pricing.forever}</span>
              </div>
              <p className="mt-4 text-white/80">
                {t.pricing.freeSubtitle}
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                {freeFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1ed765] flex-shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                    <span className="text-[15px] text-white/90">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/download"
                className="mt-8 block w-full rounded-full border-2 border-white py-3.5 text-center text-base font-bold text-white transition-colors hover:bg-white hover:text-black"
              >
                {t.pricing.getStartedFree}
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="relative flex flex-col rounded-3xl border-2 border-[#1ed765] bg-[#0e0e0e]/98 p-7 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1ed765] px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-black">
                {t.pricing.mostPopular}
              </div>
              <h2 className="text-2xl font-bold text-white">{t.pricing.supporterPlan}</h2>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-white">$2.99</span>
                <span className="text-base sm:text-lg text-white/75">{t.pricing.perMonth}</span>
              </div>
              <p className="mt-4 text-white/85">
                {t.pricing.supporterSubtitle}
              </p>

              <ul className="mt-8 flex-1 space-y-4">
                {premiumFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#1ed765] flex-shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                    <span className="text-[15px] text-white/90">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/download"
                className="mt-8 block w-full rounded-full border border-[#1ed765]/50 bg-[#1ed765] py-3.5 text-center text-base font-bold text-black transition-colors hover:bg-[#4de087]"
              >
                {t.pricing.becomeSupporter}
              </Link>
              <p className="mt-3 text-center text-xs text-white/60">
                {t.pricing.supporterHint}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link - Dark */}
      <section className="bg-stremio-dark pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-6 text-center">
          <p className="text-lg text-neutral-400">
            {t.pricing.faqPrompt}
          </p>
          <Link
            href="/#faq"
            className="mt-6 inline-flex items-center rounded-full border-2 border-[#1ed765] px-8 py-3 text-base font-bold text-white transition-colors hover:bg-[#1ed765] hover:text-black"
          >
            {t.pricing.readFaq}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
