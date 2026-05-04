import { Noto_Serif, Inter } from "next/font/google";

export const primaryFont = Noto_Serif({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const secondaryFont = Inter({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
