"use client";

import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Calculator,
  Building2,
  Calendar,
  ExternalLink,
  Briefcase,
  TrendingUp,
  Users,
} from "lucide-react";
import styles from "./Resources.module.css";

const federalResources = [
  {
    title: "IRS - Where's My Refund?",
    description: "Check the status of your federal tax refund",
    url: "https://www.irs.gov/refunds",
    icon: FileText,
  },
  {
    title: "IRS Direct Pay",
    description: "Pay your federal taxes directly to the IRS",
    url: "https://www.irs.gov/payments/direct-pay",
    icon: Calculator,
  },
  {
    title: "IRS Tax Forms & Publications",
    description: "Download current and prior year tax forms",
    url: "https://www.irs.gov/forms-instructions",
    icon: FileText,
  },
  {
    title: "Federal Tax Rate Schedules",
    description: "Current individual and corporate tax brackets",
    url: "https://www.irs.gov/filing/federal-income-tax-rates-and-brackets",
    icon: TrendingUp,
  },
];

const stateResources = [
  {
    title: "Indiana DOR - Where's My Refund?",
    description: "Check your Indiana state tax refund status",
    url: "https://www.in.gov/dor/online-services/wheres-my-refund/",
    icon: FileText,
  },
  {
    title: "INTIME Payment Portal",
    description: "Pay Indiana state taxes online",
    url: "https://www.in.gov/dor/online-services/intime/",
    icon: Calculator,
  },
  {
    title: "Indiana Tax Forms",
    description: "Download Indiana state tax forms and instructions",
    url: "https://www.in.gov/dor/tax-forms/",
    icon: FileText,
  },
  {
    title: "Indiana Business Tax Information",
    description: "Sales tax, withholding, and business tax resources",
    url: "https://www.in.gov/dor/business-tax/",
    icon: Building2,
  },
];

const businessResources = [
  {
    title: "Indiana Secretary of State",
    description: "Business entity formation and registration",
    url: "https://www.in.gov/sos/business/",
    icon: Building2,
  },
  {
    title: "IRS Small Business Resources",
    description: "Tax guidance for small business owners",
    url: "https://www.irs.gov/businesses/small-businesses-self-employed",
    icon: Briefcase,
  },
  {
    title: "U.S. Small Business Administration",
    description: "Funding, counseling, and business development resources",
    url: "https://www.sba.gov/",
    icon: Users,
  },
  {
    title: "SCORE Indianapolis",
    description: "Free business mentoring and education",
    url: "https://indianapolis.score.org/",
    icon: Users,
  },
];

const importantDates = [
  { date: "January 15", description: "Q4 Estimated Tax Payment Due" },
  { date: "March 15", description: "S-Corp & Partnership Tax Returns Due" },
  {
    date: "April 15",
    description: "Individual Tax Returns & Q1 Estimated Tax Due",
  },
  { date: "June 15", description: "Q2 Estimated Tax Payment Due" },
  {
    date: "September 15",
    description:
      "Q3 Estimated Tax Payment Due, Extended S-Corp/Partnership Returns Due",
  },
  { date: "October 15", description: "Extended Individual Tax Returns Due" },
];

export default function ResourcesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.h1}>
              Financial Resources for Small Businesses
              <span className={styles.accentLine} />
            </h1>
            <p className={styles.lede}>
              Quick access to tax forms, payment portals, important deadlines,
              and helpful business resources—all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Federal Tax Resources */}
      <section
        className={`${styles.section} ${
          visibleSections.has("federal") ? styles.visible : ""
        }`}
        id="federal"
        ref={setSectionRef("federal")}
      >
        <div className="container">
          <h2 className={styles.h2}>Federal Tax Resources</h2>
          <div className={styles.grid}>
            {federalResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>
                    {resource.title}
                    <ExternalLink size={16} className={styles.externalIcon} />
                  </h3>
                  <p className={styles.cardDescription}>
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Indiana State Resources */}
      <section
        className={`${styles.section} ${styles.sectionAlt} ${
          visibleSections.has("state") ? styles.visible : ""
        }`}
        id="state"
        ref={setSectionRef("state")}
      >
        <div className="container">
          <h2 className={styles.h2}>Indiana State Resources</h2>
          <div className={styles.grid}>
            {stateResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>
                    {resource.title}
                    <ExternalLink size={16} className={styles.externalIcon} />
                  </h3>
                  <p className={styles.cardDescription}>
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Resources */}
      <section
        className={`${styles.section} ${
          visibleSections.has("business") ? styles.visible : ""
        }`}
        id="business"
        ref={setSectionRef("business")}
      >
        <div className="container">
          <h2 className={styles.h2}>Business Resources</h2>
          <div className={styles.grid}>
            {businessResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                >
                  <div className={styles.cardIcon}>
                    <Icon size={28} />
                  </div>
                  <h3 className={styles.cardTitle}>
                    {resource.title}
                    <ExternalLink size={16} className={styles.externalIcon} />
                  </h3>
                  <p className={styles.cardDescription}>
                    {resource.description}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Tax Dates */}
      <section
        className={`${styles.section} ${styles.sectionAlt} ${
          visibleSections.has("dates") ? styles.visible : ""
        }`}
        id="dates"
        ref={setSectionRef("dates")}
      >
        <div className="container">
          <h2 className={styles.h2}>Important Tax Dates for 2026</h2>
          <div className={styles.dateGrid}>
            {importantDates.map((item, index) => (
              <div key={index} className={styles.dateCard}>
                <div className={styles.dateIcon}>
                  <Calendar size={24} />
                </div>
                <div className={styles.dateContent}>
                  <div className={styles.dateLabel}>{item.date}</div>
                  <div className={styles.dateDescription}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`${styles.cta} ${
          visibleSections.has("cta") ? styles.ctaVisible : ""
        }`}
        id="cta"
        ref={setSectionRef("cta")}
      >
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.h2}>Need Personalized Guidance?</h2>
            <p className={styles.body}>
              These resources are a starting point. For tax planning, compliance
              support, or strategic financial guidance specific to your
              business, let's talk.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
