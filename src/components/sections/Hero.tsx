"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { trackEvent } from "@/lib/analytics";
import type { ImageAsset } from "@/content/types";

interface HeroProps {
  kicker: string;
  line1: string;
  line2: string;
  body: string;
  priceLine: string;
  cta: string;
  image: ImageAsset;
}

export function Hero({ kicker, line1, line2, body, priceLine, cta, image }: HeroProps) {
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
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className={`object-cover transition-transform duration-[20000ms] ease-out ${
            mounted ? "scale-[1.06]" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(28,43,53,0.18)_0%,rgba(28,43,53,0.62)_55%,rgba(28,43,53,0.85)_100%)] sm:bg-[linear-gradient(to_right,rgba(28,43,53,0.82)_0%,rgba(28,43,53,0.62)_45%,rgba(28,43,53,0.18)_100%)]" />
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
            <span className="block">{line1}</span>
            <span className="block italic text-gold-light">{line2}</span>
          </h1>

          <p
            className={`mt-7 max-w-xl font-body text-[13px] leading-relaxed text-sand/90 sm:text-base ${step()}`}
            style={delay(500)}
          >
            {body.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>

          <p
            className={`mt-6 font-label text-[26px] font-normal tracking-[0.04em] text-gold-light sm:text-[32px] ${step()}`}
            style={delay(600)}
          >
            {priceLine}
          </p>

          <div className={`mt-9 flex flex-wrap items-center gap-4 ${step()}`} style={delay(680)}>
            <Button href="#form" onClick={() => trackEvent("hero_cta_click", { location: "hero" })}>
              {cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
