"use client";

import { useEffect, useState } from "react";
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

function HeaderLogo() {
  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 86 72"
        className="h-10 w-12 shrink-0 text-gold-light sm:h-11 sm:w-14"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 64 36 15c3.1-5.7 11.2-5.7 14.4 0L78 64"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.8 34.5 28.4 58.2c-1.6 2.8.4 6.3 3.7 6.3h26"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="flex flex-col justify-center leading-none">
        <span className="font-display text-xl font-normal tracking-[0.05em] text-paper antialiased sm:text-2xl">
          AUROMA
        </span>
        <span className="mt-1 font-label text-[10px] font-medium uppercase tracking-[0.34em] text-gold-light antialiased sm:text-xs">
          HOLIDAY VILLAS
        </span>
      </span>
    </span>
  );
}

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
    <header className="fixed inset-x-0 top-0 z-50 overflow-visible bg-midnight">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 pr-7 sm:px-8 sm:py-3.5 sm:pr-10 xl:pr-12">
        <a
          href="#top"
          className="flex h-12 w-48 shrink-0 items-center justify-start sm:h-14 sm:w-56"
          aria-label="Auroma Holiday Villas — back to top"
        >
          <HeaderLogo />
        </a>

        <div className="hidden min-w-0 flex-wrap items-center justify-end gap-5 xl:flex 2xl:gap-8">
          <nav className="flex min-w-0 flex-wrap items-center justify-end gap-x-6 gap-y-2 2xl:gap-x-8" aria-label="Section navigation">
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
            className="shrink-0 !px-7 !py-3.5 text-[15px] 2xl:!px-8 2xl:!py-4"
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-mist/40 text-paper xl:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-midnight xl:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex h-12 w-48 items-center justify-start">
              <HeaderLogo />
            </div>
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
