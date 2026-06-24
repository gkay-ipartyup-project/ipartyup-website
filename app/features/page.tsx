import { Navbar } from "@/components/navbar"
import { WatchEnjoy } from "@/components/watch-enjoy"
import { ReviewCta } from "@/components/review-cta"
import { Footer } from "@/components/footer"
import Image from "next/image"

function GooglePlayButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 rounded-full bg-neutral-900 px-6 py-3 transition-transform hover:scale-[1.02] ${className}`}
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
  )
}

const PLATFORM_LOGOS = [
  { name: "Netflix", src: "/platform-OTT-images/Netflix.png" },
  { name: "Disney+", src: "/platform-OTT-images/Disney.png" },
  { name: "HBO", src: "/platform-OTT-images/HBO.png" },
  { name: "Prime Video", src: "/platform-OTT-images/prime.png" },
  { name: "Hulu", src: "/platform-OTT-images/hulu.png" },
  { name: "Apple TV+", src: "/platform-OTT-images/AppleTv.png" },
  { name: "Paramount+", src: "/platform-OTT-images/paramount.png" },
  { name: "Peacock", src: "/platform-OTT-images/peacock.png" },
  { name: "Crunchyroll", src: "/platform-OTT-images/Crunchyroll.png" },
  { name: "Warner Bros", src: "/platform-OTT-images/warners-brothers.png" },
]

export default function FeaturesPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Features Hero */}
      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 pb-20 pt-[150px] lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
                Features
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
                Stream like a pro with iPartyUp&apos;s advanced features and enjoy
                seamless access to all your favorite media.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src="/cat-mascot.png"
                  alt="iPartyUp mascot"
                  width={320}
                  height={320}
                  className="w-[260px] lg:w-[320px]"
                  priority
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stremio-green/90 shadow-lg shadow-stremio-green/30">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Watch & Enjoy (rendered with green gradient variant and skew) */}
      <WatchEnjoy variant="green" />

      {/* High-Definition Video Support */}
      <section className="bg-stremio-dark py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="max-w-md lg:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-stremio-green/10 px-4 py-1.5 text-sm font-semibold text-stremio-green">
              <span className="text-base font-bold">4K</span>
              <span>ULTRA HD</span>
            </div>
            <h2 className="text-3xl font-bold text-white">
              High-Definition Video Support
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-400">
              An integrated video player supporting most video formats, including
              4K HDR content, lets you enjoy the highest quality available.
            </p>
            <div className="mt-8">
              <GooglePlayButton />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl shadow-2xl lg:order-2">
            <Image
              src="/tv-ui.png"
              alt="iPartyUp 4K video playback"
              width={900}
              height={500}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Diverse Content Library */}
      <section className="relative -mt-20 z-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        {/* Dark background fill layer (unskewed) */}
        <div className="absolute inset-0 bg-stremio-dark z-0 pointer-events-none" />
        
        {/* Skewed green gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-[1] pointer-events-none" />
        
        {/* Content wrapper (unskewed) */}
        <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            {PLATFORM_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex h-16 w-24 items-center justify-center rounded-xl bg-white/10 p-2 backdrop-blur-sm"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={80}
                  height={40}
                  className="h-auto max-h-10 w-auto"
                />
              </div>
            ))}
          </div>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white">
              Diverse Content Library
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">
              iPartyUp integrates with a large number of popular video sources,
              such as Netflix, Amazon Prime Video, Hulu, YouTube, and many more.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-white hover:text-stremio-dark"
            >
              Create a Free Account
            </a>
          </div>
        </div>
      </section>

      {/* Free & Secure Streaming */}
      <section className="bg-stremio-dark py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/cat-mascot.png"
                alt="iPartyUp secure streaming mascot"
                width={300}
                height={300}
                className="w-[240px] lg:w-[300px]"
              />
              <div className="absolute bottom-4 right-4 flex h-20 w-20 items-center justify-center rounded-full bg-stremio-green/20">
                <svg viewBox="0 0 24 24" className="h-10 w-10 text-stremio-green" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm0 2.18 7 3.12v4.7c0 4.67-3.13 9.07-7 10.2-3.87-1.13-7-5.53-7-10.2V6.3l7-3.12ZM11 7v6h2V7h-2Zm0 8v2h2v-2h-2Z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white">
              Free &amp; Secure
              <br />
              Streaming
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-400">
              iPartyUp offers unmatched security and privacy for users. With its
              unique feature of running addons remotely, iPartyUp provides a safer
              way to stream your favorite content compared to other platforms.
              Your security and privacy are top priorities, and the platform
              ensures that all your data is protected.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-400">
              Say goodbye to worries about security and privacy and say hello to
              a world of endless entertainment with iPartyUp.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center rounded-full bg-stremio-green px-8 py-3 text-base font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get iPartyUp for Free
            </a>
          </div>
        </div>
      </section>

      {/* New Theater Experience */}
      <section className="relative -mt-20 z-10 pt-20 pb-20 lg:pt-28 lg:pb-28">
        {/* Dark background fill layer (unskewed) */}
        <div className="absolute inset-0 bg-stremio-dark z-0 pointer-events-none" />
        
        {/* Skewed green gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stremio-green to-stremio-green-dark [transform:skewY(-4deg)] z-[1] pointer-events-none" />
        
        {/* Content wrapper (unskewed) */}
        <div className="relative z-10 mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold leading-tight text-white">
              New Theater
              <br />
              Experience
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              iPartyUp&apos;s new dedicated TV app lets you enjoy a movie night on
              your Android TV devices.
            </p>
            <div className="mt-8">
              <GooglePlayButton />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/tv-ui.png"
              alt="iPartyUp TV app theater experience"
              width={1000}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Discover More */}
      <section className="relative bg-stremio-dark py-20 lg:py-28">
        {/* Dark background fill layer to cover any skew overlap */}
        <div className="absolute inset-0 bg-stremio-dark z-0" />
        
        <div className="relative z-10 mx-auto max-w-[1320px] px-6 text-center">
          <h2 className="text-3xl font-bold text-stremio-green">Discover more.</h2>
          <p className="mt-3 text-lg text-neutral-400">
            Never run out of things to watch
          </p>
          <div className="mt-12 flex justify-center">
            <div className="overflow-hidden rounded-xl shadow-2xl">
              <Image
                src="/app-dashboard.png"
                alt="iPartyUp discover interface"
                width={1100}
                height={650}
                className="h-auto w-full max-w-[900px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <ReviewCta />

      {/* Footer */}
      <Footer />
    </main>
  )
}
