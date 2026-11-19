import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <span dir="ltr" className={`inline-flex items-center gap-2.5 sm:gap-3 ${className ?? ""}`}>
      <Image
        src="/favicon.webp"
        alt="iPartyUp logo"
        width={36}
        height={36}
        className="h-8 w-8 sm:h-9 sm:w-9"
        priority
      />
      <span
        className="text-[18px] sm:text-[20px] font-semibold tracking-[0.04em]"
        style={{ fontFamily: "'Brolink', sans-serif" }}
      >
        <span className="text-white">iParty</span>
        <span className="text-stremio-green">Up</span>
      </span>
    </span>
  )
}
