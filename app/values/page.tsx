"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Scale, TrendingUp, Users } from "lucide-react";
import styles from "./ValuesPage.module.css";

export default function ValuesPage() {
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
              Our Values
              <span className={styles.accentLine}></span>
            </h1>
            <p className={styles.lede}>
              At SMG Accounting & Tax Advisors, our work is shaped by deeply
              held values—both professional and personal. As a family-run firm,
              we believe strong businesses are built the same way strong
              families are: with honesty, hard work, clear communication, and a
              long-term commitment to doing what's right.
            </p>
          </div>
        </div>
      </section>

      {/* Faith & Foundation */}
      <section
        className={`${styles.foundation} ${
          visibleSections.has("foundation") ? styles.visible : ""
        }`}
        id="foundation"
        ref={setSectionRef("foundation")}
      >
        <div className="container">
          <div className={styles.foundationInner}>
            <p className={styles.body}>
              Our faith in the Lord guides how we approach our work and how we
              treat people. We believe there is wisdom in pursuing steady,
              thoughtful progress over constant striving—and in valuing clarity
              and peace over complexity and excess. While we are not perfect, we
              aim to serve with humility, integrity, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section
        className={`${styles.coreValues} ${
          visibleSections.has("coreValues") ? styles.visible : ""
        }`}
        id="coreValues"
        ref={setSectionRef("coreValues")}
      >
        <div className="container">
          <div className={styles.valuesGrid}>
            {/* Value 1 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Heart size={32} />
              </div>
              <h2 className={styles.valueTitle}>
                Honesty, Integrity, and Accountability
              </h2>
              <p className={styles.valueBody}>
                We believe trust begins with honesty—and is sustained by
                accountability. That means being transparent, giving clear
                guidance, and communicating openly. It also means acknowledging
                when mistakes happen. If we make one, we will own it, address it
                promptly, and work diligently to make it right.
              </p>
              <p className={styles.valueEmphasis}>
                Integrity isn't about perfection. It's about responsibility and
                follow-through.
              </p>
            </div>

            {/* Value 2 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Scale size={32} />
              </div>
              <h2 className={styles.valueTitle}>Stewardship Over Striving</h2>
              <p className={styles.valueBody}>
                We believe financial work is a form of stewardship. Rather than
                chasing more for the sake of more, we focus on helping clients
                build stability, clarity, and peace of mind. There is wisdom in
                knowing when enough is enough—and in building businesses that
                are healthy, sustainable, and well-understood, not just busy.
              </p>
              <p className={styles.valueEmphasis}>
                That perspective shapes how we advise clients, how we pace our
                work, and how we measure success.
              </p>
            </div>

            {/* Value 3 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <TrendingUp size={32} />
              </div>
              <h2 className={styles.valueTitle}>Knowing Your Numbers</h2>
              <p className={styles.valueBody}>
                Clear decisions require clear understanding. We believe business
                owners should truly know the condition of their finances—not
                just glance at reports once a year. Clean books, accurate
                reporting, and consistent review provide the insight needed to
                lead confidently and responsibly.
              </p>
              <p className={styles.valueEmphasis}>
                Our role is to help clients understand their numbers, not
                overwhelm them with them—so decisions are made with clarity, not
                guesswork.
              </p>
            </div>

            {/* Value 4 */}
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <Users size={32} />
              </div>
              <h2 className={styles.valueTitle}>
                Family, Faith, and a Long-Term View
              </h2>
              <p className={styles.valueBody}>
                SMG Accounting & Tax Advisors is a family endeavor in the truest
                sense. Scott's wife, Andrea, works alongside him in the
                practice, and together they are raising their children with the
                belief that faith, consistency, and care matter—in business and
                in life.
              </p>
              <p className={styles.valueEmphasis}>
                We approach client relationships with that same long-term
                mindset. We are not focused on short-term wins or quick fixes,
                but on helping clients build businesses that support their
                families, values, and future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values in Practice */}
      <section
        className={`${styles.practice} ${
          visibleSections.has("practice") ? styles.visible : ""
        }`}
        id="practice"
        ref={setSectionRef("practice")}
      >
        <div className="container">
          <div className={styles.practiceGrid}>
            <div className={styles.practiceSection}>
              <h2 className={styles.h2}>How Our Values Shape Our Pricing</h2>
              <p className={styles.body}>
                Our pricing reflects our values. We use flat, transparent
                pricing because we believe it supports trust, stewardship, and
                clarity. No surprise invoices. No incentive to overwork or
                overcomplicate. Just clear expectations aligned with the level
                of service and experience provided.
              </p>
              <p className={styles.body}>
                This allows us to focus on thoughtful, well-paced work—rather
                than constant urgency or unnecessary complexity.
              </p>
            </div>

            <div className={styles.practiceSection}>
              <h2 className={styles.h2}>What Clients Can Expect</h2>
              <ul className={styles.expectList}>
                <li>Honest, experience-based guidance</li>
                <li>Clear financial visibility and understanding</li>
                <li>Transparent pricing and expectations</li>
                <li>Open communication and accountability</li>
                <li>
                  A steady, values-driven approach rooted in faith and
                  stewardship
                </li>
              </ul>
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
            <h2 className={styles.h2}>Work With a Values-Driven Firm</h2>
            <p className={styles.body}>
              If these values resonate with you, let's talk about how we can
              support your business.
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
