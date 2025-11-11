import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-20">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-3xl mb-6">
              Integrity Business Consulting
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Practical expertise to keep your finances clear and compliant.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-base">
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Tax Preparation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Bookkeeping
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Business Advisory
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Nonprofit Compliance
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-white transition-colors"
                >
                  info@example.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  123 Main Street
                  <br />
                  Your City, ST 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-base uppercase tracking-wide mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@example.com"
                className="w-12 h-12 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-base text-white/60">
          <p className="font-serif">
            © {new Date().getFullYear()} Integrity Business Consulting. All
            rights reserved.
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