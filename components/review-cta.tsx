import { Star } from "lucide-react"

function Stars() {
  return (
    <div className="flex items-center gap-1 text-white">
      {[0, 1, 2, 3].map((i) => (
        <Star key={i} className="h-6 w-6 fill-white" />
      ))}
      <div className="relative h-6 w-6">
        <Star className="absolute inset-0 h-6 w-6 fill-white/30 text-white/30" />
        <div className="absolute inset-0 overflow-hidden [width:50%]">
          <Star className="h-6 w-6 fill-white text-white" />
        </div>
      </div>
    </div>
  )
}

export function ReviewCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(2deg)] pt-36 pb-28 lg:pt-44 lg:pb-36 -mt-24 mb-0 z-10">
      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-6 [transform:skewY(-2deg)] lg:grid-cols-3 lg:items-center">
        <div>
          <p className="text-base text-white/70">Google Play Store</p>
          <p className="mt-3 text-7xl font-bold text-white">4.1</p>
          <div className="mt-3">
            <Stars />
          </div>
          <p className="mt-4 text-lg text-white/80">44,800 reviews</p>
        </div>

        <div className="max-w-sm">
          <p className="font-semibold text-white">Vasilis Smyrnios</p>
          <p className="text-sm text-white/60">Sep 21, 2022</p>
          <p className="mt-4 leading-relaxed text-white/90">
            Probably the best and most useful app to have in your device. It&apos;s
            one of the apps I use on a daily basis especially on my Android TV
            for many years now. Well-made with a strong community providing
            useful functionalities. Well done. Keep up the good work.
          </p>
        </div>

        <div className="lg:justify-self-end">
          <h3 className="text-2xl font-semibold text-white">Join the party now</h3>
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-base font-semibold text-stremio-green transition-transform hover:scale-[1.02]"
            >
              Get iPartyUp for Free
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-neutral-900 px-8 py-3 transition-transform hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7">
                <path fill="#00D9FF" d="M3 3.5v17l9.5-8.5L3 3.5Z" />
                <path fill="#00F076" d="M3 3.5 16.5 11 13 12 3 3.5Z" />
                <path fill="#FFCE00" d="M3 20.5 13 12l3.5 1L3 20.5Z" />
                <path fill="#FF3A44" d="M16.5 11 21 13.6c.8.5.8 1.3 0 1.8L16.5 13 13 12l3.5-1Z" />
              </svg>
              <span className="text-left leading-tight text-white">
                <span className="block text-[11px]">GET IT ON</span>
                <span className="block text-xl font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
