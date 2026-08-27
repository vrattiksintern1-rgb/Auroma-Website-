import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyCtaBar } from "@/components/layout/StickyCtaBar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { TheCase } from "@/components/sections/TheCase";
import { HostingSection } from "@/components/sections/HostingSection";
import { MidCta } from "@/components/sections/MidCta";
import { ArchitectSection } from "@/components/sections/ArchitectSection";
import { VillaGallery } from "@/components/sections/VillaGallery";
import { LocationSection } from "@/components/sections/LocationSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LeadForm } from "@/components/sections/LeadForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { AnalyticsBoot } from "@/components/AnalyticsBoot";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { lpB } from "@/content/lp-b";
import {
  credibilityItems,
  villaImages,
  galleryKicker,
  gallerySupportInvestor,
  faqShared,
} from "@/content/shared";

// Investor landing page (BUILD-SPEC v3.0). Noindex, nofollow: paid traffic
// only, per §2.4. Excluded from sitemap.xml (see app/sitemap.ts).
export const metadata: Metadata = {
  title: lpB.meta.title,
  description: lpB.meta.description,
  robots: { index: false, follow: false },
};

const faqItems = [
  lpB.faq[0],
  lpB.faq[1],
  lpB.faq[2],
  lpB.faq[3],
  { q: faqShared.isPartOfAuroville.q, a: faqShared.isPartOfAuroville.aInvestor },
  lpB.faq[4],
  { q: faqShared.howManyAvailable.q, a: faqShared.howManyAvailable.a },
];

export default function HomePage() {
  return (
    <>
      <AnalyticsBoot />
      <SiteHeader cta={lpB.hero.cta} />
      <StickyCtaBar cta={lpB.hero.cta} />
      <FloatingActions />

      <main id="top">
        <Hero
          kicker={lpB.hero.kicker}
          line1={lpB.hero.line1}
          line2={lpB.hero.line2}
          body={lpB.hero.body}
          priceLine={lpB.hero.priceLine}
          cta={lpB.hero.cta}
          image={villaImages.exteriorFront}
        />
        <CredibilityStrip items={credibilityItems.investor} />
        <TheCase
          id="the-case"
          headline={lpB.theCase.headline}
          body={lpB.theCase.body}
          closing={lpB.theCase.closing}
        />
        <HostingSection
          id="designed-for-hosting"
          kicker={lpB.hosting.kicker}
          headline={lpB.hosting.headline}
          points={[...lpB.hosting.points]}
        />
        <MidCta headline={lpB.midCta.headline} body={lpB.midCta.body} cta={lpB.midCta.cta} />
        <ArchitectSection id="architect" />
        <VillaGallery id="gallery" kicker={galleryKicker} support={gallerySupportInvestor} />
        <LocationSection id="location" comeForLabel="What your guests will come for" />
        <PlansSection id="plans" />
        <PricingSection
          id="pricing"
          kicker={lpB.pricing.kicker}
          headlinePrefix={lpB.pricing.headlinePrefix}
          exclusions={lpB.pricing.exclusions}
          revision={lpB.pricing.revision}
          cta={lpB.pricing.cta}
        />
        <LeadForm variant="investor" headline={lpB.form.headline} body={lpB.form.body} />
        <FaqSection items={faqItems} />
      </main>

      <Footer />
    </>
  );
}
