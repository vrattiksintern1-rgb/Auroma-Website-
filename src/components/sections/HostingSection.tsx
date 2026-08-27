import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { villaImages } from "@/content/shared";
import type { ImageAsset } from "@/content/types";

interface Point {
  title: string;
  body: string;
}

/**
 * CHANGE-ORDER-03 §2 image assignments. Row 1 (hosting-management) has no
 * image by design.
 */
const rowImage: Partial<Record<number, ImageAsset>> = {
  0: villaImages.bedroomSuite,
  2: villaImages.poolCourtyard,
  3: villaImages.gameRoom,
  4: villaImages.livingRoom,
  5: villaImages.diningFoyer,
};

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
  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <Eyebrow tone="gold-light">{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1100px] flex-col gap-14 sm:mt-16 sm:gap-16">
        {points.map((point, i) => {
          const image = rowImage[i];

          if (!image) {
            return (
              <Reveal key={point.title} delay={180 + i * 70}>
                <div className="mx-auto max-w-2xl text-center">
                  <h3 className="font-display text-2xl font-normal text-gold-light sm:text-3xl">{point.title}</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-paper/90 sm:text-base">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            );
          }

          const reverse = i % 2 === 1;

          return (
            <Reveal key={point.title} delay={180 + i * 70}>
              <div
                className={`flex flex-col items-center gap-8 lg:gap-14 ${
                  reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl shadow-black/20">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
                <div className="w-full text-center lg:w-1/2 lg:text-left">
                  <h3 className="font-display text-2xl font-normal text-gold-light sm:text-3xl">{point.title}</h3>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-paper/90 sm:text-base">
                    {point.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
