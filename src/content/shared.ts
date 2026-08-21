// Verbatim copy shared between LP-A and LP-B, per the content specification
// (Two Rabbits · Auroma Holiday Villas · v1.0 · 20 August 2026).
// Copy in this file is set — do not rewrite it for tone or length.

export const brand = {
  name: "Auroma Holiday Villas",
  idea: "Where your home has a soul.",
  pillars: ["Sustainable", "Luxury", "Well-being"] as const,
  architectName: "Ar. Trupti Doshi",
  architectRole: "Principal Architect and Co-founder, The Auroma Group.",
};

export const villaImages = {
  elevation: {
    src: "/images/villa/elevation-render.webp",
    alt: "Auroma Holiday Villa elevation — a three-storey home with timber pergolas and stone cladding.",
    width: 2000,
    height: 1414,
  },
  gameRoomTerrace: {
    src: "/images/villa/game-room-terrace.webp",
    alt: "Second floor games room with pool table, carrom and chess under a timber pergola.",
    width: 2000,
    height: 1414,
  },
  courtyardPool: {
    src: "/images/villa/courtyard-pool.webp",
    alt: "Private courtyard pool with bamboo landscaping at the villa entrance.",
    width: 1800,
    height: 1348,
  },
  diningStair: {
    src: "/images/villa/dining-stair.webp",
    alt: "Designer dining space beside an arched window and open stairwell.",
    width: 1800,
    height: 1108,
  },
} as const;

export const planImages = {
  ground: {
    src: "/images/plans/ground-floor.webp",
    alt: "Ground floor plan — living, dining, kitchen, pool and covered parking.",
    width: 1600,
    height: 2255,
  },
  first: {
    src: "/images/plans/first-floor.webp",
    alt: "First floor plan — three ensuite bedrooms, master with soaking tub.",
    width: 1600,
    height: 2255,
  },
} as const;

export const credibilityItems = {
  investor: [
    "25+ years of practice",
    "45 homes delivered",
    "India's first “House of Tomorrow”",
    "Recognised by the United Nations",
    "30+ awards",
  ],
  homeBuyer: [
    "25+ years of practice",
    "45 homes delivered",
    "India's first “House of Tomorrow”",
    "Recognised by the United Nations",
    "200+ homeowners",
  ],
};

export const architect = {
  eyebrow: "The Architect",
  name: "Ar. Trupti Doshi",
  role: "Principal Architect and Co-founder, The Auroma Group.",
  bio: [
    "She has spent twenty-five years asking a question most builders never ask: what would it take for a house to feel alive? She took that question to a TEDx stage in Greece — ",
  ],
  bioItalic: "Can a Building Be a Person?",
  bioContinued:
    " — and has spent every project since answering it in brick, lime and light.",
  credentials: [
    { stat: "45 designer homes", detail: "delivered across Pondicherry–Auroville" },
    { stat: "Gratitude Ecovilla", detail: "— India's first internationally recognised “House of Tomorrow”" },
    { stat: "Sharanam", detail: "— recognised by the United Nations for sustainable architecture" },
    { stat: "GRIHA 5-Star", detail: "with an Exemplary Performance Award" },
    { stat: "30+", detail: "national and international awards" },
    { stat: "5,00,000+ sq. ft.", detail: "of eco-spaces designed around nature and wellness" },
    { stat: "200+ homeowners", detail: "who trusted the practice with a home" },
  ],
  closing: "These three villas were drawn by her hand.",
};

export const galleryHeadline = "Three villas. No two identical.";
export const gallerySupportInvestor =
  "Three storeys. A private pool at the door. A roof terrace under timber. Three bedrooms, four washrooms, sleeps eight.";
export const gallerySupportHome =
  "Three bedrooms, each ensuite. A private pool at the door. An open terrace under timber, and a games room at the top of the house.";
export const galleryAmenities = [
  "Swimming pool",
  "Game room with pool table, chess and carrom",
  "Indoor landscaped garden",
  "Designer living, kitchen and dining",
  "Covered parking",
];
export const galleryCaption =
  "Images and renders are artistic representations for illustrative purposes. Design, specification and dimensions are indicative and subject to change and statutory approvals.";

export const locationMapImage = {
  src: "/images/location/location-map.webp",
  alt: "Illustrated map showing Auroma Holiday Villa at the centre, with connected circles pointing to Auroville, Education & University, and Pondicherry.",
  width: 1720,
  height: 1160,
} as const;

export const location = {
  headline: "Ten minutes from the Matrimandir.\nFifteen from Pondicherry.",
  groups: [
    { label: "Auroville", items: "Matrimandir, the Gardens, the Banyan, Solar Kitchen, Visitor Centre" },
    { label: "Cafés & food", items: "Marc's, Dreamer's, Tanto, Bread & Chocolate, Solar Kitchen" },
    { label: "Experiences", items: "pottery, yoga, sound healing, permaculture, Sadhana Forest" },
    { label: "Beaches", items: "Auroville/Repos, Serenity, Paradise" },
    { label: "Pondicherry", items: "White Town, the Promenade, Sri Aurobindo Ashram, the Basilica" },
    { label: "Essentials", items: "JIPMER and PIMS hospitals, pharmacy, supermarket, ATM" },
    { label: "Connectivity", items: "Puducherry airport, ECR Road, Chennai airport" },
  ],
  comeFor: [
    "Matrimandir",
    "Auroville Visitors' Centre",
    "Sri Aurobindo Ashram",
    "French Heritage Town",
    "Promenade & Beach",
    "Sadhana Forest",
    "French Heritage Walk",
    "Watsu Hydrotherapy",
    "Sound Healing",
    "SVARAM Sound Bath",
    "Scuba Diving",
    "Horse Riding",
  ],
};

export const plans = {
  headline: "Everything, drawn.",
  floors: [
    {
      label: "Ground floor",
      detail:
        "Living, dining and kitchen opening to a private pool and courtyard. Covered parking, guest washroom.",
    },
    {
      label: "First floor",
      detail: "Three bedrooms, each ensuite. Master with soaking tub and planted balcony.",
    },
    {
      label: "Second floor",
      detail:
        "Open terrace under a timber pergola. The games room, and the best seat in the house at six in the evening.",
    },
  ],
  areas: {
    builtUp: "2,290 sq. ft.",
    semiOpen: "920 sq. ft.",
    total: "3,210 sq. ft.",
  },
  areaTable: [
    { floor: "Ground floor", builtUp: 900, semiOpen: 445, total: 1345 },
    { floor: "First floor", builtUp: 1075, semiOpen: 175, total: 1250 },
    { floor: "Second floor", builtUp: 315, semiOpen: 300, total: 615 },
  ],
};

// B11 / A10 — real quotes exist in the source brochure, but written consent
// is not yet on file (content spec, section 07). Do not render these until
// content.pendingFlags.testimonialConsent is true. Employer name intentionally
// omitted per the spec's note even once consent lands, unless separately cleared.
export const testimonials = [
  {
    quote:
      "Living in an Auroma home means experiencing natural light, greenery, birdsong and a deep connection with nature. Its solid structure, quality materials, Vastu and distinctive design inspire confidence.",
    attribution: "Captain Mohanshyam",
    role: "Aviator and Flight Instructor",
  },
  {
    quote:
      "Here, you wake up to sunlight, greenery and the music of birds. It is poetry that cannot be expressed in words. Even the finest resorts cannot give me the feeling I get here.",
    attribution: "Shreeprakash Patel",
    role: "Diamond Merchant, Dubai",
  },
];

export const faqShared = {
  isPartOfAuroville: {
    q: "Is this part of Auroville?",
    aInvestor:
      "No. The villas are privately owned freehold homes near Auroville — about ten minutes from the Matrimandir. There is no affiliation with the Auroville Foundation, and ownership carries no membership or rights within Auroville.",
    aHome:
      "No. These are privately owned freehold homes near Auroville. There is no affiliation with the Auroville Foundation, and ownership carries no membership or rights within Auroville.",
  },
  howManyAvailable: {
    q: "How many are available?",
    a: "Three villas in total. That's the whole project.",
  },
};

export const confirmationCopy = {
  headline: "On its way.",
  body: "Check WhatsApp — the brochure should be with you in about a minute.",
  bridge: "A few quick questions will help us send you the right information. Takes thirty seconds.",
  step2Cta: "Finish — and get a call back",
  step1Cta: "Send me the brochure",
  doneHeadline: "Thank you.",
  doneBody: "We'll be in touch on WhatsApp shortly.",
};

export const whatsappCopy = {
  immediate: (name: string) =>
    `Hi ${name} — here's the Auroma Holiday Villas brochure. Three villas, ten minutes from the Matrimandir.`,
  followUpInvestor: "Anything you'd like to know about how it's set up for hosting?",
  followUpHome: "Would you like the current price range?",
  coldNoSource: "Are you thinking of using it yourself, or letting it out too — or both?",
};
