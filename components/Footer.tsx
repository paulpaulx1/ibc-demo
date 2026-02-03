import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const servicesLinks = [
  { title: "Accounting Services", href: "/services#accounting" },
  { title: "Bookkeeping Services", href: "/services#bookkeeping" },
  { title: "Tax Preparation & Planning", href: "/services#tax-planning" },
  { title: "CFO & Financial Planning", href: "/services#cfo-services" },
  {
    title: "Healthcare Finance Advisory",
    href: "/services#healthcare-finance",
  },
  { title: "Business Advisory & M&A", href: "/services#business-advisory" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.grid} mb-12`}>
          {/* Brand */}
          <div>
            <div className={styles.brand}>
              <Image
                src="/SMG Full Logo1.png"
                alt="SMG Accounting & Tax Advisors, LLC"
                width={200}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/70 text-base leading-relaxed mt-4 max-w-sm">
              Professional accounting, tax, and CFO services for Indianapolis
              businesses and nonprofits—focused on clarity, compliance, and
              confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.list}>
              {servicesLinks.map((service) => (
                <li key={service.title} className={styles.listItem}>
                  <a href={service.href} className={styles.link}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.columnTitle}>Contact</h4>
            <ul className={styles.list}>
              <li className={`${styles.listItem} flex items-center gap-3`}>
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="tel:3177528649" className={styles.link}>
                  (317) 752-8649
                </a>
              </li>
              <li className={`${styles.listItem} flex items-center gap-3`}>
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:scottgeanscpa@gmail.com"
                  className={styles.link}
                >
                  scottgeanscpa@gmail.com
                </a>
              </li>
              <li className={`${styles.listItem} flex items-start gap-3`}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>
                  5679 Yorktown Road
                  <br />
                  Plainfield, IN 46168
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={styles.columnTitle}>Connect</h4>
            <div className={styles.connectIcons}>
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/scott-geans-cpa-3443688/",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  href: "mailto:scottgeanscpa@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={styles.iconButton}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center w-full">
            <p className="text-center md:text-left text-white/70 text-sm">
              © {new Date().getFullYear()} SMG Accounting &amp; Tax Advisors,
              LLC. All rights reserved.
            </p>

            <blockquote className={styles.scripture}>
              “Whatever you do, work heartily, as for the Lord and not for men.”
              <span className={styles.scriptureRef}>— Colossians 3:23</span>
            </blockquote>
          </div>
        </div>
      </div>
    </footer>
  );
}
