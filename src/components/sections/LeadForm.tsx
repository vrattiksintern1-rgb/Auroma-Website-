"use client";

import { useRef, useState, type ComponentType, type FormEvent, type SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconBadge } from "@/components/ui/Card";
import { IconChat, IconPin, IconKey } from "@/components/ui/icons";
import { confirmationCopy, faqShared } from "@/content/shared";
import { submitLead } from "@/lib/leadService";
import { trackEvent } from "@/lib/analytics";
import { investmentRangeOptions } from "@/content/types";
import type { LeadFormData, PageVariant } from "@/content/types";

type Stage = "form" | "done";

const inputClasses =
  "rounded-lg border border-slate/20 bg-sand/30 px-4 py-3 font-body text-[15px] text-midnight " +
  "placeholder:text-slate/40 focus:border-gold focus:bg-white focus:outline-none";

const labelClasses = "block font-label text-[11px] tracking-[0.16em] uppercase text-slate mb-2";

export function LeadForm({
  variant,
  headline,
  body,
}: {
  variant: PageVariant;
  headline: string;
  body: string;
}) {
  const [stage, setStage] = useState<Stage>("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const startedTracking = useRef(false);

  const onFirstFocus = () => {
    if (!startedTracking.current) {
      startedTracking.current = true;
      trackEvent("form_start", { variant });
    }
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);

    const fullName = String(form.get("fullName") || "").trim();
    const whatsappDigits = String(form.get("whatsappNumber") || "").replace(/[\s-]/g, "");
    const city = String(form.get("city") || "").trim();
    const investmentRange = String(form.get("investmentRange") || "").trim();
    const consent = form.get("consent") === "on";

    if (fullName.length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^\d{10}$/.test(whatsappDigits)) {
      setError("Please enter a 10-digit WhatsApp number.");
      return;
    }
    if (city.length < 2) {
      setError("Please enter your city.");
      return;
    }
    if (!investmentRange) {
      setError("Please select an investment range.");
      return;
    }
    if (!consent) {
      setError("Please confirm you'd like the brochure on WhatsApp — this box can't be pre-ticked.");
      return;
    }

    const data: LeadFormData = {
      fullName,
      whatsappNumber: `+91${whatsappDigits}`,
      city,
      investmentRange: investmentRange as LeadFormData["investmentRange"],
      consent,
    };

    setSubmitting(true);
    try {
      await submitLead(data, variant);
      trackEvent("lead", { variant });
      setStage("done");
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="form" className="scroll-mt-20 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="gold-light">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-4xl">
                {headline}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <SectionDivider align="start" className="mt-6" />
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md font-body text-[14.5px] leading-relaxed text-sand/80 sm:text-[15px]">
                {body.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal delay={200}>
                <InfoCard icon={IconChat} title="On WhatsApp" body={confirmationCopy.body} />
              </Reveal>
              <Reveal delay={250}>
                <InfoCard icon={IconPin} title="Location" body="Near Auroville, Pondicherry" />
              </Reveal>
              <Reveal delay={300}>
                <InfoCard icon={IconKey} title="Availability" body={faqShared.howManyAvailable.a} />
              </Reveal>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-2xl shadow-black/20 sm:p-10 lg:self-start">
            {stage === "form" && (
              <Reveal delay={100}>
                <form onSubmit={handleSubmit} onFocus={onFirstFocus} noValidate className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className={labelClasses}>
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      minLength={2}
                      autoComplete="name"
                      className={`${inputClasses} w-full`}
                    />
                  </div>

                  <div>
                    <label htmlFor="whatsappNumber" className={labelClasses}>
                      WhatsApp number *
                    </label>
                    <div className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className={`${inputClasses} flex w-16 shrink-0 items-center justify-center bg-sand/50 text-slate`}
                      >
                        +91
                      </span>
                      <input
                        id="whatsappNumber"
                        name="whatsappNumber"
                        type="tel"
                        inputMode="tel"
                        required
                        pattern="[0-9\s-]{10,14}"
                        maxLength={14}
                        autoComplete="tel-national"
                        placeholder="10-digit number"
                        className={`${inputClasses} min-w-0 flex-1`}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClasses}>
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      required
                      minLength={2}
                      autoComplete="address-level2"
                      className={`${inputClasses} w-full`}
                    />
                  </div>

                  <div>
                    <label htmlFor="investmentRange" className={labelClasses}>
                      Investment range *
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      required
                      defaultValue=""
                      className={`${inputClasses} w-full`}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {investmentRangeOptions.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      className="mt-1 h-4 w-4 shrink-0 border-slate/40 accent-[#B8922A]"
                    />
                    <span className="font-body text-[13px] leading-relaxed text-slate">
                      Send me the brochure and project updates on WhatsApp.
                    </span>
                  </label>

                  {error && <p className="font-body text-[13px] text-[#8A3324]">{error}</p>}

                  <Button type="submit" disabled={submitting} className="w-full">
                    {submitting ? "Sending…" : confirmationCopy.submitCta}
                  </Button>

                  <p className="text-center font-body text-[12px] text-slate/60">
                    <a href="/privacy" className="underline decoration-slate/30 underline-offset-4 hover:text-gold">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </Reveal>
            )}

            {stage === "done" && (
              <Reveal>
                <h2 className="font-display text-3xl font-normal text-midnight sm:text-4xl">
                  {confirmationCopy.headline}
                </h2>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
                  {confirmationCopy.body}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}) {
  return (
    <div className="card-lift flex items-start gap-4 rounded-xl border border-mist/15 bg-white/[0.03] p-6 transition-colors hover:border-gold-light/30 hover:bg-white/[0.06]">
      <IconBadge tone="gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </IconBadge>
      <div>
        <h3 className="font-label text-[11px] tracking-[0.14em] uppercase text-gold-light">{title}</h3>
        <p className="mt-1.5 font-body text-[13.5px] leading-relaxed text-sand/85">{body}</p>
      </div>
    </div>
  );
}
