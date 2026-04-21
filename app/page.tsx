"use client";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
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
import { useState } from "react";

export default function Home() {
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
      <Testimonials/>
      <FAQ />
      <Footer onOpenDemo={openDemo} />
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-7 right-7 z-800 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-2xl shadow-[0_4px_24px_rgba(37,211,102,.45)] animate-fab-pulse transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        💬
      </a>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
