import Image from "next/image"
import { Apple, AppWindow } from "lucide-react"

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 9v7a1 1 0 0 0 1 1h1v3a1 1 0 1 0 2 0v-3h4v3a1 1 0 1 0 2 0v-3h1a1 1 0 0 0 1-1V9H6Zm-2 0a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1Zm16 0a1 1 0 0 0-1 1v5a1 1 0 1 0 2 0v-5a1 1 0 0 0-1-1ZM15.5 4.2l1-1.5a.4.4 0 0 0-.6-.5l-1.1 1.6a6.3 6.3 0 0 0-5.6 0L8.1 2.2a.4.4 0 0 0-.6.5l1 1.5A5.4 5.4 0 0 0 6 8h12a5.4 5.4 0 0 0-2.5-3.8ZM9.5 6.5a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Zm5 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4Z" />
    </svg>
  )
}

function PlatformItem({
  icon,
  label,
}: {
  icon: React.ReactNode
  label: string
}) {
  return (
    <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
      <span className="text-white/90">{icon}</span>
      {label}
    </span>
  )
}

export function StreamingEnhanced() {
  return (
    <section className="relative pt-2 pb-1 lg:pt-3 lg:pb-1.5 -mt-60 z-10">
      {/* Skewed background layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-0 pointer-events-none" />

      {/* Content wrapper (unskewed to prevent warping of 3D image transform) */}
      <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 lg:grid-cols-2">
        {/* app dashboard, tilted */}
        <div className="relative -ml-2 lg:-ml-24">
          <div className="overflow-visible [transform:perspective(1400px)_rotateY(8deg)_rotateZ(-1deg)]">
            <Image
              src="/app-dashboard.png"
              alt="Stremio app dashboard showing Continue Watching and Popular Movies"
              width={1000}
              height={680}
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="lg:pl-6 lg:-mt-8">
          <p className="text-pretty text-xl leading-relaxed text-white">
            iPartyUp offers a secure, modern and seamless entertainment
            experience. With its easy-to-use interface and diverse content
            library, including 4K HDR support, users can enjoy their favorite
            movies and TV shows across all their devices. And with its
            commitment to security, iPartyUp is the ultimate choice for a
            worry-free, high-quality streaming experience.
          </p>

          <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-white/55">
            Available on
          </p>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-4">
            <PlatformItem icon={<AndroidIcon className="h-5 w-5" />} label="Android" />
            <PlatformItem icon={<AndroidIcon className="h-5 w-5" />} label="Android TV" />
            <PlatformItem icon={<AppWindow className="h-5 w-5" />} label="Windows" />
            <PlatformItem icon={<Apple className="h-5 w-5" />} label="MacOS" />
            <PlatformItem
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 2c-1.7 0-3 1.6-3 3.6 0 1 .3 1.6.3 2.4 0 .6-.5 1.1-1 1.8-.8 1.1-1.8 2.3-1.8 4.2 0 .5.1 1 .3 1.4-.5.4-.9 1-.9 1.7 0 .4.1.7.3 1-.1.3-.2.6-.2.9 0 1.2 1.6 2 3.6 2h5c2 0 3.6-.8 3.6-2 0-.3-.1-.6-.2-.9.2-.3.3-.6.3-1 0-.7-.4-1.3-.9-1.7.2-.4.3-.9.3-1.4 0-1.9-1-3.1-1.8-4.2-.5-.7-1-1.2-1-1.8 0-.8.3-1.4.3-2.4C15 3.6 13.7 2 12 2Z" />
                </svg>
              }
              label="Linux"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-4">
            <span className="text-[15px] font-semibold text-white/80">LG TV</span>
            <span className="text-base font-bold tracking-wide text-white">SAMSUNG</span>
          </div>
        </div>
      </div>
    </section>
  )
}
