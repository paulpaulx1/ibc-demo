import {
  Calculator,
  FileSpreadsheet,
  Lightbulb,
  PiggyBank,
  TrendingUp,
  Landmark,
} from "lucide-react";
import Image from "next/image";
import styles from "./ServicesGrid.module.css";

const services = [
  {
    title: "Tax Preparation & Planning",
    description:
      "Federal and state filings, estimated payments, and proactive strategies to minimize surprises.",
    icon: Calculator,
  },
  {
    title: "Accounting & Bookkeeping",
    description:
      "Monthly close, financial statements, payroll coordination, and catch-up projects.",
    icon: FileSpreadsheet,
  },
  {
    title: "Advisory for Small Businesses",
    description:
      "Entity selection, budgeting, and cash-flow guidance as your organization grows.",
    icon: Lightbulb,
  },
  {
    title: "Nonprofit Compliance",
    description:
      "Form 990 preparation, restricted fund tracking, and audit-ready financial reporting.",
    icon: Landmark,
  },
  {
    title: "Financial Forecasting",
    description:
      "Scenario modeling and KPI dashboards to support confident decision-making.",
    icon: TrendingUp,
  },
  {
    title: "Individual Planning",
    description:
      "Tax-efficient personal strategies for business owners and independent professionals.",
    icon: PiggyBank,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-soft">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="h1 text-navy mb-2">Services</h2>
          <p className="section-lead">
            Practical expertise to keep your finances clear and compliant.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className={`${styles.serviceCard} group border border-muted rounded-2xl bg-gray-50 p-8 shadow-sm hover:shadow-xl relative overflow-hidden`}
            >
              {/* Background Image */}
              <div className={styles.cardBackground}>
                <Image src="/graph.jpg" alt="" fill className="object-cover" />
              </div>

              <div className="flex flex-col items-start h-full relative z-10">
                <div
                  className={`${styles.iconWrapper} rounded-2xl transition-all duration-300 mb-6`}
                >
                  <Icon
                    className={`${styles.icon} transition-colors duration-300`}
                  />
                </div>
                <h3
                  className={`${styles.title} font-serif font-semibold text-2xl text-navy transition-colors duration-300 mb-3`}
                >
                  {title}
                </h3>
                <p
                  className={`${styles.description} text-slate text-base leading-relaxed transition-colors duration-300 mb-6 flex-grow`}
                >
                  {description}
                </p>
                <a
                  href="#contact"
                  className={`${styles.learnMore} text-navy font-medium underline transition-colors duration-300`}
                >
                  Learn More
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
