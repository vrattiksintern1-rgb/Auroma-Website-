"use client";

import { useRef, useState, type ComponentType, type SubmitEvent, type SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconBadge } from "@/components/ui/Card";
import { IconChat, IconPin, IconKey } from "@/components/ui/icons";
import { confirmationCopy, faqShared } from "@/content/shared";
import { submitStep1, submitStep2 } from "@/lib/leadService";
import { trackEvent } from "@/lib/analytics";
import type { PageVariant, Step1Data, Step2Data } from "@/content/types";

type Stage = "form" | "qualify" | "done";

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
  const [leadId, setLeadId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const startedTracking = useRef(false);

  const onFirstFocus = () => {
    if (!startedTracking.current) {
      startedTracking.current = true;
      trackEvent("form_start", { variant });
    }
  };

  async function handleStep1(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = new FormData(e.currentTarget);

    const data: Step1Data = {
      fullName: String(form.get("fullName") || "").trim(),
      countryCode: String(form.get("countryCode") || "+91"),
      whatsappNumber: String(form.get("whatsappNumber") || "").trim(),
      email: String(form.get("email") || "").trim(),
      consent: form.get("consent") === "on",
    };

    if (!data.consent) {
      setError("Please confirm you'd like the brochure on WhatsApp — this box can't be pre-ticked.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitStep1(data, variant);
      setLeadId(res.leadId);
      setName(data.fullName.split(" ")[0] || data.fullName);
      trackEvent("lead", { variant });
      setStage("qualify");
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleStep2(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!leadId) return;
    setError(null);
    const form = new FormData(e.currentTarget);

    const data: Step2Data = {
      lookingTo: (form.get("lookingTo") as Step2Data["lookingTo"]) || "",
      budgetRange: String(form.get("budgetRange") || "").trim(),
      timeline: (form.get("timeline") as Step2Data["timeline"]) || "",
      aurovilleVisited: (form.get("aurovilleVisited") as Step2Data["aurovilleVisited"]) || "",
      city: String(form.get("city") || "").trim(),
    };

    setSubmitting(true);
    try {
      await submitStep2(leadId, data);
      trackEvent("qualified_lead", { variant });
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
                {body}
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
                <form onSubmit={handleStep1} onFocus={onFirstFocus} noValidate className="space-y-6">
                <div>
                  <label htmlFor="fullName" className={labelClasses}>
                    Full name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    autoComplete="name"
                    className={`${inputClasses} w-full`}
                  />
                </div>

                <div>
                  <label htmlFor="whatsappNumber" className={labelClasses}>
                    WhatsApp number *
                  </label>
                  <div className="flex gap-3">
                    <input
                      name="countryCode"
                      defaultValue="+91"
                      aria-label="Country code"
                      className={`${inputClasses} w-16 shrink-0`}
                    />
                    <input
                      id="whatsappNumber"
                      name="whatsappNumber"
                      type="tel"
                      inputMode="tel"
                      required
                      autoComplete="tel-national"
                      className={`${inputClasses} min-w-0 flex-1`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={`${inputClasses} w-full`}
                  />
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
                  {submitting ? "Sending…" : confirmationCopy.step1Cta}
                </Button>
              </form>
            </Reveal>
          )}

        {stage === "qualify" && (
          <Reveal>
            <h2 className="font-display text-3xl font-normal text-midnight sm:text-4xl">
              {confirmationCopy.headline}
            </h2>
            <p className="mt-3 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">
              {confirmationCopy.body}
            </p>
            <p className="mt-2 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">
              {confirmationCopy.bridge}
            </p>

            <form onSubmit={handleStep2} className="mt-10 space-y-8">
              <RadioGroup
                name="lookingTo"
                legend="Are you looking to"
                options={[
                  { value: "let-it-out", label: "Let it out" },
                  { value: "use-it-myself", label: "Use it myself" },
                  { value: "both", label: "Both" },
                ]}
              />

              <div>
                <label htmlFor="budgetRange" className={labelClasses}>
                  Budget range (optional)
                </label>
                <input
                  id="budgetRange"
                  name="budgetRange"
                  placeholder="Any range in mind"
                  className={`${inputClasses} w-full`}
                />
                <p className="mt-1.5 font-body text-[12px] text-slate/60">
                  Exact bands will follow once pricing is confirmed.
                </p>
              </div>

              <RadioGroup
                name="timeline"
                legend="Timeline"
                options={[
                  { value: "within-3-months", label: "Within 3 months" },
                  { value: "3-6-months", label: "3–6 months" },
                  { value: "6-12-months", label: "6–12 months" },
                  { value: "exploring", label: "Exploring" },
                ]}
              />

              <RadioGroup
                name="aurovilleVisited"
                legend="Have you been to Auroville?"
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "no", label: "No" },
                  { value: "often", label: "Often" },
                ]}
              />

              <div>
                <label htmlFor="city" className={labelClasses}>
                  City you&apos;re based in
                </label>
                <input id="city" name="city" className={`${inputClasses} w-full`} />
              </div>

              {error && <p className="font-body text-[13px] text-[#8A3324]">{error}</p>}

              <Button type="submit" disabled={submitting} className="w-full">
                {submitting ? "Sending…" : confirmationCopy.step2Cta}
              </Button>
            </form>
          </Reveal>
        )}

        {stage === "done" && (
          <Reveal>
            <h2 className="font-display text-3xl font-normal text-midnight sm:text-4xl">
              {confirmationCopy.doneHeadline}
            </h2>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-slate">
              {name ? `${name}, w` : "W"}
              {confirmationCopy.doneBody.slice(1)}
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

function RadioGroup({
  name,
  legend,
  options,
}: {
  name: string;
  legend: string;
  options: { value: string; label: string }[];
}) {
  return (
    <fieldset>
      <legend className={labelClasses}>{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="cursor-pointer rounded-lg border border-slate/25 px-4 py-2.5 font-body text-[13px] text-midnight transition-all duration-300 hover:border-gold/60 hover:bg-gold/5 has-[:checked]:border-gold has-[:checked]:bg-gold has-[:checked]:text-paper has-[:checked]:shadow-md has-[:checked]:shadow-gold/20"
          >
            <input type="radio" name={name} value={opt.value} className="sr-only" />
            {opt.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
