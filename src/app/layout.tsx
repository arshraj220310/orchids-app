import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LuminaDent | Premium Dental Care",
  description:
    "Award-winning dental care combining artistry with advanced technology. Transform your smile with LuminaDent — where every smile tells a story.",
  keywords: "dentist, dental care, cosmetic dentistry, teeth whitening, dental implants, orthodontics",
  openGraph: {
    title: "LuminaDent | Premium Dental Care",
    description: "Transform your smile with LuminaDent — where every smile tells a story.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
