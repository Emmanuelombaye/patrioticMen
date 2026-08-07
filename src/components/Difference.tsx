"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./motion";
import styles from "./Difference.module.css";

const points = [
  {
    title: "Clinical review first",
    body: "Licensed U.S. providers review every case and only prescribe what’s clinically suitable. Sometimes that means we say no.",
  },
  {
    title: "Discreet by default",
    body: "No pharmacy lines. No logos on the box. Private packaging shipped nationwide.",
  },
  {
    title: "Support that continues",
    body: "Care doesn’t stop at the prescription. Follow-up stays available for questions and adjustments.",
  },
] as const;

export function Difference() {
  return (
    <section className={styles.section} aria-labelledby="difference-heading">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            <p className={styles.kicker}>The Patriot difference</p>
            <h2 id="difference-heading">What proper care looks like</h2>
            <p className={styles.lede}>
              Support doesn&apos;t stop at the prescription. Clinicians review every case
              and only prescribe what&apos;s clinically suitable for you.
            </p>
          </header>
        </Reveal>

        <Stagger className={styles.grid}>
          {points.map((point) => (
            <StaggerItem key={point.title} className={styles.item}>
              <h3>{point.title}</h3>
              <p>{point.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className={styles.ctaWrap}>
          <Link href="/start" className={styles.cta}>
            Start free evaluation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
