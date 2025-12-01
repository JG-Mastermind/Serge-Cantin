import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Smartphone,
  Clock,
  User,
} from "lucide-react";

export default function Contact() {
  return (
    <Layout
      title="Contact Us - Serge Cantin Custom Metal Store Fixtures"
      description="Contact Serge Cantin for custom metal store fixtures. Located in Montreal, Quebec, Canada. Phone: (514) 745-1991. Toll Free: (1 888) 737-2268."
    >
      <Hero
        subtitle="Get in Touch"
        title="Contact Us"
        description="We built our company on commitment to our customers. Reach out to discuss your custom metal fixture requirements."
        size="small"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-3">
                Contact Information
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Let's Connect
              </h2>

              <div className="space-y-6">
                <Card className="border" data-testid="card-contact-address">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Our Location</h3>
                        <address className="text-muted-foreground not-italic leading-relaxed">
                          5665 Dessiant<br />
                          Ville St-Laurent (Quebec)<br />
                          Canada H4S 1M8
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border" data-testid="card-contact-phone">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">Phone</h3>
                        <div className="space-y-1">
                          <p className="text-muted-foreground">
                            Tel:{" "}
                            <a
                              href="tel:+15147451991"
                              className="hover:text-foreground transition-colors"
                              data-testid="link-tel"
                            >
                              (514) 745-1991
                            </a>
                          </p>
                          <p className="text-muted-foreground">
                            Fax: (514) 745-3113
                          </p>
                          <p className="text-muted-foreground">
                            Toll Free:{" "}
                            <a
                              href="tel:+18887372268"
                              className="hover:text-foreground transition-colors"
                              data-testid="link-tollfree"
                            >
                              (1 888) 737-2268
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border" data-testid="card-contact-email">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <a
                          href="mailto:info@sergecantin.com"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          data-testid="link-email"
                        >
                          info@sergecantin.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border mt-6" data-testid="card-contact-president">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">President Direct Contact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold">Serge Cantin, President</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <a
                          href="tel:+15147451991"
                          className="hover:text-foreground transition-colors"
                        >
                          (514) 745-1991
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        <a
                          href="tel:+15149277847"
                          className="hover:text-foreground transition-colors"
                        >
                          (514) 927-7847 (Cell)
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-card rounded-lg border">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Business Hours</h4>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="border" data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          data-testid="input-first-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        data-testid="input-email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 555-5555"
                        data-testid="input-phone"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        data-testid="input-company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements..."
                        className="min-h-[150px] resize-none"
                        data-testid="input-message"
                      />
                    </div>

                    <Button type="submit" className="w-full" data-testid="button-submit">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      We'll get back to you within 1-2 business days.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "We built our company on commitment to our customers. Quality, 
              reliability, and personal attention to every project are the 
              pillars of our success."
            </p>
            <p className="mt-4 text-primary font-semibold">
              — Serge Cantin, President
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
