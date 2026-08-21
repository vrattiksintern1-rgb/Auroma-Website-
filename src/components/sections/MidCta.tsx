"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { trackEvent } from "@/lib/analytics";

export function MidCta({ headline, body, cta }: { headline: string; body: string; cta: string }) {
  return (
    <section className="bg-sand-texture px-6 py-20 text-center sm:px-8 sm:py-28">
      <Reveal>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-normal leading-[1.2] text-midnight sm:text-5xl">
          {headline}
        </h2>
      </Reveal>
      <Reveal delay={90}>
        <p className="mx-auto mt-4 max-w-md font-body text-[15px] text-slate sm:text-base">{body}</p>
      </Reveal>
      <Reveal delay={140}>
        <SectionDivider className="mt-6" />
      </Reveal>
      <Reveal delay={170}>
        <div className="mt-8">
          <Button
            href="#form"
            variant="outline-dark"
            onClick={() => trackEvent("mid_page_cta_click")}
          >
            {cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
