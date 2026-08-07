"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, ease } from "./motion";
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
];

export function TrustBar() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} aria-label="Why Patriot">
      <div className={styles.inner}>
        <div className={styles.row}>
          {items.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.08} className={styles.item}>
              <motion.span
                className={styles.index}
                initial={reduce ? false : { opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.6, ease }}
              >
                0{index + 1}
              </motion.span>
              <div>
                <p className={styles.label}>{item.label}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className={styles.marquee} aria-hidden>
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 2 }).map((_, copy) => (
            <div key={copy} className={styles.marqueeGroup}>
              {[
                "Weight Loss",
                "Hormones",
                "Sexual Health",
                "Hair Regrowth",
                "Longevity & Recovery",
              ].map((word) => (
                <span key={`${copy}-${word}`}>
                  {word}
                  <em>/</em>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
