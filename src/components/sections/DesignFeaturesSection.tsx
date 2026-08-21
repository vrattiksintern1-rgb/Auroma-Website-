import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { IconBadge } from "@/components/ui/Card";
import {
  IconCoolBreeze,
  IconSolar,
  IconWaterDrop,
  IconSprout,
  IconEcoMaterial,
  IconDaylight,
  IconBirdHerb,
} from "@/components/ui/icons";

const icons = [IconCoolBreeze, IconSolar, IconWaterDrop, IconSprout, IconEcoMaterial, IconDaylight, IconBirdHerb];

export function DesignFeaturesSection({
  kicker,
  headline,
  points,
  closing,
  id,
}: {
  kicker: string;
  headline: string;
  points: string[];
  closing: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <Eyebrow tone="gold">{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 lg:grid-cols-6">
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={point} delay={160 + i * 55} as="li">
                <div className="card-lift flex h-full flex-col items-center gap-3 rounded-xl border border-slate/10 bg-white px-4 py-7 shadow-lg shadow-midnight/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10">
                  <IconBadge tone="gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </IconBadge>
                  <p className="font-body text-[12.5px] leading-snug text-midnight sm:text-[13px]">{point}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={160 + points.length * 55 + 100}>
          <p className="mt-14 font-display text-xl italic text-gold sm:text-2xl">{closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
