import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/eng.html", label: "Home" },
  { href: "/sc_e.html", label: "Serge Cantin" },
  { href: "/real_e.html", label: "Realisations" },
  { href: "/stand_e.html", label: "Stands" },
  { href: "/cw_e.html", label: "Our Workshop" },
  { href: "/contact_e.html", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

const frenchEquivalents: Record<string, string> = {
  "/eng.html": "/fr.html",
  "/sc_e.html": "/sc.html",
  "/real_e.html": "/real.html",
  "/stand_e.html": "/stand.html",
  "/cw_e.html": "/cw.html",
  "/contact_e.html": "/contact.html",
  "/blog": "/blog-fr",
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/eng.html" && (location === "/" || location === "/eng.html")) {
      return true;
    }
    return location === href;
  };

  const currentFrenchPage = frenchEquivalents[location] || "/fr.html";

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-background border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/eng.html"
            className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity"
            data-testid="link-logo"
          >
            <Factory className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-semibold text-lg leading-tight">Serge Cantin</span>
              <span className="text-xs text-muted-foreground leading-tight hidden sm:block">
                Gestion de Projets & 3D design
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentFrenchPage}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground border rounded-md transition-colors"
              data-testid="link-language-switch"
            >
              FR
            </a>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background">
          <nav className="flex flex-col p-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={currentFrenchPage}
              className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors flex items-center gap-2"
              data-testid="link-mobile-language-switch"
            >
              Passer en Fran\u00e7ais
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
