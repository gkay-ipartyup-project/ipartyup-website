import type { Metadata } from "next";
import { Outfit, Space_Grotesk, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import ContentProtection from "@/components/ContentProtection";
import SiteSettingsWrapper from "@/components/SiteSettingsWrapper";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "iPartyUp | All-In-One Streaming Platform",
  description: "Movies, TV shows, anime, and more — all in one place. Watch synchronized with friends. One subscription, endless entertainment.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <SiteSettingsWrapper>
          <ScrollProgress />
          {children}
          <ScrollToTop />
          <ContentProtection />
        </SiteSettingsWrapper>
      </body>
    </html>
  );
}
