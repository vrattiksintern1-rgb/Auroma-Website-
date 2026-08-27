# CHANGE-ORDER-03.md
## Auroma Holiday Villas — Investor Landing Page
### Final copy revision · 27 August 2026

**Supersedes** sections 3, 4 and 5 of CHANGE-ORDER-02.md, and replaces the Designed for Hosting section in full.

**Still valid and unchanged from CHANGE-ORDER-02:** sections 1, 2, 6, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19. Apply those as written if not already done.

Copy below is final. Set it verbatim — do not rewrite, tighten or paraphrase.

---

## Why this revision

Market research on the Puducherry short-stay segment showed the rental-yield argument is weak: occupancy under 30%, revenue declining year on year, and a nearby competitor advertising "assured rental income" that works out to roughly the market average presented as a guarantee.

Leading on rental income loses either way — a careful buyer does the arithmetic, a careless one is won by a promise we won't make.

So the page no longer argues that this is an income asset. It argues that it is a home the buyer will use, which pays part of its own way, run by people we introduce them to. The buyer typically does not live in Pondicherry and has never run a short-stay let. That gap — not yield — is the thing we solve.

---

## 1. The problem block

**Replaces** CHANGE-ORDER-02 §3 and §4 in full. The separate solution section is **removed** — Designed for Hosting is now the answer, and a second solution block would repeat it.

**Section id:** `#the-case`

**Copy — verbatim**
```
Most holiday homes ask more than they give back.

You'd use it six weekends a year, and it sits empty for the rest.
You don't live in Pondicherry — running a short-stay let from
wherever you are isn't something you signed up for. And everyone
selling you a villa promises a number they can't stand behind.

We built ours differently. And we'll introduce you to the people who run it.
```

**Layout**
- Midnight ground, no image, centred, generous vertical space
- Headline in Cormorant Garamond, `#FAFAF7`
- Body in DM Sans, `#FAFAF7`
- Final line in Cormorant Garamond italic, `#D4A94E`, slightly larger than body, with real space above it
- Target under 500px tall on desktop — this is a short beat, not a screen
- No sub-heads, no numbering, no icons, no dividers

**Note.** The closing line is a promise the next section must keep. Designed for Hosting follows immediately — no section between them.

---

## 2. Designed for Hosting — full replacement

Six items, reordered. The hosting-management item moves from last to second, because it is the strongest differentiator on the page and item six is where things go unread.

**Section id:** `#designed-for-hosting`

**Kicker and sub-headline — verbatim**
```
DESIGNED FOR HOSTING

Every decision made with your guests in mind.
```

**Items, in this order — verbatim**

```
Sleeps eight, in three ensuite bedrooms.
Group bookings are the difference between a listing and a business.

You won't be running it yourself.
You don't live here — we do. We'll introduce you to hosts and property
managers already operating in Auroville and Pondicherry who handle
listings, guests, cleaning and keys. They contract directly with you.
We make the introduction and take nothing from it.

A plunge pool at the door, not down the road.
Private, and visible from the living room the moment you walk in.

A game room on the top floor.
Pool table, carrom and chess under a timber pergola, open to the evening air.

Rooms that feel different from one another.
A guest who moves from the courtyard to the terrace to the pool
has had three different mornings in one house.

Materials that get better with age.
Lime, stone and timber wear in rather than wear out — so the house
still looks right in ten years.
```

**Images**

| Item | Image |
|---|---|
| Sleeps eight | `bedroom-master.jpg` |
| You won't be running it yourself | no image |
| Plunge pool | `pool-waterfall.jpg` |
| Game room | `game-room.jpg` — **PENDING**, see §4 |
| Rooms that feel different | `living-room.jpg` |
| Materials | `entry-nook.jpg` |

**Layout** — alternating image/text rows on desktop, stacked on mobile. Lead line in `#D4A94E`, body in `#FAFAF7`.

---

## 3. Credibility strip — not yet applied

Checked on the live build at `auroma-website-6zie.vercel.app` and this still reads the old figures.

**Currently showing**
```
25+ years of practice · 45 homes delivered · India's first "House of Tomorrow" · Recognised by the United Nations · 30+ awards
```

**Must be**
```
25+ years of practice · 200+ homes delivered · India's first "House of Tomorrow" · Recognised by the United Nations · 40+ awards
```

Same change in The Architect section per CHANGE-ORDER-02 §10, including deletion of the now-duplicate `200+ homeowners` line.

---

## 4. Open items

| Owner | Item | Blocks |
|---|---|---|
| Client | **Named property managers in Auroville / Pondicherry** — at least two or three real, contactable relationships | §2 item 2. This is now a headline claim and the first thing a serious buyer will ask for on the call. If the relationships are not yet in place, the copy must read "we'll help you find" rather than "we'll introduce you to". |
| Client | Game room render | §2, gallery |
| Client | Revised location map | CO-02 §13 |
| Client | **Written confirmation of the 40+ awards figure** | §3 — do not publish unverified |
| Client | Ar. Trupti Doshi portrait, 300 dpi | Architect section |
| Counsel | RERA exemption opinion in writing | All ad spend |

---

## 5. Verify before handover

- The old "A holiday home is usually a bad asset" block is gone entirely.
- No separate solution section exists — `#the-case` hands straight to `#designed-for-hosting`.
- Credibility strip and Architect section both read 200+ and 40+.
- Every instance of `₹2.5 crore` is gone; hero and pricing both read `Under ₹4 crore`.
- Form bands end at `₹3.5 crore – ₹4 crore`, not `₹3.5 crore +`.
- No return, yield, appreciation or occupancy claim anywhere on the page.
- At 390px: no horizontal scroll, hero CTA visible without scrolling, nav collapses.
- Form submits end to end and the WhatsApp message actually arrives.

---

*Two Rabbits · Auroma Holiday Villas Investor LP · Change Order 03*
