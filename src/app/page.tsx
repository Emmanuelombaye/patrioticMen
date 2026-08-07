import { Difference } from "@/components/Difference";
import { FeaturedPromo } from "@/components/FeaturedPromo";
import { HealthVideo } from "@/components/HealthVideo";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Products } from "@/components/Products";
import { Programmes } from "@/components/Programmes";
import { StartCTA } from "@/components/StartCTA";
import { TrustBar } from "@/components/TrustBar";
import { products } from "@/data/products";

const SHOWCASE_IDS = [
  "semaglutide",
  "testosterone",
  "tadalafil",
  "hair-regrowth",
  "nad",
  "tirzepatide",
] as const;

export default function Home() {
  const showcase = SHOWCASE_IDS.map((id) => products.find((p) => p.id === id)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedPromo />
      <Difference />
      <HealthVideo />
      <Programmes />
      <Products items={showcase} limit={6} />
      <HowItWorks />
      <StartCTA />
    </>
  );
}
