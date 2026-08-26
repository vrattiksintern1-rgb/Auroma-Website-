/**
 * Open items blocking full publish, per the content spec (section 07).
 * Every field here is null/false until the named owner confirms — never
 * replace a null with an invented value. Components must treat these as
 * conditional render gates, not optional copy.
 */
export const PENDING = {
  /** Published per BUILD-SPEC v3 §1, §5.1, §5.11 — must match the hero figure. */
  priceFrom: "₹2.5 crore" as string | null,
  /** 300dpi approved portrait of Ar. Trupti Doshi. */
  architectPortraitUrl: "/images/team/trupti-doshi.jpg" as string | null,
  /** Which project holds the GRIHA 5-Star rating. */
  grihaProjectName: null as string | null,
  /** "Of 200+ Auroma homeowners, [N] have bought more than once." */
  repeatBuyerCount: null as number | null,
  /** Written consent on file for both owner quotes + portraits (B11/A10). */
  testimonialConsent: false,
  /** Second floor plan drawing. */
  secondFloorPlanUrl: null as string | null,
  /** Carpet area and plot area, in sq. ft. */
  carpetAreaSqFt: null as number | null,
  plotAreaSqFt: null as number | null,
  /** Construction and handover schedule. */
  handoverSchedule: null as string | null,
  /** WhatsApp Business number the wa.me links resolve to (§5.14). */
  whatsappNumber: "+91 91762 29955" as string | null,
  /**
   * RERA exemption opinion from counsel, accounting for Phases 1–4 on the
   * same land. Blocks all ad spend on LP-B until confirmed in writing —
   * the FAQ answer must not be published until this is set.
   */
  reraOpinionConfirmed: false,
  /** Contact email for the footer. */
  reachUsEmail: "hello@auromaholidayvillas.com" as string | null,
} as const;
