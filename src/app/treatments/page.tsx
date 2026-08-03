import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Products } from "@/components/Products";
import { StartCTA } from "@/components/StartCTA";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore Patriot Men's Health treatments for weight loss, hormones, sexual health, hair regrowth, longevity, and recovery.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        kicker="Treatments"
        title="Every protocol. One standard."
        lede="Browse physician-reviewed options across weight, hormones, sexual health, recovery, and longevity—then start an evaluation online."
        image="/products/testosterone.jpeg"
        imageAlt="Testosterone Cypionate vial"
      />
      <Products showHeader={false} />
      <StartCTA />
    </>
  );
}
