import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  Phone,
  Shield,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";
import { AnimatedHeading } from "@/components/animated-heading";
import { ButtonLink } from "@/components/button-link";
import { ContactPanel } from "@/components/contact-panel";
import { Magnetic } from "@/components/magnetic";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SparkleField } from "@/components/sparkle-field";
import { TiltCard } from "@/components/tilt-card";
import {
  blogPosts,
  company,
  homePageSeo,
  serviceAreas,
  services,
  testimonials,
} from "@/lib/site-data";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { jsonLd } from "@/lib/utils";

export const metadata = buildMetadata(homePageSeo);

const PILLAR_ICONS = {
  "Trusted & Reliable": Shield,
  "Eco-Friendly Products": Leaf,
  "Attention to Detail": Sparkles,
  "Customer Satisfaction": ThumbsUp,
} as const;

const PILLAR_COPY: Record<string, string> = {
  "Trusted & Reliable": "Insured, background-checked crews you can count on every visit.",
  "Eco-Friendly Products": "Plant-based, family-safe products that don't leave chemical residue.",
  "Attention to Detail": "Baseboards, grout, vents — the details that turn clean into sparkling.",
  "Customer Satisfaction": "Same crew, same standard, every visit — your happiness is the bar.",
};

const STEPS = [
  {
    title: "Tell us your needs",
    body: "Share the space, the services, and the schedule. Quote takes 60 seconds.",
  },
  {
    title: "We build the plan",
    body: "Tailored checklist, firm pricing, locked in writing before we start.",
  },
  {
    title: "Enjoy your space",
    body: "Trained, insured crew shows up on time and leaves it sparkling.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            localBusinessSchema(),
            breadcrumbSchema([{ name: "Home", path: "/" }]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative isolate flex min-h-[calc(100svh-var(--header-height))] items-center overflow-hidden border-b border-ink/5 bg-surface-2">
        <Image
          src="/images/rg-divine-hero.png"
          alt="RG Divine Cleaning professional wiping a countertop in a bright home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_center] sm:object-center"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-white/55 md:w-[62%] lg:w-[58%]" />
        <SparkleField count={18} seed={11} />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{company.name}</p>
            <p className="mt-2 text-sm font-medium text-leaf-deep">{company.tagline}</p>
            <AnimatedHeading
              text="Home and business cleaning in HRM."
              highlight="cleaning"
              className="mt-3 font-display text-5xl font-semibold leading-[1.04] tracking-[0] text-ink sm:text-6xl 2xl:text-7xl"
            />
            <p className="mt-5 max-w-xl text-base font-normal leading-8 text-ink sm:text-lg">
              A clean space makes all the difference. Professional cleaning services that bring freshness, comfort,
              and happiness to your home or business.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic>
                <ButtonLink href="/quote">Request a free estimate</ButtonLink>
              </Magnetic>
              <a
                href={`tel:${company.phone}`}
                className="inline-flex min-h-12 flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-ink/15 bg-white/90 px-5 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur-sm transition hover:border-leaf hover:bg-white hover:text-leaf-deep"
              >
                <Phone className="h-4 w-4 text-leaf-deep" aria-hidden="true" />
                {company.phoneDisplay}
                {company.phoneAlt ? (
                  <>
                    <span aria-hidden="true" className="text-ink/30">|</span>
                    <span>{company.phoneAltDisplay}</span>
                  </>
                ) : null}
              </a>
            </div>
            <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {company.pillars.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar as keyof typeof PILLAR_ICONS] ?? CheckCircle2;

                return (
                  <div
                    key={pillar}
                    className="flex min-h-20 flex-col items-center justify-center gap-2 border-l border-ink/10 px-3 py-3 text-center text-[0.66rem] font-semibold uppercase leading-4 tracking-[0.12em] text-ink-soft first:border-l-0"
                  >
                    <Icon className="h-6 w-6 text-leaf-deep" aria-hidden="true" />
                    {pillar}
                  </div>
                );
              })}
            </div>
            <div className="mt-5 inline-flex items-center gap-2 rounded-md bg-leaf px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-sm shadow-leaf-deep/20">
              <Star className="h-4 w-4" aria-hidden="true" />
              Residential & commercial cleaning
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-b border-ink/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Why clients choose us"
              title="Cleaning that respects your time and your space."
              summary="No upselling, no hidden line items, no rotating crews — just dependable cleaning built around your standard."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {company.pillars.map((pillar, index) => {
              const Icon = PILLAR_ICONS[pillar as keyof typeof PILLAR_ICONS] ?? Sparkles;
              return (
                <Reveal key={pillar} delay={index * 0.05}>
                  <article className="group flex h-full flex-col gap-4 rounded-2xl border border-ink/5 bg-surface-2 p-6 transition hover:-translate-y-1 hover:border-leaf/40 hover:shadow-lg hover:shadow-leaf-deep/10">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-leaf-deep transition group-hover:bg-leaf group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">{pillar}</h3>
                    <p className="text-sm font-light leading-7 text-ink-soft">{PILLAR_COPY[pillar]}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="scroll-mt-[var(--header-height)] border-b border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our services"
              title="Cleaning designed around your space."
              summary="Seven core services, each backed by a trained crew and a checklist tailored to your standard."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <TiltCard className="h-full rounded-2xl">
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
                        See the details
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
                      </p>
                    </div>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/services" variant="secondary">
              All services
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 3-step process */}
      <section className="border-b border-ink/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Simple steps to a cleaner space."
              summary="From first call to sparkling — three clear steps with no surprises."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {STEPS.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="group relative flex h-full flex-col gap-4 rounded-2xl border border-ink/5 bg-surface-2 p-7 transition hover:-translate-y-1 hover:border-leaf/40 hover:shadow-lg hover:shadow-leaf-deep/10">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-leaf text-white font-display text-lg font-semibold shadow-sm shadow-leaf-deep/20">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="text-sm font-light leading-7 text-ink-soft">{step.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas teaser */}
      <section className="border-b border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Service areas"
              title="Cleaning across HRM."
              summary="From downtown Halifax condos to Sackville family homes and Burnside offices, we serve all of Halifax Regional Municipality."
            />
          </Reveal>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area, index) => (
              <Reveal key={area.slug} delay={index * 0.03}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-2xl border border-ink/5 bg-white px-5 py-4 transition hover:border-leaf/60 hover:shadow-md hover:shadow-leaf-deep/10"
                >
                  <span className="text-sm font-semibold text-ink">{area.name}</span>
                  <ArrowRight
                    className="h-4 w-4 text-ink-soft/60 transition group-hover:translate-x-0.5 group-hover:text-leaf-deep"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-ink/5 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by homes and businesses across HRM."
              summary="Residential clients, commercial accounts, and one-off cleans — what they say after we've been through."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Reveal key={testimonial.clientName}>
                <article className="h-full rounded-2xl border border-ink/5 bg-surface-2 p-7">
                  <div className="flex gap-1 text-leaf-deep" aria-label="Five star review">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-5 text-sm font-light leading-7 text-ink-soft">
                    “{testimonial.quote}”
                  </p>
                  <p className="mt-6 text-sm font-semibold text-ink">{testimonial.clientName}</p>
                  <p className="text-xs uppercase tracking-luxe text-leaf-deep">
                    {testimonial.serviceType.replace("-", " ")} · {testimonial.area}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="border-b border-ink/5 bg-surface-2">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Cleaning guides & tips"
              title="Practical reads from the RG Divine team."
              summary="Checklists, schedules, and what we've learned cleaning across HRM."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.04}>
                <Link
                  href={post.path}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/5 bg-white transition hover:-translate-y-1 hover:border-leaf/50 hover:shadow-xl hover:shadow-leaf-deep/10"
                >
                  <div className="relative aspect-[5/3] overflow-hidden">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="eyebrow">{post.readingMinutes} min read</p>
                    <h3 className="mt-3 font-display text-base font-semibold leading-tight text-ink">
                      {post.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm font-light leading-7 text-ink-soft">
                      {post.excerpt}
                    </p>
                    <p className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-leaf-deep">
                      Read full blog
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <ButtonLink href="/blog" variant="secondary">
              View all blogs
            </ButtonLink>
          </div>
        </div>
      </section>

      <ContactPanel />
    </>
  );
}
