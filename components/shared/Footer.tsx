import logo from "@/assets/logo.jpg";
import { Mail, MessageCircle } from "lucide-react";

import Image from "next/image";
import instagram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";

interface FooterProps {
  onOpenDemo: () => void;
}

const Footer = ({ onOpenDemo }: FooterProps) => (
  <footer aria-label="Site footer" className="bg-secondary py-16 px-[5%]">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-11">
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <Image
            src={logo}
            alt="Maple Diary Academy"
            className="w-10 h-10 rounded-lg"
          />
          <div className="leading-tight">
            <strong className="block font-heading text-[1.05rem] font-black text-secondary-foreground">
              Maple Diary Academy
            </strong>
            <span className="text-[.68rem] tracking-widest uppercase text-primary font-semibold">
              Online Music Classes
            </span>
          </div>
        </div>
        <p className="text-secondary-foreground/50 text-[.84rem] leading-[1.7] my-3.5 max-w-70">
          Expert live music classes for keyboard, piano, guitar & vocals.
          Serving students across India and internationally.
        </p>
        <div className="flex gap-2">
          {[
            {
              icon: instagram,
              title: "instagram",
              href: "https://www.instagram.com/maplediaryacademy?igsh=MTVjYWM3cXpsd3duYw==",
            },
            {
              icon: youtube,
              title: "youtube",
              href: "https://youtube.com/@maplediaryacademy?si=_IxgzIpcpQJxESy6",
            },
          ].map((s) => (
            <a
              key={s.title}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Maple Diary Academy on ${s.title}`}
              title={s.title}
              className="w-8.5 h-8.5 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/10 flex items-center justify-center text-secondary-foreground/60 transition-all hover:border-primary hover:bg-primary/20 hover:text-primary"
            >
              <Image
                src={s.icon}
                alt={s.title}
                width={16}
                height={16}
                className="object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h5 className="text-[.68rem] font-extrabold tracking-[.12em] uppercase text-primary mb-4">
          Courses
        </h5>
        <ul className="space-y-2.5">
          {[
            "Electronic Keyboard",
            "Piano",
            "Acoustic Guitar",
            "Electric Guitar",
            "Western Vocals",
            "Carnatic Vocals",
            "Music Theory",
            "Vocal Training",
          ].map((c) => (
            <li key={c}>
              <a
                href="#courses"
                className="text-[.84rem] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
              >
                {c}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-[.68rem] font-extrabold tracking-[.12em] uppercase text-primary mb-4">
          Quick Links
        </h5>
        <ul className="space-y-2.5">
          {[
            { label: "About Us", href: "#about" },
            { label: "Why Us", href: "#why" },
            { label: "Pricing", href: "#pricing" },
            { label: "Reviews", href: "#testimonials" },
            { label: "FAQ", href: "#faq" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Refund Policy", href: "/refund-policy" },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-[.84rem] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="text-[.68rem] font-extrabold tracking-[.12em] uppercase text-primary mb-4">
          Contact
        </h5>
        <ul className="space-y-2.5">
          <li>
            <a
              href="https://wa.me/9043872168"
              className="text-[.84rem] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </li>
          <li>
            <a
              // href="themaplediary@gmail.com"
              href="mailto:themaplediary@gmail.com?subject=Hello&body=I%20want%20to%20connect"
              // target="_blank"
              className="text-[.84rem] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" /> Email Us
            </a>
          </li>
          <li>
            <button
              onClick={onOpenDemo}
              className="text-[.84rem] text-secondary-foreground/50 hover:text-secondary-foreground transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              Book Demo
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10 pt-5 flex justify-between items-center flex-wrap gap-2.5">
      <p className="text-secondary-foreground/30 text-[.77rem]">
        © 2026 Maple Diary Academy. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a
          href="/privacy-policy"
          className="text-secondary-foreground/30 text-[.77rem] hover:text-secondary-foreground/60 transition-colors"
        >
          Privacy
        </a>
        <a
          href="/terms"
          className="text-secondary-foreground/30 text-[.77rem] hover:text-secondary-foreground/60 transition-colors"
        >
          Terms
        </a>
        <a
          href="/refund-policy"
          className="text-secondary-foreground/30 text-[.77rem] hover:text-secondary-foreground/60 transition-colors"
        >
          Refunds
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
