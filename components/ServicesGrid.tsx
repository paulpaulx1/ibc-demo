"use client";

import {
  Calculator,
  BookOpen,
  Users,
  FileCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Accurate, organized bookkeeping that provides a reliable financial foundation for your business. Clean, timely monthly financial reports with CPA-level quality.",
    icon: BookOpen,
    href: "/services#bookkeeping",
  },
  {
    title: "Monthly Accounting",
    description:
      "CPA-level accounting oversight that goes beyond bookkeeping—ensuring your financials are accurate, compliant, and decision-ready.",
    icon: Calculator,
    href: "/services#accounting",
  },
  {
    title: "Payroll Administration Support",
    description:
      "Payroll coordination and oversight that ensures accuracy, compliance, and consistency—without the administrative burden.",
    icon: Users,
    href: "/services#payroll",
  },
  {
    title: "Income Tax Preparation & Planning",
    description:
      "Strategic tax planning and compliant preparation for individuals and businesses—focused on minimizing liability while avoiding surprises.",
    icon: FileCheck,
    href: "/services#tax-planning",
  },
  {
    title: "Fractional CFO Support",
    description:
      "Experienced financial leadership without the cost of a full-time hire. Strategic insight, forecasting, and decision support for owners and leadership teams.",
    icon: TrendingUp,
    href: "/services#cfo",
  },
  {
    title: "Books & Financial Statement Cleanup",
    description:
      "One-time or short-term engagements designed to correct historical issues, organize financial records, and restore confidence in your financial statements.",
    icon: Wrench,
    href: "/services#cleanup",
  },
];

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="services" className="pb-20 bg-soft" ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className={`h1 text-navy mb-3 ${
              isVisible ? styles.headingVisible : styles.heading
            }`}
          >
            Services
          </h2>

          {/* subtle gold divider */}
          <div
            className={`${styles.sectionDivider} ${
              isVisible ? styles.dividerVisible : ""
            }`}
            aria-hidden="true"
          />

          <p
            className={`section-lead ${
              isVisible ? styles.subheadingVisible : styles.subheading
            }`}
          >
            Bookkeeping, accounting, payroll, and tax services for small businesses.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon, href }) => (
            <article
              key={title}
              className={`${styles.serviceCard} ${
                isVisible ? styles.visible : ""
              }`}
            >
              {/* Background Image */}
              <div className={styles.cardBackground} aria-hidden="true">
                <Image src="/graph.jpg" alt="" fill className="object-cover" />
              </div>

              {/* soft overlay for readability */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              <div className={styles.cardInner}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>

                <h3 className={styles.title}>{title}</h3>

                <p className={styles.description}>{description}</p>

                <a href={href} className={styles.learnMore}>
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}