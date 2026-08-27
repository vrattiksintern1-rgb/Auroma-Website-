import { Reveal } from "@/components/ui/Reveal";

/**
 * CHANGE-ORDER-03 §1 — replaces the old rental-yield framing with a short,
 * text-only beat. Deliberately not a full screen: no sub-heads, numbering,
 * icons or dividers. The closing line is a promise Designed for Hosting
 * (the section immediately after) has to keep.
 */
export function TheCase({
  headline,
  body,
  closing,
  id,
}: {
  headline: string;
  body: string;
  closing: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[640px] text-center">
        <Reveal>
          <p className="font-display text-xl font-normal leading-relaxed text-paper sm:text-2xl">{headline}</p>
        </Reveal>
        <Reveal delay={90}>
          <p className="mt-5 font-body text-[15px] leading-relaxed text-paper sm:text-base">
            {body.split("\n").map((segment, j) => (
              <span key={j} className="block">
                {segment}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 font-display text-2xl italic text-gold-light sm:text-3xl">{closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
