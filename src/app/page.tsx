import { Difference } from "@/components/Difference";
import { FeaturedPromo } from "@/components/FeaturedPromo";
import { HealthVideo } from "@/components/HealthVideo";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Programmes } from "@/components/Programmes";
import { StartCTA } from "@/components/StartCTA";
import { TrustBar } from "@/components/TrustBar";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedPromo />
      <Difference />
      <HealthVideo />
      <Programmes />
      <HowItWorks />
      <StartCTA />
    </>
  );
}
