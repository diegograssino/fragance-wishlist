import { Geist, Geist_Mono } from "next/font/google";

export const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

export const secondaryFont = Geist_Mono({
  variable: "--font-secondary",
  subsets: ["latin"],
});
