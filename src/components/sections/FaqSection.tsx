"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

export function FaqSection({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-normal text-midnight sm:text-5xl">Questions, answered.</h2>
        </Reveal>
        <Reveal delay={80}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <div className="mt-12 space-y-4 text-left sm:mt-14">
          {items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal key={item.q} delay={100 + i * 50}>
                <div
                  className={`rounded-xl border bg-white px-6 shadow-lg shadow-midnight/5 transition-all duration-300 sm:px-7 ${
                    isOpen ? "border-gold/40 shadow-2xl shadow-midnight/10" : "border-slate/10 hover:border-gold/30 hover:shadow-xl hover:shadow-midnight/10"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left font-body text-[15px] font-bold text-midnight transition-colors hover:text-gold sm:text-base"
                    >
                      <span>{item.q}</span>
                      <span className="shrink-0 font-label text-lg text-gold" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    className={`grid overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="min-h-0 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
