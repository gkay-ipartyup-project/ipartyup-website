/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - iPartyUp",
  description: "Read the iPartyUp Privacy Policy. We value your privacy and only collect what's necessary.",
}

export default function PrivacyPage() {
  return (
    <main className="relative">
      <Navbar />

      <section className="relative overflow-hidden bg-stremio-dark">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_85%_-10%,#0a4f24_0%,#071f0f_38%,#0a0a0a_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_90%_at_15%_20%,#0d3d1a_0%,transparent_55%)]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 pb-[100px] pt-[200px] lg:pb-[120px]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Your privacy is a core principle baked into how iPartyUp is built.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-stremio-dark pt-10 pb-20 lg:pt-16 lg:pb-28 z-10">
        <div className="relative z-10 mx-auto max-w-[900px] px-6">
          <div className="space-y-12 text-white/80">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Our Privacy Commitment</h2>
              <p className="leading-relaxed">
                At iPartyUp, your privacy isn't a marketing bullet point — it's a core principle baked into how the app is built. We have zero interest in collecting, monetizing, or exploiting your personal data. We don't build behavioural profiles and we don't sell your information to anyone. While we do offer ads, we don't run intrusive or annoying ads like other services. Instead, we offer voluntary rewarded ads that users can choose to watch to collect prime tokens for in-app items. Collecting your personal data offers us zero value — so we simply don't, beyond the minimum required to actually make the app work.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We collect only the minimum information required to provide our services:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Account Information:</strong> Your name, email address, and profile picture — provided when you create an account or sign in via Google.</li>
                <li><strong>Authentication Data:</strong> Secure tokens to keep you logged in and verify your identity.</li>
                <li><strong>Basic Technical Data:</strong> Device type and operating system for compatibility and troubleshooting purposes.</li>
              </ul>
              <p className="leading-relaxed mb-4">We do NOT collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your viewing history or what content you watch</li>
                <li>Your location data (beyond what your IP address may generally indicate)</li>
                <li>Keystroke data, screen recordings, or device identifiers for tracking</li>
                <li>Any data for advertising or marketing profiling purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">The information we collect is used exclusively to:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Create and manage your iPartyUp account</li>
                <li>Enable core features such as watch rooms, friend connections, and real-time sync</li>
                <li>Authenticate your identity and secure your account</li>
                <li>Send essential service communications (security alerts, critical updates)</li>
                <li>Detect and prevent fraud, abuse, or unauthorized access</li>
              </ul>
              <p className="leading-relaxed">We do not use your information for targeted advertising, behavioral analytics, or any purpose unrelated to delivering our service to you.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing & Third Parties</h2>
              <p className="leading-relaxed mb-4">We do not sell, rent, or trade your personal information. We may share limited data only in these circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Service Providers:</strong> We use trusted third-party services for authentication (Google Sign-In) and cloud infrastructure (hosting, database). These providers receive only the minimum data necessary to operate, and are contractually bound to protect your information.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law, court order, or to protect the safety and security of our users.</li>
                <li><strong>Your Choices:</strong> Your display name and avatar are visible to other users in watch rooms. You control what profile information is shared.</li>
              </ul>
              <p className="leading-relaxed">We carefully vet every third-party service we use and share only what is strictly necessary.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Retention & Deletion</h2>
              <p className="leading-relaxed mb-4">We retain your account data only as long as your account remains active. When you delete your account:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your personal data is permanently removed from our systems within 30 days</li>
                <li>Any content associated with your account (watch rooms, friend lists) is deleted</li>
                <li>Anonymous, aggregated statistics (such as total user counts) may be retained as they cannot be traced back to you</li>
              </ul>
              <p className="leading-relaxed">You can request complete deletion of your data at any time through the app or by contacting us.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
              <p className="leading-relaxed mb-4">Regardless of where you live, we provide all users with the following rights:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Update or correct any inaccurate information</li>
                <li><strong>Deletion:</strong> Delete your account and all associated personal data</li>
                <li><strong>Portability:</strong> Export your data in a standard, machine-readable format</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for optional data processing at any time</li>
                <li><strong>Objection:</strong> Object to any processing of your personal information</li>
              </ul>
              <p className="leading-relaxed">For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). For California residents, we comply with the California Consumer Privacy Act (CCPA). To exercise any of these rights, contact us at contact@ipartyup.party. We respond within 30 days.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies & Local Storage</h2>
              <p className="leading-relaxed">iPartyUp is a desktop application and does not use browser cookies or web tracking technologies. We use local storage on your device solely to save your preferences, authentication tokens, and app settings. This data remains on your device and is not transmitted to our servers unless necessary for authentication.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
              <p className="leading-relaxed">iPartyUp is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have inadvertently collected information from a child under 13, we will delete that information immediately. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Data Security</h2>
              <p className="leading-relaxed mb-4">We implement industry-standard security measures to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>TLS/SSL encryption for all data in transit</li>
                <li>Encryption at rest for stored personal data</li>
                <li>Secure authentication protocols with session management</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls limiting employee access to user data on a need-to-know basis</li>
              </ul>
              <p className="leading-relaxed">While no system is 100% secure, we are committed to protecting your data with the best available technology and practices.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
              <p className="leading-relaxed">We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app and update the "Last updated" date at the top of this page. Your continued use of iPartyUp after changes are posted constitutes acceptance of the updated policy. We encourage you to review this page periodically.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="leading-relaxed">If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us at contact@ipartyup.party. We take every privacy inquiry seriously and will respond as quickly as possible.</p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
