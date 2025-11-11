export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <h2 className="h1 text-navy mb-3">
            About Integrity Business Consulting, LLC
          </h2>
          <p>
            Founded by <strong>Scott Geans, CPA, MPA</strong>, Integrity Business Consulting serves
            small businesses, nonprofits, and families with practical financial guidance.
            We believe clarity builds confidence—and that integrity in the small things leads
            to excellence in the big things.
          </p>
          <p className="mt-4">
            Before launching Integrity, Scott advised clients across tax, accounting, and
            operations. Today, he partners with leaders to simplify the numbers and focus on
            what matters.
          </p>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold mb-2">Who we serve</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Small businesses and family-owned companies</li>
            <li>Nonprofits, ministries, and churches</li>
            <li>Entrepreneurs and independent professionals</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2">What to expect</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Plain English and realistic timelines</li>
            <li>Steady communication and proactive planning</li>
            <li>Professional standards with a personal touch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
