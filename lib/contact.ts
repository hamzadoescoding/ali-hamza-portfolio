export const contactTypes = [
  { value: "project", label: "Start a project" },
  { value: "review", label: "Free website review" },
  { value: "question", label: "General question" },
] as const;

export const contactServices = [
  "Business Website",
  "Booking / Ordering App",
  "CRM & Dashboard",
  "E-commerce Store",
  "AI Assistant",
  "Not sure yet",
] as const;

export const contactBudgets = [
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
] as const;

/** Maps short URL slugs (?service=crm) to a service label. */
export const serviceSlugs: Record<string, (typeof contactServices)[number]> = {
  website: "Business Website",
  booking: "Booking / Ordering App",
  crm: "CRM & Dashboard",
  ecommerce: "E-commerce Store",
  ai: "AI Assistant",
};

export type ContactType = (typeof contactTypes)[number]["value"];

export interface ContactPayload {
  type: ContactType;
  name: string;
  email: string;
  business: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  /** Honeypot: must stay empty. */
  company: string;
}

/** Builds a link to the contact form with fields pre-selected. */
export function contactHref(opts: { type?: ContactType; service?: string; plan?: string } = {}) {
  const params = new URLSearchParams();
  if (opts.type) params.set("type", opts.type);
  if (opts.service) params.set("service", opts.service);
  if (opts.plan) params.set("plan", opts.plan);
  const query = params.toString();
  return `/contact${query ? `?${query}` : ""}#form`;
}
