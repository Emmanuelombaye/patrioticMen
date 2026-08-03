"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { media } from "@/data/media";
import { Reveal } from "./motion";
import styles from "./StartCTA.module.css";

type StartCTAProps = {
  embedded?: boolean;
};

export function StartCTA({ embedded = false }: StartCTAProps) {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      className={`${styles.section} ${embedded ? styles.embedded : ""}`}
      id="start"
      aria-labelledby="start-heading"
    >
      <div className={styles.shell}>
        <Reveal className={styles.visual}>
          <Image
            src={media.lifestyle.startHero}
            alt="Starting a private online evaluation"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className={styles.visualImage}
          />
          <div className={styles.visualOverlay} aria-hidden />
          <div className={styles.visualCaption}>
            <Image
              src={media.brand.mark}
              alt=""
              width={36}
              height={36}
              className={styles.visualMark}
            />
            <p>Physician-reviewed. Discreetly delivered.</p>
          </div>
        </Reveal>

        <div className={styles.inner}>
          <Reveal>
            <div className={styles.copy}>
              <p className={styles.kicker}>Get started</p>
              <h2 id="start-heading">Your health. Your privacy. Our promise.</h2>
              <p className={styles.lede}>
                Begin a free online evaluation. A licensed provider reviews your
                information and determines whether treatment is appropriate for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form className={styles.form} onSubmit={onSubmit}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.p
                    key="success"
                    className={styles.success}
                    role="status"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thanks — your evaluation request is ready for clinical review.
                    We&apos;ll follow up shortly.
                  </motion.p>
                ) : (
                  <motion.div
                    key="fields"
                    className={styles.fields}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <label>
                      Full name
                      <input name="name" type="text" required autoComplete="name" />
                    </label>
                    <label>
                      Email
                      <input name="email" type="email" required autoComplete="email" />
                    </label>
                    <label>
                      Phone
                      <input name="phone" type="tel" autoComplete="tel" />
                    </label>
                    <label>
                      Primary goal
                      <select name="goal" required defaultValue="">
                        <option value="" disabled>
                          Select a goal
                        </option>
                        <option>Weight Loss</option>
                        <option>Hormones</option>
                        <option>Sexual Health</option>
                        <option>Hair Regrowth</option>
                        <option>Longevity</option>
                        <option>Recovery</option>
                      </select>
                    </label>
                    <button type="submit">Start free evaluation</button>
                    <p className={styles.fine}>
                      Rx Only. Treatment eligibility is determined solely by licensed
                      medical professionals. Results vary.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
