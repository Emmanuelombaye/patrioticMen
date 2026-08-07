import { Hero } from "@/components/Hero";
import { HomeBridge } from "@/components/HomeBridge";
import { HomeJourney } from "@/components/HomeJourney";
import { Programmes } from "@/components/Programmes";
import { TrustBar } from "@/components/TrustBar";
import { TrustpilotBanner } from "@/components/TrustpilotBanner";

/**
 * Home is a gateway — not a dump of every section.
 * Depth lives on /treatments, /how-it-works, /about, /start, /safety, /guides.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TrustpilotBanner />
      <Programmes />
      <HomeJourney />
      <HomeBridge />
    </>
  );
}
