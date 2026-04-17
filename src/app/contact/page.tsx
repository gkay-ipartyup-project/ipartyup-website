"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background pt-32">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 mb-20">
        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
          >
            <Mail size={32} className="text-primary" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Send size={24} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-2">Message Sent!</h3>
                  <p className="text-white/50">We&apos;ll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 block">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                        placeholder="John Doe"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'name' ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="relative">
                      <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 block">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                        placeholder="john@example.com"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'email' ? '100%' : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all"
                      placeholder="How can we help?"
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'subject' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="relative">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40 mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-b-xl"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
              <h3 className="text-lg font-black uppercase tracking-wider mb-4 text-primary">Info</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:contact@ipartyup.party"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase">Email</p>
                    <p className="text-sm font-bold group-hover:text-primary transition-colors">contact@ipartyup.party</p>
                  </div>
                </motion.a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase">Response</p>
                    <p className="text-sm font-bold">Within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase">Location</p>
                    <p className="text-sm font-bold">Global (Remote)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2 text-primary">Need quick answers?</h4>
              <p className="text-sm text-white/60 mb-3">
                Check our FAQ for common questions and solutions.
              </p>
              <div className="flex gap-2">
                <a href="/faq" className="px-3 py-1.5 text-xs font-bold uppercase bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                  FAQ
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
