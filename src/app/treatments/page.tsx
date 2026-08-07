import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { StartCTA } from "@/components/StartCTA";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { categories, getProductsByCategory } from "@/data/products";
import styles from "./treatments.module.css";

export const metadata: Metadata = {
  title: "All treatments",
  description:
    "Browse Patriot Men's Health programmes for weight loss, low testosterone, erectile dysfunction, hair loss, longevity, and recovery.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        kicker="All treatments"
        title="Every protocol. Organised by goal."
        lede="Choose a programme lane—then compare the medications inside it. Same clinical standard across every option."
      />

      <div className={styles.page}>
        {categories.map((category) => {
          const meds = getProductsByCategory(category.id);
          return (
            <section key={category.id} className={styles.block} id={category.id}>
              <div className={styles.inner}>
                <Reveal className={styles.banner}>
                  <div className={styles.bannerMedia}>
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 40vw"
                      className={styles.bannerImage}
                    />
                    <span className={styles.bannerVeil} aria-hidden />
                  </div>
                  <header className={styles.header}>
                    <div>
                      <p className={styles.kicker}>{category.shortName}</p>
                      <h2>{category.headline}</h2>
                      <p className={styles.lede}>{category.tagline}</p>
                    </div>
                    <Link href={`/${category.id}`} className={styles.programmeLink}>
                      View programme
                    </Link>
                  </header>
                </Reveal>

                <Stagger className={styles.grid}>
                  {meds.map((product) => (
                    <StaggerItem key={product.id}>
                      <Link href={`/treatments/${product.id}`} className={styles.card}>
                        <div className={styles.media}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 700px) 100vw, 28vw"
                            className={styles.image}
                          />
                          <span className={styles.studio} aria-hidden />
                        </div>
                        <div className={styles.meta}>
                          <h3>{product.name}</h3>
                          <p>{product.tagline}</p>
                          <span>{product.format}</span>
                        </div>
                      </Link>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </section>
          );
        })}
      </div>

      <StartCTA />
    </>
  );
}
