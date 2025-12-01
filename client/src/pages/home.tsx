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
              We supply metal products to general contractors, millwork companies, and retailers worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <Card
                key={service.title}
                className="border bg-background hover-elevate transition-all duration-300"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                About Us
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Built on Commitment to Our Customers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Since 1994, Serge Cantin has been providing exceptional custom metal store fixtures 
                  to clients worldwide. Our dedication to quality, precision, and customer satisfaction 
                  has made us a trusted partner for retailers, contractors, and millwork companies.
                </p>
                <p>
                  We have established successful relationships with designers, architects, millworkers, 
                  contractors, and retailers from all over the world. Our collaborative approach 
                  ensures your project is completed on time and to specification.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/sc_e.html">
                  <Button className="gap-2" data-testid="button-learn-more">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact_e.html">
                  <Button variant="outline" data-testid="button-contact-us">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="border bg-card text-center"
                  data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-6">
                    <p className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Globe2 className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Global Reach</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Projects completed across Canada, USA, South America, Egypt, Singapore, Thailand, and the Middle East.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Expert Team</h3>
                <p className="text-primary-foreground/80 text-sm">
                  30+ skilled employees working in a flexible production line across six specialized departments.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Quality Assured</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Personal involvement in every project from quotation to delivery ensures consistent quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to discuss your custom metal fixture requirements. 
            We're here to bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact_e.html">
              <Button size="lg" className="gap-2" data-testid="button-cta-contact">
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/real_e.html">
              <Button variant="outline" size="lg" data-testid="button-cta-portfolio">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
