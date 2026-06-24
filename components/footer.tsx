import { Logo } from "./logo"

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.45 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.6l8-9.2L.9 2h7l4.9 6.5L18.9 2Zm-2.4 18h1.9L7.6 4H5.5l11 16Z" />
    </svg>
  )
}

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12a2.1 2.1 0 0 0-3.6-1.5 10.2 10.2 0 0 0-5.2-1.6l.9-4.1 2.9.7a1.5 1.5 0 1 0 .2-1l-3.3-.7a.5.5 0 0 0-.6.4l-1 4.7a10.3 10.3 0 0 0-5.3 1.6A2.1 2.1 0 1 0 4 14.3v.5c0 2.8 3.3 5 7.4 5s7.4-2.2 7.4-5v-.5A2.1 2.1 0 0 0 22 12ZM8 13.5a1.3 1.3 0 1 1 2.6 0 1.3 1.3 0 0 1-2.6 0Zm7.3 3.6c-1 .9-3 1-3.6 1s-2.6-.1-3.6-1a.4.4 0 0 1 .5-.6c.7.6 2 .8 3.1.8s2.5-.2 3.1-.8a.4.4 0 1 1 .5.6Zm-.2-2.3a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6Z" />
    </svg>
  )
}

const COLUMNS = [
  {
    title: "COMPANY",
    links: ["Technology", "Downloads", "Addon SDK", "Partners"],
  },
  {
    title: "COMMUNITY",
    links: ["Community", "Fanart Gallery", "Blog", "Careers"],
  },
  {
    title: "CONTACTS",
    links: [
      "Help center",
      "Business inquiries",
      "Terms & conditions",
      "Privacy policy",
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-[linear-gradient(164deg,#031a0a_0%,#0a3d1a_100%)] pt-16 pb-12 z-0">
        <div className="mx-auto max-w-[1320px] px-6">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h5 className="text-sm font-semibold tracking-wider text-white/50">
                  {col.title}
                </h5>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[15px] text-white/90 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="col-span-2 flex flex-col items-start gap-8 md:col-span-3 lg:col-span-1 lg:items-end">
              <div className="flex items-center gap-5 text-white/80">
                <a href="#" aria-label="Facebook" className="hover:text-white">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="X" className="hover:text-white">
                  <XIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Reddit" className="hover:text-white">
                  <RedditIcon className="h-6 w-6" />
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/50">
                Information provided by
                <span className="rounded bg-stremio-green px-1.5 py-0.5 text-xs font-bold text-white">
                  tvdb
                </span>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <Logo className="h-7 text-white/80" />
            <p className="text-sm text-white/50">Copyright © 2026 · iPartyUp</p>
          </div>
        </div>
      </footer>
  )
}
