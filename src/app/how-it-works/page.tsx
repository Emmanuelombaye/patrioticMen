import type { Metadata } from "next";
import Image from "next/image";
import { HowItWorks } from "@/components/HowItWorks";
import { PageHero } from "@/components/PageHero";
import { StartCTA } from "@/components/StartCTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { media } from "@/data/media";
import styles from "../shared.module.css";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "See how Patriot Men's Health takes you from online evaluation to discreet nationwide delivery.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How it works | Patriot Men's Health",
    description:
      "Pick a programme, complete an evaluation, get discreet delivery if prescribed.",
    url: "/how-it-works",
  },
};

const points = [
  {
    title: "Clinical review first",
    body: "Licensed providers decide eligibility. No prescription is automatic.",
    image: media.lifestyle.evaluation,
    imageAlt: "Online clinical evaluation",
  },
  {
    title: "Privacy by default",
    body: "Discreet packaging and a digital-first experience designed for busy men.",
    image: media.lifestyle.delivery,
    imageAlt: "Private discreet delivery",
  },
  {
    title: "Follow-up built in",
    body: "Need a dose adjustment or question answered? Support stays available.",
    image: media.lifestyle.followUp,
    imageAlt: "Provider follow-up care",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="From intake to doorstep."
        lede="A clear three-step path: choose your goal, complete a clinical evaluation, and receive treatment only if prescribed."
        image={media.lifestyle.pickGoal}
        imageAlt="Choosing a health goal"
      />
      <HowItWorks cta />
      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <h2 className={styles.sectionTitle}>What to expect</h2>
          </Reveal>
          <Stagger className={styles.valueGrid}>
            {points.map((point) => (
              <StaggerItem key={point.title} className={styles.valueCard}>
                <div className={styles.valueMedia}>
                  <Image
                    src={point.image}
                    alt={point.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.valueImage}
                  />
                </div>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <StartCTA />
    </>
  );
}
