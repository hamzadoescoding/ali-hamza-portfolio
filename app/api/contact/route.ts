import { contactBudgets, contactServices, contactTypes, type ContactPayload } from "@/lib/contact";

const RESEND_URL = "https://api.resend.com/emails";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Simple in-memory rate limit: 5 submissions per IP per 10 minutes (per server instance).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function sendEmail(apiKey: string, body: Record<string, unknown>) {
  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Resend responded ${res.status}: ${detail.slice(0, 300)}`);
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@alihamzamughal.dev";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Ali Hamza Studio <noreply@alihamzamughal.dev>";

  let raw: Partial<ContactPayload>;
  try {
    raw = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success so they move on.
  if (clean(raw.company, 200)) return Response.json({ ok: true });

  const ip = (request.headers.get("x-forwarded-for") ?? "unknown").split(",")[0].trim();
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again in a few minutes." },
      { status: 429 },
    );
  }

  const data = {
    type: contactTypes.some((t) => t.value === raw.type) ? raw.type! : "project",
    name: clean(raw.name, 120),
    email: clean(raw.email, 200),
    business: clean(raw.business, 160),
    website: clean(raw.website, 300),
    service: (contactServices as readonly string[]).includes(clean(raw.service, 80))
      ? clean(raw.service, 80)
      : "",
    budget: (contactBudgets as readonly string[]).includes(clean(raw.budget, 80))
      ? clean(raw.budget, 80)
      : "",
    message: clean(raw.message, 5000),
  };

  const errors: Record<string, string> = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.type === "review" && !data.website) errors.website = "Please add the website to review.";
  if (data.message.length < 10) errors.message = "Please add a few more details (10+ characters).";
  if (Object.keys(errors).length) {
    return Response.json({ error: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return Response.json(
      { error: `The form isn't connected yet. Please email ${to} directly.` },
      { status: 503 },
    );
  }

  const typeLabel = contactTypes.find((t) => t.value === data.type)?.label ?? "Inquiry";
  const rows: [string, string][] = [
    ["Request", typeLabel],
    ["Name", data.name],
    ["Email", data.email],
    ["Business", data.business],
    ["Website", data.website],
    ["Service", data.service],
    ["Budget", data.budget],
  ];
  const tableRows = rows
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#777;vertical-align:top">${k}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
    )
    .join("");
  const text = [
    ...rows.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    data.message,
  ].join("\n");

  try {
    await sendEmail(apiKey, {
      from,
      to: [to],
      reply_to: data.email,
      subject: `${typeLabel}: ${data.name}${data.business ? ` (${data.business})` : ""}`,
      text,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
        <h2 style="margin:0 0 16px">New ${escapeHtml(typeLabel.toLowerCase())} from alihamzamughal.dev</h2>
        <table style="border-collapse:collapse">${tableRows}</table>
        <p style="margin:20px 0 6px;color:#777">Message</p>
        <p style="white-space:pre-wrap;margin:0;padding:14px;background:#f5f5f5;border-radius:8px">${escapeHtml(data.message)}</p>
        <p style="margin-top:20px;color:#999;font-size:13px">Reply to this email to respond to ${escapeHtml(data.name)} directly.</p>
      </div>`,
    });
  } catch (error) {
    console.error("[contact] failed to send notification", error);
    return Response.json(
      { error: `Sorry, the message couldn't be sent. Please email ${to} directly.` },
      { status: 502 },
    );
  }

  // Confirmation to the sender. Best effort: the main message already went through.
  try {
    const first = escapeHtml(data.name.split(" ")[0]);
    await sendEmail(apiKey, {
      from,
      to: [data.email],
      reply_to: to,
      subject: "Thanks, I've got your message",
      text: `Hi ${data.name.split(" ")[0]},\n\nThanks for reaching out. I've received your message and will reply within one business day.\n\nAli Hamza\nalihamzamughal.dev`,
      html: `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#111;line-height:1.6">
        <p>Hi ${first},</p>
        <p>Thanks for reaching out. I've received your message and will reply within one business day.</p>
        <p>Ali Hamza<br/><a href="https://alihamzamughal.dev" style="color:#ff4b2f">alihamzamughal.dev</a></p>
      </div>`,
    });
  } catch (error) {
    console.error("[contact] confirmation email failed", error);
  }

  return Response.json({ ok: true });
}
