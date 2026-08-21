"use client";

import { trackEvent } from "@/lib/analytics";

/**
 * Single floating WhatsApp button, bottom-right. Resolves to the form for
 * now — there is no direct WhatsApp chat link yet (see lib/whatsapp.ts),
 * so it does not pretend to open one.
 */
export function FloatingActions() {
  const go = (label: string) => {
    trackEvent("hero_cta_click", { location: `floating_${label}` });
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={() => go("whatsapp")}
        aria-label="Enquire on WhatsApp"
        title="Enquire on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:h-14 sm:w-14"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.39 1.3-1.92 1.35-.49.05-1.02.24-3.43-.72-2.9-1.16-4.76-4.1-4.9-4.29-.14-.19-1.17-1.56-1.17-2.97 0-1.41.74-2.1 1-2.39.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.19.68-.79.86-1.06.19-.28.37-.23.62-.14.26.09 1.63.77 1.9.91.28.14.46.21.53.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </button>
    </div>
  );
}
