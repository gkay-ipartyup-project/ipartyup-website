import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Poppins } from 'next/font/google'
import './globals.css'
import SiteSettingsWrapper from '@/components/SiteSettingsWrapper'

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'iPartyUp - Watch Together in Perfect Sync',
  description:
    'iPartyUp is a premium synchronized streaming app. Watch movies, series, and anime together in frame-perfect sync with friends and family, no matter how far apart you live.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
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
    "description": "iPartyUp is a premium synchronized streaming app. Watch movies, series, and anime together in frame-perfect sync with friends and family, no matter how far apart you live.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ipartyup.party/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const sitelinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "iPartyUp Features & Resources",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/about",
          "name": "iPartyUp App",
          "description": "A synchronized streaming app currently available for Windows, macOS, and Android. Soon coming to iOS."
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/pricing",
          "name": "Pricing",
          "description": "Start watching for free, or support the developer with the Premium Supporter plan."
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/download",
          "name": "Download",
          "description": "Get the official iPartyUp installers for Windows, macOS, and Android and watch in sync."
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "WebPage",
          "@id": "https://ipartyup.party/updates",
          "name": "What's New",
          "description": "View iPartyUp release notes, new streaming features, bug fixes, and improvements."
        }
      }
    ]
  }

  return (
    <html lang="en" className={`${plusJakarta.variable} ${poppins.variable} bg-background`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <SiteSettingsWrapper>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SiteSettingsWrapper>
      </body>
    </html>
  )
}
