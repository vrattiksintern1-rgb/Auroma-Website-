"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

/**
 * BUILD-SPEC v3 §4 animation table — "Sticky CTA bar: fades in after hero
 * passes, mobile only." Shows once the hero section has scrolled out of view.
 */
export function StickyCtaBar({ cta }: { cta: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("section");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-mist/20 bg-midnight/95 px-5 py-3 backdrop-blur transition-all duration-300 ease-out sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <Button
        href="#form"
        variant="primary"
        className="w-full"
        onClick={() => trackEvent("hero_cta_click", { location: "sticky_bar" })}
      >
        {cta}
      </Button>
    </div>
  );
}
