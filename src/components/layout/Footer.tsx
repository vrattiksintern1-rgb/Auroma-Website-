"use client";

import Image from "next/image";
import { PENDING } from "@/content/pending";
import { buttonClasses } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

// BUILD-SPEC v3 §5.14 — content and structure copied verbatim.
const WHATSAPP_URL =
  "https://wa.me/919176229955?text=Hi%2C%20I%27d%20like%20the%20Auroma%20Holiday%20Villas%20brochure.";

export function Footer() {
  return (
    <footer className="bg-midnight-texture px-6 py-14 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        <Image
          src="/images/logo/logo-current.png"
          alt="Auroma Holiday Villas"
          width={4192}
          height={1671}
          sizes="140px"
          className="h-8 w-auto object-contain"
        />

        <div className="space-y-1.5 font-body text-[14px] leading-relaxed text-mist/80">
          <p>
            <a href="tel:+919176229955" className="transition-colors duration-300 hover:text-gold-light">
              +91 91762 29955
            </a>
          </p>
          {PENDING.reachUsEmail && (
            <p>
              <a
                href={`mailto:${PENDING.reachUsEmail}`}
                className="transition-colors duration-300 hover:text-gold-light"
              >
                {PENDING.reachUsEmail}
              </a>
            </p>
          )}
          <p>Near Auroville, Pondicherry</p>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_open", { location: "footer" })}
          className={buttonClasses("outline-light")}
        >
          WhatsApp
        </a>

        <a
          href="/privacy"
          className="font-body text-[13.5px] text-mist/70 underline decoration-mist/30 underline-offset-4 transition-colors duration-300 hover:text-gold-light"
        >
          Privacy Policy
        </a>

        <p className="max-w-[46ch] font-body text-[11.5px] leading-relaxed text-mist/60">
          Images and renders are artistic representations for illustrative purposes. Design,
          specification and dimensions are indicative and subject to change and statutory
          approvals.
        </p>
      </div>
    </footer>
  );
}
