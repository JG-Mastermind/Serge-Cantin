import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Rss, ArrowLeft, Clock, BookOpen, Newspaper } from "lucide-react";

import heroImage from "@assets/stock_images/blog_article_writing_693ba7a6.jpg";

const placeholderPosts = [
  {
    title: "The Art of Custom Metal Fabrication",
    excerpt: "Discover the craftsmanship behind our precision metal work and how we bring designs to life.",
    category: "Manufacturing",
  },
  {
    title: "Retail Fixture Trends for 2024",
    excerpt: "Stay ahead of the curve with the latest trends in store fixture design and materials.",
    category: "Industry Insights",
  },
  {
    title: "Behind the Scenes: Our Workshop",
    excerpt: "Take a virtual tour of our 20,000 sq ft manufacturing facility and meet our team.",
    category: "Company News",
  },
  {
    title: "Sustainable Manufacturing Practices",
    excerpt: "Learn about our commitment to environmentally responsible metal fabrication.",
    category: "Sustainability",
  },
  {
    title: "Case Study: Major Retail Project",
    excerpt: "An in-depth look at how we delivered fixtures for a national retail chain.",
    category: "Case Studies",
  },
  {
    title: "Choosing the Right Finish",
    excerpt: "A guide to metal finishes and how to select the perfect one for your project.",
    category: "Technical Guides",
  },
];

export default function Blog() {
  return (
    <Layout
      title="Blog - Serge Cantin Custom Metal Store Fixtures"
      description="Stay updated with the latest news, insights, and articles from Serge Cantin about custom metal store fixtures and the retail industry."
    >
      <Hero
        subtitle="News & Insights"
        title="Blog"
        description="Stay updated with the latest news, industry insights, and articles from our team."
        size="small"
        backgroundImage={heroImage}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Card className="border bg-card max-w-2xl mx-auto" data-testid="card-blog-coming-soon">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rss className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Our Blog is Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're working on bringing you valuable content about custom metal 
                manufacturing, retail fixture trends, industry insights, and company 
                updates. Our blog will be powered by WordPress for easy content 
                management.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-8">
                <Clock className="h-4 w-4" />
                <span>Expected launch: Coming Soon</span>
              </div>
              <Link href="/contact_e.html">
                <Button data-testid="button-notify">
                  Contact Us for Updates
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
              Preview
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Topics We'll Cover
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Here's a preview of the kind of content you can expect from our blog.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderPosts.map((post) => (
              <Card
                key={post.title}
                className="border bg-background opacity-60"
                data-testid={`card-blog-placeholder-${post.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary font-medium mb-3">
                    <BookOpen className="h-3 w-3" />
                    {post.category}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Newspaper className="h-8 w-8 text-primary" />
            <h2 className="text-2xl font-bold">Powered by WordPress</h2>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Our blog will be powered by WordPress, making it easy for us to 
            share regular updates, industry news, and helpful content with you.
          </p>
          <Link href="/eng.html">
            <Button variant="outline" className="gap-2" data-testid="button-back-home">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
