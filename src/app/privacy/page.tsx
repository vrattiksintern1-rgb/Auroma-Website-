import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Auroma Holiday Villas",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 sm:py-28">
      <h1 className="font-display text-3xl text-midnight sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 font-label text-[12px] tracking-[0.1em] uppercase text-mist">
        Auroma Holiday Villas
      </p>

      <div className="mt-10 space-y-6 font-body text-[15px] leading-relaxed text-slate">
        <p>
          When you submit the brochure request form on this site, we collect your full name,
          WhatsApp number, city, and the investment range you select.
        </p>
        <p>
          This information is used only to send you the Auroma Holiday Villas brochure, respond to
          your enquiry on WhatsApp, and share relevant project updates. We do not sell your
          information to third parties.
        </p>
        <p>
          We process this data on the basis of the consent you give when you tick the checkbox on
          the form. You can withdraw that consent at any time by messaging us on WhatsApp and
          asking us to stop.
        </p>
        <p>
          We record the timestamp of your consent and the page you submitted it from, as required
          under India&rsquo;s Digital Personal Data Protection Act.
        </p>
        <p>
          For any question about your data, or to request that it be deleted, contact us on
          WhatsApp using the number provided on the brochure.
        </p>
      </div>
    </main>
  );
}
