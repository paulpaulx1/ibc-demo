// app/services/ServicesPageClient.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  BookOpen,
  Calculator,
  Users,
  FileCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import styles from "./ServicesPage.module.css";

export default function ServicesPageClient() {
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
      <section className={styles.hero}>
        <Image
          src="/services/bookkeeping/bookkeeping.jpg"
          alt="Professional accounting services"
          fill
          className={styles.bgImage}
          priority
          quality={95}
        />
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.h1}>
              Our Services
            </h1>
            <p className={styles.lede}>
              Bookkeeping, accounting, payroll, and tax services for small businesses. Clear financials, proactive tax planning, and experienced guidance—designed to support long-term clarity and confidence.
            </p>
            <a href="/contact" className={styles.primaryCta}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Monthly Bookkeeping - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="bookkeeping"
        className={`${styles.service} ${
          visibleSections.has("bookkeeping") ? styles.visible : ""
        }`}
        ref={setSectionRef("bookkeeping")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <BookOpen size={40} />
              </div>
              <h2 className={styles.h2}>Monthly Bookkeeping</h2>
              <p className={styles.body}>
                Accurate, organized bookkeeping that provides a reliable financial foundation for your business. We manage day-to-day transaction recording, reconciliations, and reporting so your financial records remain current, consistent, and audit-ready.
              </p>
              <p className={styles.body}>
                Whether you're transitioning from spreadsheets or need consistent monthly close processes, our bookkeeping provides the reliable foundation that supports business growth and financial planning needs.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Monthly bank and credit card reconciliations</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Transaction classification and general ledger maintenance</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Accounts payable and receivable tracking</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Clean, timely monthly financial reports</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>QuickBooks setup, cleanup, and ongoing support</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-bookkeeping.jpg"
                alt="Monthly bookkeeping services"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Accounting - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="accounting"
        className={`${styles.service} ${
          visibleSections.has("accounting") ? styles.visible : ""
        }`}
        ref={setSectionRef("accounting")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-accounting.jpg"
                alt="CPA-level accounting services"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Calculator size={40} />
              </div>
              <h2 className={styles.h2}>Monthly Accounting</h2>
              <p className={styles.body}>
                CPA-level accounting oversight that goes beyond bookkeeping—ensuring your financials are accurate, compliant, and decision-ready. Designed for businesses that need more than transaction processing.
              </p>
              <p className={styles.body}>
                We provide comprehensive accounting solutions—from financial statement preparation to multi-entity management—that support informed decision-making and regulatory requirements.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>CPA-prepared financial statements</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Monthly close and adjusting entries</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Financial review and variance analysis</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Multi-entity and consolidated reporting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Internal controls assessment and improvement</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Monthly meetings to discuss financial statements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payroll - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="payroll"
        className={`${styles.service} ${
          visibleSections.has("payroll") ? styles.visible : ""
        }`}
        ref={setSectionRef("payroll")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Users size={40} />
              </div>
              <h2 className={styles.h2}>Payroll Administration Support</h2>
              <p className={styles.body}>
                Payroll coordination and oversight that ensures accuracy, compliance, and consistency—without the administrative burden. We manage the payroll process while you retain control over payroll providers and processing fees.
              </p>
              <p className={styles.body}>
                Our payroll support provides peace of mind that payroll taxes, deductions, and reporting are handled correctly and on time, every time.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Payroll account setup and coordination (ADP, Gusto, QBO, etc.)</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Review and reconciliation of payroll reports</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Payroll tax and liability account reconciliation</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>PTO, benefit, and deduction tracking support</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Ongoing payroll process guidance and troubleshooting</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-taxpreparation.jpg"
                alt="Payroll administration support"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tax Planning - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="tax-planning"
        className={`${styles.service} ${
          visibleSections.has("tax-planning") ? styles.visible : ""
        }`}
        ref={setSectionRef("tax-planning")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-taxpreparation.jpg"
                alt="Income tax preparation and planning"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <FileCheck size={40} />
              </div>
              <h2 className={styles.h2}>Income Tax Preparation & Planning</h2>
              <p className={styles.body}>
                Strategic tax planning and compliant preparation for individuals and businesses—focused on minimizing liability while avoiding surprises.
              </p>
              <p className={styles.body}>
                We provide year-round strategic guidance on entity structure, major transactions, and tax optimization strategies—not just annual filing.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Business and individual income tax preparation</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Quarterly estimated tax planning</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Entity structure and tax comparison</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Multi-state and multi-entity tax compliance</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Year-round tax strategy and advisory support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fractional CFO - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="cfo"
        className={`${styles.service} ${
          visibleSections.has("cfo") ? styles.visible : ""
        }`}
        ref={setSectionRef("cfo")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <TrendingUp size={40} />
              </div>
              <h2 className={styles.h2}>Fractional CFO Support</h2>
              <p className={styles.body}>
                Experienced financial leadership without the cost of a full-time hire. We partner with owners and leadership teams to provide strategic insight, forecasting, and decision support.
              </p>
              <p className={styles.body}>
                With decades of financial leadership experience, we bring CFO-level insight to budgeting, forecasting, capital planning, and strategic financial management.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Cash flow forecasting and management</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Budget development and performance monitoring</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Financial modeling and scenario planning</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Strategic planning and capital allocation</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Contract negotiation support</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Internal controls and standard operating procedures support</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-CFO.jpg"
                alt="Fractional CFO support"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cleanup - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="cleanup"
        className={`${styles.service} ${
          visibleSections.has("cleanup") ? styles.visible : ""
        }`}
        ref={setSectionRef("cleanup")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-business.jpg"
                alt="Books and financial statement cleanup"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Wrench size={40} />
              </div>
              <h2 className={styles.h2}>Books & Financial Statement Cleanup</h2>
              <p className={styles.body}>
                One-time or short-term engagements designed to correct historical issues, organize financial records, and restore confidence in your financial statements.
              </p>
              <p className={styles.body}>
                This service is ideal for businesses transitioning to professional accounting support, preparing for tax filings, financing, or ongoing advisory services.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Historical transaction review and corrections</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>General ledger cleanup and reclassification</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Reconciliation of bank, credit card, and loan accounts</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Correction of prior-period financial statements</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Alignment of books with tax returns and payroll records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility bar */}
      <section
        className={`${styles.credibility} ${
          visibleSections.has("credibility") ? styles.credVisible : ""
        }`}
        id="credibility"
        ref={setSectionRef("credibility")}
      >
        <div className="container">
          <div className={styles.credGrid}>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>24+</div>
              <div className={styles.credLabel}>
                Years of Financial Leadership
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>CPA</div>
              <div className={styles.credLabel}>Licensed & Certified</div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>CFO</div>
              <div className={styles.credLabel}>Executive-Level Oversight</div>
            </div>
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
            <h2 className={styles.h2}>
              Ready to Strengthen Your Financial Management?
            </h2>
            <p className={styles.body}>
              Let's discuss which services can best support your business goals
              and financial needs.
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