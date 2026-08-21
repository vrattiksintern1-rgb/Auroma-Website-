import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { location, locationMapImage } from "@/content/shared";

export function LocationSection({ comeForLabel, id }: { comeForLabel: string; id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="gold-light">Location</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl lg:text-6xl">
                {location.headline.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <SectionDivider align="start" className="mt-6" />
            </Reveal>

            <Reveal delay={180}>
              <LocationMap />
            </Reveal>
          </div>

          <div>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-9 sm:grid-cols-2">
              {location.groups.map((g, i) => (
                <Reveal key={g.label} delay={100 + i * 60}>
                  <div className="border-t border-mist/15 pt-5 transition-colors duration-300 hover:border-gold-light/40">
                    <dt className="font-label text-[11px] tracking-[0.16em] uppercase text-gold-light">{g.label}</dt>
                    <dd className="mt-2 font-body text-[14px] leading-relaxed text-sand/85 sm:text-[15px]">
                      {g.items}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={100 + location.groups.length * 60 + 80}>
              <p className="mt-10 font-display text-xl italic text-gold-light sm:text-2xl">{comeForLabel}</p>
              <p className="mt-4 font-body text-[13px] leading-loose text-sand/75 sm:text-[14px]">
                {location.comeFor.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < location.comeFor.length - 1 && <span className="mx-2 text-gold-light/60">·</span>}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <div className="relative mt-10 aspect-[1720/1160] w-full max-w-lg overflow-hidden rounded-2xl border border-mist/15 shadow-xl shadow-midnight/20">
      <Image
        src={locationMapImage.src}
        alt={locationMapImage.alt}
        fill
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
    </div>
  );
}
