"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

// BUILD-SPEC v3 §2.2 — no header nav. The only outbound links permitted
// anywhere on the page are the WhatsApp CTA, tel:, mailto: and privacy
// policy, so this header carries only the logo and the single CTA.
export function SiteHeader({ cta }: { cta: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-midnight">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Auroma Holiday Villas — back to top">
          <Image
            src="/images/logo/logo-current.png"
            alt="Auroma Holiday Villas"
            width={4192}
            height={1671}
            sizes="160px"
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <Button
          href="#form"
          variant="primary"
          className="shrink-0 !px-5 !py-2.5 text-[13px] sm:!px-7 sm:!py-3 sm:text-[14px]"
          onClick={() => trackEvent("hero_cta_click", { location: "header" })}
        >
          {cta}
        </Button>
      </div>
    </header>
  );
}
