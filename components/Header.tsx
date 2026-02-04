"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

const servicesLinks = [
  { title: "Monthly Bookkeeping", href: "/services#bookkeeping" },
  { title: "Monthly Accounting", href: "/services#accounting" },
  { title: "Payroll Administration Support", href: "/services#payroll" },
  {
    title: "Income Tax Preparation & Planning",
    href: "/services#tax-planning",
  },
  { title: "Fractional CFO Support", href: "/services#cfo" },
  { title: "Books & Financial Statement Cleanup", href: "/services#cleanup" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Only listen for scroll on homepage
  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 min-h-[154px] flex items-center ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div
        className={`${styles.headerContainer} container flex items-center justify-between`}
      >
        {/* Brand */}
        <a
          href="/"
          className={`block relative ${styles.logo} shrink-0 h-24 md:h-20 lg:h-24 xl:h-28`}
        >
          {/* White logo for transparent header */}
          <Image
            src="/SMG Full Logo1.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            priority
          />

          {/* Colored logo for white header */}
          <Image
            src="/SMG Full Logo.png"
            alt="SMG Accounting & Tax Advisors, LLC"
            height={32}
            width={200}
            className={`h-full w-auto absolute top-0 left-0 transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-4 lg:gap-8 font-medium transition-colors duration-300 ${
            scrolled ? "text-slate-700" : "text-white"
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
              className="flex items-center gap-1 hover:underline underline-offset-4 decoration-[#b2a574] cursor-pointer"
            >
              Services
              <ChevronDown
                size={16}
                className={`${styles.serviceChevron} transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </a>

            {servicesOpen && (
              <div
                className={`absolute top-full left-0 w-72 mt-3 rounded-lg shadow-xl bg-white border border-gray-200 py-2 ${styles.dropdown}`}
              >
                {servicesLinks.map((service, index) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className={`block px-4 py-2.5 text-slate-700 hover:bg-gray-50 text-sm ${
                      styles.dropdownItem
                    } ${
                      index !== servicesLinks.length - 1
                        ? "border-b border-[#b2a574]/20"
                        : ""
                    }`}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/about"
            className={`hover:underline underline-offset-4 decoration-[#b2a574] ${styles.navItem}`}
          >
            About
          </a>

          <a
            href="/values"
            className={`hover:underline underline-offset-4 decoration-[#b2a574] ${styles.navItem}`}
          >
            Values
          </a>

          <a
            href="/pricing"
            className={`hover:underline underline-offset-4 decoration-[#b2a574] ${styles.navItem}`}
          >
            Pricing
          </a>

          <a
            href="/resources"
            className={`hover:underline underline-offset-4 decoration-[#b2a574] ${styles.navItem}`}
          >
            Resources
          </a>

          <a href="/contact" className={styles.navItem}>
            <button
              type="button"
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
          type="button"
          onClick={() => setOpen(!open)}
          className={`md:hidden border rounded-md p-2 transition-colors ${
            scrolled ? "border-navy text-navy" : "border-white text-white"
          }`}
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
              href="/values"
              onClick={() => setOpen(false)}
              className={styles.mobileMenuItem}
            >
              Values
            </a>

            <a
              href="/pricing"
              onClick={() => setOpen(false)}
              className={styles.mobileMenuItem}
            >
              Pricing
            </a>

            <a
              href="/resources"
              onClick={() => setOpen(false)}
              className={styles.mobileMenuItem}
            >
              Resources
            </a>

            <a
              href="/contact"
              className={`font-semibold px-5 py-2.5 rounded-md inline-block bg-navy text-white hover:bg-slate-800 ${styles.mobileMenuItem}`}
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
