"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#architect", label: "Architect" },
  { href: "#gallery", label: "Gallery" },
  { href: "#plans", label: "Plans" },
  { href: "#location", label: "Location" },
  { href: "#form", label: "Contact" },
];

export function SiteHeader({ cta }: { cta: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-midnight">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-3.5">
        <a href="#top" className="shrink-0" aria-label="Auroma Holiday Villas — back to top">
          <Image
            src="/images/logo/logo-lockup-gold.png"
            alt="Auroma Holiday Villas"
            width={321}
            height={330}
            className="h-14 w-14 object-contain object-left sm:h-18 sm:w-18 lg:h-20 lg:w-20"
            priority
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-10" aria-label="Section navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-[16px] font-medium tracking-[0.02em] text-paper transition-colors hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Button
            href="#form"
            variant="primary"
            className="!px-8 !py-4 text-[15px] shrink-0"
            onClick={() => trackEvent("hero_cta_click", { location: "header" })}
          >
            {cta}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/40 text-paper lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-midnight lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <Image
              src="/images/logo/logo-lockup-gold.png"
              alt="Auroma Holiday Villas"
              width={321}
              height={330}
              className="h-12 w-12 object-contain object-left"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/40 text-paper"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col items-center gap-7 px-6" aria-label="Section navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-2xl text-paper hover:text-gold-light"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#form"
              variant="primary"
              className="mt-4 w-full max-w-xs"
              onClick={() => {
                setMenuOpen(false);
                trackEvent("hero_cta_click", { location: "mobile_menu" });
              }}
            >
              {cta}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
