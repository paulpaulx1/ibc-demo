import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.grid} mb-12`}>
          {/* Brand */}
          <div>
            <h3 className={styles.heading}>
              Integrity Business <br /> Consulting
            </h3>
            <p className="text-white/70 text-base leading-relaxed mt-4">
              Practical expertise to keep your finances clear and compliant.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.columnTitle}>Services</h4>
            <ul className={styles.list}>
              {[
                "Tax Preparation",
                "Bookkeeping",
                "Business Advisory",
                "Nonprofit Compliance",
              ].map((service) => (
                <li key={service} className={styles.listItem}>
                  <a href="#services" className={styles.link}>
                    {service}
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
                <span>(317) 752-8649</span>
              </li>
              <li className={`${styles.listItem} flex items-center gap-3`}>
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="mailto:info@integritybco.com" className={styles.link}>
                  info@integritybco.com
                </a>
              </li>
              <li className={`${styles.listItem} flex items-start gap-3`}>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>
                  Serving clients across
                  <br />
                  Indiana and beyond
                </span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className={styles.columnTitle}>Connect</h4>
            <div className={styles.connectIcons}>
              {[
                { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:info@integritybco.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
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
          <p className="font-serif text-center md:text-left">
            © {new Date().getFullYear()} Integrity Business Consulting, LLC. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
