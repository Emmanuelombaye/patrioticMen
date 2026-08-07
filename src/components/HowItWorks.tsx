"use client";

import Image from "next/image";
import Link from "next/link";
import { media } from "@/data/media";
import { Magnetic, Reveal, Stagger, StaggerItem, clipUp } from "./motion";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    n: "01",
    title: "Pick your goal",
    body: "Choose the programme that matches your goal—weight loss, hormones, sexual health, hair regrowth, or longevity & recovery.",
    image: media.lifestyle.pickGoal,
    imageAlt: "Man choosing his health goals",
  },
  {
    n: "02",
    title: "Complete evaluation",
    body: "Answer a short clinical intake online. Licensed U.S. providers review eligibility and personalize your plan.",
    image: media.lifestyle.evaluation,
    imageAlt: "Completing an online clinical evaluation",
  },
  {
    n: "03",
    title: "Get it delivered",
    body: "If prescribed, medication ships discreetly to your door—with follow-up support when you need adjustments.",
    image: media.lifestyle.delivery,
    imageAlt: "Discreet package delivered to the door",
  },
];

type HowItWorksProps = {
  cta?: boolean;
};

export function HowItWorks({ cta = false }: HowItWorksProps) {
  return (
    <section className={styles.section} id="how" aria-labelledby="how-heading">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            <p className={styles.kicker}>How it works</p>
            <h2 id="how-heading">From goal to doorstep.</h2>
            <p className={styles.lede}>
              No waiting rooms. No awkward pharmacy lines. Pick a programme,
              complete an evaluation, get discreet delivery if prescribed.
            </p>
          </header>
        </Reveal>

        <div className={styles.timeline} aria-hidden>
          <div className={styles.timelineLine} />
        </div>

        <Stagger className={styles.steps}>
          {steps.map((step) => (
            <StaggerItem key={step.n} className={styles.step} variants={clipUp}>
              <div className={styles.stepMedia}>
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className={styles.stepImage}
                />
                <span className={styles.stepVeil} />
                <span className={styles.num}>{step.n}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </StaggerItem>
          ))}
        </Stagger>

        {cta ? (
          <Reveal className={styles.ctaWrap}>
            <Magnetic>
              <Link href="/start" className={styles.cta}>
                Begin your evaluation
              </Link>
            </Magnetic>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
