"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Calculator,
  FileText,
  TrendingUp,
  Activity,
  Briefcase,
} from "lucide-react";
import styles from "./ServicesPage.module.css";

export default function ServicesPage() {
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
        <Image
          src="/services/bookkeeping/bookkeeping.jpg"
          alt=""
          fill
          className={styles.bgImage}
          priority
          quality={95}
        />
        <div className="container">
          <div className={styles.heroInner}>
            <h1 className={styles.h1}>
              Professional Accounting & CPA Services in Indianapolis
            </h1>
            <p className={styles.lede}>
              Comprehensive financial management from accounting and bookkeeping
              to strategic CFO services and healthcare finance advisory—backed
              by 24+ years of experience.
            </p>
            <a href="#contact" className={styles.primaryCta}>
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Accounting Services - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="accounting"
        className={`${styles.service} ${
          visibleSections.has("accounting") ? styles.visible : ""
        }`}
        ref={setSectionRef("accounting")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Calculator size={40} />
              </div>
              <h2 className={styles.h2}>Accounting Services</h2>
              <p className={styles.body}>
                Comprehensive accounting solutions for Indianapolis businesses and
                nonprofits—from financial statement preparation to multi-entity
                management and regulatory compliance. We deliver accurate, timely
                financial reporting that supports informed decision-making and
                regulatory requirements.
              </p>
              <p className={styles.body}>
                Our accounting services are designed for growing organizations
                that need more than basic transaction recording—businesses and
                nonprofits that value accuracy, strategic insight, and
                professional financial oversight.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Financial statement preparation and analysis</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Multi-entity consolidated reporting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Regulatory compliance and reporting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Nonprofit fund accounting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Internal controls assessment and improvement</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-accounting.jpg"
                alt="Professional accounting services"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="bookkeeping"
        className={`${styles.service} ${
          visibleSections.has("bookkeeping") ? styles.visible : ""
        }`}
        ref={setSectionRef("bookkeeping")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-bookkeeping.jpg"
                alt="Professional bookkeeping services"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <FileText size={40} />
              </div>
              <h2 className={styles.h2}>Bookkeeping Services</h2>
              <p className={styles.body}>
                Professional monthly bookkeeping with CPA oversight—accurate
                reconciliation, organized records, and financial clarity for
                confident decision-making. Our Indianapolis bookkeeping services
                take the administrative burden off your plate while ensuring your
                books are accurate, current, and audit-ready.
              </p>
              <p className={styles.body}>
                Whether you're transitioning from spreadsheets, managing multiple
                entities, or need consistent monthly close processes, we provide
                reliable bookkeeping that supports your business growth and
                financial planning needs.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Monthly reconciliation and financial close</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>QuickBooks setup, cleanup, and management</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Accounts payable and receivable tracking</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Clear monthly financial statements</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Multi-entity bookkeeping coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Planning - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="tax-planning"
        className={`${styles.service} ${
          visibleSections.has("tax-planning") ? styles.visible : ""
        }`}
        ref={setSectionRef("tax-planning")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <FileText size={40} />
              </div>
              <h2 className={styles.h2}>Tax Preparation & Planning</h2>
              <p className={styles.body}>
                Strategic tax planning and preparation for individuals,
                businesses, and nonprofits—minimizing liability while ensuring
                full federal and state compliance. We go beyond annual tax
                preparation to provide year-round strategic guidance on entity
                structure, major transactions, and tax optimization strategies.
              </p>
              <p className={styles.body}>
                With deep experience in corporate, individual, and nonprofit tax
                strategy, we help Indianapolis businesses and individuals navigate
                complex tax situations while identifying opportunities for
                strategic tax savings.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Business and individual tax preparation</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Corporate and nonprofit tax strategy</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Quarterly estimated tax planning</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Entity structure optimization</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Multi-state tax compliance</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-taxpreparation.jpg"
                alt="Tax preparation and planning services"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CFO Services - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="cfo-services"
        className={`${styles.service} ${
          visibleSections.has("cfo-services") ? styles.visible : ""
        }`}
        ref={setSectionRef("cfo-services")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-CFO.jpg"
                alt="CFO and financial planning services"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <TrendingUp size={40} />
              </div>
              <h2 className={styles.h2}>CFO & Financial Planning</h2>
              <p className={styles.body}>
                Fractional CFO services and strategic planning for growing
                organizations—executive-level guidance, forecasting, and capital
                planning without the full-time cost. We provide the financial
                leadership that positions your business for sustainable growth and
                informed strategic decision-making.
              </p>
              <p className={styles.body}>
                With 24+ years of financial leadership experience including
                multi-entity operations, healthcare finance, and successful
                business exits, we bring CFO-level insight to budgeting,
                forecasting, capital planning, and strategic financial management.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Cash flow forecasting and management</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Budget development and variance analysis</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Financial modeling and scenario planning</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Board and investor reporting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Strategic planning and capital allocation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Finance Advisory - TEXT LEFT | IMAGE RIGHT */}
      <section
        id="healthcare-finance"
        className={`${styles.service} ${
          visibleSections.has("healthcare-finance") ? styles.visible : ""
        }`}
        ref={setSectionRef("healthcare-finance")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Activity size={40} />
              </div>
              <h2 className={styles.h2}>Healthcare Finance Advisory</h2>
              <p className={styles.body}>
                Specialized financial leadership for behavioral health and
                healthcare organizations—CARF compliance, payor contract analysis,
                and regulatory expertise. We understand the unique financial and
                operational challenges of healthcare organizations, particularly
                in behavioral health and professionals monitoring programs.
              </p>
              <p className={styles.body}>
                Drawing on experience as CFO for a behavioral health organization
                managing rapid growth, state-funded program development, and
                complex payor relationships, we provide the strategic financial
                guidance that supports quality care delivery in highly regulated
                environments.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>CARF accreditation financial compliance</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Payor contract negotiation and analysis</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>State-funded program financial management</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Healthcare-specific reporting and budgeting</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Nonprofit healthcare division financial oversight</span>
                </li>
              </ul>
            </div>

            <div className={styles.serviceImage}>
              <Image
                src="/services/services-healthcare.jpg"
                alt="Healthcare finance advisory services"
                fill
                className={styles.serviceImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Advisory & M&A - IMAGE LEFT | TEXT RIGHT */}
      <section
        id="business-advisory"
        className={`${styles.service} ${
          visibleSections.has("business-advisory") ? styles.visible : ""
        }`}
        ref={setSectionRef("business-advisory")}
      >
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceImage}>
              <Image
                src="/services/services-business.jpg"
                alt="Business advisory and M&A services"
                fill
                className={styles.serviceImg}
              />
            </div>

            <div className={styles.serviceContent}>
              <div className={styles.serviceIcon}>
                <Briefcase size={40} />
              </div>
              <h2 className={styles.h2}>Business Advisory & M&A</h2>
              <p className={styles.body}>
                Strategic guidance for business transitions, acquisitions, and
                exits—informed by real experience buying, scaling, and
                successfully selling a professional services firm. We provide the
                financial insight and strategic planning that helps Indianapolis
                business owners navigate critical transitions and position their
                companies for sustainable growth.
              </p>
              <p className={styles.body}>
                From entity structure selection and growth strategy to exit
                planning and M&A due diligence, we bring practical,
                experience-based guidance to business owners facing major
                strategic decisions.
              </p>
              <ul className={styles.serviceList}>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Business acquisition due diligence and strategy</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Exit planning and business valuation</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Growth strategy and financial planning</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>Entity structure optimization</span>
                </li>
                <li className={styles.serviceItem}>
                  <CheckCircle className={styles.checkIcon} />
                  <span>M&A transaction support and integration</span>
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
            <a href="#contact" className={styles.ctaButton}>
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}