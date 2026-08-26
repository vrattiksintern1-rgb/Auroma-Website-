"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconBadge } from "@/components/ui/Card";
import { IconPool, IconGrid, IconSprout, IconSofa, IconCar } from "@/components/ui/icons";
import { villaImages, galleryAmenities, galleryCaption } from "@/content/shared";
import { trackEvent } from "@/lib/analytics";

const images = [
  villaImages.exteriorFront,
  villaImages.poolCourtyard,
  villaImages.livingRoom,
  villaImages.livingDiningKitchen,
  villaImages.kitchen,
  villaImages.diningFoyer,
  villaImages.diningStair,
  villaImages.diningRoom,
  villaImages.bedroomSuite,
  villaImages.bedroomNiche,
  villaImages.bedroomWindow,
  villaImages.bathroomTub,
  villaImages.solarRoofTerrace,
  villaImages.exteriorSideAngle,
];
const amenityIcons = [IconPool, IconGrid, IconSprout, IconSofa, IconCar];

// Wide-format shots (used for the first/heading tiles) vs. standard 4:3 shots.
const wideIndexes = new Set([0, 3, 12]);
const aspectRatios = images.map((_, i) => (wideIndexes.has(i) ? 16 / 10 : 4 / 3));

const DESKTOP_COLUMN_COUNT = 3;

// True masonry: walk the images in order and always drop the next one into
// whichever column is currently shortest (Pinterest-style greedy packing).
// Unlike CSS `columns` (which lets the browser balance columns and can strand
// a column short) or CSS Grid row-spans (which reserves fixed-size cells),
// this stacks each column with normal block flow, so a column can never have
// a gap partway down it — only a harmless height difference at the very
// bottom, which is inherent to masonry and not a "gap".
//
// The initial greedy pass can still leave columns lopsided: e.g. every
// wide (shorter) image happens to land in the same column, so that column
// needs an extra image just to catch up to the others' height. A second
// pass then repeatedly swaps single images between columns whenever a swap
// shrinks the gap between the tallest and shortest column, until no such
// swap remains — a small local-search cleanup on top of the greedy pack.
function distributeMasonry(columnCount: number, imageCount: number) {
  const REFERENCE_WIDTH = 400; // only relative height comparisons matter here
  const GAP = 16; // px — matches Tailwind gap-4
  const itemHeight = (i: number) => REFERENCE_WIDTH / aspectRatios[i] + GAP;

  const heights = new Array(columnCount).fill(0);
  const columns: number[][] = Array.from({ length: columnCount }, () => []);
  for (let i = 0; i < imageCount; i++) {
    let shortest = 0;
    for (let c = 1; c < columnCount; c++) {
      if (heights[c] < heights[shortest]) shortest = c;
    }
    columns[shortest].push(i);
    heights[shortest] += itemHeight(i);
  }

  let improved = true;
  while (improved) {
    improved = false;
    for (let a = 0; a < columnCount; a++) {
      for (let b = a + 1; b < columnCount; b++) {
        const before = Math.abs(heights[a] - heights[b]);
        for (let ia = 0; ia < columns[a].length; ia++) {
          for (let ib = 0; ib < columns[b].length; ib++) {
            const ha = itemHeight(columns[a][ia]);
            const hb = itemHeight(columns[b][ib]);
            const after = Math.abs(heights[a] - ha + hb - (heights[b] - hb + ha));
            if (after < before) {
              const swap = columns[a][ia];
              columns[a][ia] = columns[b][ib];
              columns[b][ib] = swap;
              heights[a] += hb - ha;
              heights[b] += ha - hb;
              improved = true;
            }
          }
        }
      }
    }
  }

  // Swaps can put images out of their original order within a column;
  // restore top-to-bottom reading order now that membership is settled.
  columns.forEach((col) => col.sort((x, y) => x - y));
  return columns;
}

const desktopColumns = distributeMasonry(DESKTOP_COLUMN_COUNT, images.length);

export function VillaGallery({
  kicker,
  support,
  id,
}: {
  kicker: string;
  support: string;
  id?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.85, behavior: "smooth" });
  };

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    trackEvent("gallery_open", { index: i });
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setLightboxIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, step]);

  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture py-20 sm:py-28">
      <div className="mx-auto max-w-[1300px] px-6 text-center sm:px-8">
        <Reveal>
          <Eyebrow>{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-2xl font-display text-2xl font-normal leading-[1.3] text-midnight sm:text-4xl">
            {support.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-[900px] flex-wrap justify-center gap-5 text-left sm:mt-14">
          {galleryAmenities.map((a, i) => {
            const Icon = amenityIcons[i % amenityIcons.length];
            return (
              <Reveal
                key={a}
                delay={180 + i * 60}
                className="w-[calc(50%-10px)] sm:w-[calc(33.333%-13.33px)] md:w-[calc(20%-16px)]"
              >
                <div className="card-lift flex h-full flex-col items-center gap-3 rounded-xl border border-slate/10 bg-white px-4 py-7 text-center shadow-lg shadow-midnight/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10">
                  <IconBadge tone="gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </IconBadge>
                  <span className="font-body text-[13px] leading-snug text-midnight sm:text-[14px]">{a}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Desktop: true masonry — images are pre-sorted into column buckets by a
          shortest-column-first algorithm, then each column stacks its images in
          normal block flow. No fixed cells, no browser column-balancing, so no
          gaps can ever open up inside a column. */}
      <div className="mx-auto mt-12 hidden max-w-[1300px] gap-4 px-6 sm:px-8 lg:mt-16 lg:flex">
        {desktopColumns.map((column, ci) => (
          <div key={ci} className="flex flex-1 flex-col gap-4">
            {column.map((i) => {
              const img = images[i];
              return (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => openLightbox(i)}
                  aria-label={`Open image ${i + 1} of ${images.length}`}
                  className={`relative block w-full overflow-hidden rounded-xl shadow-xl shadow-midnight/10 ${
                    wideIndexes.has(i) ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <GalleryImage img={img} priority={i === 0} />
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile / tablet: swipeable carousel */}
      <div className="mt-10 lg:hidden">
        <div
          ref={scroller}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-8"
          role="region"
          aria-label="Villa photo gallery"
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1} of ${images.length}`}
              className="relative aspect-[4/3] w-[82vw] shrink-0 snap-center overflow-hidden rounded-xl shadow-xl shadow-midnight/10 sm:w-[60vw]"
            >
              <GalleryImage img={img} priority={i === 0} eager={i !== 0} />
            </button>
          ))}
        </div>
        <div className="mt-5 flex justify-center gap-3 px-6">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/25 text-midnight transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-md hover:shadow-midnight/10"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next image"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/25 text-midnight transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold hover:shadow-md hover:shadow-midnight/10"
          >
            →
          </button>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[1300px] px-6 font-body text-[12px] leading-relaxed text-slate/60 sm:px-8">
        {galleryCaption}
      </p>

      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Villa photo"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-midnight/95 p-4"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-mist/40 text-paper hover:border-gold-light hover:text-gold-light"
          >
            ✕
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist/40 text-paper hover:border-gold-light hover:text-gold-light sm:left-6"
          >
            ←
          </button>
          <div
            className="relative aspect-[4/3] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              sizes="(min-width: 1024px) 900px, 92vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-mist/40 text-paper hover:border-gold-light hover:text-gold-light sm:right-6"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

// `eager` is for slides inside the horizontally-scrolling mobile carousel:
// native `loading="lazy"` measures distance from the *clipped* scroll
// container, not the page, so a slide a few swipes to the right never
// enters the load-distance threshold from vertical page scroll alone and
// is stuck unloaded until the user swipes there manually. The carousel's
// images are small (next/image serves the ~85vw crop), so loading them
// upfront is cheap and guarantees every photo is reachable.
function GalleryImage({
  img,
  priority,
  eager,
}: {
  img: (typeof images)[number];
  priority?: boolean;
  eager?: boolean;
}) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      priority={priority}
      loading={priority ? undefined : eager ? "eager" : "lazy"}
      sizes="(min-width: 1024px) 60vw, 85vw"
      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
    />
  );
}
