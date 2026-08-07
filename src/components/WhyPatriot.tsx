"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "./motion";
import styles from "./WhyPatriot.module.css";

const columns = [
  {
    title: "Our approach",
    links: [
      { label: "About Patriot", href: "/about" },
      { label: "Clinical standards", href: "/about#clinical" },
      { label: "Meet the clinicians", href: "/about#experts" },
      { label: "How care works", href: "/how-it-works" },
    ],
  },
  {
    title: "Patient safety",
    links: [
      { label: "Our regulated standards", href: "/safety" },
      { label: "How safe prescribing works", href: "/safety#prescribing" },
      { label: "Licensed U.S. providers", href: "/safety#providers" },
      { label: "Pharmacy & fulfillment", href: "/safety#pharmacy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Advice & guides", href: "/guides" },
      { label: "Help centre", href: "/guides#help" },
      { label: "Contact us", href: "mailto:jeff@patriotmensclinic.com" },
      { label: "Start free evaluation", href: "/start" },
      { label: "Member excellence", href: "/about#excellence" },
    ],
  },
] as const;

const utility = [
  { label: "All treatments", href: "/treatments" },
  { label: "Start evaluation", href: "/start" },
  { label: "Advice & guides", href: "/guides" },
  { label: "Help & support", href: "/guides#help" },
] as const;

const badges = [
  {
    src: "/trust/shield.svg",
    label: "Licensed U.S. providers",
  },
  {
    src: "/trust/pharmacy.svg",
    label: "Discreet pharmacy fulfillment",
  },
] as const;

export function WhyPatriot() {
  return (
    <section className={styles.section} aria-labelledby="why-patriot-heading">
      <div className={styles.inner}>
        <Reveal className={styles.top}>
          <h2 id="why-patriot-heading" className={styles.title}>
            Why Patriot
          </h2>
          <Link href="/treatments" className={styles.findCta}>
            Find your treatment
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Stagger className={styles.columns}>
          {columns.map((column) => (
            <StaggerItem key={column.title} className={styles.column}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>

        <div className={styles.bottom}>
          <nav className={styles.utility} aria-label="Quick links">
            {utility.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.trust}>
            {badges.map((badge) => (
              <div key={badge.label} className={styles.badge}>
                <Image
                  src={badge.src}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.badgeIcon}
                />
                <span>{badge.label}</span>
              </div>
            ))}
            <div className={styles.rating}>
              <Image
                src="/trust/excellence.svg"
                alt=""
                width={44}
                height={44}
                className={styles.ratingIcon}
              />
              <div className={styles.ratingCopy}>
                <p className={styles.ratingLabel}>Excellence</p>
                <div className={styles.stars} aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
