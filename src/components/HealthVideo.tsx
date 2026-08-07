"use client";

import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Reveal } from "./motion";
import styles from "./HealthVideo.module.css";

export function HealthVideo() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="video-heading">
      <div className={styles.inner}>
        <Reveal className={styles.frame}>
          <video
            className={styles.video}
            autoPlay={!reduce}
            muted
            loop
            playsInline
            preload="metadata"
            poster="/lifestyle/about-hero.jpg"
          >
            <source src="/video/health.mp4" type="video/mp4" />
          </video>
          <div className={styles.veil} aria-hidden />
          <div className={styles.copy}>
            <p className={styles.kicker}>Built for real life</p>
            <h2 id="video-heading">Strength starts with ownership.</h2>
            <p>
              Training, recovery, hormones, weight—Patriot programmes are built
              around the men who refuse to coast.
            </p>
            <Link href="/start" className={styles.cta}>
              Start free evaluation
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
