import type { ReactNode } from "react";
import { Fragment } from "react";

/**
 * Splits verbatim copy around `accent` and italicises/golds that phrase —
 * a styling decision only, never a change to the approved text itself.
 * If `accent` isn't found, the text renders unchanged.
 */
export function withAccent(text: string, accent: string, tone: "gold" | "gold-light" = "gold-light"): ReactNode {
  const idx = text.indexOf(accent);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const after = text.slice(idx + accent.length);
  const toneClass = tone === "gold-light" ? "text-gold-light" : "text-gold";

  return (
    <Fragment>
      {before}
      <em className={`${toneClass} italic`}>{accent}</em>
      {after}
    </Fragment>
  );
}
