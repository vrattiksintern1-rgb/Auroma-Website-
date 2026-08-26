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

const GRID_GAP = 16; // px — matches Tailwind gap-4
const ROW_UNIT = 4; // px — granularity of the masonry row track

function spanFor(ratio: number, colWidth: number) {
  const height = colWidth / ratio;
  return Math.max(1, Math.ceil((height + GRID_GAP) / (ROW_UNIT + GRID_GAP)));
}

// Reasonable spans for a ~420px column (desktop default) so there's no flash
// of collapsed tiles before the ResizeObserver measures the real width.
const defaultSpans = aspectRatios.map((ratio) => spanFor(ratio, 420));

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
  const gridRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [spans, setSpans] = useState<number[]>(defaultSpans);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const recompute = () => {
      const width = grid.clientWidth;
      if (!width) return;
      const colWidth = (width - GRID_GAP * 2) / 3;
      setSpans(aspectRatios.map((ratio) => spanFor(ratio, colWidth)));
    };

    recompute();
    const observer = new ResizeObserver(recompute);
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

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

      {/* Desktop: dense CSS grid — each tile's row-span is derived from its aspect
          ratio and the live column width, so grid-auto-flow: dense packs tiles
          into any short column with no leftover empty cells. */}
      <div
        ref={gridRef}
        className="mx-auto mt-12 hidden max-w-[1300px] grid-cols-3 gap-4 px-6 sm:px-8 lg:mt-16 lg:grid"
        style={{ gridAutoFlow: "dense", gridAutoRows: `${ROW_UNIT}px` }}
      >
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openLightbox(i)}
            aria-label={`Open image ${i + 1} of ${images.length}`}
            style={{ gridRowEnd: `span ${spans[i] ?? defaultSpans[i]}` }}
            className="relative block overflow-hidden rounded-xl shadow-xl shadow-midnight/10"
          >
            <GalleryImage img={img} priority={i === 0} />
          </button>
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
              <GalleryImage img={img} priority={i === 0} />
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

function GalleryImage({ img, priority }: { img: (typeof images)[number]; priority?: boolean }) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      sizes="(min-width: 1024px) 60vw, 85vw"
      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
    />
  );
}
