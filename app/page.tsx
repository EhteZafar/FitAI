import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
