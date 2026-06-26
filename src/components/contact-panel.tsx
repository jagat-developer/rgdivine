import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { company } from "@/lib/site-data";

export function ContactPanel() {
  return (
    <section
      id="quote-form"
      className="relative overflow-hidden border-y border-ink/5 bg-surface-2"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(157,188,44,0.16),transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="self-center">
          <p className="eyebrow">Free estimate</p>
          <h2 className="mt-5 font-display fluid-h2 font-semibold leading-tight text-ink">
            Make your space sparkle, <span className="text-leaf-deep">every day.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-8 text-ink-soft">
            Tell us a bit about your space and we'll send back a tailored plan and firm pricing within one business
            day. No pressure, no commitment.
          </p>
          <div className="mt-10 grid gap-3 text-sm font-medium text-ink">
            <a href={`tel:${company.phone}`} className="flex gap-3 transition hover:text-leaf-deep">
              <Phone className="h-5 w-5 text-leaf-deep" aria-hidden="true" />
              {company.phoneDisplay}
            </a>
            {company.phoneAlt ? (
              <a href={`tel:${company.phoneAlt}`} className="flex gap-3 transition hover:text-leaf-deep">
                <Phone className="h-5 w-5 text-leaf-deep" aria-hidden="true" />
                {company.phoneAltDisplay}
              </a>
            ) : null}
            <a
              href={`mailto:${company.email}`}
              className="flex gap-3 break-all transition hover:text-leaf-deep"
            >
              <Mail className="h-5 w-5 text-leaf-deep" aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex gap-3 text-ink-soft">
              <MapPin className="h-5 w-5 text-leaf-deep" aria-hidden="true" />
              {company.serviceRegion}
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-ink/5 bg-white p-6 shadow-xl shadow-leaf-deep/5 sm:p-8">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
