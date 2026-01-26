"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award } from "lucide-react";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
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
      <section
        className={`${styles.hero} ${
          visibleSections.has("hero") ? styles.heroVisible : ""
        }`}
        id="hero"
        ref={setSectionRef("hero")}
      >
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/family-portrait.png"
                  alt="Scott Geans with family at Notre Dame"
                  width={400}
                  height={400}
                  className={styles.portrait}
                  priority
                />
                <div className={styles.imageAccent}></div>
              </div>
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.h1}>
                About Scott Geans, CPA
                <span className={styles.accentLine}></span>
              </h1>
              <p className={styles.lede}>
                24+ years of financial leadership—from Fortune 500 corporate
                finance to successfully buying, scaling, and selling a
                professional services firm. Now bringing strategic CFO-level
                insight to Indianapolis businesses that need more than basic
                accounting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        className={`${styles.story} ${
          visibleSections.has("story") ? styles.visible : ""
        }`}
        id="story"
        ref={setSectionRef("story")}
      >
        <div className="container">
          <div className={styles.storyInner}>
            <h2 className={styles.h2}>
              Experience That Goes Beyond Tax Returns
            </h2>

            <p className={styles.body}>
              Most CPAs can prepare tax returns and manage books. What makes SMG
              different is the depth of experience behind every
              engagement—experience from banking, Fortune 500 leadership,
              entrepreneurship, and healthcare operations.
            </p>

            <p className={styles.body}>
              After starting in commercial banking and earning my CPA and MPA
              from IU Kelley School of Business, I spent years in progressively
              senior financial roles—from the Indiana State Budget Agency
              managing the $1.1 billion DCS budget, to Eli Lilly managing $450
              million in operating budgets and serving as Controller for their
              $120 million global health initiative.
            </p>

            <p className={styles.body}>
              In 2010, I acquired a professional services firm and spent nine
              years building it into a thriving operation before successfully
              selling the business in 2019 for more than twice the purchase
              price. That experience—actually walking the path of buying,
              scaling, and exiting a business—informs how I serve clients today.
            </p>

            <p className={styles.body}>
              Since 2019, I've served as CFO for Parkdale Management, a
              multi-entity behavioral health organization, deepening my
              expertise in healthcare finance, CARF compliance, payor contract
              negotiation, and complex multi-entity operations.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section
        className={`${styles.different} ${
          visibleSections.has("different") ? styles.visible : ""
        }`}
        id="different"
        ref={setSectionRef("different")}
      >
        <div className="container">
          <div className={styles.differentInner}>
            <h2 className={styles.h2}>What Makes SMG Different</h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <TrendingUp size={32} />
                </div>
                <h3 className={styles.cardTitle}>CFO-Level Insight</h3>
                <p className={styles.cardBody}>
                  Real executive financial leadership experience—not just
                  accounting services. Strategic thinking on budgeting,
                  forecasting, and capital planning from actual CFO experience.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Users size={32} />
                </div>
                <h3 className={styles.cardTitle}>Business Owner Experience</h3>
                <p className={styles.cardBody}>
                  Successfully bought, scaled, and sold a professional services
                  firm. Real experience with business transitions, growth
                  challenges, and exit planning—not just advisory.
                </p>
              </div>

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Award size={32} />
                </div>
                <h3 className={styles.cardTitle}>
                  Healthcare Finance Expertise
                </h3>
                <p className={styles.cardBody}>
                  Specialized experience in behavioral health, CARF compliance,
                  and payor contract analysis. Most CPAs don't understand
                  healthcare finance—we bring it to every engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        className={`${styles.credentials} ${
          visibleSections.has("credentials") ? styles.credVisible : ""
        }`}
        id="credentials"
        ref={setSectionRef("credentials")}
      >
        <div className="container">
          <div className={styles.credGrid}>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>24+</div>
              <div className={styles.credLabel}>Years Financial Leadership</div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>CPA</div>
              <div className={styles.credLabel}>
                Indiana License #CP10700123
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>MPA</div>
              <div className={styles.credLabel}>
                IU Kelley School of Business
              </div>
            </div>
            <div className={styles.credItem}>
              <div className={styles.credNumber}>CFO</div>
              <div className={styles.credLabel}>Multi-Entity Operations</div>
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
            <h2 className={styles.h2}>Ready to Work Together?</h2>
            <p className={styles.body}>
              Let's discuss how SMG's experience and strategic approach can
              support your business goals.
            </p>
            <a href="/#contact" className={styles.ctaButton}>
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}