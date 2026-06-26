import { z } from "zod";
import type { QuoteSubmission } from "@/lib/types";

export const SERVICE_OPTIONS = [
  { id: "residential-commercial-cleaning", label: "Residential & Commercial Cleaning" },
  { id: "move-in-out-cleaning", label: "Move-In / Move-Out Cleaning" },
  { id: "deep-cleaning", label: "Deep Cleaning" },
  { id: "post-construction-cleanup", label: "Post-Construction Cleanup" },
  { id: "window-cleaning", label: "Window Cleaning" },
  { id: "floor-strip-wax", label: "Floor Strip & Wax" },
  { id: "custom-cleaning-plans", label: "Custom Cleaning Plan" },
] as const;

export const quoteSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  address: z.string().min(4).max(200),
  serviceType: z
    .array(
      z.enum([
        "residential-commercial-cleaning",
        "move-in-out-cleaning",
        "deep-cleaning",
        "post-construction-cleanup",
        "window-cleaning",
        "floor-strip-wax",
        "custom-cleaning-plans",
      ]),
    )
    .min(1),
  propertyType: z.enum(["Home", "Apartment/Condo", "Office", "Retail", "Industrial", "Other"]),
  sqftTier: z.enum(["<500", "500-1000", "1000-2000", "2000-3500", "3500+"]),
  frequency: z.enum(["One-time", "Weekly", "Bi-weekly", "Monthly", "Custom"]),
  preferredDate: z.string().max(40).optional(),
  notes: z.string().max(1200).optional(),
  caslConsent: z.literal(true),
  website: z.string().optional(),
});

export function buildQuoteEmail(payload: QuoteSubmission) {
  const subject = `New cleaning quote request — ${payload.address}`;
  const serviceLabels = payload.serviceType
    .map((slug) => SERVICE_OPTIONS.find((option) => option.id === slug)?.label ?? slug)
    .join(", ");

  const body = [
    "New cleaning quote request",
    "",
    `Address: ${payload.address}`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    "",
    `Services requested: ${serviceLabels}`,
    `Property type: ${payload.propertyType}`,
    `Approx. sqft: ${payload.sqftTier}`,
    `Frequency: ${payload.frequency}`,
    `Preferred date: ${payload.preferredDate || "Flexible"}`,
    "",
    "Notes:",
    payload.notes || "(none)",
    "",
    `CASL consent: ${payload.caslConsent ? "yes" : "no"}`,
  ].join("\n");

  return { subject, body };
}

export function buildMailto(payload: QuoteSubmission, recipient: string) {
  const { subject, body } = buildQuoteEmail(payload);
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
