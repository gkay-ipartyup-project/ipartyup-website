"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is iPartyUp?",
    answer: "iPartyUp is an all-in-one streaming platform that brings movies, TV shows, anime, documentaries, and more into a single app. Instead of juggling multiple subscriptions across different services, iPartyUp gives you access to a massive content library — plus the ability to watch synchronized with friends in real-time."
  },
  {
    question: "What content is available on iPartyUp?",
    answer: "iPartyUp offers a wide variety of content including movies, TV series, anime, documentaries, and more. Our library is continuously growing with new titles added regularly. You can also request specific content through the app, and we'll do our best to make it available."
  },
  {
    question: "How much does iPartyUp cost?",
    answer: "iPartyUp offers a free tier with limited access. For the full experience — unlimited content, watch parties, and premium features — our subscription is just $2.99/month. That's one subscription instead of paying for Netflix, Prime, Disney+, Hulu, and Crunchyroll separately."
  },
  {
    question: "How does Watch Together work?",
    answer: "It's simple: create a room in the app, share the invite link or room code with your friends, and start watching. iPartyUp syncs playback to the exact millisecond for everyone in the room. You can chat in real-time, react to moments together, and control playback — all in sync."
  },
  {
    question: "Which platforms does iPartyUp support?",
    answer: "iPartyUp is currently available on Windows and macOS desktop. We're focused on delivering the best desktop experience first. Mobile support may be considered in the future based on community demand."
  },
  {
    question: "How do I get updates?",
    answer: "Updates are delivered automatically. Once you download and install iPartyUp, the app checks for updates and installs them seamlessly. You'll always have the latest features, bug fixes, and content without lifting a finger."
  },
  {
    question: "Is my data safe with iPartyUp?",
    answer: "Absolutely. We take privacy seriously. We don't track your viewing habits, we don't sell your personal information, and we use industry-standard encryption to protect your account data. Your entertainment choices are your business, not ours."
  },
  {
    question: "Can I request content that's not available?",
    answer: "Yes! iPartyUp has a built-in content request feature. You can submit requests directly through the app, and our team reviews them regularly. We have a 24-hour cooldown between requests to keep things fair for everyone."
  },
  {
    question: "Can I watch with friends in different countries?",
    answer: "Yes, iPartyUp works globally. You can create a watch room and invite friends from anywhere in the world. Our low-latency sync technology ensures everyone stays perfectly in sync regardless of their location."
  },
  {
    question: "How do I report a problem or get help?",
    answer: "You can reach us through the Contact page on our website. We aim to respond within 24 hours. For common issues, check this FAQ page first — most questions are answered here."
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
