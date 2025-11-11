"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/90 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <div className={`relative w-12 h-12 rounded-lg overflow-hidden`}>
            <Image
              src="/ibc-logo2.png"
              alt="Integrity Business Consulting logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div
            className={`flex flex-col leading-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            <span className="font-serif font-medium text-base">
              Integrity Business Consulting
            </span>
            <span
              className={`text-s ${
                scrolled ? "text-slate-600" : "text-white/80"
              }`}
            >
              CPA • Advisory
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-8 font-medium transition-colors ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
        >
          <a href="#services" className="hover:underline underline-offset-4">
            Services
          </a>
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#resources" className="hover:underline underline-offset-4">
            Resources
          </a>
          <a href="#contact">
            <button
              className={`font-semibold px-5 py-2.5 rounded-md transition border ${
                scrolled
                  ? "bg-navy text-white border-navy hover:brightness-110"
                  : "bg-white/60 text-navy border-navy hover:bg-navy hover:text-white"
              }`}
            >
              Schedule a Consultation
            </button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden border rounded-md p-2 transition-colors ${
            scrolled
              ? "border-muted text-navy"
              : "border-white/60 text-white/80"
          }`}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden transition ${
            scrolled ? "bg-white text-navy" : "bg-navy/95 text-white"
          } border-t border-muted shadow-sm`}
        >
          <nav className="flex flex-col items-start px-6 py-4 space-y-3">
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#resources" onClick={() => setOpen(false)}>
              Resources
            </a>
            <a
              href="#contact"
              className={`font-semibold px-5 py-2.5 rounded-md inline-block ${
                scrolled
                  ? "bg-navy text-white"
                  : "bg-accent text-navy hover:brightness-110"
              }`}
              onClick={() => setOpen(false)}
            >
              Schedule a Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
