import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scissors,
  SquareStack,
  Cog,
  Flame,
  Sparkles,
  Package,
  Users,
  Factory,
} from "lucide-react";

const departments = [
  {
    icon: Scissors,
    title: "Cutting",
    description:
      "State-of-the-art cutting equipment for precise metal cutting. Our CNC machines ensure accuracy and consistency across all production runs.",
    features: ["CNC Cutting", "Laser Cutting", "Precision Shearing", "Custom Profiles"],
  },
  {
    icon: SquareStack,
    title: "Sheet Metal & Bending",
    description:
      "Advanced sheet metal forming and bending capabilities. We work with various gauges and materials to achieve the exact specifications required.",
    features: ["Press Brakes", "Roll Forming", "Custom Bending", "Multiple Gauges"],
  },
  {
    icon: Cog,
    title: "Machining & Dies",
    description:
      "Precision machining department with modern CNC equipment. We create custom dies and tooling for specialized production requirements.",
    features: ["CNC Milling", "Custom Tooling", "Die Making", "Precision Parts"],
  },
  {
    icon: Flame,
    title: "Welding",
    description:
      "Expert welding services using MIG, TIG, and spot welding techniques. Our skilled welders ensure strong, clean welds on every project.",
    features: ["MIG Welding", "TIG Welding", "Spot Welding", "Certified Welders"],
  },
  {
    icon: Sparkles,
    title: "Polishing & Finishing",
    description:
      "Complete finishing services including polishing, brushing, and surface treatments. We deliver the exact finish your project requires.",
    features: ["Mirror Polish", "Satin Finish", "Brushed Finish", "Custom Textures"],
  },
  {
    icon: Package,
    title: "Packaging & Shipping",
    description:
      "Careful packaging and coordinated shipping worldwide. We ensure your fixtures arrive safely at their destination, ready for installation.",
    features: ["Custom Packaging", "International Shipping", "Freight Coordination", "Assembly Kits"],
  },
];

export default function Workshop() {
  return (
    <Layout
      title="Our Workshop - Manufacturing Process | Serge Cantin"
      description="Tour our 20,000 sq ft manufacturing facility with six specialized production departments. See how we create quality custom metal store fixtures."
    >
      <Hero
        subtitle="Our Facility"
        title="Our Workshop"
        description="Mr. Serge Cantin is proud to present our 20,000 square foot manufacturing plant, consisting of six production departments and 30+ skilled employees."
        size="medium"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Our Strength
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Flexible Production Line
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Our strength resides in our 30+ skilled employees working in a very 
                  flexible production line. This flexibility allows us to handle diverse 
                  projects, from single prototypes to high-volume production runs.
                </p>
                <p>
                  Each department is equipped with modern machinery and staffed by 
                  experienced professionals who take pride in their craftsmanship. 
                  This combination of technology and expertise ensures consistent 
                  quality across all our work.
                </p>
                <p>
                  Our integrated approach means all production steps happen under 
                  one roof, giving us complete control over quality and lead times. 
                  We can quickly adapt to changing requirements and provide rapid 
                  turnaround when needed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border text-center" data-testid="card-stat-sqft">
                <CardContent className="p-6">
                  <Factory className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">20,000</p>
                  <p className="text-sm text-muted-foreground">Sq Ft Facility</p>
                </CardContent>
              </Card>
              <Card className="border text-center" data-testid="card-stat-employees">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Skilled Employees</p>
                </CardContent>
              </Card>
              <Card className="border text-center" data-testid="card-stat-departments">
                <CardContent className="p-6">
                  <Cog className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">6</p>
                  <p className="text-sm text-muted-foreground">Departments</p>
                </CardContent>
              </Card>
              <Card className="border text-center" data-testid="card-stat-years">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Production Departments
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Complete In-House Capabilities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our six specialized departments work together seamlessly to deliver 
              complete fixture solutions from raw materials to finished products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {departments.map((dept, index) => (
              <Card
                key={dept.title}
                className="border bg-background"
                data-testid={`card-department-${dept.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <dept.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        Department {index + 1}
                      </span>
                      <h3 className="font-semibold text-lg">{dept.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {dept.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {dept.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground">
                From raw material to finished product, every step is carefully 
                managed to ensure quality and efficiency.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Material Selection",
                  description:
                    "We source quality materials appropriate for your specific project requirements.",
                },
                {
                  step: 2,
                  title: "Cutting & Preparation",
                  description:
                    "Precision cutting and preparation of materials using CNC equipment.",
                },
                {
                  step: 3,
                  title: "Forming & Machining",
                  description:
                    "Sheet metal forming, bending, and precision machining operations.",
                },
                {
                  step: 4,
                  title: "Welding & Assembly",
                  description:
                    "Expert welding and assembly by certified craftspeople.",
                },
                {
                  step: 5,
                  title: "Finishing",
                  description:
                    "Polishing, coating, and finishing to your exact specifications.",
                },
                {
                  step: 6,
                  title: "Quality Control & Shipping",
                  description:
                    "Final inspection, careful packaging, and coordinated delivery.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                  data-testid={`process-step-${item.step}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-semibold">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
