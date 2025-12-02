import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  MapPin,
  Phone,
  Mail,
  Smartphone,
  Clock,
  User,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

import heroImage from "@assets/contact-hero.webp";

export default function Contact() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      setSubmitted(true);
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    submitMutation.mutate(data);
  };

  return (
    <Layout
      title="Contact Us - Serge Cantin Custom Metal Store Fixtures"
      description="Contact Serge Cantin for custom metal store fixtures. Located in Montreal, Quebec, Canada. Phone: (514) 745-1991. Toll Free: (1 888) 737-2268."
    >
      <Hero
        subtitle="Get in Touch"
        title="Contact Us"
        description="We built our company on commitment to our customers. Reach out to discuss your custom metal fixture requirements."
        size="large"
        backgroundImage={heroImage}
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
                  {submitted ? (
                    <div className="text-center py-8" data-testid="success-message">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you within 1-2 business days.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setSubmitted(false)}
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="John"
                                    data-testid="input-first-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Doe"
                                    data-testid="input-last-name"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  data-testid="input-email"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="(555) 555-5555"
                                  data-testid="input-phone"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Your Company"
                                  data-testid="input-company"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your project requirements..."
                                  className="min-h-[150px] resize-none"
                                  data-testid="input-message"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={submitMutation.isPending}
                          data-testid="button-submit"
                        >
                          {submitMutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            "Send Message"
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          We'll get back to you within 1-2 business days.
                        </p>
                      </form>
                    </Form>
                  )}
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
