import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-6 font-display text-5xl font-semibold text-ink">This page is off the map.</h1>
      <p className="mt-5 text-base font-light text-ink-soft">
        Let's get you back to something useful.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-full bg-leaf px-6 text-sm font-semibold text-white hover:bg-leaf-hover"
        >
          Back to home
        </Link>
        <Link
          href="/quote"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 text-sm font-semibold text-ink hover:border-leaf hover:text-leaf-deep"
        >
          Request an estimate
        </Link>
      </div>
    </section>
  );
}
