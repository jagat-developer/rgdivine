import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactPanel } from "@/components/contact-panel";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts, company } from "@/lib/site-data";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  slug: "blog",
  path: "/blog",
  title: `Cleaning Tips & Guides | ${company.name}`,
  description:
    "Practical cleaning guides for HRM homes and businesses — checklists, schedules, and notes from the RG Divine team.",
  keywords: ["cleaning tips halifax", "cleaning guide", "rg divine blog"],
  image:
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
  priority: 0.7,
});

export default function BlogIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]),
          ]),
        }}
      />

      <section className="relative isolate overflow-hidden border-b border-ink/5 bg-surface-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(157,188,44,0.16),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Reveal>
            <p className="eyebrow">Blog</p>
            <h1 className="mt-6 max-w-3xl font-display fluid-hero font-semibold text-ink">
              Practical cleaning guides & tips.
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              Checklists, schedules, and notes from the field — what we've learned cleaning across Halifax
              Regional Municipality.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Latest" title="From the RG Divine team." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug}>
              <Link
                href={post.path}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl hover:shadow-leaf-deep/10"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">
                    {new Date(post.publishedAt).toLocaleDateString("en-CA", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    · {post.readingMinutes} min read
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold text-ink">{post.title}</h2>
                  <p className="mt-4 line-clamp-3 text-sm font-light leading-7 text-ink-soft">
                    {post.excerpt}
                  </p>
                  <p className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep">
                    Read full blog
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
