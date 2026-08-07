import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { categories } from "@/data/products";
import styles from "../shared.module.css";

export const metadata: Metadata = {
  title: "Advice & guides",
  description:
    "Practical guides for Patriot programmes—weight loss, hormones, sexual health, hair regrowth, and longevity—plus help getting started.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Advice & guides | Patriot Men's Health",
    description:
      "Programme guides and help centre for Patriot Men's Health patients.",
    url: "/guides",
  },
};

const help = [
  {
    title: "How evaluations work",
    body: "Share your goals and medical history online. A licensed provider reviews your case and decides whether treatment is appropriate.",
    href: "/how-it-works",
  },
  {
    title: "What happens after prescribing",
    body: "If prescribed, medication ships discreetly. Follow-up stays available for questions, side effects, and dose adjustments.",
    href: "/safety#pharmacy",
  },
  {
    title: "Talk to the team",
    body: "Need help choosing a programme or navigating intake? Reach us directly—we’ll point you to the right next step.",
    href: "mailto:jeff@patriotmensclinic.com",
  },
] as const;

export default function GuidesPage() {
  return (
    <>
      <PageHero
        kicker="Advice & guides"
        title="Clarity before commitment."
        lede="Browse programme lanes, understand the process, and get help when you need it—without the waiting-room runaround."
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <p className={styles.eyebrow}>Programmes</p>
            <h2 className={styles.sectionTitle}>Start with your goal</h2>
          </Reveal>
          <Stagger className={styles.guideGrid}>
            {categories.map((category) => (
              <StaggerItem key={category.id} className={styles.guideCard}>
                <p className={styles.eyebrow}>{category.shortName}</p>
                <h3>{category.headline}</h3>
                <p>{category.tagline}</p>
                <Link href={`/${category.id}`} className={styles.textLink}>
                  Explore programme
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={styles.sectionAlt} id="help">
        <div className={styles.inner}>
          <Reveal>
            <p className={styles.eyebrow}>Help centre</p>
            <h2 className={styles.sectionTitle}>Support when you need it</h2>
          </Reveal>
          <Stagger className={styles.triple}>
            {help.map((item) => (
              <StaggerItem key={item.title} className={styles.point}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link href={item.href} className={styles.textLink}>
                  Continue
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className={styles.ctaRow}>
            <Link href="/start" className={styles.button}>
              Start free evaluation
            </Link>
            <a href="tel:+16024321616" className={styles.textLink}>
              Call +1 (602) 432-1616
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
