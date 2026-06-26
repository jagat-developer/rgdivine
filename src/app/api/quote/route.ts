import { company } from "@/lib/site-data";
import { buildMailto, buildQuoteEmail, quoteSchema } from "@/lib/lead";

const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anonymous";
  return ip;
}

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  const key = clientKey(request);

  if (rateLimited(key)) {
    return Response.json(
      { ok: false, message: "Too many requests. Please try again in a moment." },
      { status: 429 },
    );
  }

  let payload;

  try {
    payload = quoteSchema.parse(await request.json());
  } catch (error) {
    console.error("[quote] validation failed", error);
    return Response.json(
      { ok: false, message: "Please check the required fields and try again." },
      { status: 400 },
    );
  }

  if (payload.website && payload.website.length > 0) {
    console.warn("[quote] honeypot tripped", { ip: key });
    return Response.json({ ok: true, message: "Thank you. We'll be in touch within one business day." });
  }

  const recipient = process.env.LEADS_TO_EMAIL || company.email;
  const mailto = buildMailto(payload, recipient);
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return Response.json({
      ok: true,
      mailto,
      message: "Quote prepared. Open the prefilled email to send it directly.",
    });
  }

  try {
    const { subject, body } = buildQuoteEmail(payload);
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.LEADS_FROM_EMAIL || "RG Divine <onboarding@resend.dev>",
        to: [recipient],
        reply_to: payload.email,
        subject,
        text: body,
      }),
    });

    if (!response.ok) {
      console.error("[quote] resend non-ok", response.status, await response.text().catch(() => ""));
      return Response.json(
        {
          ok: true,
          mailto,
          message: "Email delivery could not be confirmed. Open the prepared email fallback.",
        },
        { status: 202 },
      );
    }

    return Response.json({
      ok: true,
      message: "Quote request sent. We'll follow up within one business day.",
    });
  } catch (error) {
    console.error("[quote] resend threw", error);
    return Response.json(
      {
        ok: true,
        mailto,
        message: "Email delivery failed. Open the prepared email fallback.",
      },
      { status: 202 },
    );
  }
}
