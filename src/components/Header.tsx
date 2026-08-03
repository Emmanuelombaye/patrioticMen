"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { media } from "@/data/media";
import styles from "./Header.module.css";

const links = [
  { href: "/treatments", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
  { href: "/start", label: "Get started" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Patriot Men's Health home">
          <Image
            src={media.brand.mark}
            alt=""
            width={40}
            height={40}
            className={styles.mark}
            priority
          />
          <span className={styles.wordmark}>
            PATRIOT
            <em>MEN&apos;S HEALTH</em>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
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

        <Link href="/start" className={styles.cta}>
          Start evaluation
        </Link>

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
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className={styles.mobile}
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Mobile">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.35 }}
                >
                  <Link href={link.href}>{link.label}</Link>
                </motion.div>
              ))}
            </nav>
            <Link href="/start" className={styles.mobileCta}>
              Start free evaluation
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
