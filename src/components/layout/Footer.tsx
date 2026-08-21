import { brand, architect } from "@/content/shared";
import { PENDING } from "@/content/pending";
import { SectionDivider } from "@/components/ui/SectionDivider";

const developer = {
  name: "The Auroma Group",
  role: "Developer",
};

export function Footer({ description }: { description: string }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-midnight-texture px-6 pb-10 pt-16 sm:px-8 sm:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-normal text-paper sm:text-2xl">{brand.name}</p>
            <p className="mt-2 font-display text-lg italic text-gold-light">{brand.idea}</p>
            <p className="mt-4 max-w-xs font-body text-[13px] leading-relaxed text-mist/80 sm:text-[14px]">
              {description}
            </p>
          </div>

          {/* Developer & Architect */}
          <div className="grid grid-cols-1 gap-5">
            <div className="border-t border-mist/15 pt-4 sm:border-0 sm:pt-0">
              <p className="font-label text-[11px] leading-none tracking-[0.16em] uppercase text-gold-light">Developer</p>
              <p className="mt-1.5 font-display text-lg leading-tight text-paper">{developer.name}</p>
              <p className="mt-0.5 font-body text-[13px] leading-snug text-mist/80 sm:text-[14px]">
                {PENDING.developerDescription ?? "Details shared on request."}
              </p>
            </div>
            <div className="border-t border-mist/15 pt-4">
              <p className="font-label text-[11px] leading-none tracking-[0.16em] uppercase text-gold-light">Architect</p>
              <p className="mt-1.5 font-display text-lg leading-tight text-paper">{architect.name}</p>
              <p className="mt-0.5 font-body text-[13px] leading-snug text-mist/80 sm:text-[14px]">
                {architect.role}
              </p>
            </div>
          </div>

          {/* Reach Us */}
          <div className="border-t border-mist/15 pt-4 sm:border-0 sm:pt-0">
            <p className="font-label text-[11px] tracking-[0.16em] uppercase text-gold-light">Reach Us</p>
            <dl className="mt-3 space-y-3 font-body text-[13px] leading-relaxed text-mist/80 sm:text-[14px]">
              <div>
                <dt className="sr-only">Address</dt>
                <dd>{PENDING.reachUsAddress ?? "Address shared on request."}</dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  {PENDING.reachUsPhones && PENDING.reachUsPhones.length > 0 ? (
                    PENDING.reachUsPhones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                        className="transition-colors duration-300 hover:text-gold-light"
                      >
                        {phone}
                        {i < PENDING.reachUsPhones!.length - 1 && <span className="mx-1.5 text-mist/40">·</span>}
                      </a>
                    ))
                  ) : (
                    "Reach us on WhatsApp"
                  )}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  {PENDING.reachUsEmail ? (
                    <a href={`mailto:${PENDING.reachUsEmail}`} className="transition-colors duration-300 hover:text-gold-light">
                      {PENDING.reachUsEmail}
                    </a>
                  ) : (
                    "Email shared on request."
                  )}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 border-t border-mist/15 pt-10 text-center">
          <SectionDivider tone="mist" />

          <p className="mt-6 font-body text-[11.5px] leading-relaxed text-mist/60 sm:text-[12px]">
            All images, plans and dimensions are indicative and subject to change and statutory approvals.
          </p>
          <p className="mt-3 font-body text-[11.5px] text-mist/60 sm:text-[12px]">
            © {year} {brand.name}. All rights reserved.
          </p>
          <p className="mt-3 font-body text-[11.5px] text-mist/60 sm:text-[12px]">
            Designed &amp; Developed by{" "}
            <a
              href="https://www.vrattiks.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold-light underline decoration-gold-light/40 underline-offset-4 transition-colors hover:text-gold"
            >
              Vrattiks
            </a>
          </p>
          <p className="mt-4 font-body text-[12px] text-mist/60">
            <a href="/privacy" className="underline decoration-mist/30 underline-offset-4 hover:text-gold-light">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
