import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Factory,
  Wrench,
  Globe2,
  Users,
  Award,
  ArrowRight,
  Package,
  Ruler,
  Truck,
} from "lucide-react";

import heroImage1 from "@assets/hero-metal-fabrication.webp";
import heroImage2 from "@assets/hero-lathe-workshop.webp";
import heroImage3 from "@assets/hero-durma-shear.webp";

const services = [
  {
    icon: Factory,
    title: "Custom Manufacturing",
    description:
      "From single prototypes to complete store fixture packages, we manufacture custom metal fixtures tailored to your specifications.",
  },
  {
    icon: Ruler,
    title: "Design & Engineering",
    description:
      "Our experienced team creates production drawings and provides technical support throughout the entire project lifecycle.",
  },
  {
    icon: Package,
    title: "Large Volume Production",
    description:
      "Our 20,000 sq ft facility handles everything from individual items to high-volume production runs efficiently.",
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description:
      "We coordinate shipments globally, having completed projects across North America, South America, Asia, and the Middle East.",
  },
];

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "20,000", label: "Sq Ft Facility" },
  { value: "30+", label: "Skilled Employees" },
  { value: "6", label: "Production Departments" },
];

export default function HomePage() {
  return (
    <Layout
      title="Serge Cantin - Custom Metal Store Fixtures | Montreal, Canada"
      description="Serge Cantin is a leading manufacturer of custom metal store fixtures based in Montreal, Quebec, Canada. Quality craftsmanship since 1994."
    >
      <Hero
        subtitle="Custom Metal Store Fixtures"
        title="Precision Manufacturing for Retail Excellence"
        description="We are a manufacturer of custom metal store fixtures based in Montreal, Quebec, Canada. Our 20,000 square foot plant has all the equipment and resources to produce anything from a single prototype to complete store fixture packages."
        showCta
        ctaText="View Our Work"
        ctaLink="/real_e.html"
        size="large"
        backgroundImages={[heroImage1, heroImage2, heroImage3]}
        sliderInterval={2500}
      />

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              What We Do
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete Manufacturing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial design to final delivery, we provide comprehensive
              solutions for your custom metal fixture needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border hover-elevate transition-all duration-300"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Industry Leadership
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With over 30 years of experience, we've built a reputation for
              excellence and innovation in metal fixture manufacturing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                About Serge Cantin Manufacturing
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1994, Serge Cantin has established itself as a
                  premier manufacturer of custom metal store fixtures for retail
                  environments across North America and internationally.
                </p>
                <p>
                  Our 20,000 square foot manufacturing facility in Montreal is
                  equipped with state-of-the-art machinery and staffed by
                  skilled craftspeople who take pride in their work.
                </p>
                <p>
                  We serve as partners to designers, architects, contractors,
                  and retailers, providing solutions that combine functionality
                  with aesthetic excellence.
                </p>
              </div>
              <Link href="/sc_e.html">
                <Button className="mt-8 gap-2" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Our Capabilities</h3>
              <div className="grid gap-4">
                {[
                  "Design & Engineering Support",
                  "CNC Machining & Fabrication",
                  "Welding & Assembly",
                  "Finishing & Quality Control",
                  "Large Volume Production",
                  "Worldwide Logistics",
                  "Custom Hardware Solutions",
                  "Professional Project Management",
                ].map((capability) => (
                  <div
                    key={capability}
                    className="flex items-center gap-3"
                    data-testid={`capability-${capability.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              By The Numbers
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Track Record
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Contact us today to discuss your custom metal fixture requirements.
              Our team is ready to bring your vision to life.
            </p>
            <Link href="/contact_e.html">
              <Button size="lg" className="gap-2" data-testid="button-contact-cta">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
