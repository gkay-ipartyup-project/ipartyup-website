"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By downloading, installing, or using iPartyUp ("the App", "the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our services. These Terms constitute a legally binding agreement between you and iPartyUp.`
    },
    {
      title: "2. Description of Service",
      content: `iPartyUp is a desktop streaming platform that provides access to movies, TV shows, anime, documentaries, and other content through a unified interface. The Service includes:

• Streaming access to a curated library of entertainment content
• Synchronized watch-together rooms with real-time playback sync
• Real-time text chat and reactions within watch rooms
• Friend connections, search, and social features
• Content request capabilities
• Automatic application updates

Content availability may vary by region and is subject to change without prior notice. We continuously work to expand and improve our library.`
    },
    {
      title: "3. Account Registration & Eligibility",
      content: `To use iPartyUp, you must create an account. You agree to:

• Provide accurate, current, and complete information during registration
• Maintain the security and confidentiality of your login credentials
• Accept responsibility for all activities that occur under your account
• Notify us immediately of any unauthorized use of your account

You must be at least 13 years old to create an account. If you are between 13 and 18, you represent that you have obtained your parent or legal guardian's consent to use the Service.`
    },
    {
      title: "4. Premium Supporter Membership",
      content: `iPartyUp offers the following plans:

• Free Plan: Limited access to the content library and basic features
• Premium Supporter Plan: Full access to the entire library and all supporter perks, available through a $5.99/month membership via Patreon

The Premium Supporter Plan is provided through Patreon's membership platform. The membership recurs monthly through Patreon and may be paused or ended at any time from your Patreon account; any change takes effect at the end of your current membership period. iPartyUp does not process payments directly. All membership billing and management is handled by Patreon under their Terms of Use.

We reserve the right to adjust Premium Supporter Plan pricing with at least 30 days' advance notice. Continued participation in the membership after a price change constitutes acceptance of the new amount.`
    },
    {
      title: "5. Acceptable Use & Prohibited Conduct",
      content: `You agree not to:

• Use iPartyUp for any illegal or unauthorized purpose
• Share, distribute, or publicly broadcast content from the platform
• Share your account credentials with others or allow unauthorized access
• Attempt to reverse-engineer, decompile, or extract the source code of the application
• Circumvent, disable, or interfere with any security or access control features
• Use automated tools, bots, or scripts to access or scrape the Service
• Harass, bully, threaten, or intimidate other users
• Impersonate any person, entity, or iPartyUp representative
• Upload or transmit malicious code, viruses, or harmful content
• Exploit bugs or vulnerabilities for personal gain or to disrupt the Service

Violation of these terms may result in immediate suspension or termination of your account.`
    },
    {
      title: "6. Content & Intellectual Property",
      content: `All content available through iPartyUp — including but not limited to movies, TV shows, anime, and other media — is provided for personal, non-commercial viewing only. You may not download, record, redistribute, re-stream, or publicly display any content accessed through the platform.

The iPartyUp name, logo, branding, and all associated intellectual property are owned by iPartyUp and may not be used, reproduced, or modified without prior written permission.`
    },
    {
      title: "7. Watch Together & Social Features",
      content: `iPartyUp's watch-together feature enables synchronized viewing sessions with other users. When using social features, you agree to:

• Behave respectfully toward all participants in watch rooms
• Not use chat features to send spam, harmful content, or harassment
• Accept that room creators may set rules for their rooms
• Understand that we reserve the right to moderate, restrict, or disable rooms or user access if these Terms are violated

Chat content within rooms should comply with our community standards — be respectful, avoid spam, and refrain from sharing harmful or illegal content.`
    },
    {
      title: "8. Privacy",
      content: `Your use of iPartyUp is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at ipartyup.party/privacy to understand how we handle your information. In summary: we collect minimal data, we never sell your information, and we don't track your viewing habits.`
    },
    {
      title: "9. Disclaimers & Limitation of Liability",
      content: `iPartyUp is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind, whether express, implied, or statutory. We do not warrant that:

• The Service will be uninterrupted, timely, secure, or error-free
• Any specific content will remain available
• The Service will meet your specific requirements

To the maximum extent permitted by applicable law, iPartyUp and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of profits, data, or goodwill — arising out of or in connection with your use of the Service.`
    },
    {
      title: "10. Account Termination",
      content: `We reserve the right to suspend or terminate your account at any time if:

• You violate these Terms of Service
• You engage in conduct that is harmful to other users, iPartyUp, or third parties
• Your account is involved in fraudulent or illegal activity
• Required by law or in response to legal process

You may delete your account at any time through the app's settings. Upon termination, your right to use the Service ceases immediately, and your personal data will be handled in accordance with our Privacy Policy (deleted within 30 days).`
    },
    {
      title: "11. Modifications to Terms",
      content: `We may update these Terms of Service from time to time. When we make material changes, we will notify you through the app or via email. The "Last updated" date at the top of this page will reflect the most recent revision.

Your continued use of iPartyUp after updated Terms are posted constitutes your acceptance of the changes. If you do not agree to the revised Terms, you should discontinue use and delete your account.`
    },
    {
      title: "12. Governing Law",
      content: `These Terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these Terms or your use of the Service shall be resolved through good-faith negotiation first, and if necessary, through binding arbitration or the courts of competent jurisdiction.`
    },
    {
      title: "13. Contact Information",
      content: `If you have any questions or concerns about these Terms of Service, please contact us through our Contact page at ipartyup.party/contact. We are committed to resolving any concerns promptly and will respond as quickly as possible.`
    }
  ];

  return (
    <main className="min-h-screen bg-background pt-32 px-6">
      <Navbar />
      
      <div className="max-w-4xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Terms of <span className="text-primary">Service</span></h1>
          <p className="text-xl text-white/40 font-medium text-center max-w-2xl mx-auto">Please read these terms carefully before using iPartyUp.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/30 text-sm mb-16"
        >
          Last updated: April 24, 2026
        </motion.p>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5"
            >
              <h2 className="text-lg font-bold mb-4 text-primary">{section.title}</h2>
              <div className="text-white/50 leading-relaxed text-[15px] whitespace-pre-line">
                {section.content}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
