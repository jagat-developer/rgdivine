import type { MetadataRoute } from "next";
import { company, pageSeo } from "@/lib/site-data";

const BUILD_DATE = new Date("2026-06-24");

function changeFreq(path: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (path === "/") return "weekly";
  if (path.startsWith("/blog/")) return "monthly";
  if (path === "/blog") return "weekly";
  if (path.startsWith("/service-areas/")) return "monthly";
  if (path.includes("-")) return "weekly";
  return "monthly";
}

function priorityFor(path: string, fallback: number): number {
  if (path === "/" || path === "/quote") return 1.0;
  if (path === "/services" || path === "/service-areas") return 0.95;
  return fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pageSeo.map((page) => ({
    url: `${company.baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: BUILD_DATE,
    changeFrequency: changeFreq(page.path),
    priority: priorityFor(page.path, page.priority),
  }));
}
