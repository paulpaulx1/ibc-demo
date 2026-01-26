"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

const servicesLinks = [
  { title: "Accounting Services", href: "/services#accounting" },
  { title: "Bookkeeping Services", href: "/services#bookkeeping" },
  { title: "Tax Preparation & Planning", href: "/services#tax-planning" },
  { title: "CFO & Financial Planning", href: "/services#cfo-services" },
  {
    title: "Healthcare Finance Advisory",
    href: "/services#healthcare-finance",
  },
  { title: "Business Advisory & M&A", href: "/services#business-advisory" },
];

export default function Header() {
  const pathname = usePathname();
  const isServicesPage =
    pathname.startsWith("/services") ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/resources");

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Only listen for scroll on non-/services routes
  useEffect(() => {
    if (isServicesPage) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isServicesPage]);

  // On /services/*, force "scrolled" visual styling (navy text + navy logo)
  const headerScrolled = scrolled || isServicesPage;

  return (
    <header
      className={`fixed top-0 ${styles.logo} w-full z-50 transition-all duration-300 bg-white/90 shadow-sm ${
        headerScrolled ? "" : "md:bg-transparent md:shadow-none"
      }`}
    >
      <div className="container flex items-center justify-between py-4 md:py-5">
        {/* Brand */}
        <a
          href="/"
          className={`block h-30 relative ${
            headerScrolled ? styles.logoScrolled : ""
          }`}
        >
          {/* WHITE logo — desktop only (hidden on /services/*) */}
          <Image
            src="/SMG Full Logo.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto hidden md:block transition-opacity duration-300 ${
              headerScrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          {/* NAVY logo — always visible on mobile; shows on desktop when "scrolled" or on /services/* */}
          <Image
            src="/SMG Full Logo.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto block md:absolute md:top-0 md:left-0 transition-opacity duration-300 ${
              headerScrolled ? "md:opacity-100" : "md:opacity-0"
            }`}
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
            headerScrolled ? "text-slate-700" : "text-white"
          }`}
        >
          {/* Services Dropdown */}
          <div
            className={`relative ${styles.navItem}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              href="/services"
              className="flex items-center gap-1 hover:underline underline-offset-4 cursor-pointer"
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </a>

            {servicesOpen && (
              <div
                className={`absolute top-full left-0 w-72 rounded-lg shadow-xl bg-white border border-gray-200 py-2 ${styles.dropdown}`}
              >
                {servicesLinks.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className={`block px-4 py-2.5 text-slate-700 hover:bg-gray-50 text-sm ${styles.dropdownItem}`}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/about"
            className={`hover:underline underline-offset-4 ${styles.navItem}`}
          >
            About
          </a>
          <a
            href="/resources"
            className={`hover:underline underline-offset-4 ${styles.navItem}`}
          >
            Resources
          </a>
          <a href="/contact" className={styles.navItem}>
            <button
              type="button"
              className={`${styles.button} ${
                headerScrolled ? styles.buttonScrolled : styles.buttonTop
              }`}
            >
              Schedule a Consultation
            </button>
          </a>
        </nav>

        {/* Mobile toggle: ALWAYS navy */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden border border-navy text-navy rounded-md p-2 transition-colors"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className={`md:hidden bg-white text-navy border-t border-gray-200 shadow-sm ${styles.mobileMenu}`}
        >
          <nav className="flex flex-col items-start px-6 py-4 space-y-3">
            {/* Mobile Services Dropdown */}
            <div className={`w-full ${styles.mobileMenuItem}`}>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 w-full"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {servicesLinks.map((service) => (
                    <a
                      key={service.title}
                      href={service.href}
                      onClick={() => setOpen(false)}
                      className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/about"
              onClick={() => setOpen(false)}
              className={styles.mobileMenuItem}
            >
              About
            </a>
            <a
              href="/#resources"
              onClick={() => setOpen(false)}
              className={styles.mobileMenuItem}
            >
              Resources
            </a>
            <a
              href="/contact"
              className={`font-semibold px-5 py-2.5 rounded-md inline-block ${
                headerScrolled
                  ? "bg-navy text-white"
                  : "bg-accent text-navy hover:brightness-110"
              } ${styles.mobileMenuItem}`}
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
