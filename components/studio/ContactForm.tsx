"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import {
  contactBudgets,
  contactServices,
  contactTypes,
  type ContactType,
} from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm({
  initialType = "project",
  initialService = "",
  initialBudget = "",
  initialMessage = "",
}: {
  initialType?: ContactType;
  initialService?: string;
  initialBudget?: string;
  initialMessage?: string;
}) {
  const [type, setType] = useState<ContactType>(initialType);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    setFieldErrors({});
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, type }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setFieldErrors(json.errors ?? {});
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="sx-form-success" role="status">
        <span className="sx-form-success-icon" aria-hidden="true">
          <Check size={30} />
        </span>
        <h2>Message sent.</h2>
        <p>
          Thanks for reaching out. You&apos;ll get a confirmation email now, and a personal reply
          within one business day.
        </p>
        <button type="button" className="sx-link" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  const err = (name: string) =>
    fieldErrors[name] ? (
      <span className="sx-field-error" id={`${name}-error`}>
        {fieldErrors[name]}
      </span>
    ) : null;

  return (
    <form className="sx-form" onSubmit={onSubmit} noValidate>
      <fieldset className="sx-type">
        <legend>What can I help with?</legend>
        <div>
          {contactTypes.map((t) => (
            <label key={t.value} className={type === t.value ? "is-active" : ""}>
              <input
                type="radio"
                name="type-choice"
                value={t.value}
                checked={type === t.value}
                onChange={() => setType(t.value)}
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sx-form-grid">
        <label className="sx-field">
          <span>Your name *</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {err("name")}
        </label>
        <label className="sx-field">
          <span>Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@business.com"
            aria-invalid={!!fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {err("email")}
        </label>
        <label className="sx-field">
          <span>Business name</span>
          <input name="business" autoComplete="organization" placeholder="Smith Dental Clinic" />
        </label>
        <label className="sx-field">
          <span>Current website{type === "review" ? " *" : ""}</span>
          <input
            name="website"
            type="text"
            inputMode="url"
            autoComplete="url"
            placeholder="yourbusiness.com"
            required={type === "review"}
            aria-invalid={!!fieldErrors.website}
            aria-describedby={fieldErrors.website ? "website-error" : undefined}
          />
          {err("website")}
        </label>
        {type !== "question" && (
          <>
            <label className="sx-field">
              <span>Service</span>
              <select name="service" defaultValue={initialService}>
                <option value="">Select a service</option>
                {contactServices.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="sx-field">
              <span>Budget</span>
              <select name="budget" defaultValue={initialBudget}>
                <option value="">Select a range</option>
                {contactBudgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}
        <label className="sx-field sx-field-full">
          <span>
            {type === "review"
              ? "What would you like to improve? *"
              : type === "question"
                ? "Your question *"
                : "Tell me about your project *"}
          </span>
          <textarea
            name="message"
            required
            rows={6}
            defaultValue={initialMessage}
            placeholder={
              type === "review"
                ? "e.g. We get visitors but few bookings, and the site is slow on phones."
                : "What do you need, and when would you like it ready?"
            }
            aria-invalid={!!fieldErrors.message}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
          />
          {err("message")}
        </label>
        {/* Honeypot for bots: hidden from people and screen readers. */}
        <label className="sx-hp" aria-hidden="true">
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === "error" && error && (
        <p className="sx-form-error" role="alert">
          {error}
        </p>
      )}

      <div className="sx-form-footer">
        <button className="sx-pill sx-pill-accent sx-submit" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : type === "review" ? "Request free review" : "Send message"}
          <span className="sx-pill-icon" aria-hidden="true">
            {status === "sending" ? <Loader2 size={16} className="sx-spin" /> : <ArrowUpRight size={16} />}
          </span>
        </button>
        <p>I reply within one business day. Your details are only used to answer you.</p>
      </div>
    </form>
  );
}
