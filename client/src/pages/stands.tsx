import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Layers,
  CircleDot,
  Square,
  Grid3X3,
  Cylinder,
  Box,
  Palette,
  MoreHorizontal,
} from "lucide-react";

const productCategories = [
  {
    icon: Layers,
    title: "Face-outs",
    items: [
      "Angled waterfall face-out",
      "Straight face-out",
      "Face-out with multiple stops (for handbags)",
      "Back-to-back straight face-out",
      "Mixed back-to-back face-out (one straight, one waterfall)",
      "Short wall face-out",
    ],
  },
  {
    icon: CircleDot,
    title: "Hooks",
    items: [
      "Small hook",
      "Circular hat hook",
      "J-hook",
      "Peg hook",
      "Slatwall hook",
    ],
  },
  {
    icon: Square,
    title: "Shelf Brackets",
    items: [
      "Shelf bracket for glass shelves",
      "Shelf bracket for melamine shelves",
      "Adjustable shelf bracket",
      "Heavy-duty bracket",
      "Floating shelf bracket",
    ],
  },
  {
    icon: Grid3X3,
    title: "Gridwall Accessories",
    items: [
      "Grid panel",
      "Grid connector",
      "Grid base",
      "Grid shelf",
      "Grid basket",
      "Grid hook",
    ],
  },
  {
    icon: Cylinder,
    title: "Hang Rails",
    items: [
      "Standard hang rail",
      "D-rail",
      "U-rail",
      "Oval hang rail",
      "Rectangular hang rail",
      "Double hang rail",
    ],
  },
  {
    icon: Box,
    title: "Display Cubes & Tables",
    items: [
      "Nesting display cube",
      "Pedestal display",
      "Display table",
      "Riser set",
      "Platform display",
    ],
  },
  {
    icon: Palette,
    title: "Signage & Headers",
    items: [
      "Sign holder",
      "Header sign",
      "Poster frame",
      "Acrylic sign holder",
      "Metal sign bracket",
    ],
  },
  {
    icon: MoreHorizontal,
    title: "Specialty Items",
    items: [
      "Shoe display",
      "Bag display",
      "Hat stand",
      "Belt display",
      "Jewelry display",
      "Accessory organizer",
    ],
  },
];

export default function Stands() {
  return (
    <Layout
      title="Stands & Exhibition - Store Fixtures & Accessories | Serge Cantin"
      description="Explore our complete range of store fixtures and accessories including face-outs, hooks, shelf brackets, display cubes, and more."
    >
      <Hero
        subtitle="Products & Services"
        title="Stands & Exhibition"
        description="Store fixtures and typical accessories. We have a design and build team ready for your customized trade show and store fixtures."
        size="medium"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Our Products
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Fixture Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We manufacture a wide range of store fixtures and accessories, 
              all customizable to meet your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <Card
                key={category.title}
                className="border"
                data-testid={`card-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Custom Solutions
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Design & Build Team
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our experienced design and build team is ready to create customized 
                  trade show displays and store fixtures that perfectly match your 
                  brand identity and functional requirements.
                </p>
                <p>
                  From initial concept to final installation, we work closely with 
                  you to ensure every detail meets your specifications. Our in-house 
                  manufacturing capabilities allow us to handle projects of any size.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Custom Design", value: "Tailored to your brand" },
                  { label: "Trade Shows", value: "Exhibition displays" },
                  { label: "Retail Stores", value: "Complete fixture packages" },
                  { label: "Prototypes", value: "From concept to reality" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-background rounded-lg border">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-lg border p-8">
              <h3 className="font-semibold text-xl mb-6">Why Choose Us</h3>
              <ul className="space-y-4">
                {[
                  "Custom manufacturing to your exact specifications",
                  "In-house design and engineering support",
                  "Quality materials and precision craftsmanship",
                  "Competitive pricing for any volume",
                  "Fast turnaround times",
                  "Worldwide shipping capabilities",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Need Custom Fixtures?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-6">
              Contact us to discuss your specific requirements. We can manufacture 
              custom fixtures based on your drawings or develop new designs from scratch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-md">
                Single Prototypes
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-md">
                Small Batches
              </span>
              <span className="px-4 py-2 bg-primary-foreground/10 rounded-md">
                High Volume Production
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
