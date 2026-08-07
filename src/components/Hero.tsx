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

const clips = [
  {
    src: media.lifestyle.heroRun,
    label: "Performance",
  },
  {
    src: media.lifestyle.heroCare,
    label: "Clinical care",
  },
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const reduce = useReducedMotion();
  const [allowVideo, setAllowVideo] = useState(false);
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState<boolean[]>([false, false]);

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
    if (!allowVideo) return;

    const playActive = () => {
      videoRefs.current.forEach((video, index) => {
        if (!video) return;
        if (index === active) {
          video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      });
    };

    playActive();

    const onVisibility = () => {
      if (document.hidden) {
        videoRefs.current.forEach((video) => video?.pause());
      } else {
        playActive();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRefs.current.forEach((video) => video?.pause());
        } else if (!document.hidden) {
          playActive();
        }
      },
      { threshold: 0.2 },
    );

    const first = videoRefs.current[0];
    if (first) observer.observe(first);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [allowVideo, active]);

  useEffect(() => {
    if (!allowVideo || !ready[0]) return;
    // Warm the second clip after the first is playable.
    const second = videoRefs.current[1];
    if (second && second.readyState < 2) {
      second.load();
    }
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % clips.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [allowVideo, ready]);

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

        {allowVideo
          ? clips.map((clip, index) => (
              <video
                key={clip.src}
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                className={`${styles.bgVideo} ${
                  ready[index] && active === index ? styles.bgVideoReady : ""
                }`}
                muted
                playsInline
                loop
                preload={index === 0 ? "auto" : "metadata"}
                poster={media.lifestyle.homeHero}
                onLoadedData={() =>
                  setReady((prev) => {
                    const next = [...prev];
                    next[index] = true;
                    return next;
                  })
                }
                aria-hidden
              >
                <source src={clip.src} type="video/mp4" />
              </video>
            ))
          : null}
      </motion.div>

      <div className={styles.veil} aria-hidden />

      {allowVideo ? (
        <div className={styles.sceneRail} aria-hidden>
          {clips.map((clip, index) => (
            <button
              key={clip.label}
              type="button"
              className={`${styles.sceneDot} ${active === index ? styles.sceneDotActive : ""}`}
              onClick={() => setActive(index)}
              aria-label={clip.label}
            >
              <span>{clip.label}</span>
            </button>
          ))}
        </div>
      ) : null}

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
