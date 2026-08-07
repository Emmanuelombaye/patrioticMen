"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { categories } from "@/data/products";
import { media } from "@/data/media";
import { ease } from "./motion";
import styles from "./Header.module.css";

const links = [
  { href: "/treatments", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const [whyPatriotOpen, setWhyPatriotOpen] = useState(false);
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProgrammesOpen(false);
    setWhyPatriotOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        styles.header,
        (scrolled || !isHome) && !open ? styles.solid : "",
        open ? styles.open : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Patriot Men's Health home">
          <Image
            src={media.brand.mark}
            alt=""
            width={32}
            height={32}
            className={styles.mark}
            priority
          />
          <span className={styles.wordmark}>patriot</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {/* What we treat dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setProgrammesOpen(true)}
            onMouseLeave={() => setProgrammesOpen(false)}
          >
            <button
              type="button"
              className={styles.dropdownBtn}
              aria-expanded={programmesOpen}
              onClick={() => setProgrammesOpen((value) => !value)}
            >
              <span>What we treat</span>
              <svg
                className={`${styles.chevron} ${programmesOpen ? styles.chevronOpen : ""}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {programmesOpen ? (
                <motion.div
                  className={styles.menu}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2, ease }}
                >
                  {categories.map((category) => (
                    <Link key={category.id} href={`/${category.id}`}>
                      <span>{category.shortName}</span>
                      <em>{category.tagline}</em>
                    </Link>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Why Patriot mega dropdown (Numan-style) */}
          <div
            className={`${styles.dropdown} ${styles.megaDropdown}`}
            onMouseEnter={() => setWhyPatriotOpen(true)}
            onMouseLeave={() => setWhyPatriotOpen(false)}
          >
            <button
              type="button"
              className={`${styles.dropdownBtn} ${whyPatriotOpen ? styles.dropdownBtnActive : ""}`}
              aria-expanded={whyPatriotOpen}
              onClick={() => setWhyPatriotOpen((value) => !value)}
            >
              <span>Why Patriot</span>
              <svg
                className={`${styles.chevron} ${whyPatriotOpen ? styles.chevronOpen : ""}`}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence>
              {whyPatriotOpen ? (
                <motion.div
                  className={styles.megaMenu}
                  initial={reduce ? false : { opacity: 0, y: 10, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.99 }}
                  transition={{ duration: 0.22, ease }}
                >
                  <div className={styles.megaGrid}>
                    <div className={styles.megaCol}>
                      <p className={styles.megaHeading}>Our Approach</p>
                      <Link href="/about" className={styles.megaItem}>
                        <span className={styles.megaTitle}>About Patriot</span>
                        <span className={styles.megaDesc}>Our mission, clinical ethos & modern healthcare standards</span>
                      </Link>
                      <Link href="/how-it-works" className={styles.megaItem}>
                        <span className={styles.megaTitle}>How Care Works</span>
                        <span className={styles.megaDesc}>3-step online consultation, prescription & free delivery</span>
                      </Link>
                      <Link href="/about#experts" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Clinician Team</span>
                        <span className={styles.megaDesc}>Board-certified US clinicians specializing in men's health</span>
                      </Link>
                    </div>

                    <div className={styles.megaCol}>
                      <p className={styles.megaHeading}>Safety & Quality</p>
                      <Link href="/safety" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Regulated Standards</span>
                        <span className={styles.megaDesc}>FDA-approved medications & certified pharmacy partners</span>
                      </Link>
                      <Link href="/safety#prescribing" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Safe Prescribing</span>
                        <span className={styles.megaDesc}>Thorough medical evaluations & ongoing physician monitoring</span>
                      </Link>
                      <Link href="/safety#pharmacy" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Discreet Fulfillment</span>
                        <span className={styles.megaDesc}>Plain unbranded packaging delivered directly to your door</span>
                      </Link>
                    </div>

                    <div className={styles.megaCol}>
                      <p className={styles.megaHeading}>Health & Advice</p>
                      <Link href="/guides" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Evidence-Based Guides</span>
                        <span className={styles.megaDesc}>Clinical insights on testosterone, hair loss & longevity</span>
                      </Link>
                      <Link href="/guides#help" className={styles.megaItem}>
                        <span className={styles.megaTitle}>Help & Support</span>
                        <span className={styles.megaDesc}>FAQs, dosing guidance & direct clinician messaging</span>
                      </Link>
                      <Link href="/treatments" className={styles.megaItem}>
                        <span className={styles.megaTitle}>All Treatments</span>
                        <span className={styles.megaDesc}>Explore our full catalog of clinical formulations</span>
                      </Link>
                    </div>

                    <div className={styles.megaCardCol}>
                      <Link href="/start" className={styles.megaCard}>
                        <div className={styles.megaCardMedia}>
                          <Image
                            src={media.lifestyle.whyPatriotCard}
                            alt="Patriot Clinical Care"
                            fill
                            sizes="320px"
                            className={styles.megaCardImg}
                          />
                          <div className={styles.megaCardOverlay} />
                          <span className={styles.megaCardBadge}>Clinical Care</span>
                        </div>
                        <div className={styles.megaCardBody}>
                          <h4 className={styles.megaCardTitle}>Why 10,000+ Men Choose Patriot</h4>
                          <p className={styles.megaCardText}>
                            Licensed medical providers, 100% online evaluations, and genuine FDA-approved treatments.
                          </p>
                          <span className={styles.megaCardCta}>
                            Start Free Consult <span aria-hidden>→</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? styles.active : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link href="/start" className={styles.cta}>
            Get started
            <span aria-hidden>→</span>
          </Link>
        </div>

        <button
          type="button"
          className={`${styles.menuBtn} ${open ? styles.menuOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className={styles.mobile}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease }}
          >
            <div className={styles.mobileBlock}>
              <p className={styles.mobileLabel}>What we treat</p>
              <nav aria-label="Programmes">
                {categories.map((category) => (
                  <Link key={category.id} href={`/${category.id}`}>
                    <span>{category.shortName}</span>
                    <span className={styles.mobileSub}>{category.tagline}</span>
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.mobileBlock}>
              <p className={styles.mobileLabel}>Why Patriot</p>
              <nav aria-label="Why Patriot Mobile">
                <Link href="/about">About Patriot</Link>
                <Link href="/how-it-works">How care works</Link>
                <Link href="/safety">Safety & Regulations</Link>
                <Link href="/guides">Health Guides & Advice</Link>
              </nav>

              <Link href="/start" className={styles.mobileFeatureCard}>
                <div className={styles.mobileFeatureMedia}>
                  <Image
                    src={media.lifestyle.whyPatriotCard}
                    alt="Patriot Clinical Care"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className={styles.mobileFeatureImg}
                  />
                  <div className={styles.mobileFeatureOverlay} />
                  <span className={styles.mobileFeatureBadge}>Clinical Care</span>
                </div>
                <div className={styles.mobileFeatureBody}>
                  <h4 className={styles.mobileFeatureTitle}>Why 10,000+ Men Choose Patriot</h4>
                  <p className={styles.mobileFeatureText}>
                    100% online doctor consults, FDA-approved care & discreet shipping.
                  </p>
                  <span className={styles.mobileFeatureCta}>
                    Start Free Consult <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </div>

            <nav aria-label="Mobile" className={styles.mobileSecondary}>
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link href="/start" className={styles.mobileCta}>
              Get started
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
