import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, MapPin, Phone, Star } from "lucide-react";
import { AnimatedHeading } from "@/components/animated-heading";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { QuoteForm } from "@/components/quote-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SparkleField } from "@/components/sparkle-field";
import { TiltCard } from "@/components/tilt-card";
import type {
  CleaningService,
  ContentPage,
  FaqItem,
  ProgrammaticPage,
} from "@/lib/types";
import {
  company,
  contentPages,
  getContentPage,
  getProgrammaticPage,
  getServiceBySlug,
  getSeo,
  programmaticPages,
  serviceAreas,
  services,
  testimonials,
} from "@/lib/site-data";
import {
  breadcrumbSchema,
  cleaningServiceSchema,
  faqSchema,
  localBusinessSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const contentSlugs = contentPages.map((page) => ({ slug: page.slug }));
  const serviceSlugs = services.map((service) => ({ slug: service.slug }));
  const programmaticSlugs = programmaticPages.map((page) => ({ slug: page.slug }));
  return [...contentSlugs, ...serviceSlugs, ...programmaticSlugs];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const seo = getSeo(slug);
  if (!seo) return {};
  return buildMetadata(seo);
}

export default async function PublicPage({ params }: PageProps) {
  const { slug } = await params;

  const programmatic = getProgrammaticPage(slug);
  if (programmatic) {
    return <ProgrammaticTemplate page={programmatic} />;
  }

  const content = getContentPage(slug);
  if (content) {
    if (slug === "quote") return <QuoteTemplate page={content} />;
    if (slug === "contact") return <ContactTemplate page={content} />;
    if (slug === "testimonials") return <TestimonialsTemplate page={content} />;
    if (slug === "service-areas") return <ServiceAreasHubTemplate page={content} />;
    if (slug === "services") return <ServicesHubTemplate page={content} />;
    return <ContentTemplate page={content} />;
  }

  const service = getServiceBySlug(slug);
  if (service) {
    return <ServiceIntroTemplate service={service} />;
  }

  notFound();
}

function PageHero({
  eyebrow,
  title,
  summary,
  image,
  highlight,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  highlight?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-ink/5 bg-surface-2">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(157,188,44,0.16),transparent_55%)]" />
      <SparkleField count={12} seed={73} />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-6 lg:px-8 lg:py-20">
        <Reveal className="self-center">
          <p className="eyebrow">{eyebrow}</p>
          <AnimatedHeading
            text={title}
            highlight={highlight}
            className="mt-6 font-display fluid-hero font-semibold text-ink"
          />
          {summary ? (
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              {summary}
            </p>
          ) : null}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Magnetic>
              <ButtonLink href="/quote">Request a free estimate</ButtonLink>
            </Magnetic>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
            >
              <Phone className="h-4 w-4 text-leaf-deep" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </div>
        </Reveal>
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-ink/5 shadow-xl shadow-leaf-deep/10 lg:aspect-[4/5]">
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProgrammaticTemplate({ page }: { page: ProgrammaticPage }) {
  const { area, service } = page;
  const siblingAreas = serviceAreas.filter((a) => a.slug !== area.slug);
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const areaTestimonials = testimonials.filter((t) => t.area === area.name);
  const cityHeadline = `${service.label} in ${area.name}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            cleaningServiceSchema(page),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: cityHeadline, path: page.path },
            ]),
            faqSchema(page.faqs),
          ]),
        }}
      />

      <PageHero
        eyebrow={`${area.name}, NS · ${service.shortLabel}`}
        title={cityHeadline}
        summary={service.headline}
        image={service.image}
        highlight={area.name}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal>
          <div className="sticky top-32">
            <p className="eyebrow">Why {area.name}</p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              {area.highlight}
            </h2>
            <p className="mt-6 text-sm font-light leading-7 text-ink-soft">{area.blurb}</p>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href="/quote">Request an estimate</ButtonLink>
              <Link
                href="/service-areas"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
              >
                All HRM service areas
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal className="grid gap-6 text-base font-light leading-9 text-ink-soft sm:text-lg">
          <p className="text-xl font-medium text-ink sm:text-2xl">{service.conversionAngle}</p>
          <p>{service.summary}</p>
          <p>
            Common areas we serve across {area.name} include {area.neighbourhoods.slice(0, 4).join(", ")}.
            Each property type calls for a slightly different approach — we&apos;ll scope the right one for yours
            on the quote call.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The standard"
            title={`How we approach ${service.shortLabel.toLowerCase()} in ${area.name}`}
            summary={`Four things you'll notice on every visit.`}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.proofPoints.map((point) => (
              <article
                key={point}
                className="flex gap-4 rounded-2xl border border-ink/5 bg-white p-6"
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-leaf-deep" aria-hidden="true" />
                <p className="text-sm font-light leading-7 text-ink-soft">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Included"
          title={`What's included in ${service.label.toLowerCase()}`}
          summary={`The checklist we work to on every ${area.name} visit.`}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.inclusions.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-ink/5 bg-surface-2 px-5 py-4"
            >
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-deep" aria-hidden="true" />
              <span className="text-sm font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Common questions"
            title={`${area.name} ${service.shortLabel.toLowerCase()} FAQs`}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {page.faqs.map((faq) => (
              <FaqCard key={faq.q} item={faq} />
            ))}
          </div>
        </div>
      </section>

      {areaTestimonials.length ? (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${area.name} clients`}
            title={`What clients in ${area.name} say.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {areaTestimonials.map((t) => (
              <article
                key={t.clientName}
                className="rounded-2xl border border-ink/5 bg-surface-2 p-7"
              >
                <div className="flex gap-1 text-leaf-deep" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-5 text-sm font-light leading-7 text-ink-soft">“{t.quote}”</p>
                <p className="mt-6 text-sm font-semibold text-ink">{t.clientName}</p>
                <p className="text-xs uppercase tracking-luxe text-leaf-deep">
                  {t.serviceType.replace("-", " ")}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`Other services in ${area.name}`}
            title={`We do more than ${service.shortLabel.toLowerCase()}.`}
            summary={`Every RG Divine service is available across ${area.name}.`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}-${area.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white px-5 py-4 transition hover:border-leaf/60"
              >
                <span className="text-sm font-semibold text-ink">{s.shortLabel}</span>
                <ArrowRight
                  className="h-4 w-4 text-ink-soft/60 transition group-hover:translate-x-0.5 group-hover:text-leaf-deep"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Across HRM"
          title={`${service.label} in other communities`}
          summary={`Same service, same standard, across HRM.`}
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siblingAreas.map((a) => (
            <Link
              key={a.slug}
              href={`/${service.slug}-${a.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-surface-2 px-5 py-4 transition hover:border-leaf/60"
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
      </section>

      <ContactPanel />
    </>
  );
}

function ServiceIntroTemplate({ service }: { service: CleaningService }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: service.label, path: `/${service.slug}` },
            ]),
          ]),
        }}
      />

      <PageHero
        eyebrow={service.shortLabel}
        title={service.headline}
        summary={service.summary}
        image={service.image}
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <Reveal>
          <div className="sticky top-32">
            <p className="eyebrow">Service</p>
            <h2 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
              {service.label}
            </h2>
            <p className="mt-6 text-sm font-light leading-7 text-ink-soft">
              Available across all {serviceAreas.length} HRM communities we serve.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href="/quote">Request an estimate</ButtonLink>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
              >
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="grid gap-6 text-base font-light leading-9 text-ink-soft sm:text-lg">
          <p className="text-xl font-medium text-ink sm:text-2xl">{service.conversionAngle}</p>
          <p>{service.summary}</p>
        </Reveal>
      </section>

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The standard" title="What you can expect from us." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {service.proofPoints.map((point) => (
              <article key={point} className="flex gap-4 rounded-2xl border border-ink/5 bg-white p-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-leaf-deep" aria-hidden="true" />
                <p className="text-sm font-light leading-7 text-ink-soft">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What's included"
          title="The checklist for every visit."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {service.inclusions.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-ink/5 bg-surface-2 px-5 py-4">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf-deep" aria-hidden="true" />
              <span className="text-sm font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={`${service.shortLabel} by city`}
            title={`${service.label} across HRM`}
            summary={`Pick your area for service-area specific pricing and details.`}
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/${service.slug}-${area.slug}`}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white px-5 py-4 transition hover:border-leaf/60"
              >
                <span className="text-sm font-semibold text-ink">{area.name}</span>
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

function ContentTemplate({ page }: { page: ContentPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: page.eyebrow, path: page.seo.path },
            ]),
          ]),
        }}
      />

      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} image={page.heroImage} />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <Reveal>
          <div className="sticky top-32">
            <p className="eyebrow">{page.eyebrow}</p>
            <p className="mt-5 text-sm font-light leading-7 text-ink-soft">
              {company.name} — serving Halifax Regional Municipality.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink href="/quote">Request an estimate</ButtonLink>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-5 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
              >
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="grid gap-6 text-base font-light leading-9 text-ink-soft sm:text-lg">
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </section>

      {page.sections.length ? (
        <section className="border-y border-ink/5 bg-surface-2">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            {page.sections.map((section) => (
              <Reveal key={section.title}>
                <article className="h-full rounded-2xl border border-ink/5 bg-white p-7">
                  <h2 className="font-display text-2xl font-semibold text-ink">{section.title}</h2>
                  <p className="mt-5 text-sm font-light leading-7 text-ink-soft">{section.body}</p>
                  {section.points ? (
                    <ul className="mt-6 grid gap-3 text-sm font-light text-ink-soft">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      <ContactPanel />
    </>
  );
}

function ServicesHubTemplate({ page }: { page: ContentPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ]),
        }}
      />
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} image={page.heroImage} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <TiltCard key={service.slug} className="h-full rounded-2xl">
              <Link
                href={`/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition hover:border-leaf/50 hover:shadow-xl hover:shadow-leaf-deep/10"
              >
                <div className="relative aspect-[5/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.label}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="eyebrow">{service.shortLabel}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink">{service.label}</h3>
                  <p className="mt-4 line-clamp-3 text-sm font-light leading-7 text-ink-soft">
                    {service.summary}
                  </p>
                  <p className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep">
                    Service details
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}

function ServiceAreasHubTemplate({ page }: { page: ContentPage }) {
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
            ]),
          ]),
        }}
      />
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} image={page.heroImage} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl hover:shadow-leaf-deep/10"
            >
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="eyebrow">{area.name}, NS</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{area.highlight}</h3>
                <p className="mt-4 line-clamp-3 text-sm font-light leading-7 text-ink-soft">{area.blurb}</p>
                <p className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep">
                  Services in {area.name}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactPanel />
    </>
  );
}

function TestimonialsTemplate({ page }: { page: ContentPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Testimonials", path: "/testimonials" },
            ]),
          ]),
        }}
      />
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} image={page.heroImage} />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.clientName} className="rounded-2xl border border-ink/5 bg-surface-2 p-7">
              <div className="flex gap-1 text-leaf-deep" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-5 text-sm font-light leading-7 text-ink-soft">“{t.quote}”</p>
              <p className="mt-6 text-sm font-semibold text-ink">{t.clientName}</p>
              <p className="text-xs uppercase tracking-luxe text-leaf-deep">
                {t.serviceType.replace("-", " ")} · {t.area}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ContactPanel />
    </>
  );
}

function ContactTemplate({ page }: { page: ContentPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ]),
        }}
      />
      <PageHero eyebrow={page.eyebrow} title={page.title} summary={page.summary} image={page.heroImage} />
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <p className="text-base font-light leading-9 text-ink-soft sm:text-lg">{page.body[0]}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${company.phone}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-leaf px-6 text-sm font-semibold text-white transition hover:bg-leaf-hover"
          >
            Call {company.phoneDisplay}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/15 bg-white px-6 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf-deep"
          >
            Email us
          </a>
        </div>
      </section>
      <ContactPanel />
    </>
  );
}

function QuoteTemplate({ page }: { page: ContentPage }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Quote", path: "/quote" },
            ]),
          ]),
        }}
      />
      <section className="border-b border-ink/5 bg-surface-2">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <Reveal>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="mt-6 font-display fluid-hero font-semibold text-ink">{page.title}</h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-8 text-ink-soft sm:text-lg">
              {page.summary}
            </p>
            <div className="mt-8 grid gap-3 text-sm font-medium text-ink">
              {["Contact Information", "Address", "Cleaning Services", "Schedule", "Submit"].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-2xl border border-ink/5 bg-white p-5 shadow-xl shadow-leaf-deep/10 sm:p-7">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FaqCard({ item }: { item: FaqItem }) {
  return (
    <details className="group rounded-2xl border border-ink/5 bg-white p-6 open:bg-surface-3">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
        <span>{item.q}</span>
        <span className="text-leaf-deep transition group-open:rotate-45" aria-hidden="true">
          +
        </span>
      </summary>
      <p className="mt-5 text-sm font-light leading-7 text-ink-soft">{item.a}</p>
    </details>
  );
}
