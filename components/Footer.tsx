import Image from "next/image";
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-serif text-2xl md:text-3xl leading-tight">
                Integrity Business <br /> Consulting
              </h3>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              Practical expertise to keep your finances clear and compliant.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6 text-accent">
              Services
            </h4>
            <ul className="space-y-3 text-base">
              {[
                "Tax Preparation",
                "Bookkeeping",
                "Business Advisory",
                "Nonprofit Compliance",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6 text-accent">
              Contact
            </h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>(317) 752-8649</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@integritybco.com"
                  className="hover:text-white transition-colors"
                >
                  info@integritybco.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <span>
                  Serving clients across
                  <br />
                  Indiana and beyond
                </span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6 text-accent">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                {
                  Icon: Facebook,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  Icon: Linkedin,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  Icon: Mail,
                  href: "mailto:info@integritybco.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:-translate-y-[2px]"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60">
          <p className="font-serif text-center md:text-left">
            © {new Date().getFullYear()} Integrity Business Consulting, LLC.
            All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
