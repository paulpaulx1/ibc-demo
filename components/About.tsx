import Image from "next/image";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT: narrative */}
          <div className={styles.leftContent}>
            <h2
              className={`${styles.heading} font-serif text-3xl md:text-4xl text-slate-900 leading-tight mb-4`}
            >
              A trusted CPA firm focused on clarity, compliance, and confidence.
            </h2>

            {/* subtle gold divider */}
            <div className={styles.headingDivider} />

            <p
              className={`${styles.paragraph} text-slate-700 text-lg leading-relaxed mb-5 max-w-xl`}
            >
              We partner with small businesses and nonprofits that want clean
              books, responsive support, and financial decisions backed by real
              numbers—not guesswork.
            </p>

            <p
              className={`${styles.paragraph} text-slate-700 leading-relaxed mb-5 max-w-xl`}
            >
              From monthly bookkeeping and reporting to tax preparation and
              proactive planning, our process is designed to reduce stress,
              improve visibility, and keep you moving forward with confidence.
            </p>

            <p
              className={`${styles.paragraph} text-slate-700 leading-relaxed mb-5 max-w-xl`}
            >
              Based in Indianapolis and serving businesses nationwide, we
              understand the day-to-day challenges faced by growing
              organizations—from staying compliant and organized to planning
              ahead with confidence.
            </p>

            <p
              className={`${styles.paragraph} text-slate-700 leading-relaxed max-w-xl`}
            >
              Whether you're looking for reliable bookkeeping services,
              proactive tax planning, or ongoing advisory support, we take a
              steady, thoughtful approach designed to support long-term
              stability—not short-term fixes.
            </p>

            <div className={`${styles.ctas} mt-8 flex gap-4 flex-wrap`}>
              <a
                href="contact"
                className="bg-navy text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:brightness-110 hover:-translate-y-[2px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/40"
              >
                Schedule a Consultation
              </a>

              <a
                href="#services"
                className="border border-navy text-navy font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-navy hover:text-white hover:-translate-y-[2px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30"
              >
                View Services
              </a>
            </div>
          </div>

          {/* RIGHT: image + support card */}
          <div className={`${styles.rightContent} space-y-6`}>
            {/* Image panel */}
            <div
              className={`${styles.imagePanel} relative overflow-hidden rounded-2xl`}
            >
              <div className="relative h-56 md:h-64">
                <Image
                  src="/about_section_chairs.jpg"
                  alt="Peaceful shoreline scene representing clarity and stability"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,31,54,0.15)] via-[rgba(15,31,54,0.08)] to-transparent" />
              </div>
            </div>

            {/* How we help */}
            <div className={`${styles.helpCard} bg-slate-50 rounded-2xl p-8`}>
              <h3 className="font-semibold text-slate-900 text-lg mb-5">
                How we help
              </h3>

              <ul className="space-y-4 text-slate-700">
                {[
                  "Monthly bookkeeping and reporting for businesses nationwide",
                  "Tax preparation and year-round tax planning",
                  "Advisory support for small businesses and nonprofits",
                  "Budgeting, forecasting, and cash-flow visibility",
                  "Clear communication with no jargon or surprises",
                ].map((text) => (
                  <li key={text} className={`${styles.listItem} flex gap-3`}>
                    <span className={styles.goldDot} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "CPA", label: "Licensed" },
                  { value: "24+", label: "Years" },
                  { value: "Indy", label: "Based" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`${styles.statCard} bg-white rounded-xl p-4`}
                  >
                    <div className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
}
