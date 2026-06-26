"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company, navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label={`${company.name} — home`}
        >
          <Image
            src={company.logo}
            alt={`${company.name} logo`}
            width={1254}
            height={1254}
            priority
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
          <span className="sr-only">{company.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-leaf-deep",
                  active && "text-leaf-deep",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phone}`}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/10 px-4 text-sm font-medium text-ink transition hover:border-leaf hover:text-leaf-deep"
          >
            <Phone className="h-4 w-4 text-leaf-deep" aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <Link
            href="/quote"
            className="inline-flex h-11 items-center rounded-full bg-leaf px-5 text-sm font-semibold text-white transition hover:bg-leaf-hover"
          >
            Request an Estimate
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-ink/5 bg-surface-2 px-4 pb-5 pt-2 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:text-leaf-deep"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${company.phone}`}
              className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf px-4 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {company.phoneDisplay}
            </a>
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-full border border-leaf px-4 text-sm font-semibold text-leaf-deep"
              onClick={() => setOpen(false)}
            >
              Request an estimate
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
