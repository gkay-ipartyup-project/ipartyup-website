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
