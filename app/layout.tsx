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
  title: 'iPartyUp - Freedom to Stream',
  description:
    'iPartyUp is a modern media center that gives you the freedom to watch everything you want.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${poppins.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteSettingsWrapper>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </SiteSettingsWrapper>
      </body>
    </html>
  )
}
