import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StartCTA } from "@/components/StartCTA";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "Start evaluation",
  description:
    "Begin your Patriot Men's Health evaluation. Licensed providers review eligibility before any prescription.",
};

export default function StartPage() {
  return (
    <>
      <PageHero
        kicker="Get started"
        title="Your evaluation starts here."
        lede="Share a few details. A licensed provider reviews your information and determines whether treatment is medically appropriate."
        image={media.lifestyle.startHero}
        imageAlt="Starting an online health evaluation"
      />
      <StartCTA embedded />
    </>
  );
}
