"use client";
import { useState } from "react";

// components
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

// route-components
import About from "@/routeComponents/Home/About";
import Courses from "@/routeComponents/Home/Courses";
import DemoModal from "@/routeComponents/Home/DemoModal";
import FAQ from "@/routeComponents/Home/FAQ";
import GradedExams from "@/routeComponents/Home/GradedExams";
import Hero from "@/routeComponents/Home/Hero";
import Marquee from "@/routeComponents/Home/Marquee";
import Pricing from "@/routeComponents/Home/Pricing";
import StatsBar from "@/routeComponents/Home/StatsBar";
import Testimonials from "@/routeComponents/Home/Testimonials";
import WhyUs from "@/routeComponents/Home/WhyUs";

/**
 * HomeClient — contains all stateful/interactive logic for the home page.
 * Kept separate so that app/page.tsx can remain a Server Component,
 * enabling JSON-LD structured data injection server-side.
 */
export default function HomeClient() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <>
      <Header onOpenDemo={openDemo} />
      <Hero onOpenDemo={openDemo} />
      <StatsBar />
      <Marquee />
      <About />
      <Courses onOpenDemo={openDemo} />
      <GradedExams />
      <Pricing onOpenDemo={openDemo} />
      <WhyUs onOpenDemo={openDemo} />
      <Testimonials />
      <FAQ />
      <Footer onOpenDemo={openDemo} />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/9043872168"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Maple Diary Academy on WhatsApp"
        className="fixed bottom-7 right-7 z-800 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-[0_4px_24px_rgba(37,211,102,.45)] animate-fab-pulse transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
