import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhyPatriot } from "@/components/WhyPatriot";
import { media } from "@/data/media";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Patriot Men's Health | Reclaim Your Edge",
    template: "%s | Patriot Men's Health",
  },
  description:
    "Physician-guided men's health for hormones, weight, sexual wellness, and longevity—shipped discreetly nationwide.",
  icons: {
    icon: media.brand.mark,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <WhyPatriot />
        <Footer />
      </body>
    </html>
  );
}
