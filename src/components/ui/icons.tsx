import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconCoolBreeze(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12 L12 5 L20 12" />
      <path d="M6 12 V20 H18 V12" />
      <path d="M14 9 Q18 9 19 6" />
    </svg>
  );
}

export function IconSolar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 9 L11 6 L11 13 L4 16 Z" />
      <path d="M13 6 L20 9 L20 16 L13 13 Z" />
      <circle cx="18" cy="4.5" r="1.6" />
      <path d="M18 1.6 V2.4 M20.3 3 L19.7 3.4 M15.7 3 L16.3 3.4" />
    </svg>
  );
}

export function IconWaterDrop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 C12 3 6.5 10 6.5 14.5 C6.5 17.8 9 20 12 20 C15 20 17.5 17.8 17.5 14.5 C17.5 10 12 3 12 3 Z" />
    </svg>
  );
}

export function IconSprout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20 V10" />
      <path d="M12 10 C12 6 8 5 5 5.5 C5.5 9 8 11 12 10 Z" />
      <path d="M12 13 C12 10 15 9 18 9.5 C17.5 12.5 15 14 12 13 Z" />
    </svg>
  );
}

export function IconEcoMaterial(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 15 C4 10 8 6 12 6 C16 6 20 10 20 15" />
      <path d="M4 15 H20" />
      <path d="M9 15 C9 11.5 10.5 8.5 12 6" />
      <path d="M15 15 C15 11.5 13.5 8.5 12 6" />
    </svg>
  );
}

export function IconDaylight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="12" height="16" rx="0.5" />
      <path d="M8 8 H12 M8 12 H12 M8 16 H12" />
      <circle cx="19" cy="7" r="1.8" />
      <path d="M19 3.2 V4.3 M22.5 7 H21.4 M20.7 4.7 L20 5.4 M20.7 9.3 L20 8.6" />
    </svg>
  );
}

export function IconBed(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 19 V9.5 A1.5 1.5 0 0 1 4.5 8 H10 A1.5 1.5 0 0 1 11.5 9.5 V13" />
      <path d="M11.5 13 H21 V19" />
      <path d="M3 15.5 H21" />
      <circle cx="6.3" cy="10.8" r="1.1" />
    </svg>
  );
}

export function IconPool(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="12" rx="1.2" />
      <path d="M3 19.5 C4.5 18.3 5.5 18.3 7 19.5 C8.5 20.7 9.5 20.7 11 19.5 C12.5 18.3 13.5 18.3 15 19.5 C16.5 20.7 17.5 20.7 19 19.5 C20 18.7 20.7 18.7 21 19" />
    </svg>
  );
}

export function IconSunset(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14 A6 6 0 0 1 16 14" />
      <path d="M3 14 H17 M2 17.5 H18" />
      <path d="M10 4.5 V7 M4.6 8 L6.2 9.2 M15.4 8 L13.8 9.2" />
    </svg>
  );
}

export function IconGrid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="0.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="0.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="0.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="0.8" />
    </svg>
  );
}

export function IconHost(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2 14 L6.5 9.5 C7.3 8.7 8.5 8.7 9.2 9.4 L11 11.2" />
      <path d="M22 14 L17.5 9.5 C16.7 8.7 15.5 8.7 14.8 9.4 L13 11.2" />
      <path d="M9 12 L11.3 14.3 C12 15 12 16 11.3 16.6 C10.6 17.3 9.6 17.3 8.9 16.6 L6.5 14.2" />
      <path d="M15 12 L12.7 14.3" />
    </svg>
  );
}

export function IconCar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 15.5 L5 10 A2 2 0 0 1 6.9 8.5 H17.1 A2 2 0 0 1 19 10 L20.5 15.5" />
      <rect x="2.5" y="15.5" width="19" height="4.5" rx="1.2" />
      <circle cx="6.5" cy="17.7" r="0.9" />
      <circle cx="17.5" cy="17.7" r="0.9" />
    </svg>
  );
}

export function IconSofa(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12 V9.5 A1.5 1.5 0 0 1 5.5 8 H18.5 A1.5 1.5 0 0 1 20 9.5 V12" />
      <path d="M3 12 H21 V16.5 A1 1 0 0 1 20 17.5 H4 A1 1 0 0 1 3 16.5 Z" />
      <path d="M4 17.5 V19.5 M20 17.5 V19.5" />
    </svg>
  );
}

export function IconBirdHerb(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12 C7 9.5 10 9.5 10.5 12 C11.5 10.5 13.5 10.5 13 13 C15 12 16.5 13 15.5 15" />
      <circle cx="6.3" cy="11" r="0.4" fill="currentColor" stroke="none" />
      <path d="M17 20 V13 M17 15 C17 13.5 18.5 13 19.5 13.5 M17 17 C17 15.5 15.5 15 14.5 15.5" />
    </svg>
  );
}

export function IconChat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 6 A2 2 0 0 1 7 4 H17 A2 2 0 0 1 19 6 V13 A2 2 0 0 1 17 15 H9.5 L5.5 18.5 V15 A2 2 0 0 1 5 13 Z" />
    </svg>
  );
}

export function IconPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21 C12 21 5.5 13.6 5.5 9 A6.5 6.5 0 0 1 18.5 9 C18.5 13.6 12 21 12 21 Z" />
      <circle cx="12" cy="9" r="2.2" />
    </svg>
  );
}

export function IconKey(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="7.5" cy="12" r="3.8" />
      <path d="M11 12 H20.5 M16.5 12 V15.5 M19 12 V14.5" />
    </svg>
  );
}

export function IconMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4 6.5 H20 M4 12 H20 M4 17.5 H20" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 5.5 L18.5 18.5 M18.5 5.5 L5.5 18.5" />
    </svg>
  );
}

export function IconDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 V14.5" />
      <path d="M7.5 10 L12 14.5 L16.5 10" />
      <path d="M4.5 18.5 H19.5" />
    </svg>
  );
}
