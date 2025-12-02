import { useState } from "react";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, Store, Globe, ZoomIn, Images } from "lucide-react";
import { ImageLightbox, type GalleryImage } from "@/components/image-lightbox";

import heroImage from "@assets/realisations-hero.webp";
import industrialImg1 from "@assets/stock_images/industrial_metal_man_71cbfaed.jpg";
import industrialImg2 from "@assets/stock_images/industrial_metal_man_ba4b1f36.jpg";
import industrialImg3 from "@assets/stock_images/industrial_metal_man_afa34802.jpg";
import retailImg1 from "@assets/stock_images/retail_store_fixture_3e4930da.jpg";
import retailImg2 from "@assets/stock_images/retail_store_fixture_e9443ecd.jpg";
import retailImg3 from "@assets/stock_images/retail_store_fixture_56bfe0e0.jpg";
import metalImg1 from "@assets/stock_images/metal_fabrication_cn_1b81fff1.jpg";
import metalImg2 from "@assets/stock_images/metal_fabrication_cn_53f2404f.jpg";

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

const projectImages: Record<string, GalleryImage[]> = {
  timberland: [
    {
      src: retailImg1,
      alt: "Timberland store fixtures",
      title: "Custom Wall Display System",
      description: "Metal wall fixtures with integrated lighting for footwear display",
    },
    {
      src: metalImg1,
      alt: "Metal fabrication process",
      title: "Precision Manufacturing",
      description: "CNC machining for accurate component production",
    },
    {
      src: industrialImg1,
      alt: "Welding process",
      title: "Expert Welding",
      description: "Skilled welders creating durable metal joints",
    },
  ],
  footlocker: [
    {
      src: retailImg2,
      alt: "Foot Locker store interior",
      title: "Complete Store Package",
      description: "Full store fixture installation for athletic footwear",
    },
    {
      src: industrialImg2,
      alt: "Manufacturing facility",
      title: "Large Scale Production",
      description: "High-volume fixture manufacturing capabilities",
    },
  ],
  aldo: [
    {
      src: retailImg3,
      alt: "Aldo display fixtures",
      title: "Elegant Display Systems",
      description: "Modern fixtures for sophisticated footwear presentation",
    },
    {
      src: metalImg2,
      alt: "Metal finishing",
      title: "Premium Finishes",
      description: "Chrome and specialty finishes for retail appeal",
    },
  ],
  roots: [
    {
      src: industrialImg3,
      alt: "Manufacturing process",
      title: "Quality Craftsmanship",
      description: "Handcrafted details in every fixture",
    },
    {
      src: retailImg1,
      alt: "Roots store fixtures",
      title: "Heritage Design",
      description: "Fixtures reflecting Canadian heritage aesthetic",
    },
  ],
  lavieenrose: [
    {
      src: retailImg2,
      alt: "La Vie en Rose display",
      title: "Feminine Elegance",
      description: "Delicate metal details for intimate apparel display",
    },
  ],
  guess: [
    {
      src: retailImg3,
      alt: "Guess store fixtures",
      title: "Premium Fashion Fixtures",
      description: "Sophisticated display solutions for fashion retail",
    },
  ],
  nikefactory: [
    {
      src: industrialImg1,
      alt: "Factory production",
      title: "High-Volume Production",
      description: "Efficient manufacturing for outlet store needs",
    },
    {
      src: metalImg1,
      alt: "Precision machining",
      title: "Precision Components",
      description: "Accurate manufacturing for consistent quality",
    },
  ],
  hugoboss: [
    {
      src: metalImg2,
      alt: "Premium finishing",
      title: "Luxury Finishes",
      description: "Premium metal treatments for high-end retail",
    },
    {
      src: retailImg1,
      alt: "Hugo Boss display",
      title: "Clean Line Design",
      description: "Minimalist fixtures for luxury brand presentation",
    },
  ],
};

const featuredProjects = [
  {
    id: "timberland",
    name: "Timberland",
    description:
      "Custom metal fixtures for Timberland retail locations, featuring rugged industrial design elements that complement the brand's outdoor heritage.",
    region: "USA & International",
    thumbnail: retailImg1,
  },
  {
    id: "footlocker",
    name: "Foot Locker",
    description:
      "Complete store fixture packages for Foot Locker stores, including wall systems, display units, and specialty fixtures for athletic footwear presentation.",
    region: "USA & International",
    thumbnail: retailImg2,
  },
  {
    id: "aldo",
    name: "Aldo",
    description:
      "Elegant metal display systems for Aldo stores, designed to showcase footwear and accessories with a modern, sophisticated aesthetic.",
    region: "Quebec & National",
    thumbnail: retailImg3,
  },
  {
    id: "roots",
    name: "Roots",
    description:
      "Custom fixtures reflecting Roots' Canadian heritage, combining warm wood elements with precision-crafted metal components.",
    region: "Quebec & National",
    thumbnail: industrialImg3,
  },
  {
    id: "lavieenrose",
    name: "La Vie en Rose",
    description:
      "Feminine and elegant fixture designs for La Vie en Rose intimate apparel stores, featuring delicate metal details and versatile display options.",
    region: "Quebec & National",
    thumbnail: retailImg2,
  },
  {
    id: "guess",
    name: "Guess",
    description:
      "Sophisticated metal fixtures for Guess retail locations, embodying the brand's premium fashion positioning.",
    region: "Quebec & National",
    thumbnail: retailImg3,
  },
  {
    id: "nikefactory",
    name: "Nike Factory Store",
    description:
      "High-volume fixture production for Nike Factory outlets, designed for durability and maximum product visibility.",
    region: "USA & International",
    thumbnail: industrialImg1,
  },
  {
    id: "hugoboss",
    name: "Hugo Boss",
    description:
      "Premium metal fixtures for Hugo Boss stores, featuring clean lines and meticulous attention to detail.",
    region: "USA & International",
    thumbnail: metalImg2,
  },
];

export default function Realisations() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openProjectGallery = (projectId: string) => {
    const images = projectImages[projectId] || [];
    if (images.length > 0) {
      setCurrentImages(images);
      setCurrentIndex(0);
      setLightboxOpen(true);
    }
  };

  return (
    <Layout
      title="Realisations - Portfolio | Serge Cantin Custom Metal Store Fixtures"
      description="Explore our portfolio of custom metal store fixture projects for major retailers across Canada, USA, and internationally."
    >
      <Hero
        subtitle="Our Portfolio"
        title="Realisations"
        description="We have been involved in a variety of projects in Canada, USA, South America, Egypt, Singapore, Thailand, and the Middle East."
        size="large"
        backgroundImage={heroImage}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Global Experience
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Clients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have established successful relationships with designers,
              architects, millworkers, contractors, and retailers from all over
              the world.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {Object.entries(clientsByRegion).map(([region, clients]) => (
              <Card
                key={region}
                className="border"
                data-testid={`card-region-${region.toLowerCase().replace(/\s+/g, "-")}`}
              >
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
              Click on any project to view the gallery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                id={project.id}
                className="border bg-background scroll-mt-24 overflow-hidden hover-elevate transition-all duration-300 cursor-pointer group"
                data-testid={`card-project-${project.id}`}
                onClick={() => openProjectGallery(project.id)}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={`${project.name} store fixtures`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-black">
                        {project.region.includes("Quebec")
                          ? "Canada"
                          : "International"}
                      </Badge>
                      {projectImages[project.id]?.length > 0 && (
                        <Badge
                          variant="secondary"
                          className="bg-primary/90 text-primary-foreground gap-1"
                        >
                          <Images className="h-3 w-3" />
                          {projectImages[project.id].length} photos
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                    <div className="bg-white/90 rounded-full p-3">
                      <ZoomIn className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </div>
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
                        <p className="text-sm text-muted-foreground">
                          {project.region}
                        </p>
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

      <ImageLightbox
        images={currentImages}
        initialIndex={currentIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </Layout>
  );
}
