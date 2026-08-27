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
    priceLine: "Under ₹4 crore",
    cta: "Get the brochure on WhatsApp",
  },

  theCase: {
    headline: "Most holiday homes ask more than they give back.",
    body: "You'd use it six weekends a year, and it sits empty for the rest.\nYou don't live in Pondicherry — running a short-stay let from\nwherever you are isn't something you signed up for. And everyone\nselling you a villa promises a number they can't stand behind.",
    closing: "We built ours differently. And we'll introduce you to the people who run it.",
  },

  hosting: {
    kicker: "Designed for Hosting",
    headline: "Every decision made with your guests in mind.",
    points: [
      {
        title: "Sleeps eight, in three ensuite bedrooms.",
        body: "Group bookings are the difference between a listing and a business.",
      },
      {
        title: "You won't be running it yourself.",
        body: "You don't live here — we do. We'll introduce you to hosts and property managers already operating in Auroville and Pondicherry who handle listings, guests, cleaning and keys. They contract directly with you. We make the introduction and take nothing from it.",
      },
      {
        title: "A plunge pool at the door, not down the road.",
        body: "Private, and visible from the living room the moment you walk in.",
      },
      {
        title: "A game room on the top floor.",
        body: "Pool table, carrom and chess under a timber pergola, open to the evening air.",
      },
      {
        title: "Rooms that feel different from one another.",
        body: "A guest who moves from the courtyard to the terrace to the pool has had three different mornings in one house.",
      },
      {
        title: "Materials that get better with age.",
        body: "Lime, stone and timber wear in rather than wear out — so the house still looks right in ten years.",
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
    headlinePrefix: "Under ",
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
