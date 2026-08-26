import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { withAccent } from "@/components/ui/Accent";
import type { ImageAsset } from "@/content/types";

interface Point {
  title: string;
  body: string;
}

export function TensionSection({
  eyebrow,
  headline,
  intro,
  points,
  closing,
  accent,
  id,
  tone = "dark",
  image,
}: {
  eyebrow?: string;
  headline: string;
  intro: string;
  points: Point[];
  closing: string;
  accent?: string;
  id?: string;
  tone?: "dark" | "light";
  image?: ImageAsset;
}) {
  const isLight = tone === "light";

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-8 sm:py-28 ${isLight ? "bg-sand-texture" : "bg-midnight-texture"}`}
    >
      <div className={`mx-auto ${image ? "grid max-w-[1180px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:gap-16" : "max-w-[760px]"}`}>
        <div>
        <div className={image ? "text-left" : "text-center"}>
          {eyebrow && (
            <Reveal>
              <span
                className={`mb-4 block font-label text-[11px] tracking-[0.28em] uppercase ${
                  isLight ? "text-gold" : "text-gold-light"
                }`}
              >
                {eyebrow}
              </span>
            </Reveal>
          )}

          <Reveal delay={80}>
            <h2
              className={`font-display text-3xl font-normal leading-[1.15] sm:text-5xl lg:text-6xl ${
                isLight ? "text-midnight" : "text-paper"
              }`}
            >
              {headline.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {accent ? withAccent(line, accent, isLight ? "gold" : "gold-light") : line}
                </span>
              ))}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p
              className={`mt-6 font-body text-[15px] leading-relaxed sm:text-base ${
                isLight ? "text-slate" : "text-sand/80"
              }`}
            >
              {intro}
            </p>
          </Reveal>

          <Reveal delay={190}>
            <SectionDivider align={image ? "start" : "center"} className="mt-7 sm:mt-8" />
          </Reveal>
        </div>

        <div className="mt-14 space-y-11 sm:mt-16 sm:space-y-14">
          {points.map((point, i) => (
            <Reveal key={point.title} delay={200 + i * 90}>
              <div className={`border-t pt-7 transition-colors duration-300 ${isLight ? "border-slate/15 hover:border-gold/40" : "border-mist/15 hover:border-gold-light/40"}`}>
                <h3
                  className={`font-body text-[17px] font-bold sm:text-xl ${
                    isLight ? "text-midnight" : "text-paper"
                  }`}
                >
                  {point.title}
                </h3>
                <p
                  className={`mt-2 font-body text-[15px] leading-relaxed sm:text-base ${
                    isLight ? "text-slate" : "text-sand/75"
                  }`}
                >
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200 + points.length * 90 + 100}>
          <p
            className={`mt-14 font-display text-2xl italic sm:text-3xl ${image ? "text-left" : "text-center"} ${
              isLight ? "text-gold" : "text-gold-light"
            }`}
          >
            {closing}
          </p>
        </Reveal>
        </div>

        {image && (
          <Reveal delay={240} className="lg:sticky lg:top-28">
            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-xl border shadow-2xl ${
                isLight ? "border-slate/10 shadow-midnight/10" : "border-mist/15 shadow-midnight/30"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 430px, 90vw"
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
