import type { ReactNode } from "react";

const tones = {
  gold: "text-gold",
  "gold-light": "text-gold-light",
  mist: "text-mist",
  slate: "text-slate",
} as const;

export function Eyebrow({
  children,
  tone = "gold",
  className = "",
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={`block font-label text-[11px] tracking-[0.28em] uppercase font-normal ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
