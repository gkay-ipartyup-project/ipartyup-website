import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"

export default function PricingPage() {
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              Choose Your Plan
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Start free. Become a supporter when you&apos;re ready. One small monthly
              instead of a stack of separate subscriptions. No hidden fees, pause anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards - Skewed Green */}
      <section className="relative pt-20 pb-20 lg:pt-28 lg:pb-28 -mt-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 p-8">
              <h3 className="text-2xl font-bold text-white">Free Plan</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">$0</span>
                <span className="text-lg text-white/80">forever</span>
              </div>
              <p className="mt-4 text-white/90">
                Start watching together, no card required
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Access to the free tier of the iPartyUp library</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">YouTube, YouTube Live and Google Drive built in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Host watch rooms with up to 3 viewers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Real-time chat, reactions, and host controls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Voice chat inside rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Content requests (refreshes every 72 hours)</span>
                </li>
              </ul>

              <a
                href="/download"
                className="mt-8 block w-full rounded-full border-2 border-white py-3 text-center text-base font-semibold text-white transition-colors hover:bg-white hover:text-stremio-green"
              >
                Download Free
              </a>
            </div>

            {/* Premium Plan */}
            <div className="rounded-3xl bg-white/20 backdrop-blur-sm border-2 border-white p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-sm font-bold text-stremio-green">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white">Premium Supporter</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">$5.99</span>
                <span className="text-lg text-white/80">/month</span>
              </div>
              <p className="mt-4 text-white/90">
                The whole library + every bonus perk
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Full access to the entire iPartyUp content library</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Priority content request refresh — from 72 hours down to just 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Host watch parties with up to 12 users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Invite up to 2 free-tier friends to enjoy premium content with you</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Floating fullscreen chat panel</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-white flex-shrink-0 mt-0.5" strokeWidth={3} />
                  <span className="text-white/90">Premium Supporter badge & personal chat with the creator</span>
                </li>
              </ul>

              <a
                href="#"
                className="mt-8 block w-full rounded-full bg-white py-3 text-center text-base font-semibold text-stremio-green transition-opacity hover:opacity-90"
              >
                Get Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link - Dark */}
      <section className="bg-stremio-dark pt-20 pb-20 lg:pt-28 lg:pb-28">
        <div className="mx-auto max-w-[1320px] px-6 text-center">
          <p className="text-lg text-neutral-400">Have questions about our plans?</p>
          <a
            href="/faq"
            className="mt-6 inline-flex items-center rounded-full border-2 border-stremio-green px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-stremio-green"
          >
            Read our FAQ
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
