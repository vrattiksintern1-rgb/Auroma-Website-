# BUILD-SPEC.md
## Auroma Holiday Villas — Investor Landing Page

**Version** 3.0 · **Date** 26 August 2026 · **Owner** Two Rabbits
**Repo target** `auroma-website` · **Current build** https://auroma-website.vercel.app/

---

## 0. How to use this file

Single source of truth for the investor landing page. Implement section by section, in order. Copy marked verbatim is final — do not write, rewrite, tighten or paraphrase it, including punctuation and line breaks.

Where a section is marked **HIDDEN**, render nothing. No placeholder, no "coming soon", no empty container.

Where this file conflicts with the live build, this file wins.

---

## 1. What changes from v2

| # | Change | Where |
|---|---|---|
| 1 | New hero — direct, product-led, with price | §5.1 |
| 2 | Dilemma + Answer collapse into one short block | §5.3 |
| 3 | Price published: "From ₹2.5 crore" | §5.1, §5.11 |
| 4 | Revised area statement — pool 300→195, total 3,210→3,105 | §5.9 |
| 5 | "Swimming pool" → "private plunge pool" throughout | Global |

**Why 1–3.** The v2 copy was written for the brochure, where the reader has already opted in and will sit through two spreads of philosophy. On paid traffic there are about eight seconds. The old hero and the Dilemma/Answer pair put six abstract blocks in front of the visitor before a single concrete fact about the house — and Designed for Hosting was already making the same argument, better and with specifics. The page now reaches the concrete section roughly two screens sooner.

**Why the price.** "From ₹2.5 crore" in the hero is the strongest qualification device on the page. It filters before the click costs anything, and it makes the form's ₹2.5cr floor consistent rather than a surprise at step four.

---

## 2. Global rules

### 2.1 Singular framing
The page describes **one villa**. Never "three villas", "villas" plural, "the project", "no two identical", or any count. Use *the villa*, *this villa*, *the house*.

Do not substitute exclusivity claims for the removed count. No "the only villa of its kind", "one of one", "built for a single family". Omission is correct; assertion is not.

### 2.2 No navigation
No header nav. Scroll-anchors only if wayfinding is wanted. The only outbound links permitted: WhatsApp CTA, `tel:`, `mailto:`, privacy policy.

### 2.3 One CTA
Primary CTA everywhere: **Get the brochure on WhatsApp**. "Book a site visit" does not appear on the page — it moves into the WhatsApp flow after engagement.

### 2.4 Indexing
```html
<meta name="robots" content="noindex, nofollow">
<title>Auroma Holiday Villas — An Architect-Designed Villa Near Auroville</title>
```
Exclude from `sitemap.xml`. Title must not name the audience segment.

### 2.5 Copy guardrails
Apply to the page, ad creative and WhatsApp messages alike.

- No return, yield, occupancy or appreciation claims. Investor lines describe what was **designed**, never what the buyer will **receive**.
- No ROI or rental calculator — not as a widget, not as a lead magnet, not "for illustration".
- No third-party rate or occupancy data anywhere on the page.
- No implication of Auroville Foundation affiliation.
- No testimonial that was not given, by a named person, with written consent on file.

### 2.6 Pool naming
195 sq. ft. is a plunge pool, not a swimming pool. Use **private plunge pool** everywhere. Accurate, still desirable, and it prevents a disappointed guest review in year one.

---

## 3. Design tokens

```css
--midnight:    #1C2B35;  /* primary ground */
--slate:       #2E4A5A;  /* secondary ground */
--mist:        #8FA8B4;  /* captions, disclaimers, secondary text */
--gold:        #B8922A;  /* buttons, accents */
--gold-light:  #D4A94E;  /* headlines on dark, emphasis */
--sand:        #F2EBE0;  /* light-ground sections */
--paper:       #FAFAF7;  /* body text on dark */
```

**Type** — Display/headlines: Cormorant Garamond 500. Kickers/labels: Jost 300, `.2em` tracking, uppercase. Body: DM Sans 400. Captions: DM Sans 400, `--mist`.

**Logo** — horizontal lockup only. Mark left; "AUROMA" in Cormorant Garamond with "HOLIDAY VILLAS" in Jost beneath, both right of the mark. Header 40px, footer 32px. The stacked lockup is not used anywhere.

---

## 4. Animation

Restraint is the brief. If an effect draws attention to itself, remove it.

| Effect | Spec |
|---|---|
| Section reveal | `opacity 0→1`, `translateY 24px→0`, 500ms `cubic-bezier(.22,.61,.36,1)`, at 15% viewport, once |
| Staggered children | 70ms between siblings, max 6 |
| Hero image | Scale 1.0→1.06 over 20s `ease-out`, once on load |
| Gallery hover | `scale(1.03)`, 400ms, desktop only |
| Buttons | Background → `--gold-light`, 200ms |
| FAQ accordion | Height auto, 300ms ease |
| Sticky CTA bar | Fades in after hero passes, mobile only |

**Prohibited:** parallax beyond the hero, counters, typewriter, auto-carousels, load spinners, cursor followers, scroll-jacking.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    transition-duration: .01ms !important;
  }
}
```

---

## 5. Sections

### 5.1 Hero

**Image** `exterior-front-elevation.jpg` — full-bleed, midnight overlay 55%.

**Copy — verbatim**
```
NEAR AUROVILLE · PONDICHERRY

Own a villa near Auroville.
Host it when you're away.

Three bedrooms, sleeps eight, private plunge pool.
Architect-designed by Ar. Trupti Doshi, ten minutes from the Matrimandir.

From ₹2.5 crore

[ Get the brochure on WhatsApp ]
```

Set **"Host it when you're away."** in Cormorant Garamond italic, `--gold-light`. The first line stays in `--paper`.

"From ₹2.5 crore" sits between the sub-copy and the button — Jost 300, `.16em` tracking, `--gold-light`, roughly 60% of headline size. It is a statement, not a badge; no pill, no border, no background fill.

CTA visible without scrolling at 390×844. No location pin line — the eyebrow already carries it.

---

### 5.2 Credibility strip

Single line, `--slate` ground, DM Sans 14px, `--mist`, gold interpuncts. Wraps to two lines on mobile. No logos, no cards, no carousel.

```
25+ years of practice · 45 homes delivered · India's first "House of Tomorrow" · Recognised by the United Nations · 30+ awards
```

---

### 5.3 The Case

Replaces the v2 Dilemma and Answer sections entirely. Midnight ground, text only, centred, generous vertical space. This is a short beat, not a screen — target under 400px tall on desktop.

**Copy — verbatim**
```
A holiday home is usually a bad asset.

It sits empty most of the year. It looks like every other villa
on the platform. And running it is someone's full-time job.

So we designed against all three.
```

Final line in `--gold-light`, Cormorant Garamond, slightly larger than body. No sub-heads, no numbering, no icons, no dividers.

---

### 5.4 Designed for Hosting

The core argument. Copy unchanged from the live build — all six items are correct as implemented.

**Change:** add images. Alternating image/text rows on desktop, stacked on mobile.

| Item | Image |
|---|---|
| Sleeps eight, in three ensuite bedrooms | `bedroom-master.jpg` |
| A pool at the door, not down the road | `pool-waterfall.jpg` |
| A terrace that photographs at golden hour | **PENDING** — §6.3 |
| Rooms that look different from one another | `living-room.jpg` |
| Materials chosen to age, not to date | `entry-nook.jpg` |
| Hosting handled, if you want it | no image |

Item 2 body copy changes "pool" to "plunge pool" per §2.6:
```
A plunge pool at the door, not down the road.
Private, in frame from the living room, and in the first photograph.
```

---

### 5.5 Mid-page CTA

Sand ground — the light break in a long dark scroll.

```
Want the plans, areas and full price sheet?

The brochure comes to you on WhatsApp, straight away.

[ Send me the brochure ]
```

Anchors to the form. Does not open a modal.

---

### 5.6 The Architect

Copy unchanged from the live build except the closing line:
```
This villa was drawn by her hand.
```

**Image** — portrait of Ar. Trupti Doshi. **PENDING**, §8. Until supplied, render the section without the image slot rather than with an empty frame.

Photograph only. Do not use any pre-made promotional graphic, award banner or logo-wall image in this slot.

---

### 5.7 Gallery

**Copy — verbatim**
```
THE VILLA

Three storeys. A private plunge pool at the door. A roof terrace under timber.
Three bedrooms, four washrooms, sleeps eight.

Private plunge pool · Game room with pool table, chess and carrom ·
Indoor landscaped garden · Designer living, kitchen and dining · Covered parking
```

Grouped gallery per §6.2, lightbox on click. Standing disclaimer beneath in `--mist` 12px:
```
Images and renders are artistic representations for illustrative purposes.
Design, specification and dimensions are indicative and subject to change and statutory approvals.
```

---

### 5.8 Location

Copy unchanged from the live build. Correct as implemented.

Do not add a Chennai drive time — unverified.

---

### 5.9 Plans & Areas

Three tabs — Ground, First, Second — with `plan-ground.jpg`, `plan-first.jpg`, `plan-second.jpg`. Pinch-zoom on mobile, lightbox on desktop.

**Floor descriptions — verbatim**
```
GROUND FLOOR
Living, dining and kitchen opening to a private plunge pool and courtyard.
Covered parking, guest washroom.

FIRST FLOOR
Three bedrooms, each ensuite. Master with soaking tub and planted balcony.

SECOND FLOOR
An open terrace under a timber pergola. The games room, solar array,
and the best seat in the house at six in the evening.
```

**Area statement — revised 17 August 2026. These figures replace all previous.**

| Floor | Built-up | Semi-open | Total |
|---|---|---|---|
| Ground | 900 | 340 *(plunge pool 195 · parking 145)* | 1,240 |
| First | 1,075 | 175 | 1,250 |
| Second | 315 | 300 | 615 |
| **Total** | **2,290** | **815** | **3,105** |

All figures in sq. ft. Render the note "All figures in sq. ft." beneath the table.

Do not render any "carpet area to follow" line. When carpet area and plot area arrive (§8), they get their own labelled rows.

---

### 5.10 Owner Proof — **HIDDEN**

Do not render. No section, no placeholder, no "coming soon" text.

The v1 build showed *"Owner voices are on their way — published here once written consent is on file."* — an internal note that must not appear publicly.

Returns once §8 consent items close.

---

### 5.11 Pricing

```
PRICING

From ₹2.5 crore.

Exclusive of registration, stamp duty, GST and statutory charges.
Prices are indicative and subject to revision.

[ Get the full price sheet on WhatsApp ]
```

Must match the hero figure and whatever the sales team quotes on a call. Never a bare number without "from" and without the exclusions line.

No rate per sq. ft. No comparison to other projects. No payment schedule. No villa count.

---

### 5.12 Form

**Copy — verbatim**
```
Get the brochure on WhatsApp.

Plans, areas, specifications and the full price sheet —
sent to you in about a minute.
```

**Fields**

| Field | Type | Required | Validation |
|---|---|---|---|
| Full name | text | yes | min 2 chars |
| WhatsApp number | tel | yes | `+91` prefix fixed; **exactly 10 digits**; strip spaces and hyphens |
| City | text | yes | min 2 chars |
| Investment range | select | yes | options below |
| Consent | checkbox | yes | **unticked by default — never pre-ticked** |

**Investment range options** — exact strings:
```
₹2.5 crore – ₹3 crore
₹3 crore – ₹3.5 crore
₹3.5 crore +
```
Placeholder: `Select a range`. No "prefer not to say" — this field is the qualification gate.

**Consent label — verbatim**
```
Send me the brochure and project updates on WhatsApp.
```

**Submit:** `Send me the brochure`

**Confirmation — verbatim**
```
On its way.

Check WhatsApp — the brochure should be with you in about a minute.
```

**Storage:** persist `consent_timestamp`, `source_page` and all UTM parameters against the record. UTMs must survive the submit into the CRM.

No email field. Four fields plus consent is the right friction at this price point, and WhatsApp is the channel that matters.

---

### 5.13 FAQ

Six live answers are correct and unchanged: *Can I actually let the villa out · Who manages it when I'm not there · What will it earn · Can I use it myself · Is this part of Auroville · When will it be ready.*

Change "the villas are" to "the villa is" in the Auroville answer.

**Seventh — "How many are available?"**
```
This villa is one of a small number in the project. Ask us on WhatsApp
for current availability.
```

> **Note for Two Rabbits.** Removing this question entirely is your call; the page would then not address the topic, which is omission rather than misstatement. One consequence to decide knowingly: the brochure the WhatsApp flow sends on form submit states three villas, and the two will be read minutes apart. Either keep this answer, or align the brochure.

---

### 5.14 Footer

```
AUROMA HOLIDAY VILLAS          [horizontal logo]

+91 91762 29955                 ← tel: link
hello@auromaholidayvillas.com   ← mailto: link
Near Auroville, Pondicherry

[ WhatsApp ]                    ← wa.me link

Privacy Policy

Images and renders are artistic representations for illustrative purposes.
Design, specification and dimensions are indicative and subject to change
and statutory approvals.
```

Phone and email **must** be live `tel:` and `mailto:` links — traffic is overwhelmingly mobile.

Floating WhatsApp button stays, pre-filled:
```
https://wa.me/919176229955?text=Hi%2C%20I%27d%20like%20the%20Auroma%20Holiday%20Villas%20brochure.
```

---

## 6. Image manifest

### 6.1 Renaming
Rename all files before commit. Current WhatsApp filenames are unusable in a manifest.

### 6.2 Assignments

| Filename | Content | Placement |
|---|---|---|
| `exterior-front-elevation.jpg` | Straight-on front, gate + signage, palms | **Hero** |
| `exterior-front-angled.jpg` | Three-quarter front, gate, car | Gallery — Exterior |
| `exterior-side.jpg` | Side elevation, bamboo screen | Gallery — Exterior |
| `roof-solar-detail.jpg` | Close aerial — solar array, tanks, solar water heater | Designed for Hosting / sustainability |
| `living-room.jpg` | Cream sectional, black swivel chairs, artwork | Designed for Hosting |
| `living-dining-wide.jpg` | Dining through arch to living, floating stair | Gallery — Living |
| `dining-gallery-wall.jpg` | Dining table, framed botanical gallery wall | Gallery — Living |
| `dining-arch-garden.jpg` | Arch, floating stair, indoor planting | Gallery — Living |
| `kitchen.jpg` | U-shape, island, window to green | Gallery — Kitchen |
| `kitchen-dining-wide.jpg` | Kitchen with dining beyond, balcony doors | Gallery — Kitchen |
| `bedroom-master.jpg` | Bed, TV wall, balcony, warm light | Designed for Hosting |
| `bedroom-second.jpg` | Bed, artwork, sheer curtains, balcony | Gallery — Bedrooms |
| `bathroom-tub.jpg` | Green vanity, brass, freestanding tub | Gallery — Bathrooms |
| `bathroom-pergola-view.jpg` | Tub, window to pergola and trees | Gallery — Bathrooms |
| `entry-nook.jpg` | Arched alcove, botanical mural, bench | Designed for Hosting |
| `pool-waterfall.jpg` | Plunge pool, waterfall spout, bamboo, deck | Designed for Hosting |
| `plan-ground.jpg` | Ground floor rendered plan | Plans |
| `plan-first.jpg` | First floor rendered plan | Plans |
| `plan-second.jpg` | Second floor — games room, solar, tanks | Plans |
| `aerial-context.jpg` | Wide aerial, villa in street context | **DO NOT USE** |

**`aerial-context.jpg` — excluded.** Shows neighbouring houses, adjacent rooftops and a pool next door. It is the one asset that visibly contradicts the singular framing. Keep in repo for brochure use; not on this page.

### 6.3 Gaps

- **No games room or roof terrace image.** §5.4 makes a specific claim about a terrace that photographs at golden hour with nothing to support it. Highest-priority commission.
- **No exterior night shot.** Usually the strongest-performing image on a short-stay listing.
- **No pool from above.** The plans show it; no photograph does.

### 6.4 Technical

- WebP with JPEG fallback
- Hero: 1920w, ≤200KB, `fetchpriority="high"`, preloaded, **not** lazy-loaded
- Gallery: 1200w, ≤150KB, `loading="lazy"`
- Plans: 1600w — legibility over weight
- `srcset` at 640 / 1024 / 1920
- Descriptive alt on every image; plans get functional alt ("Ground floor plan showing living, dining, kitchen, plunge pool and parking")

**Confirm before captioning:** `roof-solar-detail.jpg` and `aerial-context.jpg` appear to be photographs of a completed building rather than renders. If so they can be captioned as built — worth more than any render — and the disclaimer should distinguish them.

---

## 7. Technical requirements

**Performance** — LCP < 2.5s on 4G, CLS < 0.1, total weight < 2.5MB.

**Events**

| Event | Trigger |
|---|---|
| `page_view` | Load |
| `form_start` | First field focus |
| `Lead` | Successful submit — **campaign optimisation event** |
| `whatsapp_open` | Any wa.me click |
| `scroll_50` / `scroll_90` | Depth |
| `gallery_open` | Lightbox open |

**Accessibility** — visible keyboard focus, semantic heading order, labels bound to inputs, contrast ≥ 4.5:1 for body text.

**Legal** — privacy policy page required and linked at the form. DPDP Act obligation once personal data is collected.

---

## 8. Open items

| Owner | Item | Blocks |
|---|---|---|
| Counsel | RERA exemption opinion in writing, accounting for Phases 1–4 | **All ad spend** |
| Client | Ar. Trupti Doshi portrait, 300 dpi, photograph only | §5.6 image |
| Client | Games room / roof terrace render | §5.4 |
| Client | Carpet area, plot area | §5.9 |
| Client | Washroom count — amenities says 4, first floor plan shows 3 | §5.7, §5.9 |
| Client | Testimonial consent, both owners | §5.10 unhide |
| Client | Confirm which assets are photographs vs renders | §6.4 captions |
| Client | GRIHA 5-Star — which project | §5.6 |
| Two Rabbits | Privacy policy | Launch |
| Two Rabbits | Onbbits flow with source branching | Launch |
| Two Rabbits | Decision on §5.13 FAQ answer | Copy freeze |

---

*Two Rabbits · Auroma Holiday Villas Investor LP · BUILD-SPEC v3.0*
