export default function Band() {
  return (
    <div className="relative border-y border-muted bg-gradient-to-r from-soft via-white to-soft py-12 text-center overflow-hidden">
      <div className="absolute inset-0 bg-navy/[0.02]" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <p className="text-navy/70 font-serif text-xl md:text-2xl leading-relaxed italic mb-3">
            "Whatever you do, work heartily, as for the Lord and not for men."
          </p>
          <p className="text-navy/50 font-medium text-sm tracking-wide uppercase">
            Colossians 3:23
          </p>
        </div>
      </div>
    </div>
  );
}
