import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Store, Globe } from "lucide-react";

const clientsByRegion = {
  "Quebec & National (Canada)": [
    "Aldo",
    "Bentley",
    "Browns",
    "Call It Spring",
    "Globo",
    "Little Burgundy",
    "Spring",
    "Transit",
    "Yellow",
    "Ardene",
    "Bikini Village",
    "Bootlegger",
    "Cleo",
    "Dynamite",
    "Garage",
    "Jacob",
    "Suzy Shier",
    "Ricki's",
    "Laura",
    "Urban Planet",
    "La Senza",
    "La Vie en Rose",
    "Town Shoes",
    "Roots",
    "Guess",
    "Mexx",
    "Parasuco",
    "Jean Machine",
    "Thyme Maternity",
  ],
  "USA & International": [
    "Timberland",
    "Finish Line",
    "Foot Action",
    "Foot Locker",
    "Kids Foot Locker",
    "Lady Foot Locker",
    "Champs",
    "House of Hoops",
    "Nike Factory Store",
    "Athlete's Foot",
    "Rack Room Shoes",
    "Cole Haan",
    "Eddie Bauer",
    "Johnston & Murphy",
    "Hugo Boss",
    "Brooks Brothers",
    "Naturalizer",
    "Famous Footwear",
    "DSW",
    "Payless",
  ],
};

const featuredProjects = [
  {
    id: "timberland",
    name: "Timberland",
    description:
      "Custom metal fixtures for Timberland retail locations, featuring rugged industrial design elements that complement the brand's outdoor heritage.",
    region: "USA & International",
  },
  {
    id: "footlocker",
    name: "Foot Locker",
    description:
      "Complete store fixture packages for Foot Locker stores, including wall systems, display units, and specialty fixtures for athletic footwear presentation.",
    region: "USA & International",
  },
  {
    id: "aldo",
    name: "Aldo",
    description:
      "Elegant metal display systems for Aldo stores, designed to showcase footwear and accessories with a modern, sophisticated aesthetic.",
    region: "Quebec & National",
  },
  {
    id: "roots",
    name: "Roots",
    description:
      "Custom fixtures reflecting Roots' Canadian heritage, combining warm wood elements with precision-crafted metal components.",
    region: "Quebec & National",
  },
  {
    id: "lavieenrose",
    name: "La Vie en Rose",
    description:
      "Feminine and elegant fixture designs for La Vie en Rose intimate apparel stores, featuring delicate metal details and versatile display options.",
    region: "Quebec & National",
  },
  {
    id: "guess",
    name: "Guess",
    description:
      "Sophisticated metal fixtures for Guess retail locations, embodying the brand's premium fashion positioning.",
    region: "Quebec & National",
  },
  {
    id: "nikefactory",
    name: "Nike Factory Store",
    description:
      "High-volume fixture production for Nike Factory outlets, designed for durability and maximum product visibility.",
    region: "USA & International",
  },
  {
    id: "hugoboss",
    name: "Hugo Boss",
    description:
      "Premium metal fixtures for Hugo Boss stores, featuring clean lines and meticulous attention to detail.",
    region: "USA & International",
  },
];

export default function Realisations() {
  return (
    <Layout
      title="Realisations - Portfolio | Serge Cantin Custom Metal Store Fixtures"
      description="Explore our portfolio of custom metal store fixture projects for major retailers across Canada, USA, and internationally."
    >
      <Hero
        subtitle="Our Portfolio"
        title="Realisations"
        description="We have been involved in a variety of projects in Canada, USA, South America, Egypt, Singapore, Thailand, and the Middle East."
        size="medium"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Global Experience
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Clients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have established successful relationships with designers, architects, 
              millworkers, contractors, and retailers from all over the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(clientsByRegion).map(([region, clients]) => (
              <Card key={region} className="border" data-testid={`card-region-${region.toLowerCase().replace(/\s+/g, "-")}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {region.includes("Quebec") ? (
                      <MapPin className="h-5 w-5 text-primary" />
                    ) : (
                      <Globe className="h-5 w-5 text-primary" />
                    )}
                    <CardTitle className="text-xl">{region}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {clients.map((client) => (
                      <Badge
                        key={client}
                        variant="secondary"
                        className="text-sm"
                        data-testid={`badge-client-${client.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {client}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Project Showcase
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore some of our notable projects for leading retail brands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                className="border bg-background scroll-mt-24 hover-elevate transition-all duration-300"
                data-testid={`card-project-${project.id}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        {project.region.includes("Quebec") ? (
                          <Building2 className="h-6 w-6 text-primary" />
                        ) : (
                          <Store className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">{project.region}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "Canada", label: "Nationwide Coverage" },
              { value: "USA", label: "Coast to Coast" },
              { value: "International", label: "Global Projects" },
              { value: "30+ Years", label: "Industry Experience" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-6"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <p className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
