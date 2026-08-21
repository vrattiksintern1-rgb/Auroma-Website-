import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline-light" | "outline-dark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-label text-[14px] font-medium " +
  "px-5 py-2.5 transition-all duration-300 ease-out disabled:opacity-50 disabled:pointer-events-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-paper shadow-md shadow-gold/20 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/35 hover:-translate-y-0.5 active:translate-y-0",
  "outline-light":
    "border border-mist/50 text-paper hover:border-gold hover:text-gold-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10",
  "outline-dark":
    "border border-slate/40 text-midnight hover:border-gold hover:text-gold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-midnight/10",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className = "", children, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const isHash = href.startsWith("#");
    if (isHash) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...(anchorRest as object)}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
