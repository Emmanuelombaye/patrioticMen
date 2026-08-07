"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./motion";
import styles from "./HomeJourney.module.css";

const steps = [
  {
    n: "01",
    title: "Pick your goal",
    body: "Choose the programme that matches what you want to improve.",
  },
  {
    n: "02",
    title: "Clinical evaluation",
    body: "Licensed U.S. providers review your intake—never automatic scripts.",
  },
  {
    n: "03",
    title: "Discreet delivery",
    body: "If prescribed, medication ships privately with ongoing support.",
  },
] as const;

export function HomeJourney() {
  return (
    <section className={styles.section} aria-labelledby="journey-heading">
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          <div>
            <p className={styles.kicker}>How it works</p>
            <h2 id="journey-heading">Three steps. No waiting rooms.</h2>
          </div>
          <Link href="/how-it-works" className={styles.more}>
            See the full process
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Stagger className={styles.grid}>
          {steps.map((step) => (
            <StaggerItem key={step.n} className={styles.step}>
              <span className={styles.num}>{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
