"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion";
import styles from "./FeaturedPromo.module.css";

export function FeaturedPromo() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.inner}>
        <Reveal className={styles.card}>
          <div className={styles.copy}>
            <p className={styles.badge}>New</p>
            <h2 id="featured-heading">More ways to lose weight</h2>
            <p>
              Semaglutide and Tirzepatide join the Patriot Weight Loss Programme—
              clinician review, discreet delivery, and support through the hard weeks.
            </p>
            <Link href="/weight-loss" className={styles.cta}>
              Explore weight loss
            </Link>
          </div>
          <div className={styles.media}>
            <Image
              src="/programmes/weight-loss.png"
              alt="Weight loss programme medication"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.image}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
