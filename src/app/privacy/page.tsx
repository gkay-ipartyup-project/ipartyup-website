"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Trash2, UserCheck, Globe } from "lucide-react";

const commitments = [
  { icon: Shield, title: "We Never Sell Your Data", description: "Your personal information is never sold, rented, or traded to third parties. Period." },
  { icon: Eye, title: "No Tracking or Profiling", description: "We don't track what you watch, build advertising profiles, or monitor your viewing habits." },
  { icon: Lock, title: "Encrypted by Default", description: "All data is encrypted in transit and at rest using industry-standard protocols." },
];

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Our Privacy Commitment",
      content: `At iPartyUp, your privacy isn't just a policy — it's a core principle. We built iPartyUp to be a streaming platform that respects its users. We have no interest in collecting, monetizing, or exploiting your personal data. We don't build behavioral profiles, and we don't sell your information to anyone. Collecting your data offers us zero value — so we simply don't do it beyond what's strictly necessary to make the app work.`
    },
    {
      title: "2. Information We Collect",
      content: `We collect only the minimum information required to provide our services:

• Account Information: Your name, email address, and profile picture — provided when you create an account or sign in via Google.
• Authentication Data: Secure tokens to keep you logged in and verify your identity.
• Basic Technical Data: Device type and operating system for compatibility and troubleshooting purposes.

We do NOT collect:
• Your viewing history or what content you watch
• Your location data (beyond what your IP address may generally indicate)
• Keystroke data, screen recordings, or device identifiers for tracking
• Any data for advertising or marketing profiling purposes`
    },
    {
      title: "3. How We Use Your Information",
      content: `The information we collect is used exclusively to:

• Create and manage your iPartyUp account
• Enable core features such as watch rooms, friend connections, and real-time sync
• Authenticate your identity and secure your account
• Send essential service communications (security alerts, critical updates)
• Detect and prevent fraud, abuse, or unauthorized access

We do not use your information for targeted advertising, behavioral analytics, or any purpose unrelated to delivering our service to you.`
    },
    {
      title: "4. Information Sharing & Third Parties",
      content: `We do not sell, rent, or trade your personal information. We may share limited data only in these circumstances:

• Service Providers: We use trusted third-party services for authentication (Google Sign-In) and cloud infrastructure (hosting, database). These providers receive only the minimum data necessary to operate, and are contractually bound to protect your information.
• Legal Requirements: We may disclose information if required by law, court order, or to protect the safety and security of our users.
• Your Choices: Your display name and avatar are visible to other users in watch rooms. You control what profile information is shared.

We carefully vet every third-party service we use and share only what is strictly necessary.`
    },
    {
      title: "5. Data Retention & Deletion",
      content: `We retain your account data only as long as your account remains active. When you delete your account:

• Your personal data is permanently removed from our systems within 30 days
• Any content associated with your account (watch rooms, friend lists) is deleted
• Anonymous, aggregated statistics (such as total user counts) may be retained as they cannot be traced back to you

You can request complete deletion of your data at any time through the app or by contacting us.`
    },
    {
      title: "6. Your Privacy Rights",
      content: `Regardless of where you live, we provide all users with the following rights:

• Access: Request a copy of the personal information we hold about you
• Correction: Update or correct any inaccurate information
• Deletion: Delete your account and all associated personal data
• Portability: Export your data in a standard, machine-readable format
• Withdrawal: Withdraw consent for optional data processing at any time
• Objection: Object to any processing of your personal information

For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR). For California residents, we comply with the California Consumer Privacy Act (CCPA). To exercise any of these rights, contact us at ipartyup.party/contact. We respond within 30 days.`
    },
    {
      title: "7. Cookies & Local Storage",
      content: `iPartyUp is a desktop application and does not use browser cookies or web tracking technologies. We use local storage on your device solely to save your preferences, authentication tokens, and app settings. This data remains on your device and is not transmitted to our servers unless necessary for authentication.`
    },
    {
      title: "8. Children's Privacy",
      content: `iPartyUp is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have inadvertently collected information from a child under 13, we will delete that information immediately. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.`
    },
    {
      title: "9. Data Security",
      content: `We implement industry-standard security measures to protect your information, including:

• TLS/SSL encryption for all data in transit
• Encryption at rest for stored personal data
• Secure authentication protocols with session management
• Regular security audits and vulnerability assessments
• Access controls limiting employee access to user data on a need-to-know basis

While no system is 100% secure, we are committed to protecting your data with the best available technology and practices.`
    },
    {
      title: "10. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app and update the "Last updated" date at the top of this page. Your continued use of iPartyUp after changes are posted constitutes acceptance of the updated policy. We encourage you to review this page periodically.`
    },
    {
      title: "11. Contact Us",
      content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us through our Contact page at ipartyup.party/contact. We take every privacy inquiry seriously and will respond as quickly as possible.`
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
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Privacy <span className="text-primary">Policy</span></h1>
          <p className="text-xl text-white/40 font-medium text-center max-w-2xl mx-auto">Your data is yours. We don&apos;t collect it, we don&apos;t sell it, and we have no reason to.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-white/30 text-sm mb-12"
        >
          Last updated: April 18, 2026
        </motion.p>

        {/* Privacy Commitments Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {commitments.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-primary/5 border border-primary/15 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-bold text-sm mb-2 text-white">{item.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>

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
