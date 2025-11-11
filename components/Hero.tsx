export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-start text-white bg-cover"
      style={{
        backgroundImage: "url('/hero-image.jpg')",
        backgroundPosition: "50px center", // ensure even overflow
        backgroundAttachment: "scroll",
      }}
    >
      {/* gradient overlay (dark on LEFT, light on right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,31,54,0.85)] via-[rgba(15,31,54,0.65)] to-[rgba(15,31,54,0.2)]" />

      {/* text content */}
      <div className="relative z-10 max-w-3xl px-6 md:px-12 text-left">
        <p className="uppercase tracking-[0.15em] text-accent text-sm mb-3">
          Certified Public Accountant
        </p>

        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
          Financial clarity for small businesses and nonprofits.
          <span className="block h-[3px] w-20 bg-accent mt-4 rounded" />
        </h1>

        <p className="text-lg text-slate-200 mb-10 max-w-xl">
          Trusted tax, accounting, and advisory services grounded in integrity
          and stewardship.
        </p>

        <div className="flex gap-4 flex-wrap">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="bg-accent text-white font-semibold px-6 py-3 rounded-md border border-transparent shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-[2px] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
          >
            Schedule a Consultation
          </a>

          {/* Secondary CTA */}
          <a
            href="#services"
            className="border border-accent text-accent font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-accent hover:text-navy hover:-translate-y-[2px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
