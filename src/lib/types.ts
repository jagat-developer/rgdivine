export type Company = {
  name: string;
  legalName: string;
  tagline: string;
  ownerName: string;
  email: string;
  emailAlt?: string;
  phone: string;
  phoneDisplay: string;
  phoneAlt?: string;
  phoneAltDisplay?: string;
  baseUrl: string;
  serviceRegion: string;
  province: string;
  yearsActive: number;
  pillars: string[];
  logo: string;
  ogImage: string;
  bio: string;
  instagramUrl?: string;
  facebookUrl?: string;
  googleBusinessUrl?: string;
};

export type SeoPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  priority: number;
};

export type Intent = "residential" | "commercial" | "specialty" | "branded";

export type FaqItem = { q: string; a: string };

export type CleaningService = {
  slug: string;
  label: string;
  shortLabel: string;
  keyword: string;
  intent: Intent;
  headline: string;
  summary: string;
  conversionAngle: string;
  proofPoints: string[];
  inclusions: string[];
  image: string;
  primaryCta: "quote" | "contact";
};

export type ServiceArea = {
  slug: string;
  name: string;
  region: "NS";
  country: "CA";
  postalPrefix: string;
  neighbourhoods: string[];
  blurb: string;
  highlight: string;
  image: string;
};

export type ProgrammaticPage = {
  slug: string;
  path: string;
  area: ServiceArea;
  service: CleaningService;
  seo: SeoPage;
  faqs: FaqItem[];
};

export type AreaGuide = {
  slug: string;
  path: string;
  area: ServiceArea;
  seo: SeoPage;
};

export type Testimonial = {
  clientName: string;
  serviceType: "residential" | "commercial" | "move-in-out" | "post-construction";
  area: string;
  quote: string;
  date?: string;
};

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  heroImage: string;
  body: string[];
  sections: Array<{
    title: string;
    body: string;
    points?: string[];
  }>;
  seo: SeoPage;
};

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingMinutes: number;
  heroImage: string;
  tags: string[];
  body: string[];
  seo: SeoPage;
};

export type QuoteSubmission = {
  name: string;
  email: string;
  phone: string;
  address: string;
  serviceType: Array<
    | "residential-commercial-cleaning"
    | "move-in-out-cleaning"
    | "deep-cleaning"
    | "post-construction-cleanup"
    | "window-cleaning"
    | "floor-strip-wax"
    | "custom-cleaning-plans"
  >;
  propertyType: "Home" | "Apartment/Condo" | "Office" | "Retail" | "Industrial" | "Other";
  sqftTier: "<500" | "500-1000" | "1000-2000" | "2000-3500" | "3500+";
  frequency: "One-time" | "Weekly" | "Bi-weekly" | "Monthly" | "Custom";
  preferredDate?: string;
  notes?: string;
  caslConsent: true;
  website?: string;
};
