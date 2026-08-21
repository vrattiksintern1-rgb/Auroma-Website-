import type { ReactNode } from "react";

const tones = {
  paper: "bg-paper border-slate/10",
  midnight: "bg-midnight/40 border-mist/15",
  white: "bg-white border-slate/10",
} as const;

export function Card({
  children,
  tone = "paper",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <div
      className={`card-lift rounded-xl border ${tones[tone]} p-6 shadow-xl shadow-midnight/5 sm:p-7 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10 ${className}`}
    >
      {children}
    </div>
  );
}

export function IconBadge({
  children,
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  tone?: "gold" | "midnight";
  className?: string;
}) {
  const toneClasses =
    tone === "gold" ? "bg-gold/10 text-gold" : "bg-paper/10 text-paper";
  return (
    <span
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${toneClasses} ${className}`}
      aria-hidden="true"
    >
      {children}
    </span>
  );
}
