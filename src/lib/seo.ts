import type { Metadata } from "next";
import type { SeoPage } from "@/lib/types";
import { company } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/utils";

export function buildMetadata(page: SeoPage): Metadata {
  const title = page.title;
  const description = page.description;
  const image = absoluteUrl(page.image, company.baseUrl);

  return {
    title,
    description,
    keywords: page.keywords,
    metadataBase: new URL(company.baseUrl),
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title,
      description,
      url: page.path,
      siteName: company.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${company.name} — ${company.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
