"use client";

import { Reveal } from "./motion";
import styles from "./TrustBar.module.css";

const items = [
  {
    label: "Free, discreet delivery",
    detail: "No names. No logos. Private packaging.",
  },
  {
    label: "Ongoing clinical support",
    detail: "Licensed U.S. providers review every case.",
  },
  {
    label: "Evidence-backed treatments",
    detail: "Prescribed only when clinically suitable.",
  },
] as const;

export function TrustBar() {
  return (
    <section className={styles.section} aria-label="Trust signals">
      <div className={styles.inner}>
        <div className={styles.row}>
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06} className={styles.item}>
              <p className={styles.label}>{item.label}</p>
              <p className={styles.detail}>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
