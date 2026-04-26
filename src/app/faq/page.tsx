"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is iPartyUp?",
    answer: "iPartyUp is an all-in-one streaming app that brings movies, series, anime, documentaries, and more into a single place. Instead of paying for a handful of separate memberships just to watch the things you love, iPartyUp gives you one curated library — and the best watch-together experience anywhere, so you can enjoy it all in sync with your friends, your partner, or your family."
  },
  {
    question: "Do I get anything for free when I sign up?",
    answer: "Yes! Every new account gets 24 hours of full Premium access the moment you sign up — no payment, no card, nothing to cancel. You can explore the entire content library, host bigger watch parties, invite free-tier friends into premium content with you, and try every premium feature. After 24 hours you go to the standard free tier and can support the developer for permanent Premium any time."
  },
  {
    question: "What's included in the library?",
    answer: "iPartyUp's own library covers movies, full series and seasons, a massive anime catalogue with sub and dub options, and documentaries — with new titles added every week. You can also plug in public YouTube videos, YouTube Live streams, and your own Google Drive uploads. If something is missing, you can request it right from the app."
  },
  {
    question: "How is this different from just watching the same link on a call?",
    answer: "Very different. iPartyUp syncs playback frame-perfectly to every viewer automatically — no \"press play in 3, 2, 1\", no drifting out of sync, no laggy screen-share. Hosts can pause, rewind, and skip for the whole room with one tap. There's a dedicated chat panel and optional voice chat built right next to the video, so reacting and talking feels natural instead of awkward."
  },
  {
    question: "Do my friends need to pay to join?",
    answer: "No. Anyone with a free account can join your rooms. Free users can host rooms up to 3 people, and Premium Supporters can host rooms up to 12 and even invite free-tier friends into premium-only content with them."
  },
  {
    question: "How much does iPartyUp cost?",
    answer: "Free forever with the core library and watch-together features. If you want the entire library unlocked plus the bonus features, the Premium Supporter Plan is $5.99/month and you join through our Patreon. Just download iPartyUp, tap the Support Developer button on the dashboard, and your perks unlock the moment you join. You can pause or end the membership anytime from Patreon."
  },
  {
    question: "What extra do Premium Supporters get?",
    answer: "The entire content library unlocked, rooms up to 12 viewers, the ability to invite up to 2 free-tier friends into premium content with you, a floating fullscreen chat panel, a dashboard notification panel, continue-watching across sessions, a Premium Supporter badge, personal chat with the creator, faster content-request refresh (24h instead of 72h), and every upcoming perk as it ships."
  },
  {
    question: "Which devices does iPartyUp run on?",
    answer: "iPartyUp is currently available on Windows and macOS desktop. We're focused on nailing the desktop experience first. Mobile may come later based on community demand."
  },
  {
    question: "Do you track what I watch?",
    answer: "No. We do not track your viewing habits for advertising or profiling. We don't run ads and we don't sell your data — there's nothing to sell because we don't collect it. The only data we store is what's strictly needed to run the app (your account, your rooms, your friends list). You can delete everything anytime from the app."
  },
  {
    question: "Can I request content that isn't in the library?",
    answer: "Yes. Use the Request Content feature inside the app. Free users can submit a request every 72 hours, Premium Supporters every 24 hours. Requests are reviewed regularly and fulfilled when possible."
  },
  {
    question: "Can I watch with friends in different countries?",
    answer: "Yes. iPartyUp works anywhere. Create a room, share the room code, and everyone joins in seconds. Our sync keeps the whole room on the same frame regardless of distance."
  },
  {
    question: "Is there voice chat?",
    answer: "Yes, in-room voice chat is built in. Tap into voice whenever you'd rather actually talk with the room instead of typing. It's optional — text chat, reactions, and emojis are always available too."
  },
  {
    question: "How do I get updates?",
    answer: "Updates are automatic. Once installed, iPartyUp checks for new versions and installs them quietly in the background. You'll always have the latest features, fixes, and content without lifting a finger."
  },
  {
    question: "How do I report a bug or request a feature?",
    answer: "Use the Reports & Feedback section inside the app — every message is read personally and typically gets a reply within about 24 hours."
  }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-border last:border-none"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group transition-all"
      >
        <span className="text-xl font-bold group-hover:text-primary transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-muted transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20' : ''}`}>
          {isOpen ? <Minus size={18} className="text-primary" /> : <Plus size={18} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-muted-foreground leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background pt-32 px-6">
      <Navbar />
      
      <div className="max-w-3xl mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-white/40 font-medium text-center">Everything you need to know about iPartyUp.</p>
        </motion.div>

        <div className="bg-card rounded-3xl p-8 border border-border shadow-2xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
