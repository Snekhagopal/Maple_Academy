import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.webp";
import Image from "next/image";

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero = ({ onOpenDemo }: HeroProps) => {
  return (
    <section id="hero" 
    className="relative min-h-screen flex items-center overflow-hidden "
    // className="relative h-[110vh] flex items-start overflow-hidden"
    >
      
        <div className="absolute inset-0">
          <Image
            src={heroBg}
            alt="Hero"
            fill
            priority
            className="object-cover translate-y-[9%]
            h-full w-full"
          />
        </div>
      
      {/* Dark overlay with less transparency */}
      <div className="absolute inset-0 bg-linear-to-r from-[#080A0F]/80 via-[#080A0F]/65 to-[#080A0F]/40" />
      <div className="absolute inset-0 bg-linear-to-t from-[#080A0F] via-transparent to-[#080A0F]/30" />
      {/* Subtle color tint */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 20% 50%, rgba(200,16,46,0.12) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(201,168,76,0.07) 0%, transparent 50%)" }} />

      <div className="relative z-10 w-full max-w-275 mx-auto px-[5%] pt-25 pb-17.5">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.3)] text-[#C9A84C] text-[.72rem] font-bold tracking-[.1em] uppercase px-4 py-1.5 rounded-full mb-7"
        >
          ♪ Live & Interactive Online Classes
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(4rem,10vw,8rem)] leading-[.92] tracking-[.02em] text-white"
        >
          Learn<br />
          <span className="text-[#C8102E]">Music</span><br />
          <span className="text-[#C9A84C]">Online.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[1.08rem] text-white/65 my-6 leading-[1.8] font-light max-w-140"
        >
          Keyboard · Piano · Guitar · Vocals — expert-led live sessions from anywhere in the world.
          All ages & all levels. Your first class is{" "}
          <strong className="text-[#C9A84C]">free</strong>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex gap-3.5 flex-wrap"
        >
          <button
            onClick={onOpenDemo}
            className="bg-[#C8102E] text-white px-8 py-4 rounded-[7px] font-bold text-[.95rem] inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_28px_rgba(200,16,46,0.28)] hover:shadow-[0_8px_36px_rgba(200,16,46,0.35)] hover:bg-[#9e0c24] cursor-pointer border-none"
          >
            Book Free Demo
          </button>
          <a
            href="#courses"
            className="bg-transparent text-[#C9A84C] px-8 py-4 rounded-[7px] font-semibold text-[.95rem] inline-flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5 border-[1.5px] border-[rgba(201,168,76,0.38)] hover:border-[#C9A84C] hover:bg-[rgba(201,168,76,0.08)]"
          >
            Explore Courses →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
