import { company, serviceAreas, services } from "@/lib/site-data";
import type { FaqItem, ProgrammaticPage } from "@/lib/types";
import { absoluteUrl } from "@/lib/utils";

const SERVICE_AREA_NAMES = serviceAreas.map((area) => area.name);

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${company.baseUrl}/#business`,
    name: company.name,
    legalName: company.legalName,
    image: absoluteUrl(company.logo, company.baseUrl),
    logo: absoluteUrl(company.logo, company.baseUrl),
    url: company.baseUrl,
    telephone: company.phone,
    email: company.email,
    description: company.bio,
    slogan: company.tagline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Halifax",
      addressRegion: "NS",
      addressCountry: "CA",
    },
    areaServed: SERVICE_AREA_NAMES.map((name) => ({
      "@type": "City",
      name,
      addressRegion: "NS",
      addressCountry: "CA",
    })),
    knowsAbout: services.map((service) => service.label),
    priceRange: "$$",
    sameAs: [company.instagramUrl, company.facebookUrl, company.googleBusinessUrl].filter(Boolean),
  };
}

export function cleaningServiceSchema(page: ProgrammaticPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.service.label} in ${page.area.name}`,
    provider: {
      "@id": `${company.baseUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: page.area.name,
      addressRegion: page.area.region,
      addressCountry: page.area.country,
    },
    serviceType: page.service.label,
    description: page.seo.description,
    image: absoluteUrl(page.service.image, company.baseUrl),
    url: absoluteUrl(page.path, company.baseUrl),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, company.baseUrl),
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function blogPostingSchema(args: {
  title: string;
  description: string;
  image: string;
  url: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    image: absoluteUrl(args.image, company.baseUrl),
    url: absoluteUrl(args.url, company.baseUrl),
    datePublished: args.datePublished,
    author: {
      "@type": "Organization",
      name: args.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(company.logo, company.baseUrl),
      },
    },
  };
}
