"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "When you create an iPartyUp account, we collect the information you provide directly, such as your name, email address, and profile picture. If you sign in using Google, we receive your basic profile information from Google. We also automatically collect certain technical information when you use our app, including your device type, operating system, IP address, and general usage statistics (such as app opens and session duration). We do not track, log, or store your viewing history or the specific content you watch."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use the information we collect to: provide, maintain, and improve our services; create and manage your account; enable social features like watch rooms and friend connections; send you important updates about the service, security alerts, and support messages; detect and prevent fraud, abuse, or security incidents. We do not use your data for targeted advertising and we do not build advertising profiles based on your activity."
    },
    {
      title: "3. Information Sharing & Disclosure",
      content: "We do not sell, rent, or trade your personal information to third parties. We may share limited information with: service providers who help us operate the platform (such as authentication and hosting providers), but only as necessary to provide our services; law enforcement or government authorities when required by law, court order, or to protect the safety of our users; other users, but only the profile information you choose to make visible (such as your display name and avatar in watch rooms)."
    },
    {
      title: "4. Data Retention",
      content: "We retain your account information for as long as your account is active. If you delete your account, we will remove your personal data from our systems within 30 days, except where we are required by law to retain certain records. Anonymous, aggregated data (such as total user counts) may be retained indefinitely as it cannot be linked back to you."
    },
    {
      title: "5. Your Privacy Rights",
      content: "You have the right to: access the personal information we hold about you; correct any inaccurate information; delete your account and associated data; export your data in a portable format; withdraw consent for optional data processing at any time. To exercise any of these rights, contact us through the Contact page on our website. We will respond within 30 days."
    },
    {
      title: "6. Cookies & Local Storage",
      content: "iPartyUp is a desktop application and does not use browser cookies. We use local storage on your device to save your preferences, authentication tokens, and app settings. This data stays on your device and is not transmitted to our servers unless necessary for authentication or syncing your account settings."
    },
    {
      title: "7. Children's Privacy",
      content: "iPartyUp is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will promptly delete that information. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately."
    },
    {
      title: "8. Third-Party Services",
      content: "iPartyUp uses third-party services for authentication (such as Google Sign-In) and cloud infrastructure. These services have their own privacy policies, and we encourage you to review them. We select our service providers carefully and only share the minimum information necessary for them to provide their services to us."
    },
    {
      title: "9. Data Security",
      content: "We implement industry-standard security measures to protect your information, including encryption of data in transit and at rest, secure authentication protocols, and regular security reviews. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      title: "10. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through the app or by email. We encourage you to review this page periodically. Your continued use of iPartyUp after any changes indicates your acceptance of the updated policy."
    },
    {
      title: "11. Contact Us",
      content: "If you have any questions about this Privacy Policy or our data practices, please reach out to us through the Contact page on our website at ipartyup.party/contact. We take your privacy questions seriously and will respond as quickly as possible."
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
          <p className="text-xl text-white/40 font-medium text-center">Your privacy is our top priority. Learn how iPartyUp handles your data.</p>
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
