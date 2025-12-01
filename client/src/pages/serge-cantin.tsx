import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  PenTool,
  Calendar,
  Eye,
  CheckCircle,
  Package,
  User,
} from "lucide-react";

import heroImage from "@assets/stock_images/professional_busines_e7beae86.jpg";

const responsibilities = [
  {
    icon: FileText,
    title: "Quotations",
    description: "Detailed cost estimates and project proposals tailored to your specific requirements.",
  },
  {
    icon: PenTool,
    title: "Production Drawings",
    description: "Precise technical drawings ensuring accurate manufacturing to specification.",
  },
  {
    icon: Calendar,
    title: "Delivery Dates",
    description: "Reliable scheduling and timeline management for on-time project completion.",
  },
  {
    icon: Eye,
    title: "Production Supervision",
    description: "Hands-on oversight of manufacturing processes throughout production.",
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
        size="medium"
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
              <div className="bg-card rounded-lg border p-6 sticky top-24">
                <h3 className="font-semibold text-lg mb-4">Company Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Founded in 1994</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">20,000 sq ft manufacturing facility</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">30+ skilled employees</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">6 specialized production departments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Global project experience</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Located in Montreal, Quebec</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Personal Involvement
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Every Project, Every Detail
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I am directly involved in all aspects of every contract, ensuring quality 
              and satisfaction at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {responsibilities.map((item) => (
              <Card
                key={item.title}
                className="border bg-background"
                data-testid={`card-responsibility-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Commitment
            </h2>
            <blockquote className="text-xl lg:text-2xl text-muted-foreground italic mb-8 leading-relaxed">
              "We built our company on commitment to our customers. Quality, reliability, 
              and personal attention to every project are the pillars of our success."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Serge Cantin</p>
                <p className="text-sm text-muted-foreground">President</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
