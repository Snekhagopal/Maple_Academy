"use client"

import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";
import Image from "next/image";

interface NavbarProps {
  onOpenDemo: () => void;
}

const Header = ({onOpenDemo}:NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Courses", href: "#courses" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Why Us", href: "#why" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];
  

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-500 flex items-center justify-between px-[5%] h-17.5 backdrop-blur-[18px] border-b border-border transition-shadow duration-300 bg-background/95 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <a href="#" className="flex items-center gap-3">
          <Image src={logo} alt="Maple Diary Academy" className="w-10 h-10 rounded-full object-cover border border-border" />
          <div className="leading-tight">
            <strong className="block font-heading text-[1.05rem] font-black text-foreground">
              Maple Diary Academy
            </strong>
            <span className="text-[.68rem] tracking-widest uppercase text-primary font-semibold">
              Online Music Classes
            </span>
          </div>
        </a>
        <ul className="hidden lg:flex items-center gap-6 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[.8rem] font-semibold tracking-[.06em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={onOpenDemo}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-[.8rem] font-semibold tracking-[.06em] uppercase hover:brightness-90 transition cursor-pointer border-none"
            >
              Book Free Demo
            </button>
          </li>
        </ul>
        <button
          className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none p-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 bg-foreground rounded-sm" />
          <span className="block w-6 h-0.5 bg-foreground rounded-sm" />
          <span className="block w-6 h-0.5 bg-foreground rounded-sm" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="fixed top-[70px] left-0 right-0 bg-card border-b border-border p-5 z-[499] flex flex-col shadow-lg">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-[.95rem] font-semibold text-muted-foreground border-b border-border hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenDemo();
            }}
            className="mt-3 text-primary font-bold text-left bg-transparent border-none cursor-pointer"
          >
            Book Free Demo →
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
