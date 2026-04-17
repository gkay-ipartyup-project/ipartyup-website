"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By downloading, installing, or using iPartyUp, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use our services. These terms apply to all users of iPartyUp, including free and premium subscribers."
    },
    {
      title: "2. Description of Service",
      content: "iPartyUp is a desktop streaming platform that provides access to a library of movies, TV shows, anime, documentaries, and other content. The service also includes synchronized watch-together features, real-time chat, friend connections, and content request capabilities. The availability of specific content may vary and is subject to change without notice."
    },
    {
      title: "3. User Accounts & Registration",
      content: "To use iPartyUp, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating your account. You must be at least 13 years old to create an account. If you are under 18, you represent that you have your parent or guardian's consent to use the service."
    },
    {
      title: "4. Subscription & Payments",
      content: "iPartyUp offers a free tier with limited access and a premium subscription at $2.99 per month for full access to all content and features. Premium subscriptions are billed monthly and will automatically renew unless cancelled. You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. Refunds are handled on a case-by-case basis. Prices may change with reasonable advance notice."
    },
    {
      title: "5. User Conduct & Prohibited Activities",
      content: "You agree not to: use iPartyUp for any illegal or unauthorized purpose; harass, bully, or intimidate other users; share your account credentials with others or allow unauthorized access to your account; attempt to reverse-engineer, decompile, or otherwise extract the source code of the application; circumvent or disable any security or access control features; use automated tools, bots, or scripts to access the service; distribute, share, or publicly stream content from iPartyUp outside the platform; impersonate any person or entity."
    },
    {
      title: "6. Content & Intellectual Property",
      content: "All content available through iPartyUp, including but not limited to movies, TV shows, anime, and other media, is provided for personal, non-commercial viewing only. You may not download, record, redistribute, or publicly display any content from the platform. The iPartyUp name, logo, and all related branding are the property of iPartyUp and may not be used without written permission."
    },
    {
      title: "7. Watch Together & Social Features",
      content: "iPartyUp's watch-together feature allows you to create rooms and invite others to watch content in sync. Room creators are responsible for the conduct within their rooms. We reserve the right to disable rooms or restrict users who violate these terms. Chat content within rooms should comply with our community guidelines — be respectful, no spam, and no harmful content."
    },
    {
      title: "8. Privacy",
      content: "Your use of iPartyUp is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at ipartyup.party/privacy to understand how we collect, use, and protect your information."
    },
    {
      title: "9. Disclaimers & Limitation of Liability",
      content: "iPartyUp is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. We do not guarantee that the service will be uninterrupted, error-free, or that any content will remain available. To the maximum extent permitted by law, iPartyUp shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service."
    },
    {
      title: "10. Termination",
      content: "We reserve the right to suspend or terminate your account at any time if you violate these terms or engage in conduct that we determine, in our sole discretion, to be harmful to other users, us, or third parties. You may also delete your account at any time through the app. Upon termination, your right to use the service ceases immediately, and any data associated with your account may be deleted."
    },
    {
      title: "11. Changes to Terms",
      content: "We may modify these Terms of Service from time to time. When we make significant changes, we will notify you through the app or by email. Your continued use of iPartyUp after any changes constitutes acceptance of the revised terms. If you do not agree to the new terms, you should stop using the service and delete your account."
    },
    {
      title: "12. Contact Information",
      content: "If you have any questions about these Terms of Service, please reach out to us through our Contact page at ipartyup.party/contact. We are committed to resolving any concerns and will respond as quickly as possible."
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
          <p className="text-xl text-white/40 font-medium text-center">Please read our terms of service carefully before using iPartyUp.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/30 text-sm mb-16"
        >
          Last updated: April 15, 2026
        </motion.p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-8 rounded-3xl bg-muted/20 border border-white/5 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-primary">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
