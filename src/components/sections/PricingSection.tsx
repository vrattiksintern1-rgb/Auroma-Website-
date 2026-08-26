"use client";

import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { PENDING } from "@/content/pending";
import { trackEvent } from "@/lib/analytics";

export function PricingSection({
  kicker,
  headlinePrefix,
  exclusions,
  revision,
  cta,
  id,
}: {
  kicker: string;
  headlinePrefix: string;
  exclusions: string;
  revision: string;
  cta: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-20 text-center sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl">
        <Reveal>
          <Eyebrow tone="gold-light">{kicker}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          {PENDING.priceFrom ? (
            <h2 className="mt-5 font-display text-4xl font-normal text-paper sm:text-6xl">
              {headlinePrefix}
              {PENDING.priceFrom}.
            </h2>
          ) : (
            <h2 className="mt-5 font-display text-3xl font-normal leading-tight text-paper sm:text-5xl">
              Price shared on request.
            </h2>
          )}
        </Reveal>

        <Reveal delay={120}>
          <SectionDivider className="mt-6" />
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 font-body text-[14px] leading-relaxed text-mist sm:text-[15px]">{exclusions}</p>
          <p className="mt-2 font-body text-[14px] leading-relaxed text-mist sm:text-[15px]">{revision}</p>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10">
            <Button href="#form" onClick={() => trackEvent("pricing_cta_click")}>
              {cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
