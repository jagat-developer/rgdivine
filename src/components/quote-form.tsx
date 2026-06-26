"use client";

import { useState } from "react";
import { ArrowRight, MapPin, Send } from "lucide-react";
import type { QuoteSubmission } from "@/lib/types";
import { SERVICE_OPTIONS } from "@/lib/lead";

type Stage = "address" | "details" | "submitting" | "success" | "error";

const initialForm: QuoteSubmission = {
  address: "",
  name: "",
  phone: "",
  email: "",
  serviceType: ["residential-commercial-cleaning"],
  propertyType: "Home",
  sqftTier: "1000-2000",
  frequency: "Bi-weekly",
  preferredDate: "",
  notes: "",
  caslConsent: true,
  website: "",
};

type ServiceId = QuoteSubmission["serviceType"][number];

export function QuoteForm() {
  const [stage, setStage] = useState<Stage>("address");
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

  function startStepTwo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (form.address.trim().length < 4) {
      return;
    }
    setStage("details");
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

  if (stage === "address") {
    return (
      <form onSubmit={startStepTwo} className="grid gap-4" aria-label="Quote request, step one">
        <p className="eyebrow">Free estimate · Step 1 of 2</p>
        <h3 className="font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
          What space needs cleaning?
        </h3>
        <p className="text-sm font-light leading-7 text-ink-soft">
          Start with the address. Step two takes 60 seconds.
        </p>
        <label className="grid gap-2 text-sm font-medium text-ink">
          <span className="form-control">
            <span className="pointer-events-none -mb-9 ml-3 flex items-center text-ink/40">
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </span>
            <input
              required
              autoComplete="street-address"
              placeholder="Street address, city"
              value={form.address}
              onChange={(event) => update("address", event.target.value)}
              className="!pl-9"
            />
          </span>
        </label>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-leaf px-5 text-sm font-semibold text-white transition hover:bg-leaf-hover"
        >
          Continue <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    );
  }

  const submitting = stage === "submitting";

  return (
    <form onSubmit={submitFull} className="grid gap-4" aria-label="Quote request, step two">
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

      <div className="flex items-center justify-between">
        <p className="eyebrow">Step 2 of 2</p>
        <button
          type="button"
          onClick={() => setStage("address")}
          className="text-xs uppercase tracking-luxe text-ink-soft hover:text-leaf-deep"
        >
          Edit address
        </button>
      </div>

      <p className="text-sm font-light text-ink-soft">
        Quoting for <span className="text-ink">{form.address}</span>
      </p>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-medium text-ink">Services needed</legend>
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

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name">
          <input required value={form.name} onChange={(event) => update("name", event.target.value)} />
        </Field>
        <Field label="Phone">
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>

      <Field label="Email">
        <input
          required
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Property type">
          <select
            value={form.propertyType}
            onChange={(event) =>
              update("propertyType", event.target.value as QuoteSubmission["propertyType"])
            }
          >
            {["Home", "Apartment/Condo", "Office", "Retail", "Industrial", "Other"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Approximate sqft">
          <select
            value={form.sqftTier}
            onChange={(event) => update("sqftTier", event.target.value as QuoteSubmission["sqftTier"])}
          >
            {["<500", "500-1000", "1000-2000", "2000-3500", "3500+"].map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Frequency">
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
        <Field label="Preferred date">
          <input
            type="date"
            value={form.preferredDate ?? ""}
            onChange={(event) => update("preferredDate", event.target.value)}
          />
        </Field>
      </div>

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
        {submitting ? "Sending..." : "Request my quote"}
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

function Field({ label, children }: { label: string; children: React.ReactElement }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-ink">
      {label}
      <span className="form-control">{children}</span>
    </label>
  );
}
