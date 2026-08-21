import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { architect } from "@/content/shared";
import { PENDING } from "@/content/pending";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function ArchitectSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-midnight shadow-2xl shadow-midnight/15 lg:max-w-none">
            {PENDING.architectPortraitUrl ? (
              <Image
                src={PENDING.architectPortraitUrl}
                alt={architect.name}
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-4 border border-gold/20">
                <svg viewBox="0 0 100 100" className="h-16 w-16 text-gold/70" aria-hidden="true">
                  <path
                    d="M50 15 L82 75 H18 Z M50 15 L67 75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-label text-[10px] tracking-[0.2em] uppercase text-mist/60">
                  Portrait arriving soon
                </span>
              </div>
            )}
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{architect.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-3 font-display text-3xl font-normal text-midnight sm:text-5xl lg:text-6xl">
              {architect.name}
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-2 font-label text-[13px] tracking-[0.02em] text-slate">{architect.role}</p>
          </Reveal>
          <Reveal delay={160}>
            <SectionDivider align="start" className="mt-6" />
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl font-body text-[15px] leading-relaxed text-slate sm:text-base">
              {architect.bio[0]}
              <em className="text-midnight">{architect.bioItalic}</em>
              {architect.bioContinued}
            </p>
          </Reveal>

          <dl className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {architect.credentials.map((c, i) => (
              <Reveal key={c.stat} delay={260 + i * 60}>
                <div className="card-lift h-full rounded-xl border border-gold/25 bg-white p-6 shadow-xl shadow-midnight/5 hover:border-gold/50 hover:shadow-2xl hover:shadow-midnight/10">
                  <dt className="font-display text-xl text-gold sm:text-2xl">{c.stat}</dt>
                  <dd className="mt-1 font-body text-[14px] leading-snug text-slate sm:text-[15px]">
                    {c.detail}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={260 + architect.credentials.length * 60 + 100}>
            <p className="mt-10 font-display text-2xl italic text-midnight sm:text-3xl">{architect.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
