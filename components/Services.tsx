export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="h1 text-navy mb-2">Services</h2>
        <p className="section-lead mb-10">
          Clear, straightforward support tailored to your organization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="card p-6 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-lg mb-2">
              Tax Preparation &amp; Planning
            </h3>
            <p>
              Federal and state returns, estimated payments, and proactive
              planning to minimize surprises.
            </p>
          </article>
          <article className="card p-6 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-lg mb-2">
              Accounting &amp; Bookkeeping
            </h3>
            <p>
              Monthly close, financial statements, payroll coordination, and
              clean-up projects.
            </p>
          </article>
          <article className="card p-6 hover:-translate-y-1 transition">
            <h3 className="font-semibold text-lg mb-2">
              Advisory for Small Businesses
            </h3>
            <p>
              Entity selection, cash flow, budgeting, and practical counsel as
              you grow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
