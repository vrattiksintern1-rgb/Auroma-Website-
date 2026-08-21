const tones = {
  gold: "text-gold border-gold/35",
  mist: "text-mist border-mist/25",
} as const;

/**
 * Recurring ornamental rule used between a headline and its supporting
 * copy — echoes the brand's triangle mark rather than a generic glyph.
 */
export function SectionDivider({
  tone = "gold",
  align = "center",
  className = "",
}: {
  tone?: keyof typeof tones;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
      aria-hidden="true"
    >
      <span className={`h-px w-10 border-t ${tones[tone]}`} />
      <svg viewBox="0 0 20 18" className={`h-3 w-3 ${tones[tone].split(" ")[0]}`}>
        <path
          d="M10 2 L18 16 H2 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`h-px w-10 border-t ${tones[tone]}`} />
    </div>
  );
}
