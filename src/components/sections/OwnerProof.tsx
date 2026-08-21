import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { testimonials } from "@/content/shared";
import { PENDING } from "@/content/pending";

export function OwnerProof({ headline }: { headline: string }) {
  return (
    <section className="bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[900px] text-center">
        <Reveal>
          <Eyebrow tone="slate">Owner Proof</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.2] text-midnight sm:text-5xl lg:text-6xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        {PENDING.testimonialConsent ? (
          <div className="mt-14 space-y-7 text-left sm:mt-16">
            {testimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={180 + i * 100}>
                <blockquote className="card-lift rounded-xl border border-slate/10 bg-white p-8 shadow-xl shadow-midnight/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10 sm:p-10">
                  <p className="font-display text-xl italic leading-relaxed text-midnight sm:text-2xl">
                    “{t.quote}”
                  </p>
                  <footer className="mt-4 font-label text-[12px] tracking-[0.06em] uppercase text-slate">
                    — {t.attribution}, {t.role}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={180}>
            <div className="mt-14 rounded-xl border border-slate/10 bg-white px-8 py-12 shadow-xl shadow-midnight/5 sm:mt-16">
              <p className="font-body text-[14px] text-slate">
                Owner voices are on their way — published here once written consent is on file.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
