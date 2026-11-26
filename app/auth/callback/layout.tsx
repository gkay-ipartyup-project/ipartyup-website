import type { Metadata } from "next"
import { NOINDEX_ROBOTS } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Successfully Signed In | iPartyUp",
  description: "You have successfully signed in to iPartyUp. You can now close this page and return to the app.",
  robots: NOINDEX_ROBOTS,
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
