export type PageVariant = "investor" | "home";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Step1Data {
  fullName: string;
  whatsappNumber: string;
  countryCode: string;
  email: string;
  consent: boolean;
}

export type LookingTo = "let-it-out" | "use-it-myself" | "both";
export type Timeline = "within-3-months" | "3-6-months" | "6-12-months" | "exploring";
export type AurovilleVisited = "yes" | "no" | "often";

export interface Step2Data {
  lookingTo: LookingTo | "";
  budgetRange: string;
  timeline: Timeline | "";
  aurovilleVisited: AurovilleVisited | "";
  city: string;
}

export interface LeadRecord extends Step1Data {
  variant: PageVariant;
  sourcePage: string;
  utm: Record<string, string>;
  consentTimestamp: string;
}
