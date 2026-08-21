"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsBoot() {
  const fired = useRef({ 50: false, 90: false });

  useEffect(() => {
    trackEvent("page_view");

    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = (window.scrollY + window.innerHeight) / doc.scrollHeight;
      if (scrolled >= 0.5 && !fired.current[50]) {
        fired.current[50] = true;
        trackEvent("scroll_50");
      }
      if (scrolled >= 0.9 && !fired.current[90]) {
        fired.current[90] = true;
        trackEvent("scroll_90");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
