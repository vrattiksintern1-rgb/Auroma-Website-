"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { IconMenu, IconClose } from "@/components/ui/icons";
import { trackEvent } from "@/lib/analytics";

// Sticky nav — investor-page-specific deviation from BUILD-SPEC v3 §2.2
// ("no header nav"), requested directly for this build. Anchors to
// in-page sections only; the CTA button remains the sole outbound link.
const navLinks = [
  { label: "The Villa", href: "#gallery" },
  { label: "The Architect", href: "#architect" },
  { label: "Location", href: "#location" },
  { label: "Plans", href: "#plans" },
  { label: "Pricing", href: "#pricing" },
];

const navLinkClasses =
  "font-label text-[15px] font-light tracking-[0.08em] text-paper border-b border-transparent " +
  "pb-1 transition-colors duration-200 hover:text-gold-light hover:border-gold-light";

export function SiteHeader({ cta }: { cta: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const heroHeight = () => document.querySelector("main")?.querySelector("section")?.clientHeight ?? window.innerHeight;
    const onScroll = () => setScrolled(window.scrollY > heroHeight() - 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[rgba(28,43,53,0.92)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-3.5">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Auroma Holiday Villas — back to top">
          <Image
            src="/images/logo/logo-current.png"
            alt="Auroma Holiday Villas"
            width={4192}
            height={1671}
            sizes="190px"
            className="h-auto w-[150px] object-contain sm:w-[190px]"
            priority
          />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={navLinkClasses}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <div className="hidden sm:block">
            <Button
              href="#form"
              variant="primary"
              className="!px-5 !py-2.5 text-[13px] sm:!px-7 sm:!py-3 sm:text-[14px]"
              onClick={() => trackEvent("hero_cta_click", { location: "header" })}
            >
              {cta}
            </Button>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-paper lg:hidden"
          >
            {menuOpen ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-white/10 bg-[rgba(28,43,53,0.97)] backdrop-blur-md transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          menuOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
        }`}
      >
        <nav aria-label="Mobile" className="min-h-0">
          <ul className="flex flex-col px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 font-label text-[15px] font-light tracking-[0.08em] text-paper transition-colors hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
