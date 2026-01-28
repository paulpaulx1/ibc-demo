import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section
      className={`${styles.hero} relative min-h-[80vh] flex items-center justify-start text-white bg-cover`}
    >
      {/* Background image */}
      <div
        className={`${styles.heroBackground} absolute inset-0 bg-cover`}
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundPosition: "60px center",
        }}
      />

      {/* ORIGINAL gradient overlay – unchanged */}
      <div
        className={`${styles.heroOverlay} absolute inset-0 bg-gradient-to-r from-[rgba(15,31,54,0.85)] via-[rgba(15,31,54,0.65)] to-[rgba(15,31,54,0.2)]`}
      />

      {/* Gold accents layer */}
      <div className={styles.goldAccents} aria-hidden="true" />

      {/* Content */}
      <div
        className={`${styles.heroText} relative z-10 max-w-3xl px-6 md:px-12 text-left`}
      >
        <p
          className={`${styles.heroEyebrow} uppercase tracking-[0.15em] text-accent text-sm mb-3`}
        >
          Indianapolis based CPA Firm
        </p>

        <h1
          className={`${styles.heroHeading} font-serif text-4xl md:text-5xl leading-tight mb-6`}
        >
          Accounting, tax, and bookkeeping for small businesses and nonprofits.
          <span className={`${styles.heroAccent} block mt-4`} />
        </h1>

        <p
          className={`${styles.heroSubheading} text-lg text-slate-200 mb-10 max-w-xl`}
        >
          Clear reporting, proactive tax planning, and steady financial
          guidance— grounded in integrity and long-term stewardship.
        </p>

        <div className={`${styles.heroCtas} flex gap-6 flex-wrap`}>
          <a href="/contact" className={styles.textCta}>
            Schedule a Consultation
          </a>

          <a href="#services" className={styles.outlineCta}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
