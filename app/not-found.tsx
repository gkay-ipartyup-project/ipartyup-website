import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-5 py-16 text-center">
      <div className="max-w-md space-y-6">
        <p className="text-sm font-extrabold uppercase tracking-widest text-[#1ed765]">
          404 - Page Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Looks like this room closed
        </h1>
        <p className="text-base leading-relaxed text-white/70">
          The page you are looking for moved or no longer exists. Head back home or grab the latest iPartyUp release.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-[#1ed765]/50 bg-[#1ed765] px-7 py-3 text-sm font-bold text-black transition-colors hover:bg-[#4de087]"
          >
            Back to Home
          </Link>
          <Link
            href="/download"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/[0.07] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black"
          >
            Download iPartyUp
          </Link>
        </div>
      </div>
    </main>
  )
}
