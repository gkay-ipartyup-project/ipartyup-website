import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poppins, IBM_Plex_Sans_Arabic } from 'next/font/google'
import './globals.css'
import SiteSettingsWrapper from '@/components/SiteSettingsWrapper'
import { SmoothScroll } from '@/components/smooth-scroll'
import { LanguageProvider } from '@/lib/language-context'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'iPartyUp - Watch Together in Perfect Sync',
  description:
    'iPartyUp is a synchronized watch-party streaming app for Windows, macOS, and Android. Watch movies, series, and anime together in frame-perfect sync with friends and family.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "iPartyUp",
    "url": "https://ipartyup.party",
    "description":
      "iPartyUp is a synchronized watch-party streaming app for Windows, macOS, and Android. Watch movies, series, and anime together in frame-perfect sync with friends and family.",
  }

  const sitelinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "iPartyUp Pages & Resources",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/about",
          "name": "About iPartyUp",
          "description": "Learn about iPartyUp, available on Windows, macOS, and Android, with iOS on the way."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/pricing",
          "name": "Pricing",
          "description": "Start watching for free, or support independent development with the Premium Supporter plan."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/download",
          "name": "Download",
          "description": "Get the official iPartyUp apps for Windows, macOS, and Android on Google Play."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/updates",
          "name": "What's New",
          "description": "View live iPartyUp release notes, new features, bug fixes, and improvements."
        }
      }
    ]
  }

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${poppins.variable} ${ibmPlexSansArabic.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preload" as="image" href="/hero-cards.webp" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <LanguageProvider>
          <SmoothScroll />
          <SiteSettingsWrapper>
            {children}
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </SiteSettingsWrapper>
        </LanguageProvider>
      </body>
    </html>
  )
}
