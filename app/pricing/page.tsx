"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import styles from "./PricingPage.module.css";

export default function PricingPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
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
      },
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
        className={`${styles.hero} ${
          visibleSections.has("hero") ? styles.heroVisible : ""
        }`}
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
        className={`${styles.philosophy} ${
          visibleSections.has("philosophy") ? styles.visible : ""
        }`}
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
            <ul className={styles.list}>
              <li>
                <strong>Complexity over volume</strong> – Multi-entity
                structures, payroll, industry-specific requirements, and
                regulatory oversight matter more than transaction counts alone.
              </li>
              <li>
                <strong>Experience and judgment</strong> – Our work is guided by
                CPA oversight and decades of financial leadership experience,
                not entry-level processing.
              </li>
              <li>
                <strong>Proactive involvement</strong> – We focus on
                anticipating issues, identifying opportunities, and improving
                financial clarity—not reacting after problems arise.
              </li>
              <li>
                <strong>Strategic access</strong> – Clients receive direct
                access to senior-level insight, not layers of handoffs.
              </li>
            </ul>

            <h3 className={styles.h3}>What Our Pricing Avoids</h3>
            <ul className={styles.list}>
              <li>Hourly billing and surprise invoices</li>
              <li>Transaction-based nickel-and-diming</li>
              <li>One-size-fits-all packages</li>
              <li>Reactive, compliance-only relationships</li>
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
        className={`${styles.tiers} ${
          visibleSections.has("tiers") ? styles.visible : ""
        }`}
        id="tiers"
        ref={setSectionRef("tiers")}
      >
        <div className="container">
          <h2 className={styles.h2}>Service Tiers & Pricing Overview</h2>

          <div className={styles.tiersGrid}>
            {/* Tier 1 */}
            <div className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <h3 className={styles.tierTitle}>Foundational Compliance</h3>
                <p className={styles.tierBestFor}>
                  Best For: Owners who want clean books and compliance without
                  monthly meetings
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Monthly bookkeeping & reconciliations</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>CPA-prepared financial statements</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Tax compliance & basic planning</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Accounting system support (QuickBooks)</span>
                </div>
                <div className={`${styles.feature} ${styles.featureNot}`}>
                  <Circle size={20} />
                  <span>Monthly accounting review & close</span>
                </div>
                <div className={`${styles.feature} ${styles.featureNot}`}>
                  <Circle size={20} />
                  <span>Monthly financial meetings</span>
                </div>
              </div>

              <div className={styles.tierPrice}>
                <span className={styles.priceLabel}>
                  Typical Monthly Investment
                </span>
                <span className={styles.priceRange}>$800–$1,800</span>
              </div>
            </div>

            {/* Tier 2 - Featured */}
            <div className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <h3 className={styles.tierTitle}>Growth & Advisory</h3>
                <p className={styles.tierBestFor}>
                  Best For: Owners who want accounting insight and a monthly
                  conversation about their numbers
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Monthly bookkeeping & reconciliations</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>CPA-prepared financial statements</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Tax compliance & basic planning</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Accounting system support (QuickBooks)</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Monthly accounting review & close</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Monthly financial meetings</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Financial analysis & forecasting</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Budgeting & performance management</span>
                </div>
              </div>

              <div className={styles.tierPrice}>
                <span className={styles.priceLabel}>
                  Typical Monthly Investment
                </span>
                <span className={styles.priceRange}>$2,000–$3,500</span>
              </div>
            </div>

            {/* Tier 3 */}
            <div className={styles.tierCard}>
              <div className={styles.tierHeader}>
                <h3 className={styles.tierTitle}>Fractional CFO</h3>
                <p className={styles.tierBestFor}>
                  Best For: Owners who need experienced, ongoing financial
                  leadership and strategic support
                </p>
              </div>

              <div className={styles.tierFeatures}>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>All Growth & Advisory features</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Advanced modeling & decision support</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Contract negotiation support</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Strategic advising & planning</span>
                </div>
                <div className={styles.feature}>
                  <CheckCircle2 size={20} />
                  <span>Internal controls and SOP support</span>
                </div>
              </div>

              <div className={styles.tierPrice}>
                <span className={styles.priceLabel}>
                  Typical Monthly Investment
                </span>
                <span className={styles.priceRange}>$4,000–$7,500+</span>
              </div>
            </div>
          </div>

          <p className={styles.disclaimer}>
            CPA-prepared financial statements are prepared in accordance with
            the Statements on Standards for Accounting and Review Services
            (SSARS), specifically SSARS No. 27, as issued by the American
            Institute of Certified Public Accountants (AICPA). These services do
            not constitute a compilation, review, or audit, and no assurance is
            provided.
          </p>
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
            <h2 className={styles.h2}>Ready to Discuss Your Needs?</h2>
            <p className={styles.body}>
              Let's have a brief discovery conversation to determine the right
              service tier and pricing for your business.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
