// Investor landing page ("/"). Copy set verbatim per BUILD-SPEC v3.0
// (Two Rabbits · Auroma Holiday Villas · 26 August 2026).
// Register: rational, specific. Noindex, nofollow — paid traffic only.

export const lpB = {
  meta: {
    title: "Auroma Holiday Villas — An Architect-Designed Villa Near Auroville",
    description:
      "Own a villa near Auroville. Three bedrooms, sleeps eight, private plunge pool. Architect-designed by Ar. Trupti Doshi, ten minutes from the Matrimandir.",
    robots: "noindex, nofollow",
  },

  hero: {
    kicker: "NEAR AUROVILLE · PONDICHERRY",
    line1: "Own a villa near Auroville.",
    line2: "Host it when you're away.",
    body: "Three bedrooms, sleeps eight, private plunge pool.\nArchitect-designed by Ar. Trupti Doshi, ten minutes from the Matrimandir.",
    priceLine: "From ₹2.5 crore",
    cta: "Get the brochure on WhatsApp",
  },

  theCase: {
    lines: [
      "A holiday home is usually a bad asset.",
      "It sits empty most of the year. It looks like every other villa\non the platform. And running it is someone's full-time job.",
    ],
    closing: "So we designed against all three.",
  },

  hosting: {
    kicker: "Designed for Hosting",
    headline: "Decisions we made because someone else will stay here too.",
    points: [
      {
        title: "Sleeps eight, in three ensuite bedrooms.",
        body: "Group bookings are the difference between a listing and a business.",
      },
      {
        title: "A plunge pool at the door, not down the road.",
        body: "Private, in frame from the living room, and in the first photograph.",
      },
      {
        title: "A terrace that photographs at golden hour.",
        body: "Open, pergola-shaded, with a long view over the canopy.",
      },
      {
        title: "Rooms that look different from one another.",
        body: "A listing needs twelve photographs that aren't the same photograph.",
      },
      {
        title: "Materials chosen to age, not to date.",
        body: "Lime, stone and timber forgive wear in a way that gloss finishes do not.",
      },
      {
        title: "Hosting handled, if you want it.",
        body: "We'll connect you with professional hosts and property managers working in Auroville and Pondicherry.",
      },
    ],
  },

  midCta: {
    headline: "Want the plans, areas and full price sheet?",
    body: "The brochure comes to you on WhatsApp, straight away.",
    cta: "Send me the brochure",
  },

  pricing: {
    kicker: "Pricing",
    headlinePrefix: "From ",
    exclusions: "Exclusive of registration, stamp duty, GST and statutory charges.",
    revision: "Prices are indicative and subject to revision.",
    cta: "Get the full price sheet on WhatsApp",
  },

  form: {
    headline: "Get the brochure on WhatsApp.",
    body: "Plans, areas, specifications and the full price sheet —\nsent to you in about a minute.",
  },

  faq: [
    {
      q: "Can I actually let the villa out?",
      a: "It's a privately owned freehold home and yours to use as you choose, subject to local regulations that apply to short-stay hosting. We designed it with hosting in mind and we'll connect you with professional hosts and property managers working in the area.",
    },
    {
      q: "Who manages it when I'm not there?",
      a: "We'll introduce you to independent property managers and hosts operating in Auroville and Pondicherry. They contract directly with you — we make the introduction, we don't take a cut.",
    },
    {
      q: "What will it earn?",
      a: "We won't tell you, because nobody honestly can. What a villa earns depends on how it's run, how it's priced and how the market moves. What we can tell you is exactly what we designed and why — that's on this page, and in more detail in the brochure.",
    },
    {
      q: "Can I use it myself?",
      a: "It's your house. Block whatever dates you want.",
    },
    {
      q: "When will it be ready?",
      a: "The project is at design stage. Construction and handover dates are shared on request — ask on WhatsApp and we'll send the current schedule.",
    },
  ],
} as const;
