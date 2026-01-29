"use client";

import {
  Calculator,
  BookOpen,
  FileCheck,
  TrendingUp,
  Hospital,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Accounting Services",
    description:
      "Comprehensive accounting solutions for businesses and nonprofits—from financial statement preparation to multi-entity management and regulatory compliance.",
    icon: Calculator,
    href: "/services#accounting",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Professional monthly bookkeeping with CPA oversight—accurate reconciliation, organized records, and financial clarity for confident decision-making.",
    icon: BookOpen,
    href: "/services#bookkeeping",
  },
  {
    title: "Tax Preparation & Planning",
    description:
      "Strategic tax planning and preparation for individuals, businesses, and nonprofits—minimizing liability while ensuring full federal and state compliance.",
    icon: FileCheck,
    href: "/services#tax-planning",
  },
  {
    title: "CFO & Financial Strategy",
    description:
      "Fractional CFO services and strategic financial guidance for growing organizations—executive-level guidance, forecasting, and capital planning without the full-time cost.",
    icon: TrendingUp,
    href: "/services#cfo-services",
  },
  {
    title: "Healthcare Finance Advisory",
    description:
      "Specialized financial leadership for behavioral health and healthcare organizations—CARF compliance, payor contract analysis, and regulatory expertise.",
    icon: Hospital,
    href: "/services#healthcare-finance",
  },
  {
    title: "Business Advisory & M&A",
    description:
      "Strategic guidance for business transitions, acquisitions, and exits—informed by real experience buying, scaling, and successfully selling a professional services firm.",
    icon: Handshake,
    href: "/services#business-advisory",
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
    <section id="services" className="py-20 bg-soft" ref={sectionRef}>
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
            Comprehensive financial solutions for small businesses, healthcare
            organizations, and nonprofits.
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
