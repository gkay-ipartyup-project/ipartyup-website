import Image from "next/image"

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
            Experience entertainment together with frame-perfect, real-time
            playback synchronization. iPartyUp lets you and your friends stream
            videos and movies simultaneously, so no one ever has to deal with
            spoilers or delayed reactions. With native apps optimized for Windows,
            macOS, and Android (and iOS support on the way), hosting the ultimate
            synchronized watch party is just a click away.
          </p>

          <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-white/55">
            Available on
          </p>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/windows.png"
                alt="Windows icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              Windows
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/android.png"
                alt="Android icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              Android
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white">
              <Image
                src="/apple-logo.png"
                alt="macOS icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              macOS
            </span>

            <span className="inline-flex items-center gap-2 text-[15px] font-medium text-white/70">
              <Image
                src="/apple-logo.png"
                alt="iPhone icon"
                width={20}
                height={20}
                className="h-5 w-5 object-contain brightness-0 invert opacity-60"
              />
              <span>iPhone</span>
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/90 leading-none">
                Soon
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
