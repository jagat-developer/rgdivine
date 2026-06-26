import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navItems, serviceAreas, services } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-surface-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center" aria-label={`${company.name} — home`}>
            <Image
              src={company.logo}
              alt={`${company.name} logo`}
              width={1254}
              height={1254}
              className="h-28 w-28 object-contain"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm font-light leading-7 text-ink-soft">{company.bio}</p>
        </div>

        <div>
          <h3 className="eyebrow">Pages</h3>
          <ul className="mt-5 grid gap-3 text-sm font-light text-ink-soft">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-leaf-deep" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="transition hover:text-leaf-deep" href="/quote">
                Request an estimate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Service areas</h3>
          <ul className="mt-5 grid gap-3 text-sm font-light text-ink-soft">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  className="transition hover:text-leaf-deep"
                  href={`/service-areas/${area.slug}`}
                >
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 grid gap-4 text-sm font-light text-ink-soft">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" aria-hidden="true" />
              <div className="grid gap-1">
                <a href={`tel:${company.phone}`} className="hover:text-leaf-deep">
                  {company.phoneDisplay}
                </a>
                {company.phoneAlt ? (
                  <a href={`tel:${company.phoneAlt}`} className="hover:text-leaf-deep">
                    {company.phoneAltDisplay}
                  </a>
                ) : null}
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" aria-hidden="true" />
              <a href={`mailto:${company.email}`} className="break-all hover:text-leaf-deep">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf-deep" aria-hidden="true" />
              <span>{company.serviceRegion}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/5 bg-surface-3">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs font-light leading-6 text-ink-soft sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>Services across {services.length} categories in {serviceAreas.length} HRM communities</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
