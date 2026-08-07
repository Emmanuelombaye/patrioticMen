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
  { href: "/treatments", label: "All treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);
  const reduce = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setProgrammesOpen(false);
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
        scrolled || !isHome ? styles.solid : "",
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
            width={36}
            height={36}
            className={styles.mark}
            priority
          />
          <span className={styles.wordmark}>PATRIOT</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
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
              What we treat
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
                      <em>{category.headline}</em>
                    </Link>
                  ))}
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
            <p className={styles.mobileLabel}>What we treat</p>
            <nav aria-label="Programmes">
              {categories.map((category) => (
                <Link key={category.id} href={`/${category.id}`}>
                  {category.shortName}
                </Link>
              ))}
            </nav>
            <nav aria-label="Mobile" className={styles.mobileSecondary}>
              {[...links, { href: "/start", label: "Get started" }].map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
