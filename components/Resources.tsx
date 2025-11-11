export default function Resources() {
  const items = [
    ["Important Tax Deadlines", "Updated quarterly"],
    ["Where’s My Federal Refund?", "irs.gov"],
    ["Where’s My Indiana Refund?", "in.gov"],
    ["Income Tax Rates", "Individual & business"],
    ["Capital Gains Tax Rates", "Short- & long-term"],
  ];

  return (
    <section id="resources" className="py-20">
      <div className="container">
        <h2 className="h1 text-navy mb-2">Resources</h2>
        <p className="section-lead mb-10">Quick links clients ask for most.</p>
        <ul className="space-y-3">
          {items.map(([title, meta]) => (
            <li
              key={title}
              className="flex items-center justify-between border border-muted rounded-lg bg-white px-5 py-3 hover:border-slate transition"
            >
              <a href="#" className="font-semibold text-navy hover:underline">
                {title}
              </a>
              <span className="text-xs text-accent-2">{meta}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
