import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
  size?: "large" | "medium" | "small";
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  showCta = false,
  ctaText = "Learn More",
  ctaLink = "/real_e.html",
  size = "medium",
  backgroundImage,
}: HeroProps) {
  const heightClass = {
    large: "min-h-[70vh]",
    medium: "min-h-[50vh]",
    small: "min-h-[35vh]",
  }[size];

  return (
    <section
      className={`relative ${heightClass} flex items-center justify-center overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background/30" />
        </>
      )}

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 lg:px-8 text-center py-16">
        {subtitle && (
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            {description}
          </p>
        )}
        {showCta && (
          <Link href={ctaLink}>
            <Button size="lg" className="gap-2" data-testid="button-hero-cta">
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </section>
  );
}
