import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OTTShowcase from "@/components/OTTShowcase";
import DownloadSection from "@/components/Download";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <OTTShowcase />
      <Stats />
      <Features />
      <DownloadSection />
      <Footer />
    </main>
  );
}
