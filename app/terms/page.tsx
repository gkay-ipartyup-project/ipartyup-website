/* eslint-disable react/no-unescaped-entities */
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - iPartyUp",
  description: "Read the iPartyUp Terms of Service.",
}

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Please read these terms carefully before using iPartyUp.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-stremio-dark pt-10 pb-20 lg:pt-16 lg:pb-28 z-10">
        <div className="relative z-10 mx-auto max-w-[900px] px-6">
          <div className="space-y-12 text-white/80">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed mb-4">By downloading, installing, or using iPartyUp ("the App", "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services. These Terms constitute a legally binding agreement between you and iPartyUp.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="leading-relaxed mb-4">iPartyUp is a desktop streaming platform that provides access to movies, TV shows, anime, documentaries, and other content through a unified interface. The Service includes:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>Streaming access to a curated library of entertainment content</li>
<li>Synchronized watch-together rooms with real-time playback sync</li>
<li>Real-time text chat and reactions within watch rooms</li>
<li>Friend connections, search, and social features</li>
<li>Content request capabilities</li>
<li>Automatic application updates</li>
</ul>
<p className="leading-relaxed mb-4">Content availability may vary by region and is subject to change without prior notice. We continuously work to expand and improve our library.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Account Registration & Eligibility</h2>
              <p className="leading-relaxed mb-4">To use iPartyUp, you must create an account. You agree to:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>Provide accurate, current, and complete information during registration</li>
<li>Maintain the security and confidentiality of your login credentials</li>
<li>Accept responsibility for all activities that occur under your account</li>
<li>Notify us immediately of any unauthorized use of your account</li>
</ul>
<p className="leading-relaxed mb-4">You must be at least 13 years old to create an account. If you are between 13 and 18, you represent that you have obtained your parent or legal guardian's consent to use the Service.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Premium Supporter Membership</h2>
              <p className="leading-relaxed mb-4">iPartyUp offers the following plans:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>Free Plan: Limited access to the content library and basic features</li>
<li>Premium Supporter Plan: Full access to the entire library and all supporter perks, available through a $5.99/month membership via Patreon</li>
</ul>
<p className="leading-relaxed mb-4">The Premium Supporter Plan is provided through Patreon's membership platform. The membership recurs monthly through Patreon and may be paused or ended at any time from your Patreon account; any change takes effect at the end of your current membership period. iPartyUp does not process payments directly. All membership billing and management is handled by Patreon under their Terms of Use.</p>
<p className="leading-relaxed mb-4">We reserve the right to adjust Premium Supporter Plan pricing with at least 30 days' advance notice. Continued participation in the membership after a price change constitutes acceptance of the new amount.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Acceptable Use & Prohibited Conduct</h2>
              <p className="leading-relaxed mb-4">You agree not to:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>Use iPartyUp for any illegal or unauthorized purpose</li>
<li>Share, distribute, or publicly broadcast content from the platform</li>
<li>Share your account credentials with others or allow unauthorized access</li>
<li>Attempt to reverse-engineer, decompile, or extract the source code of the application</li>
<li>Circumvent, disable, or interfere with any security or access control features</li>
<li>Use automated tools, bots, or scripts to access or scrape the Service</li>
<li>Harass, bully, threaten, or intimidate other users</li>
<li>Impersonate any person, entity, or iPartyUp representative</li>
<li>Upload or transmit malicious code, viruses, or harmful content</li>
<li>Exploit bugs or vulnerabilities for personal gain or to disrupt the Service</li>
</ul>
<p className="leading-relaxed mb-4">Violation of these terms may result in immediate suspension or termination of your account.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Content & Intellectual Property</h2>
              <p className="leading-relaxed mb-4">All content available through iPartyUp — including but not limited to movies, TV shows, anime, and other media — is provided for personal, non-commercial viewing only. You may not download, record, redistribute, re-stream, or publicly display any content accessed through the platform.</p>
<p className="leading-relaxed mb-4">The iPartyUp name, logo, branding, and all associated intellectual property are owned by iPartyUp and may not be used, reproduced, or modified without prior written permission.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Watch Together & Social Features</h2>
              <p className="leading-relaxed mb-4">iPartyUp's watch-together feature enables synchronized viewing sessions with other users. When using social features, you agree to:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>Behave respectfully toward all participants in watch rooms</li>
<li>Not use chat features to send spam, harmful content, or harassment</li>
<li>Accept that room creators may set rules for their rooms</li>
<li>Understand that we reserve the right to moderate, restrict, or disable rooms or user access if these Terms are violated</li>
</ul>
<p className="leading-relaxed mb-4">Chat content within rooms should comply with our community standards — be respectful, avoid spam, and refrain from sharing harmful or illegal content.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy</h2>
              <p className="leading-relaxed mb-4">Your use of iPartyUp is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at ipartyup.party/privacy to understand how we handle your information. In summary: we collect minimal data, we never sell your information, and we don't track your viewing habits.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers & Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">iPartyUp is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory. We do not warrant that:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>The Service will be uninterrupted, timely, secure, or error-free</li>
<li>Any specific content will remain available</li>
<li>The Service will meet your specific requirements</li>
</ul>
<p className="leading-relaxed mb-4">To the maximum extent permitted by applicable law, iPartyUp and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, or goodwill — arising out of or in connection with your use of the Service.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Account Termination</h2>
              <p className="leading-relaxed mb-4">We reserve the right to suspend or terminate your account at any time if:</p>
<ul className="list-disc pl-6 space-y-2 my-4">
<li>You violate these Terms of Service</li>
<li>You engage in conduct that is harmful to other users, iPartyUp, or third parties</li>
<li>Your account is involved in fraudulent or illegal activity</li>
<li>Required by law or in response to legal process</li>
</ul>
<p className="leading-relaxed mb-4">You may delete your account at any time through the app's settings. Upon termination, your right to use the Service ceases immediately, and your personal data will be handled in accordance with our Privacy Policy (deleted within 30 days).</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Modifications to Terms</h2>
              <p className="leading-relaxed mb-4">We may update these Terms of Service from time to time. When we make material changes, we will notify you through the app or via email. The "Last updated" date at the top of this page will reflect the most recent revision.</p>
<p className="leading-relaxed mb-4">Your continued use of iPartyUp after updated Terms are posted constitutes your acceptance of the changes. If you do not agree to the revised Terms, you should discontinue use and delete your account.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law</h2>
              <p className="leading-relaxed mb-4">These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation first, and if necessary, through binding arbitration or the courts of competent jurisdiction.</p>
            </section>
  
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Contact Information</h2>
              <p className="leading-relaxed mb-4">If you have any questions or concerns about these Terms of Service, please reach out to us at contact@ipartyup.party. We are committed to resolving any concerns promptly and will respond as quickly as possible.</p>
            </section>
  
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
