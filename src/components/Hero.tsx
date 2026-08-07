"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { media } from "@/data/media";
import { Magnetic, TextReveal, ease } from "./motion";
import styles from "./Hero.module.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  useEffect(() => {
    if (reduce) {
      setAllowVideo(false);
      return;
    }

    const desktop = window.matchMedia("(min-width: 960px) and (hover: hover)");
    const sync = () => setAllowVideo(desktop.matches);
    sync();
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, [reduce]);

  useEffect(() => {
    const video = videoRef.current;
    if (!allowVideo || !video) return;

    const play = () => {
      video.play().catch(() => {
        /* Autoplay can fail — poster stays visible */
      });
    };

    play();

    const onVisibility = () => {
      if (document.hidden) {
        video.pause();
      } else {
        play();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          video.pause();
        } else if (!document.hidden) {
          play();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    };
  }, [allowVideo]);

  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-heading" ref={ref}>
      <motion.div
        className={styles.media}
        style={reduce ? undefined : { y: mediaY, scale: mediaScale }}
      >
        <Image
          src={media.lifestyle.homeHero}
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />

        {allowVideo ? (
          <video
            ref={videoRef}
            className={`${styles.bgVideo} ${videoReady ? styles.bgVideoReady : ""}`}
            muted
            loop
            playsInline
            preload="metadata"
            poster={media.lifestyle.homeHero}
            onLoadedData={() => setVideoReady(true)}
            onCanPlay={() => setVideoReady(true)}
            aria-hidden
          >
            <source src={media.lifestyle.healthVideo} type="video/mp4" />
          </video>
        ) : null}
      </motion.div>

      <div className={styles.veil} aria-hidden />

      <div className={styles.productFloat} aria-hidden>
        <Image
          src="/products/semaglutide.jpeg"
          alt=""
          width={220}
          height={220}
          className={styles.productImage}
          priority
        />
        <p className={styles.productCaption}>*Image is Semaglutide vial.</p>
      </div>

      <div className={styles.content}>
        <motion.p
          className={styles.brand}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
        >
          Patriot Men&apos;s Health
        </motion.p>

        <TextReveal
          id="hero-heading"
          text="Own your health."
          className={styles.title}
          delay={0.1}
        />

        <motion.p
          className={styles.lede}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease }}
        >
          For a stronger, sharper, longer life.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.65, ease }}
        >
          <Magnetic>
            <Link href="/start" className={styles.primary}>
              Start free evaluation
            </Link>
          </Magnetic>
          <Link href="/#programmes" className={styles.secondary}>
            Browse programmes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
