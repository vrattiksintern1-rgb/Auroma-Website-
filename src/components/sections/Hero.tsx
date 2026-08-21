"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { withAccent } from "@/components/ui/Accent";
import { trackEvent } from "@/lib/analytics";
import type { villaImages } from "@/content/shared";

interface HeroProps {
  kicker: string;
  headline: string;
  body: string;
  cta: string;
  scarcity: string;
  image: (typeof villaImages)["elevation"];
  accent?: string;
}

export function Hero({ kicker, headline, body, cta, scarcity, image, accent }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const step = () =>
    `transition-all duration-[900ms] ease-out ${
      mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;
  const delay = (ms: number) => ({ transitionDelay: mounted ? `${ms}ms` : "0ms" });

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-midnight sm:min-h-[100svh]">
      <div
        className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-midnight/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <div className="max-w-3xl">
          <div className={step()} style={delay(150)}>
            <span className="inline-flex items-center rounded-full border border-mist/40 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <Eyebrow tone="gold-light">{kicker}</Eyebrow>
            </span>
          </div>

          <h1
            className={`mt-6 font-display text-[1.9rem] font-normal leading-[1.05] text-paper sm:text-5xl lg:text-6xl ${step()}`}
            style={delay(320)}
          >
            {headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {accent ? withAccent(line, accent) : line}
              </span>
            ))}
          </h1>

          <p
            className={`mt-7 max-w-xl font-body text-[13px] leading-relaxed text-sand/90 sm:text-base ${step()}`}
            style={delay(500)}
          >
            {body}
          </p>

          <p
            className={`mt-4 flex items-center gap-2 font-label text-[13px] text-mist ${step()}`}
            style={delay(600)}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-gold-light" fill="none" aria-hidden="true">
              <path
                d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            Near Auroville, Pondicherry
          </p>

          <div className={`mt-9 flex flex-wrap items-center gap-4 ${step()}`} style={delay(680)}>
            <Button href="#form" onClick={() => trackEvent("hero_cta_click", { location: "hero" })}>
              {cta}
            </Button>
          </div>

          <p className={`mt-6 font-label text-[12px] tracking-[0.06em] text-mist ${step()}`} style={delay(820)}>
            {scarcity}
          </p>
        </div>
      </div>
    </section>
  );
}
