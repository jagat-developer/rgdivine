import type { MetadataRoute } from "next";
import { company } from "@/lib/site-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/*?"],
      },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "Google-Extended", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
    ],
    sitemap: `${company.baseUrl}/sitemap.xml`,
    host: company.baseUrl,
  };
}
