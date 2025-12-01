import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(data);
      
      res.status(201).json({
        success: true,
        message: "Thank you for your message. We will get back to you within 1-2 business days.",
        inquiry: {
          id: inquiry.id,
          createdAt: inquiry.createdAt,
        },
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromError(error);
        res.status(400).json({
          success: false,
          message: "Please check your form and try again.",
          errors: validationError.details,
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred. Please try again later.",
        });
      }
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  return httpServer;
}
