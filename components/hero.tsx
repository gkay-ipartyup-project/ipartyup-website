import Image from "next/image"

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c-1.7 0-3 1.6-3 3.6 0 1 .3 1.6.3 2.4 0 .6-.5 1.1-1 1.8-.8 1.1-1.8 2.3-1.8 4.2 0 .5.1 1 .3 1.4-.5.4-.9 1-.9 1.7 0 .4.1.7.3 1-.1.3-.2.6-.2.9 0 1.2 1.6 2 3.6 2h5c2 0 3.6-.8 3.6-2 0-.3-.1-.6-.2-.9.2-.3.3-.6.3-1 0-.7-.4-1.3-.9-1.7.2-.4.3-.9.3-1.4 0-1.9-1-3.1-1.8-4.2-.5-.7-1-1.2-1-1.8 0-.8.3-1.4.3-2.4C15 3.6 13.7 2 12 2Z" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stremio-dark">
      {/* gradient backdrop */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_110%,#0d3d1a_0%,transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 pb-[390px] pt-[200px] lg:pb-[340px]">
        {/* floating cards image */}
        <div className="pointer-events-none absolute -right-12 top-16 hidden w-[58%] md:block lg:w-[90%] lg:top-20 lg:-right-120 z-40">
          <img
            src="/hero-cards.png"
            alt="Stremio content posters"
            className="h-auto w-full"
            loading="eager"
          />
        </div>
        <div className="max-w-xl">
          <h1 className="text-balance text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
            Freedom To Stream
          </h1>
          <p className="mt-3 text-lg text-white/90">
            Enjoyed by more than thousands users worldwide
          </p>
          <p>Watch all your favourite movies, tv shows and even anime at one place
          </p>
          <p>Together with your friends and family in sync then no matter the distance
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full border-2 border-stremio-green bg-stremio-green px-7 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              <LinuxIcon className="h-5 w-5" />
              Linux Download
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-full border-2 border-white px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-stremio-dark"
            >
              Other downloads
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
