"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { Reveal, Stagger, StaggerItem, scaleIn } from "./motion";
import styles from "./Programmes.module.css";

export function Programmes() {
  return (
    <section className={styles.section} id="programmes" aria-labelledby="programmes-heading">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            <p className={styles.kicker}>Proven solutions</p>
            <h2 id="programmes-heading">Clinically-guided programmes</h2>
            <p className={styles.lede}>
              Tell us what you&apos;d like support with. We&apos;ll guide you through the rest.
            </p>
          </header>
        </Reveal>

        <Stagger className={styles.grid}>
          {categories.map((category) => (
            <StaggerItem key={category.id} variants={scaleIn}>
              <Link href={`/${category.id}`} className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={category.image}
                    alt=""
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    className={styles.image}
                  />
                  <span className={styles.veil} aria-hidden />
                </div>
                <div className={styles.meta}>
                  <p className={styles.label}>{category.shortName}</p>
                  <h3>{category.headline}</h3>
                  <p className={styles.tagline}>{category.tagline}</p>
                  <span className={styles.cta}>Explore programme</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
