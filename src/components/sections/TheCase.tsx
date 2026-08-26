import { Reveal } from "@/components/ui/Reveal";

/**
 * BUILD-SPEC v3 §5.3 — replaces the old Dilemma + Answer pair with one short
 * beat. Deliberately not a full screen: text only, generous vertical space,
 * no sub-heads, numbering, icons or dividers.
 */
export function TheCase({ lines, closing }: { lines: string[]; closing: string }) {
  return (
    <section className="bg-midnight-texture px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[640px] text-center">
        {lines.map((line, i) => (
          <Reveal key={line} delay={i * 90}>
            <p className="mt-5 font-display text-xl font-normal leading-relaxed text-paper first:mt-0 sm:text-2xl">
              {line.split("\n").map((segment, j) => (
                <span key={j} className="block">
                  {segment}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
        <Reveal delay={lines.length * 90 + 60}>
          <p className="mt-8 font-display text-2xl italic text-gold-light sm:text-3xl">{closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
