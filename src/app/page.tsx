import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { StartCTA } from "@/components/StartCTA";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Products
        limit={6}
        heading="Built for strength, drive, and longevity."
        lede="Nine physician-reviewed protocols. Start with the goal that matters most—then explore the full catalog."
      />
      <HowItWorks />
      <StartCTA />
    </>
  );
}
