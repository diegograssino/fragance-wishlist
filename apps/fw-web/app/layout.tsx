import themeColors from "@/styles/colors";
import { primaryFont, secondaryFont } from "@/styles/fonts";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Fragrance Wishlist",
  description: "Fragrance Wishlist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${primaryFont.variable} ${secondaryFont.variable} h-full antialiased`}
      style={themeColors}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
