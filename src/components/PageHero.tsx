"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, TextReveal, ease } from "./motion";
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
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.16]);

  if (image) {
    return (
      <section className={styles.fullBleed} ref={ref} aria-labelledby="page-hero-heading">
        <motion.div
          className={styles.fullMedia}
          style={reduce ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className={styles.fullImage}
          />
        </motion.div>
        <div className={styles.fullVeil} aria-hidden />
        <div className={styles.fullInner}>
          <motion.p
            className={styles.kicker}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            {kicker}
          </motion.p>
          <TextReveal id="page-hero-heading" text={title} className={styles.fullTitle} delay={0.12} />
          <motion.p
            className={styles.fullLede}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.75, ease }}
          >
            {lede}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero} aria-labelledby="page-hero-heading">
      <div className={styles.glow} aria-hidden />
      <div className={styles.inner}>
        <Reveal className={styles.copy}>
          <p className={styles.kicker}>{kicker}</p>
          <h1 id="page-hero-heading">{title}</h1>
          <p className={styles.lede}>{lede}</p>
        </Reveal>
      </div>
    </section>
  );
}
