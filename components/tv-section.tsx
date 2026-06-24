import Image from "next/image"

export function TvSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0a3d1a_0%,#071f0f_55%,#0a0a0a_100%)] [transform:skewY(-4deg)] pt-28 pb-20 lg:pt-36 lg:pb-28 -mt-24 z-10">
        {/* Unskewed container to keep text and mockups straight */}
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-6 [transform:skewY(4deg)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold leading-tight text-white">
              Try iPartyUp
              <br />
              On Your Mobile or Laptop
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              You can now watch all favorite TV shows, Movies and Anime on your Android/Windows/MacOS Devices.
              The iPartyUp app lets you enjoy huge library of content with your friends and family.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg transition-transform hover:scale-[1.02]"
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7">
                <path fill="#00D9FF" d="M3 3.5v17l9.5-8.5L3 3.5Z" />
                <path fill="#00F076" d="M3 3.5 16.5 11 13 12 3 3.5Z" />
                <path fill="#FFCE00" d="M3 20.5 13 12l3.5 1L3 20.5Z" />
                <path fill="#FF3A44" d="M16.5 11 21 13.6c.8.5.8 1.3 0 1.8L16.5 13 13 12l3.5-1Z" />
              </svg>
              <span className="text-left leading-tight text-neutral-900">
                <span className="block text-[11px] font-semibold">Android APK</span>
                <span className="block text-xl font-semibold">Google Play</span>
              </span>
            </a>
          </div>

          <div className="relative lg:translate-x-12 lg:scale-130">
            <Image
              src="/laptop-and-mobile.png"
              alt="iPartyUp app on laptop and mobile"
              width={1000}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Sibling Mascot container - positioned outside the skewed section to prevent distortion */}
      <div className="relative mx-auto max-w-[1320px] px-6 h-0 overflow-visible z-20">
        <div className="absolute right-1 -top-[200px] md:-top-[280px] lg:-top-[400px] w-[180px] md:w-[260px] lg:w-[340px]">
          <Image
            src="/pngwing.png"
            alt="iPartyUp Olaf mascot"
            width={500}
            height={750}
            className="h-auto w-full"
          />
        </div>
      </div>
    </>
  )
}

