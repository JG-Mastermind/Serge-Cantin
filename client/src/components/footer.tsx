import { Link } from "wouter";
import { Factory, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link
              href="/eng.html"
              className="flex items-center gap-2 text-foreground mb-4"
              data-testid="link-footer-logo"
            >
              <Factory className="h-7 w-7 text-primary" />
              <span className="font-semibold text-lg">Serge Cantin</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Custom metal store fixtures manufacturer. Quality craftsmanship since 1994.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/eng.html", label: "Home" },
                { href: "/sc_e.html", label: "About Us" },
                { href: "/real_e.html", label: "Realisations" },
                { href: "/stand_e.html", label: "Stands" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              More
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/cw_e.html", label: "Our Workshop" },
                { href: "/contact_e.html", label: "Contact" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-more-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  5665 Dessiant<br />
                  Ville St-Laurent (Quebec)<br />
                  Canada H4S 1M8
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+15147451991"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-phone"
                >
                  (514) 745-1991
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@sergecantin.com"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-footer-email"
                >
                  info@sergecantin.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              \u00a9 {new Date().getFullYear()} Gestion de Projets Serge Cantin Inc. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Toll Free: <a href="tel:+18887372268" className="hover:text-foreground transition-colors">(1 888) 737-2268</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
