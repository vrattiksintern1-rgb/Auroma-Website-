import { whatsappCopy } from "@/content/shared";
import { PENDING } from "@/content/pending";
import type { PageVariant } from "@/content/types";

/**
 * WhatsApp nurture flow, per content spec section 05 ("WhatsApp handoff —
 * Onbbits"). This module only builds message copy and exposes a single
 * send function — swap the body of `sendBrochureViaWhatsApp` for the real
 * Onbbits API call. Nothing here should be imported by components directly
 * except through `leadService`, so the integration stays isolated.
 */

export function buildImmediateMessage(name: string) {
  return whatsappCopy.immediate(name);
}

export function buildFollowUpMessage(variant: PageVariant) {
  return variant === "investor" ? whatsappCopy.followUpInvestor : whatsappCopy.followUpHome;
}

export interface BrochureRequest {
  name: string;
  whatsappNumber: string;
  email: string;
  variant: PageVariant;
  sourcePage: string;
}

/**
 * TODO(onbbits): wire this to the real WhatsApp Business / Onbbits send API.
 * PENDING.whatsappNumber is not yet set (client to provide the business
 * number — see content spec section 07), so this cannot function in
 * production yet. It intentionally does not fake a successful send.
 */
export async function sendBrochureViaWhatsApp(request: BrochureRequest): Promise<{ ok: boolean }> {
  if (!PENDING.whatsappNumber) {
    console.warn(
      "[whatsapp] No business number configured (PENDING.whatsappNumber). " +
        "Brochure was not sent — this is a stub pending the Onbbits integration.",
      request,
    );
    return { ok: false };
  }

  throw new Error("Onbbits WhatsApp integration not yet implemented.");
}
