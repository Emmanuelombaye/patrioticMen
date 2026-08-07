import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { media } from "@/data/media";
import styles from "../shared.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Patriot Men's Health helps modern American men reclaim strength, energy, confidence, and longevity through physician-guided care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Patriot Men's Health",
    description:
      "Physician-guided care for men who refuse to settle—strength, energy, confidence, and longevity.",
    url: "/about",
  },
};

const values = [
  {
    title: "Physician-guided",
    body: "Every protocol is reviewed by licensed U.S. providers who understand men's health.",
    image: media.lifestyle.evaluation,
    imageAlt: "Clinical evaluation process",
  },
  {
    title: "Discreet by design",
    body: "No pharmacy lines. No awkward conversations. Medications ship privately nationwide.",
    image: media.lifestyle.delivery,
    imageAlt: "Discreet home delivery",
  },
  {
    title: "Performance-focused",
    body: "We don't chase symptoms in isolation—we build around strength, drive, and longevity.",
    image: media.lifestyle.aboutHero,
    imageAlt: "Performance and strength lifestyle",
  },
];

const mosaic = [
  { src: "/products/testosterone.jpeg", alt: "Testosterone Cypionate" },
  { src: "/products/semaglutide.jpeg", alt: "Semaglutide" },
  { src: "/products/hair-regrowth.jpeg", alt: "Hair regrowth topical" },
  { src: "/products/glutathione.jpeg", alt: "Glutathione" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Patriot"
        title="Rebuild the modern American man."
        lede="Patriot Men's Health was built for men who refuse to settle—helping you look better, feel better, and perform at your absolute best."
        image={media.lifestyle.aboutHero}
        imageAlt="Confident man embodying strength and vitality"
      />

      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.aboutGrid}`}>
          <Reveal className={styles.aboutCopy}>
            <p className={styles.eyebrow}>Our conviction</p>
            <h2>Strength. Energy. Confidence. Longevity.</h2>
            <p>
              Traditional care is slow, fragmented, and uncomfortable. Patriot
              connects you with licensed providers online, then delivers
              physician-directed treatment to your door when appropriate.
            </p>
            <p>
              From hormones and weight loss to sexual health and recovery, every
              lane is built around one standard: clinical oversight, clear
              process, and discreet fulfillment.
            </p>
            <Link href="/start" className={styles.button}>
              Start free evaluation
            </Link>
          </Reveal>

          <Reveal className={styles.mosaic} delay={0.1}>
            {mosaic.map((item) => (
              <div key={item.src} className={styles.mosaicCell}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 22vw"
                  className={styles.mosaicImage}
                />
              </div>
            ))}
            <div className={styles.mosaicLogo}>
              <Image
                src={media.brand.logo}
                alt="Patriot Men's Health"
                width={220}
                height={80}
                style={{ width: "70%", height: "auto" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <Reveal>
            <h2 className={styles.sectionTitle}>What we stand for</h2>
          </Reveal>
          <Stagger className={styles.valueGrid}>
            {values.map((value) => (
              <StaggerItem key={value.title} className={styles.valueCard}>
                <div className={styles.valueMedia}>
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    className={styles.valueImage}
                  />
                </div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.inner}>
          <Reveal>
            <p className={styles.eyebrow}>Why Patriot</p>
            <h2 className={styles.sectionTitle}>Approach, experts, excellence</h2>
          </Reveal>

          <div id="clinical" className={styles.anchorBlock}>
            <Reveal>
              <h3>Clinical standards</h3>
              <p>
                Protocols are evidence-informed and physician-reviewed. We prioritize
                contraindications, titration discipline, and follow-up—so treatment is
                deliberate, not impulsive.
              </p>
            </Reveal>
          </div>

          <div id="experts" className={styles.anchorBlock}>
            <Reveal>
              <h3>Meet the clinicians</h3>
              <p>
                Licensed U.S. providers review every evaluation. They decide eligibility,
                match the right medication when appropriate, and remain available when
                your plan needs refinement.
              </p>
            </Reveal>
          </div>

          <div id="excellence" className={styles.anchorBlock}>
            <Reveal>
              <h3>Member excellence</h3>
              <p>
                Excellence means clear process, discreet fulfillment, and support that
                continues after the prescription. The standard is simple: care you can
                respect—and results you can feel.
              </p>
            </Reveal>
          </div>

          <Reveal className={styles.ctaRow}>
            <Link href="/start" className={styles.button}>
              Start free evaluation
            </Link>
            <Link href="/safety" className={styles.textLink}>
              Read patient safety
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
