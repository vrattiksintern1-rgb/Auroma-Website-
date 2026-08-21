import type { PageVariant, Step1Data, Step2Data } from "@/content/types";

/**
 * Isolated submission logic for the two-step lead form. Talks to the
 * placeholder /api/lead route today — TODO(crm): point this at the real
 * CRM/Onbbits endpoint once it exists. Components should only ever call
 * these two functions, never fetch() directly, so the integration can be
 * swapped in one place.
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

export async function submitStep1(
  data: Step1Data,
  variant: PageVariant,
): Promise<{ leadId: string }> {
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

export async function submitStep2(leadId: string, data: Step2Data): Promise<void> {
  const res = await fetch("/api/lead", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ leadId, ...data }),
  });

  if (!res.ok) throw new Error("Could not submit — please try again.");
}
