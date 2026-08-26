import type { BrochureLeadData, LeadFormData, PageVariant } from "@/content/types";

/**
 * Isolated submission logic for the lead form. Talks to the placeholder
 * /api/lead route today — TODO(crm): point this at the real CRM/Onbbits
 * endpoint once it exists. Components should only ever call this function,
 * never fetch() directly, so the integration can be swapped in one place.
 */

function readUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]) {
    const value = params.get(key);
    if (value) utm[key] = value;
  }
  return utm;
}

export async function submitLead(data: LeadFormData, variant: PageVariant): Promise<{ leadId: string }> {
  const payload = {
    ...data,
    variant,
    sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
    utm: readUtmParams(),
    consentTimestamp: new Date().toISOString(),
  };

  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Could not submit — please try again.");
  return res.json();
}

/**
 * Submits the "Download Brochure" gate (name / email / phone). Posts to the
 * same placeholder /api/lead route as submitLead — TODO(crm): point this at
 * the real CRM/Onbbits endpoint once it exists, same as submitLead above.
 */
export async function submitBrochureLead(data: BrochureLeadData): Promise<{ leadId: string }> {
  const payload = {
    ...data,
    type: "brochure_download",
    sourcePage: typeof window !== "undefined" ? window.location.pathname : "",
    utm: readUtmParams(),
    submittedAt: new Date().toISOString(),
  };

  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Could not submit — please try again.");
  return res.json();
}
