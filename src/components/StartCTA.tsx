"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { media } from "@/data/media";
import { Magnetic, Reveal, ease } from "./motion";
import styles from "./StartCTA.module.css";

type StartCTAProps = {
  embedded?: boolean;
};

const goals = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    tagline: "GLP-1 Semaglutide & Tirzepatide protocols",
    badge: "Popular",
    icon: "⚖️",
  },
  {
    id: "hormones",
    title: "Hormones & Testosterone",
    tagline: "Enclomiphene & TRT optimizations",
    badge: "Clinical",
    icon: "⚡",
  },
  {
    id: "sexual-health",
    title: "Sexual Health",
    tagline: "Tadalafil & Performance protocols",
    badge: "Discreet",
    icon: "🔥",
  },
  {
    id: "hair-regrowth",
    title: "Hair Regrowth",
    tagline: "Finasteride & Minoxidil formulations",
    badge: "Targeted",
    icon: "💇‍♂️",
  },
  {
    id: "longevity-recovery",
    title: "Longevity & Recovery",
    tagline: "NAD+, Sermorelin & Glutathione",
    badge: "Cellular",
    icon: "🧬",
  },
];

const ageOptions = ["21-34", "35-49", "50-64", "65+"];
const focusOptions = [
  "Appetite & Fat Loss",
  "Energy & Vitality",
  "Erectile Performance",
  "Hair Density & Thickness",
  "Cellular Sleep & Recovery",
];
const safetyOptions = [
  "No major health conditions",
  "High blood pressure",
  "Diabetes / Metabolic focus",
  "Other / Discuss with provider",
];

export function StartCTA({ embedded = false }: StartCTAProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>("weight-loss");
  const [ageGroup, setAgeGroup] = useState<string>("35-49");
  const [primaryFocus, setPrimaryFocus] = useState<string>("Appetite & Fat Loss");
  const [healthStatus, setHealthStatus] = useState<string>("No major health conditions");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const reduce = useReducedMotion();

  const selectedGoalObj = goals.find((g) => g.id === selectedGoal) || goals[0];

  function handleNext(e: FormEvent) {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      setStep(4);
    }
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
              width={40}
              height={40}
              className={styles.visualMark}
            />
            <p>Physician-reviewed. Discreetly delivered.</p>
          </div>
        </Reveal>

        <div className={styles.inner}>
          <Reveal>
            <div className={styles.copy}>
              <p className={styles.kicker}>Online Clinical Intake</p>
              <h2 id="start-heading">Your health. Your privacy. Our promise.</h2>
              <p className={styles.lede}>
                Complete a 3-step online evaluation. A U.S.-licensed provider reviews your
                information and determines whether treatment is appropriate for you.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.wizardContainer}>
              {/* Progress Header */}
              {step < 4 ? (
                <div className={styles.progressHeader}>
                  <div className={styles.progressText}>
                    <span>Step {step} of 3</span>
                    <span className={styles.stepTitle}>
                      {step === 1
                        ? "Select Primary Goal"
                        : step === 2
                          ? "Clinical Eligibility"
                          : "Contact & Prescribing"}
                    </span>
                  </div>
                  <div className={styles.progressBarTrack}>
                    <motion.div
                      className={styles.progressBarFill}
                      initial={false}
                      animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                      transition={{ duration: 0.35, ease }}
                    />
                  </div>
                </div>
              ) : null}

              <form className={styles.form} onSubmit={handleNext}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Select Primary Goal */}
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      className={styles.stepBlock}
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <label className={styles.stepLabel}>
                        Select your primary health goal:
                      </label>
                      <div className={styles.goalCards}>
                        {goals.map((goal) => {
                          const active = selectedGoal === goal.id;
                          return (
                            <button
                              key={goal.id}
                              type="button"
                              className={`${styles.goalCard} ${active ? styles.goalCardActive : ""}`}
                              onClick={() => setSelectedGoal(goal.id)}
                            >
                              <div className={styles.goalTop}>
                                <span className={styles.goalIcon}>{goal.icon}</span>
                                <span className={styles.goalBadge}>{goal.badge}</span>
                              </div>
                              <h4 className={styles.goalTitle}>{goal.title}</h4>
                              <p className={styles.goalTagline}>{goal.tagline}</p>
                              {active ? (
                                <span className={styles.checkMark}>✓ Selected</span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>

                      <div className={styles.stepActions}>
                        <button type="submit" className={styles.continueBtn}>
                          Continue to Step 2 <span aria-hidden>→</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : null}

                  {/* Step 2: Health Profile & Eligibility */}
                  {step === 2 ? (
                    <motion.div
                      key="step2"
                      className={styles.stepBlock}
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <div className={styles.selectedSummary}>
                        <span className={styles.summaryBadge}>Goal</span>
                        <strong>{selectedGoalObj.title}</strong>
                      </div>

                      <div className={styles.fieldsGrid}>
                        <label>
                          Age Group
                          <select
                            value={ageGroup}
                            onChange={(e) => setAgeGroup(e.target.value)}
                            required
                          >
                            {ageOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt} years old
                              </option>
                            ))}
                          </select>
                        </label>

                        <label>
                          Primary Symptom / Target Focus
                          <select
                            value={primaryFocus}
                            onChange={(e) => setPrimaryFocus(e.target.value)}
                            required
                          >
                            {focusOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </label>

                        <label className={styles.fullWidth}>
                          Medical History & Safety Check
                          <select
                            value={healthStatus}
                            onChange={(e) => setHealthStatus(e.target.value)}
                            required
                          >
                            {safetyOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        </label>
                      </div>

                      <div className={styles.stepActionsDual}>
                        <button
                          type="button"
                          className={styles.backBtn}
                          onClick={() => setStep(1)}
                        >
                          ← Back
                        </button>
                        <button type="submit" className={styles.continueBtn}>
                          Continue to Step 3 <span aria-hidden>→</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : null}

                  {/* Step 3: Contact & Prescribing Info */}
                  {step === 3 ? (
                    <motion.div
                      key="step3"
                      className={styles.stepBlock}
                      initial={reduce ? false : { opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <div className={styles.fieldsGrid}>
                        <label>
                          Full Name *
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder="John Doe"
                            autoComplete="name"
                          />
                        </label>

                        <label>
                          Email Address *
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="john@example.com"
                            autoComplete="email"
                          />
                        </label>

                        <label>
                          Phone Number *
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                            placeholder="(555) 000-0000"
                            autoComplete="tel"
                          />
                        </label>

                        <label>
                          Zip / State *
                          <input
                            type="text"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            required
                            placeholder="90210"
                            autoComplete="postal-code"
                          />
                        </label>
                      </div>

                      <div className={styles.stepActionsDual}>
                        <button
                          type="button"
                          className={styles.backBtn}
                          onClick={() => setStep(2)}
                        >
                          ← Back
                        </button>
                        <Magnetic strength={24} className={styles.submitWrap}>
                          <button type="submit" className={styles.submitBtn}>
                            Submit for Physician Review <span aria-hidden>→</span>
                          </button>
                        </Magnetic>
                      </div>
                    </motion.div>
                  ) : null}

                  {/* Step 4: Success Screen */}
                  {step === 4 ? (
                    <motion.div
                      key="step4"
                      className={styles.successBlock}
                      initial={reduce ? false : { opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease }}
                    >
                      <div className={styles.successBadge}>
                        <span>✓</span> Clinical Intake Received
                      </div>

                      <h3 className={styles.successTitle}>
                        Ready for Licensed Provider Review
                      </h3>

                      <p className={styles.successText}>
                        Thank you, <strong>{name || "Patient"}</strong>. Your intake for{" "}
                        <strong>{selectedGoalObj.title}</strong> has been assigned to a
                        licensed U.S. medical provider.
                      </p>

                      <div className={styles.summaryCard}>
                        <div className={styles.summaryItem}>
                          <span>Selected Goal:</span>
                          <strong>{selectedGoalObj.title}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                          <span>Patient Age Group:</span>
                          <strong>{ageGroup} years</strong>
                        </div>
                        <div className={styles.summaryItem}>
                          <span>Target Focus:</span>
                          <strong>{primaryFocus}</strong>
                        </div>
                        <div className={styles.summaryItem}>
                          <span>Status:</span>
                          <strong className={styles.statusPending}>
                            Physician Reviewing Intake
                          </strong>
                        </div>
                      </div>

                      <p className={styles.successSub}>
                        If prescribed, your protocol will ship directly in discreet,
                        unbranded packaging.
                      </p>

                      <button
                        type="button"
                        className={styles.resetBtn}
                        onClick={() => {
                          setStep(1);
                          setName("");
                          setEmail("");
                          setPhone("");
                          setZip("");
                        }}
                      >
                        Start New Evaluation
                      </button>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

                <p className={styles.fine}>
                  Rx Only. Treatment eligibility is determined solely by licensed U.S.
                  medical professionals. Results vary.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
