import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { withAccent } from "@/components/ui/Accent";

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
}: {
  eyebrow?: string;
  headline: string;
  intro: string;
  points: Point[];
  closing: string;
  accent?: string;
  id?: string;
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";

  return (
    <section
      id={id}
      className={`scroll-mt-20 px-6 py-20 sm:px-8 sm:py-28 ${isLight ? "bg-sand-texture" : "bg-midnight-texture"}`}
    >
      <div className="mx-auto max-w-[760px]">
        <div className="text-center">
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
            <SectionDivider className="mt-7 sm:mt-8" />
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
            className={`mt-14 text-center font-display text-2xl italic sm:text-3xl ${
              isLight ? "text-gold" : "text-gold-light"
            }`}
          >
            {closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
