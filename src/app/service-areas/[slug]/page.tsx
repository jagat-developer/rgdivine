import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { AnimatedHeading } from "@/components/animated-heading";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SparkleField } from "@/components/sparkle-field";
import {
  areaGuides,
  company,
  getAreaGuide,
  serviceAreas,
  services,
  testimonials,
} from "@/lib/site-data";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areaGuides.map((guide) => ({ slug: guide.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getAreaGuide(slug);
  if (!guide) return {};
  return buildMetadata(guide.seo);
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getAreaGuide(slug);
  if (!guide) notFound();

  const { area } = guide;
  const siblingAreas = serviceAreas.filter((a) => a.slug !== area.slug);
  const areaTestimonials = testimonials.filter((t) => t.area === area.name);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
              { name: area.name, path: guide.path },
            ]),
          ]),
        }}
      />

      <section className="relative isolate overflow-hidden border-b border-ink/5 bg-surface-2">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(157,188,44,0.16),transparent_55%)]" />
        <SparkleField count={12} seed={29} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:px-8 lg:py-20">
          <Reveal className="self-center">
            <p className="eyebrow">{area.name}, NS · Service area</p>
            <AnimatedHeading
              text={`Cleaning across ${area.name}`}
              highlight={area.name}
              className="mt-6 font-display fluid-hero font-semibold text-ink"
            />
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              {area.blurb}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <ButtonLink href="/quote">Request an estimate for {area.name}</ButtonLink>
              </Magnetic>
              <Link
                href="/service-areas"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
              >
                All HRM areas
              </Link>
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink/5 shadow-xl shadow-leaf-deep/10">
              <Image
                src={area.image}
                alt={`${area.name}, ${company.province}`}
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal>
          <div className="sticky top-32">
            <p className="eyebrow">{area.name}</p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              {area.highlight}
            </h2>
            <p className="mt-6 text-sm font-light leading-7 text-ink-soft">
              We serve every {area.name} neighbourhood, including {area.neighbourhoods.join(", ")}.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="font-display text-xl font-semibold text-ink">Services we offer in {area.name}</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}-${area.slug}`}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-ink/5 bg-surface-2 px-5 py-4 transition hover:border-leaf/60"
              >
                <div>
                  <p className="text-sm font-semibold text-ink">{service.label}</p>
                  <p className="mt-1 text-xs font-light leading-5 text-ink-soft">{service.shortLabel} in {area.name}</p>
                </div>
                <ArrowRight
                  className="mt-1 h-4 w-4 text-ink-soft/60 transition group-hover:translate-x-0.5 group-hover:text-leaf-deep"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${area.name} neighbourhoods`}
            title={`Where we work in ${area.name}`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {area.neighbourhoods.map((n) => (
              <div
                key={n}
                className="flex gap-3 rounded-2xl border border-ink/5 bg-white px-5 py-4"
              >
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-deep" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {areaTestimonials.length ? (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={`${area.name} clients`} title={`Recent feedback from ${area.name}.`} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {areaTestimonials.map((t) => (
              <article key={t.clientName} className="rounded-2xl border border-ink/5 bg-surface-2 p-7">
                <p className="text-sm font-light leading-7 text-ink-soft">“{t.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-ink">{t.clientName}</p>
                <p className="text-xs uppercase tracking-luxe text-leaf-deep">{t.serviceType.replace("-", " ")}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Other HRM areas"
            title="Looking for cleaning in another HRM community?"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siblingAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white px-5 py-4 transition hover:border-leaf/60"
              >
                <span className="flex items-center gap-3 text-sm font-semibold text-ink">
                  <MapPin className="h-4 w-4 text-leaf-deep" aria-hidden="true" />
                  {a.name}
                </span>
                <ArrowRight
                  className="h-4 w-4 text-ink-soft/60 transition group-hover:translate-x-0.5 group-hover:text-leaf-deep"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
