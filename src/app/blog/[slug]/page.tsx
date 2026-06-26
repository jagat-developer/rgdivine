import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ContactPanel } from "@/components/contact-panel";
import { Reveal } from "@/components/reveal";
import { blogPosts, company, getBlogPost } from "@/lib/site-data";
import {
  blogPostingSchema,
  breadcrumbSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata(post.seo);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
              { name: post.title, path: post.path },
            ]),
            blogPostingSchema({
              title: post.title,
              description: post.excerpt,
              image: post.heroImage,
              url: post.path,
              datePublished: post.publishedAt,
              author: post.author,
            }),
          ]),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 pt-16 pb-12 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep hover:text-leaf-hover"
        >
          ← All blogs
        </Link>
        <p className="mt-8 eyebrow">
          {new Date(post.publishedAt).toLocaleDateString("en-CA", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}{" "}
          · {post.readingMinutes} min read
        </p>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg font-light leading-9 text-ink-soft">{post.excerpt}</p>

        <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-3xl border border-ink/5">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="mt-12 grid gap-6 text-base font-light leading-9 text-ink-soft sm:text-lg">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-leaf-soft px-3 py-1 text-xs font-semibold uppercase tracking-luxe text-leaf-deep"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-leaf/30 bg-leaf-soft p-6 text-center">
          <p className="font-display text-xl font-semibold text-ink">
            Need professional cleaning across HRM?
          </p>
          <p className="mt-2 text-sm font-light text-ink-soft">
            {company.tagline}. Request a free estimate within one business day.
          </p>
          <Link
            href="/quote"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-leaf px-5 text-sm font-semibold text-white transition hover:bg-leaf-hover"
          >
            Request an estimate
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </article>

      {related.length ? (
        <section className="border-t border-ink/5 bg-surface-2">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-ink">More from the blog</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Reveal key={p.slug}>
                  <Link
                    href={p.path}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl hover:shadow-leaf-deep/10"
                  >
                    <div className="relative aspect-[5/3] overflow-hidden">
                      <Image
                        src={p.heroImage}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                      <p className="mt-3 line-clamp-3 text-sm font-light leading-7 text-ink-soft">
                        {p.excerpt}
                      </p>
                      <p className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep">
                        Read full blog
                        <ArrowRight
                          className="h-4 w-4 transition group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactPanel />
    </>
  );
}
