export type PageVariant = "investor" | "home";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const investmentRangeOptions = [
  "₹2.5 crore – ₹3 crore",
  "₹3 crore – ₹3.5 crore",
  "₹3.5 crore – ₹4 crore",
] as const;

export type InvestmentRange = (typeof investmentRangeOptions)[number];

export interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  city: string;
  investmentRange: InvestmentRange | "";
  consent: boolean;
}

export interface LeadRecord extends LeadFormData {
  variant: PageVariant;
  sourcePage: string;
  utm: Record<string, string>;
  consentTimestamp: string;
}

export interface BrochureLeadData {
  name: string;
  email: string;
  phone: string;
}
