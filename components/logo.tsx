import Image from "next/image"

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/favicon.png"
        alt="iPartyUp logo"
        width={36}
        height={36}
        className="h-9 w-9"
      />
      <span
        className="text-[20px] font-semibold tracking-[0.04em]"
        style={{ fontFamily: "'Brolink', sans-serif" }}
      >
        <span className="text-white">iParty</span>
        <span className="text-stremio-green">Up</span>
      </span>
    </span>
  )
}
