"use client";

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
      </div>
    </section>
  );
}
