"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { media } from "@/data/media";
import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading" ref={ref}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />

      <div className={styles.copy}>
        <motion.p
          className={styles.brandLine}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={media.brand.mark}
            alt=""
            width={52}
            height={52}
            className={styles.brandMark}
            priority
          />
          <span>
            PATRIOT
            <em>MEN&apos;S HEALTH</em>
          </span>
        </motion.p>

        <motion.h1
          id="hero-heading"
          className={styles.title}
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Reclaim your edge.
        </motion.h1>

        <motion.p
          className={styles.lede}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Physician-guided care for hormones, weight, sexual health, and
          longevity—reviewed online, shipped discreetly.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/start" className={styles.primary}>
            Start free evaluation
          </Link>
          <Link href="/treatments" className={styles.secondary}>
            View treatments
          </Link>
        </motion.div>
      </div>

      <div className={styles.visual}>
        <motion.div
          className={styles.imageWrap}
          style={reduce ? undefined : { y: imageY, scale: imageScale }}
        >
          <Image
            src="/products/testosterone.jpeg"
            alt="Patriot Men's Health prescription vial"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
            className={styles.heroImage}
          />
        </motion.div>
        <div className={styles.vignette} aria-hidden />
        <motion.div
          className={styles.orbit}
          aria-hidden
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
        />
      </div>
    </section>
  );
}
