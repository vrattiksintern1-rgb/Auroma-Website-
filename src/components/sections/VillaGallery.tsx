"use client";

import Image from "next/image";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { IconBadge } from "@/components/ui/Card";
import { IconPool, IconGrid, IconSprout, IconSofa, IconCar } from "@/components/ui/icons";
import { villaImages, galleryAmenities, galleryCaption } from "@/content/shared";

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

export function VillaGallery({
  headline,
  support,
  id,
}: {
  headline: string;
  support: string;
  id?: string;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * scroller.current.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture py-20 sm:py-28">
      <div className="mx-auto max-w-[1300px] px-6 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-normal text-midnight sm:text-5xl lg:text-6xl">{headline}</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-slate sm:text-base">
            {support}
          </p>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-2 gap-5 text-left sm:mt-14 sm:grid-cols-3 md:grid-cols-5">
          {galleryAmenities.map((a, i) => {
            const Icon = amenityIcons[i % amenityIcons.length];
            return (
              <Reveal key={a} delay={180 + i * 60}>
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

      {/* Desktop: masonry stack keeps mixed image sizes tight with no empty grid cells. */}
      <div className="mx-auto mt-12 hidden max-w-[1300px] columns-3 gap-4 px-6 sm:px-8 lg:mt-16 lg:block">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`relative mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-xl shadow-midnight/10 ${
              i === 0 || i === 3 || i === 12 ? "aspect-[16/10]" : "aspect-[4/3]"
            }`}
          >
            <GalleryImage img={img} priority={i === 0} />
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
            <div
              key={img.src}
              className="relative aspect-[4/3] w-[82vw] shrink-0 snap-center overflow-hidden rounded-xl shadow-xl shadow-midnight/10 sm:w-[60vw]"
            >
              <GalleryImage img={img} priority={i === 0} />
            </div>
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
