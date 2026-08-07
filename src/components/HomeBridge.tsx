"use client";

import Link from "next/link";
import { Reveal } from "./motion";
import styles from "./HomeBridge.module.css";

export function HomeBridge() {
  return (
    <section className={styles.section} aria-labelledby="bridge-heading">
      <div className={styles.inner}>
        <Reveal className={styles.panel}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Ready when you are</p>
            <h2 id="bridge-heading">Proper care starts with a clear evaluation.</h2>
            <p>
              Share your goals and history. A licensed provider decides if treatment
              is appropriate—then we handle the rest discreetly.
            </p>
          </div>
          <div className={styles.actions}>
            <Link href="/start" className={styles.primary}>
              Start free evaluation
            </Link>
            <Link href="/treatments" className={styles.secondary}>
              Browse all treatments
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
