export type BrandTheme = {
  primary: string;
  secondary: string;
  surface: string;
  border: string;
  name: string;
  logoPath: string;
};

export const brandTheme: BrandTheme = {
  primary: process.env.NEXT_PUBLIC_BRAND_PRIMARY || "#0B5CAB",
  secondary: process.env.NEXT_PUBLIC_BRAND_SECONDARY || "#1690F2",
  surface: process.env.NEXT_PUBLIC_BRAND_SURFACE || "#F3F7FC",
  border: process.env.NEXT_PUBLIC_BRAND_BORDER || "#D9E6F7",
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Employbridge",
  logoPath: process.env.NEXT_PUBLIC_BRAND_LOGO || "/brand/employbridge-logo.svg",
};


