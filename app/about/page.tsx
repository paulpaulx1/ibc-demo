"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
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
          <div className={styles.heroGrid}>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/family.jpg"
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
      {/* Story */}
      <section
        className={`${styles.story} ${
          visibleSections.has("story") ? styles.visible : ""
        }`}
        id="story"
        ref={setSectionRef("story")}
      >
        <div className="container">
          <div className={styles.storyGrid}>
            {/* LEFT column: text */}
            <div className={styles.storyText}>
              <h2 className={styles.h2}>
                Experience That Goes Beyond Tax Returns
              </h2>

              <p className={styles.body}>
                Scott Geans, CPA is the founder of SMG Accounting & Tax
                Advisors, LLC, where he partners with individuals and small
                business owners who value clarity, trust, and thoughtful
                financial guidance.
              </p>

              <p className={styles.body}>
                With more than two decades of experience, Scott&apos;s background
                spans public accounting, banking, government finance, nonprofit
                leadership, and executive-level CFO roles. He previously owned
                and operated a successful CPA firm for nearly a decade before
                selling it in 2019, and he continues to bring a strategic,
                forward-looking mindset to every client relationship.
              </p>

              <p className={styles.body}>
                Scott&apos;s values were shaped early in life by growing up around
                his father, Rocky Geans, who owned and operated a successful
                construction company. Watching his father lead a business built
                on hard work, honesty, and clear communication left a lasting
                impression and continues to guide how Scott serves his clients
                today.
              </p>
              <p className={styles.body}>
                SMG Accounting & Tax Advisors is a family endeavor in the truest
                sense. Scott&apos;s wife, Andrea, works alongside him in the
                practice, helping manage operations and client experience.
                Together, they are raising two children—Isaac (16) and Ava
                (12)—and believe that strong families and strong businesses are
                built on the same principles: trust, consistency, and care.
              </p>
            </div>

            {/* RIGHT column: image */}
            <div className={styles.storyMedia} aria-hidden="true">
              <div className={styles.experienceWrap}>
                <Image
                  src="/experience.jpg"
                  alt="Abstract landscape suggesting clarity and perspective"
                  fill
                  className={styles.experienceImg}
                  priority={false}
                />
                <div className={styles.experienceOverlay} />
              </div>
            </div>
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
            <h2 className={styles.h2}>Why Choose SMG</h2>

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

              <div className={styles.card}>
                <div className={styles.cardIcon}>
                  <Building2 size={32} />
                </div>
                <h3 className={styles.cardTitle}>
                  Multi-Entity & Nonprofit Experience
                </h3>
                <p className={styles.cardBody}>
                  Proven track record managing financial operations across four
                  companies and one nonprofit simultaneously. Deep understanding
                  of complex organizational structures and nonprofit compliance.
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
            <a href="/contact" className={styles.ctaButton}>
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
