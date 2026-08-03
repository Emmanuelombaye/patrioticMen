"use client";

import Image from "next/image";
import { media } from "@/data/media";
import { Reveal, Stagger, StaggerItem } from "./motion";
import styles from "./TrustBar.module.css";

const items = [
  {
    label: "Licensed U.S. providers",
    detail: "Clinical review on every request",
    image: media.lifestyle.evaluation,
    imageAlt: "Clinical evaluation",
  },
  {
    label: "Discreet nationwide shipping",
    detail: "Private packaging to your door",
    image: media.lifestyle.delivery,
    imageAlt: "Discreet delivery",
  },
  {
    label: "Rx Only protocols",
    detail: "Prescribed only when appropriate",
    image: media.lifestyle.followUp,
    imageAlt: "Provider follow-up",
  },
];

export function TrustBar() {
  return (
    <section className={styles.section} aria-label="Why Patriot">
      <div className={styles.inner}>
        <Stagger className={styles.row}>
          {items.map((item) => (
            <StaggerItem key={item.label} className={styles.item}>
              <div className={styles.thumb}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="96px"
                  className={styles.thumbImage}
                />
              </div>
              <div>
                <p className={styles.label}>{item.label}</p>
                <p className={styles.detail}>{item.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Reveal>
        <div className={styles.line} aria-hidden />
      </Reveal>
    </section>
  );
}
