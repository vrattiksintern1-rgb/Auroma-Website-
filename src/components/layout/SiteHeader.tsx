"use client";

import Image from "next/image";
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
    <Image
      src="/images/logo/logo-current.png"
      alt="Auroma Holiday Villas"
      width={4192}
      height={1671}
      sizes="(min-width: 640px) 215px, 190px"
      className="h-14 w-auto shrink-0 object-contain sm:h-16"
      priority
    />
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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3.5 pr-7 sm:px-8 sm:py-4 sm:pr-10 xl:pr-12">
        <a
          href="#top"
          className="flex h-14 min-w-max shrink-0 items-center justify-start overflow-visible sm:h-16"
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
          <div className="flex items-center justify-between px-5 py-3.5">
            <div className="flex h-14 min-w-max items-center justify-start overflow-visible sm:h-16">
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
