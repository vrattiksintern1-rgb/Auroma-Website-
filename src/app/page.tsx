import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { TensionSection } from "@/components/sections/TensionSection";
import { HostingSection } from "@/components/sections/HostingSection";
import { MidCta } from "@/components/sections/MidCta";
import { ArchitectSection } from "@/components/sections/ArchitectSection";
import { VillaGallery } from "@/components/sections/VillaGallery";
import { LocationSection } from "@/components/sections/LocationSection";
import { PlansSection } from "@/components/sections/PlansSection";
import { OwnerProof } from "@/components/sections/OwnerProof";
import { PricingSection } from "@/components/sections/PricingSection";
import { LeadForm } from "@/components/sections/LeadForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { AnalyticsBoot } from "@/components/AnalyticsBoot";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { lpB } from "@/content/lp-b";
import {
  credibilityItems,
  villaImages,
  galleryHeadline,
  gallerySupportInvestor,
  faqShared,
} from "@/content/shared";

// LP-B — Airbnb & Rental Investors (content spec section 03). Noindex,
// nofollow: paid traffic only, per the spec's technical setup guardrail.
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
      <FloatingActions />

      <main id="top">
        <Hero
          kicker={lpB.hero.kicker}
          headline={lpB.hero.headline}
          body={lpB.hero.body}
          cta={lpB.hero.cta}
          scarcity={lpB.hero.scarcity}
          image={villaImages.elevation}
          accent="you love."
        />
        <CredibilityStrip items={credibilityItems.investor} />
        <TensionSection
          headline={lpB.dilemma.headline}
          intro={lpB.dilemma.intro}
          points={[...lpB.dilemma.points]}
          closing={lpB.dilemma.closing}
          accent="a return."
          tone="light"
        />
        <TensionSection
          id="about"
          headline={lpB.answer.headline}
          intro={lpB.answer.intro}
          points={[...lpB.answer.points]}
          closing={lpB.answer.closing}
          accent="Auroma Holiday Villas."
        />
        <HostingSection
          id="amenities"
          kicker={lpB.hosting.kicker}
          headline={lpB.hosting.headline}
          points={[...lpB.hosting.points]}
        />
        <MidCta headline={lpB.midCta.headline} body={lpB.midCta.body} cta={lpB.midCta.cta} />
        <ArchitectSection id="architect" />
        <VillaGallery id="gallery" headline={galleryHeadline} support={gallerySupportInvestor} />
        <LocationSection id="location" comeForLabel="What your guests will come for" />
        <PlansSection id="plans" />
        <OwnerProof headline="The strongest thing an owner can say is that they bought again." />
        <PricingSection
          kicker={lpB.pricing.kicker}
          headlinePrefix={lpB.pricing.headlinePrefix}
          exclusions={lpB.pricing.exclusions}
          revision={lpB.pricing.revision}
          cta={lpB.pricing.cta}
        />
        <LeadForm variant="investor" headline={lpB.form.headline} body={lpB.form.body} />
        <FaqSection items={faqItems} />
      </main>

      <Footer description={lpB.hero.body} />
    </>
  );
}
