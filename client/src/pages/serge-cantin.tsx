import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Clipboard,
  CheckCircle,
  Package,
  User,
} from "lucide-react";

import heroImage from "@assets/stock_images/manufacturing_workshop_fe1f69b0.jpg";

const servicesOverview = [
  {
    icon: Clipboard,
    title: "Project Management",
    description: "Expert oversight and coordination of every project from quote to delivery.",
  },
  {
    icon: Users,
    title: "Design Collaboration",
    description: "Working closely with architects and designers to realize your vision.",
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    description: "Rigorous inspection and testing to ensure every piece meets our standards.",
  },
  {
    icon: Package,
    title: "Coordination of Shipments",
    description: "Efficient logistics management for domestic and international deliveries.",
  },
];

export default function SergeCantin() {
  return (
    <Layout
      title="Serge Cantin - Company Presentation | Custom Metal Store Fixtures"
      description="Learn about Serge Cantin and his 30+ years of experience in the store fixture industry. Personal involvement in every project since 1994."
    >
      <Hero
        subtitle="About Us"
        title="Serge Cantin"
        backgroundImage={heroImage}
        description="Over 30 years of dedication to quality craftsmanship and customer satisfaction in the store fixture industry."
        size="large"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I have been in the store fixture industry since 1985. In 1994, I opened my own 
                  company in order to meet my clients' needs with improved production, quality, 
                  and lead times.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Today I am still closely involved with all aspects of the contracts. My personal 
                  commitment to each project ensures that every detail is handled with care and 
                  precision, from initial quotation through to final delivery.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This hands-on approach has been the foundation of our success, allowing us to 
                  build lasting relationships with clients across North America and around the world.
                </p>
              </div>

              <div className="mt-12 p-6 bg-card rounded-lg border">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Serge Cantin</h3>
                    <p className="text-primary font-medium mb-2">President & Founder</p>
                    <p className="text-sm text-muted-foreground">
                      Leading our team since 1994 with a commitment to quality and customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg border p-8">
                <h3 className="text-2xl font-bold mb-8">Our Approach</h3>
                <div className="space-y-6">
                  {servicesOverview.map((service) => (
                    <div key={service.title} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Our Commitment
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Experience & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With three decades of industry experience, we understand the complexities of custom metal fabrication and the importance of meeting your specifications precisely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border" data-testid="card-stat-years">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-primary">30+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Years of Industry Experience</p>
              </CardContent>
            </Card>

            <Card className="border" data-testid="card-stat-projects">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-primary">1000+</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Completed Projects Worldwide</p>
              </CardContent>
            </Card>

            <Card className="border" data-testid="card-stat-satisfaction">
              <CardHeader className="text-center">
                <CardTitle className="text-4xl font-bold text-primary">100%</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">Commitment to Quality</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
