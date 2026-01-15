"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

const servicesLinks = [
  { title: "Tax Preparation & Planning", href: "#services" },
  { title: "Accounting & Bookkeeping", href: "#services" },
  { title: "Advisory for Small Businesses", href: "#services" },
  { title: "Nonprofit Compliance", href: "#services" },
  { title: "Financial Forecasting", href: "#services" },
  { title: "Individual Planning", href: "#services" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 ${styles.logo} w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur bg-white/90 shadow-sm" : ""
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        {/* Brand */}
        <a
          href="#"
          className={`block h-30 relative ${scrolled ? styles.logoScrolled : ""}`}
        >
          <Image
            src="/SMG Full Logo.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto ${styles.logoWhite}`}
            priority
          />
          <Image
            src="/SMG Full Logo.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto absolute top-0 left-0 ${styles.logoNavy}`}
            style={{
              filter:
                "brightness(0) saturate(100%) invert(10%) sepia(28%) saturate(2076%) hue-rotate(195deg) brightness(95%) contrast(95%)",
            }}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-8 font-medium transition-colors ${
            scrolled ? "text-slate-700" : "text-white"
          }`}
        >
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer">
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div
                className={`absolute top-full left-0 w-72 rounded-lg shadow-xl ${
                  scrolled ? "bg-white" : "bg-white"
                } border border-gray-200 py-2`}
              >
                {servicesLinks.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className="block px-4 py-2.5 text-slate-700 hover:bg-gray-50 transition-colors text-sm"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="#resources" className="hover:underline underline-offset-4">
            Resources
          </a>
          <a href="#contact">
            <button
              className={`${styles.button} ${
                scrolled ? styles.buttonScrolled : styles.buttonTop
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
            {/* Mobile Services Dropdown */}
            <div className="w-full">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 w-full"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesLinks.map((service) => (
                    <a
                      key={service.title}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm opacity-80 hover:opacity-100"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

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
