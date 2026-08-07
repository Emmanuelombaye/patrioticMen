import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import styles from "../shared.module.css";

export const metadata: Metadata = {
  title: "Patient safety",
  description:
    "How Patriot Men's Health approaches regulated standards, safe prescribing, licensed U.S. providers, and discreet pharmacy fulfillment.",
  alternates: { canonical: "/safety" },
  openGraph: {
    title: "Patient safety | Patriot Men's Health",
    description:
      "Licensed review, clear contraindications, and discreet fulfillment—clinical judgment first.",
    url: "/safety",
  },
};

const blocks = [
  {
    id: "standards",
    title: "Our regulated standards",
    body: "Every programme is built around clinician judgment—not checkout automation. Eligibility, dosing, and follow-up are handled through licensed medical review so care stays appropriate for the man in front of us.",
  },
  {
    id: "prescribing",
    title: "How safe prescribing works",
    body: "You complete a focused clinical intake. A licensed U.S. provider reviews history, goals, and contraindications. Medication is prescribed only when it is clinically suitable—and declined when it is not.",
  },
  {
    id: "providers",
    title: "Licensed U.S. providers",
    body: "Treatment decisions are made by licensed healthcare professionals. Patriot provides the platform, education, and care coordination that connect you to that clinical oversight.",
  },
  {
    id: "pharmacy",
    title: "Pharmacy & fulfillment",
    body: "When prescribed, medication ships discreetly through licensed pharmacy partners. Private packaging. No logos advertising what’s inside. Nationwide delivery designed for real life.",
  },
] as const;

export default function SafetyPage() {
  return (
    <>
      <PageHero
        kicker="Patient safety"
        title="Clinical judgment first. Always."
        lede="Patriot care is built on licensed review, clear contraindications, and discreet fulfillment—so strength never comes at the cost of standards."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Stagger className={styles.triple}>
            {blocks.map((block) => (
              <StaggerItem key={block.id} className={styles.point}>
                <div id={block.id} className={styles.anchorTarget}>
                  <h3>{block.title}</h3>
                  <p>{block.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className={styles.ctaRow}>
            <Link href="/start" className={styles.button}>
              Start free evaluation
            </Link>
            <Link href="/about" className={styles.textLink}>
              Learn about Patriot
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
