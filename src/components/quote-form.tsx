"use client";

import { useState } from "react";
import { CalendarDays, ClipboardList, MapPin, Send, UserRound, type LucideIcon } from "lucide-react";
import type { QuoteSubmission } from "@/lib/types";
import { SERVICE_OPTIONS } from "@/lib/lead";

type Stage = "idle" | "submitting" | "success" | "error";

const initialForm: QuoteSubmission = {
  address: "",
  name: "",
  phone: "",
  email: "",
  serviceType: ["residential-commercial-cleaning"],
  frequency: "One-time",
  preferredDate: "",
  notes: "",
  caslConsent: true,
  website: "",
};

type ServiceId = QuoteSubmission["serviceType"][number];

export function QuoteForm() {
  const [stage, setStage] = useState<Stage>("idle");
  const [form, setForm] = useState<QuoteSubmission>(initialForm);
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState("");
  const [mailtoFallback, setMailtoFallback] = useState<string | null>(null);

  function update<K extends keyof QuoteSubmission>(key: K, value: QuoteSubmission[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function toggleService(id: ServiceId) {
    setForm((current) => {
      const exists = current.serviceType.includes(id);
      const next = exists
        ? current.serviceType.filter((slug) => slug !== id)
        : [...current.serviceType, id];
      return { ...current, serviceType: next.length ? (next as QuoteSubmission["serviceType"]) : current.serviceType };
    });
  }

  async function submitFull(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      setMessage("Please confirm consent so we can reply.");
      return;
    }
    if (form.serviceType.length === 0) {
      setMessage("Please pick at least one service.");
      return;
    }
    setStage("submitting");
    setMessage("");
    setMailtoFallback(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, caslConsent: true }),
      });
      const result = (await response.json()) as { ok?: boolean; mailto?: string; message?: string };

      if (!response.ok && response.status !== 202) {
        throw new Error(result.message || "Unable to submit request.");
      }

      setStage("success");
      setMessage(result.message || "Quote request received. We'll follow up shortly.");
      if (result.mailto) {
        setMailtoFallback(result.mailto);
      }
    } catch (error) {
      setStage("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please call us directly.");
    }
  }

  if (stage === "success") {
    return (
      <div className="grid gap-4 rounded-2xl border border-leaf/30 bg-leaf-soft p-7 text-center">
        <p className="eyebrow">Quote received</p>
        <h3 className="font-display text-2xl font-semibold text-ink">Thank you.</h3>
        <p className="text-sm font-light text-ink-soft" aria-live="polite">
          {message}
        </p>
        {mailtoFallback ? (
          <a
            href={mailtoFallback}
            className="mx-auto inline-flex h-11 items-center gap-2 rounded-full border border-leaf px-5 text-sm font-semibold text-leaf-deep transition hover:bg-leaf hover:text-white"
          >
            Open prefilled email <Send className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    );
  }

  const submitting = stage === "submitting";

  return (
    <form onSubmit={submitFull} className="grid gap-6" aria-label="Free no-obligation quote request">
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website ?? ""}
            onChange={(event) => update("website", event.target.value)}
          />
        </label>
      </div>

      <div>
        <p className="eyebrow">Free, no-obligation quote</p>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
          Tell us about the cleaning.
        </h3>
        <p className="mt-3 text-sm font-light leading-7 text-ink-soft">
          Fill out the form and we will follow up with a tailored quote.
        </p>
      </div>

      <QuoteSection icon={UserRound} title="1. Contact Information">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <input
              required
              autoComplete="name"
              value={form.name}
              onChange={(event) => update("name", event.target.value)}
            />
          </Field>
          <Field label="Phone">
            <input
              required
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update("phone", event.target.value)}
            />
          </Field>
        </div>
        <Field label="Email">
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </Field>
      </QuoteSection>

      <QuoteSection icon={MapPin} title="2. Address">
        <Field label="Street address and city">
          <input
            required
            autoComplete="street-address"
            placeholder="Street address, city"
            value={form.address}
            onChange={(event) => update("address", event.target.value)}
          />
        </Field>
      </QuoteSection>

      <QuoteSection icon={ClipboardList} title="3. Cleaning Services">
        <fieldset className="grid gap-3">
          <legend className="sr-only">Cleaning services needed</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICE_OPTIONS.map((option) => {
              const checked = form.serviceType.includes(option.id);
              return (
                <label
                  key={option.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
                    checked
                      ? "border-leaf bg-leaf-soft text-ink"
                      : "border-ink/10 bg-white text-ink-soft hover:border-leaf/60"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-leaf-deep"
                    checked={checked}
                    onChange={() => toggleService(option.id)}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </QuoteSection>

      <QuoteSection icon={CalendarDays} title="4. When should it be scheduled?">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Preferred date">
            <input
              required
              type="date"
              value={form.preferredDate ?? ""}
              onChange={(event) => update("preferredDate", event.target.value)}
            />
          </Field>
          <Field label="How often?">
            <select
              value={form.frequency}
              onChange={(event) =>
                update("frequency", event.target.value as QuoteSubmission["frequency"])
              }
            >
              {["One-time", "Weekly", "Bi-weekly", "Monthly", "Custom"].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
        </div>
      </QuoteSection>

      <Field label="Anything else worth noting?">
        <textarea
          rows={4}
          value={form.notes ?? ""}
          onChange={(event) => update("notes", event.target.value)}
        />
      </Field>

      <label className="flex items-start gap-3 text-xs font-light leading-6 text-ink-soft">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 h-4 w-4 accent-leaf-deep"
        />
        <span>
          I consent to <strong className="font-semibold text-ink">RG Divine Cleaning Services</strong> contacting me
          about my quote by phone or email. I can withdraw consent at any time.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting || !consent}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf px-5 text-sm font-semibold text-white transition hover:bg-leaf-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {submitting ? "Sending..." : "Submit Quote Request"}
      </button>

      {message ? (
        <p
          aria-live="polite"
          className={
            stage === "error" ? "text-sm font-medium text-red-600" : "text-sm font-medium text-leaf-deep"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

function QuoteSection({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 rounded-lg border border-ink/10 bg-white p-4">
      <h4 className="flex items-center gap-2 text-sm font-semibold text-ink">
        <Icon className="h-4 w-4 text-leaf-deep" aria-hidden="true" />
        {title}
      </h4>
      {children}
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <span className="form-control">{children}</span>
    </label>
  );
}
