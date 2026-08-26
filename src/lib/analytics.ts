/**
 * Thin analytics abstraction. No provider is wired into this project yet —
 * TODO: connect to whichever tag manager / pixel the team standardises on
 * (GTM, Meta Pixel, GA4). Until then this dispatches a DOM CustomEvent so
 * the events are inspectable in devtools, and logs in development.
 *
 * Event names follow the content spec, section 06 "Events to fire".
 */
export type AnalyticsEvent =
  | "page_view"
  | "hero_cta_click"
  | "mid_page_cta_click"
  | "pricing_cta_click"
  | "form_start"
  | "lead" // form submit — the campaign optimisation event
  | "brochure_form_start"
  | "brochure_download" // gated brochure PDF download
  | "whatsapp_open"
  | "scroll_50"
  | "scroll_90"
  | "gallery_open";

export function trackEvent(event: AnalyticsEvent, payload: Record<string, unknown> = {}) {
  const detail = { event, page: typeof window !== "undefined" ? window.location.pathname : "", ...payload };

  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", detail);
  }

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("auroma:analytics", { detail }));
  }
}
