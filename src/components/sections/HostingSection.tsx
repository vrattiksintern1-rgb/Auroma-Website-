import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { IconBadge } from "@/components/ui/Card";
import { IconBed, IconPool, IconSunset, IconGrid, IconEcoMaterial, IconHost } from "@/components/ui/icons";
import { villaImages } from "@/content/shared";
import type { ImageAsset } from "@/content/types";

interface Point {
  title: string;
  body: string;
}

const icons = [IconBed, IconPool, IconSunset, IconGrid, IconEcoMaterial, IconHost];

export function HostingSection({
  kicker,
  headline,
  points,
  id,
}: {
  kicker: string;
  headline: string;
  points: Point[];
  id?: string;
}) {
  const pairedImage: Record<number, ImageAsset> = {
    0: villaImages.bedroomWindow,
    1: villaImages.poolCourtyard,
    2: villaImages.solarPoolAerial,
    3: villaImages.livingDiningKitchen,
    4: villaImages.diningStair,
    5: villaImages.exteriorGate,
  };

  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px] text-center">
        <Reveal>
          <Eyebrow>{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider tone="gold" className="mt-7 sm:mt-8" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 text-left sm:mt-16 lg:grid-cols-2">
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point.title} delay={180 + i * 70}>
                <div className="card-lift h-full rounded-xl border border-gold/25 bg-white p-6 shadow-xl shadow-midnight/5 hover:border-gold/50 hover:shadow-2xl hover:shadow-midnight/10 sm:p-8">
                  <div className="flex items-start gap-4">
                    <IconBadge tone="gold">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </IconBadge>
                    <div className="pt-1">
                      <h3 className="font-body text-[17px] font-bold leading-snug text-midnight sm:text-xl">
                        {point.title}
                      </h3>
                      <p className="mt-2 font-body text-[15px] leading-relaxed text-slate sm:text-base">
                        {point.body}
                      </p>
                    </div>
                  </div>
                  {pairedImage[i] && (
                    <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={pairedImage[i].src}
                        alt={pairedImage[i].alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                      />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
