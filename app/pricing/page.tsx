"use client";

import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Circle,
  Layers,
  Award,
  TrendingUp,
  Users,
  XCircle,
  CalendarDays,
  FileText,
  FolderOpen,
  Send,
  Lightbulb,
  BookOpen,
  BarChart2,
  Briefcase,
  Phone,
  Mail,
} from "lucide-react";
import styles from "./PricingPage.module.css";

const reflects = [
  {
    icon: Layers,
    title: "Complexity over volume",
    body: "Multi-entity structures, payroll, industry-specific requirements, and regulatory oversight matter more than transaction counts alone.",
  },
  {
    icon: Award,
    title: "Experience and judgment",
    body: "Our work is guided by CPA oversight and decades of financial leadership experience, not entry-level processing.",
  },
  {
    icon: TrendingUp,
    title: "Proactive involvement",
    body: "We focus on anticipating issues, identifying opportunities, and improving financial clarity—not reacting after problems arise.",
  },
  {
    icon: Users,
    title: "Strategic access",
    body: "Clients receive direct access to senior-level insight, not layers of handoffs.",
  },
];

const avoids = [
  "Hourly billing and surprise invoices",
  "Transaction-based nickel-and-diming",
  "One-size-fits-all packages",
  "Reactive, compliance-only relationships",
];

const taxIncludes = [
  { icon: FileText,   text: "CPA preparation and review" },
  { icon: FolderOpen, text: "Secure client portal and document management" },
  { icon: Send,       text: "Electronic filing and confirmation" },
  { icon: Lightbulb, text: "Identification of planning considerations" },
];

const tiers = [
  {
    icon: BookOpen,
    title: "Accounting",
    bestFor: "Owners who want clean books and reliable compliance.",
    features: [
      { text: "Monthly bookkeeping & reconciliations", included: true },
      { text: "CPA-prepared financial statements", included: true, ssars: true },
      { text: "Business tax return preparation", included: true },
      { text: "Tax compliance & basic planning", included: true },
      { text: "Accounting system support (QuickBooks)", included: true },
      { text: "Monthly accounting review & close", included: false },
      { text: "Monthly financial meetings", included: false },
    ],
    price: "$1,000–$1,800",
  },
  {
    icon: BarChart2,
    title: "Accounting & Advisory",
    bestFor: "Owners who want deeper insight and ongoing financial guidance.",
    features: [
      { text: "Monthly bookkeeping & reconciliations", included: true },
      { text: "CPA-prepared financial statements", included: true, ssars: true },
      { text: "Tax compliance & basic planning", included: true },
      { text: "Accounting system support (QuickBooks)", included: true },
      { text: "Monthly accounting review & close", included: true },
      { text: "Monthly financial meetings", included: true },
      { text: "Financial analysis & forecasting", included: true },
      { text: "Budgeting & performance management", included: true },
    ],
    price: "$2,200–$3,800",
  },
  {
    icon: Briefcase,
    title: "Fractional CFO Advisory",
    bestFor: "Businesses that need experienced financial leadership and strategic support.",
    features: [
      { text: "All Accounting & Advisory features", included: true },
      { text: "Advanced modeling & decision support", included: true },
      { text: "Contract negotiation support", included: true },
      { text: "Strategic advising & planning", included: true },
      { text: "Internal controls and SOP support", included: true },
    ],
    price: "$4,000–$7,500+",
  },
];

export default function PricingPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
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
      <section
        className={`${styles.hero} ${visibleSections.has("hero") ? styles.heroVisible : ""}`}
        id="hero"
        ref={setSectionRef("hero")}
      >
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.h1}>
              Transparent Pricing
              <span className={styles.accentLine}></span>
            </h1>
            <p className={styles.lede}>
              Clear, predictable retainers based on scope and complexity—not
              hourly billing or surprise invoices.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className={`${styles.philosophy} ${visibleSections.has("philosophy") ? styles.visible : ""}`}
        id="philosophy"
        ref={setSectionRef("philosophy")}
      >
        <div className="container">
          <div className={styles.philosophyInner}>
            <h2 className={styles.h2}>Our Pricing Philosophy</h2>
            <p className={styles.body}>
              We believe professional accounting and advisory services should be
              clear, predictable, and aligned with the value delivered—not
              billed by the hour.
            </p>
            <p className={styles.body}>
              Our pricing is structured as flat monthly retainers based on the
              scope, complexity, and level of financial leadership required.
              This approach allows our clients to budget with confidence while
              ensuring they receive proactive guidance, consistent service, and
              year-round support.
            </p>

            <h3 className={styles.h3}>What Our Pricing Reflects</h3>
            <div className={styles.reflectsGrid}>
              {reflects.map(({ icon: Icon, title, body }) => (
                <div key={title} className={styles.reflectCard}>
                  <div className={styles.reflectIcon}>
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                  <h4 className={styles.reflectTitle}>{title}</h4>
                  <p className={styles.reflectBody}>{body}</p>
                </div>
              ))}
            </div>

            <h3 className={styles.h3}>What Our Pricing Avoids</h3>
            <ul className={styles.avoidsList}>
              {avoids.map((item) => (
                <li key={item}>
                  <XCircle size={17} strokeWidth={2} className={styles.avoidIcon} />
                  {item}
                </li>
              ))}
            </ul>

            <p className={styles.body}>
              Our goal is to serve as a long-term financial partner—providing
              clarity, confidence, and strategic insight as your organization
              grows.
            </p>
            <p className={styles.bodyEmphasis}>
              Final pricing is determined after a brief discovery conversation
              to ensure alignment between scope, expectations, and outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section
        className={`${styles.tiers} ${visibleSections.has("tiers") ? styles.visible : ""}`}
        id="tiers"
        ref={setSectionRef("tiers")}
      >
        <div className="container">
          <h2 className={`${styles.h2} ${styles.tiersHeading}`}>
            Service Tiers &amp; Pricing Overview
          </h2>

          <div className={styles.monthlyBlock}>
            <div className={styles.monthlyBlockLabel}>
              <span>Monthly Accounting &amp; Advisory Service Plans</span>
            </div>

            <div className={styles.tiersGrid}>
              {tiers.map(({ icon: Icon, title, bestFor, features, price }, i) => (
                <div
                  key={title}
                  className={styles.tierCard}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  {/* Navy icon bubble */}
                  <div className={styles.tierIconWrapper}>
                    <Icon size={34} strokeWidth={1.5} className={styles.tierIcon} />
                  </div>

                  <div className={styles.tierHeader}>
                    <h3 className={styles.tierTitle}>{title}</h3>
                    <p className={styles.tierBestFor}>Best For: {bestFor}</p>
                  </div>

                  <div className={styles.tierFeatures}>
                    {features.map(({ text, included, ssars }) => (
                      <div
                        key={text}
                        className={`${styles.feature} ${!included ? styles.featureNot : ""}`}
                      >
                        {included
                          ? <CheckCircle2 size={18} />
                          : <Circle size={18} />
                        }
                        <span>
                          {text}
                          {ssars && <sup className={styles.ssarsRef}>†</sup>}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.tierPrice}>
                    <span className={styles.priceLabel}>Typical Monthly Investment</span>
                    <span className={styles.priceRange}>{price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.disclaimer}>
            <span className={styles.ssarsRefInline}>†</span> CPA-prepared
            financial statements are prepared in accordance with the Statements
            on Standards for Accounting and Review Services (SSARS),
            specifically SSARS No. 27, as issued by the American Institute of
            Certified Public Accountants (AICPA). These services do not
            constitute a compilation, review, or audit, and no assurance is
            provided.
          </p>
        </div>
      </section>

      {/* Mid-page CTA nudge */}
      <div className={styles.midCta}>
        <div className="container">
          <div className={styles.midCtaInner}>
            <p className={styles.midCtaText}>
              Not sure which plan fits? We&apos;re happy to talk it through.
            </p>
            <div className={styles.midCtaLinks}>
              <a href="tel:3177528649" className={styles.midCtaLink}>
                <Phone size={15} strokeWidth={2} />
                (317) 752-8649
              </a>
              <span className={styles.midCtaDot}>·</span>
              <a href="mailto:scott@smgcpafirm.com" className={styles.midCtaLink}>
                <Mail size={15} strokeWidth={2} />
                scott@smgcpafirm.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <section
        className={`${styles.taxPrep} ${visibleSections.has("tax-preparation") ? styles.taxPrepVisible : ""}`}
        id="tax-preparation"
        ref={setSectionRef("tax-preparation")}
      >
        <div className="container">
          <div className={styles.taxPrepInner}>
            <div className={styles.taxPrepLeft}>
              <span className={styles.taxEyebrow}>Standalone Service</span>
              <h2 className={styles.taxTitle}>Tax Preparation</h2>
              <p className={styles.taxBestFor}>
                Best for individuals and business owners who need professional
                tax preparation and filing support.
              </p>
              <div className={styles.taxIncludes}>
                <p className={styles.taxIncludesHeading}>Includes:</p>
                <ul>
                  {taxIncludes.map(({ icon: Icon, text }) => (
                    <li key={text}>
                      <Icon size={15} strokeWidth={2} className={styles.taxIncludeIcon} />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Inline contact nudge */}
              <div className={styles.taxCtaNudge}>
                <p className={styles.taxCtaNudgeText}>Questions about tax prep?</p>
                <a href="tel:3177528649" className={styles.taxCtaLink}>
                  <Phone size={14} strokeWidth={2} />
                  (317) 752-8649
                </a>
                <a href="mailto:scott@smgcpafirm.com" className={styles.taxCtaLink}>
                  <Mail size={14} strokeWidth={2} />
                  scott@smgcpafirm.com
                </a>
              </div>
            </div>

            <div className={styles.taxPrepRight}>
              <h3 className={styles.taxFeesHeading}>Starting Fees</h3>
              <table className={styles.feeTable}>
                <tbody>
                  <tr><td>1040</td><td>$500</td></tr>
                  <tr><td>1040 for Child</td><td>$150</td></tr>
                  <tr><td>1040 w/ Schedule C</td><td>$800</td></tr>
                  <tr><td>1040 w/ Schedule E</td><td>$800</td></tr>
                  <tr><td>1065 / 1120 / 1120S</td><td>$1,500</td></tr>
                </tbody>
              </table>
              <p className={styles.taxDisclaimer}>
                *Base pricing reflects a standard return with organized records.
                Fees may vary based on complexity, including additional state
                filings, investment transactions, or additional schedules.
              </p>
              <p className={`${styles.taxDisclaimer} ${styles.taxDisclaimerAccent}`}>
                **Tax preparation is included for clients enrolled in
                SMG&apos;s monthly accounting and advisory service plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className={`${styles.cta} ${visibleSections.has("cta") ? styles.ctaVisible : ""}`}
        id="cta"
        ref={setSectionRef("cta")}
      >
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.h2}>Ready to Discuss Your Needs?</h2>
            <p className={styles.body}>
              Let&apos;s have a brief discovery conversation to determine the
              right service tier and pricing for your business.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              <CalendarDays size={18} strokeWidth={2} />
              Schedule a Free Consultation
            </a>
            <div className={styles.ctaContacts}>
              <a href="tel:3177528649" className={styles.ctaContact}>
                <Phone size={16} strokeWidth={2} />
                (317) 752-8649
              </a>
              <span className={styles.ctaContactDot}>·</span>
              <a href="mailto:scott@smgcpafirm.com" className={styles.ctaContact}>
                <Mail size={16} strokeWidth={2} />
                scott@smgcpafirm.com
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}