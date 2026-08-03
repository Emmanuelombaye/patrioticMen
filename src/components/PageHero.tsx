"use client";

import Image from "next/image";
import { Reveal } from "./motion";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  kicker: string;
  title: string;
  lede: string;
  image?: string;
  imageAlt?: string;
};

export function PageHero({
  kicker,
  title,
  lede,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${image ? styles.withImage : ""}`}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.inner}>
        <Reveal className={styles.copy}>
          <p className={styles.kicker}>{kicker}</p>
          <h1>{title}</h1>
          <p className={styles.lede}>{lede}</p>
        </Reveal>

        {image ? (
          <Reveal className={styles.visual} delay={0.1}>
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
            <div className={styles.vignette} aria-hidden />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
