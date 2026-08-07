import Link from "next/link";
import { siteConfig } from "@/lib/seo";
import styles from "./Footer.module.css";

const legalLinks = [
  { href: "/legal/terms", label: "Terms & conditions" },
  { href: "/legal/privacy", label: "Privacy notice" },
  { href: "/legal/cookies", label: "Cookie policy" },
  { href: "/legal/complaint", label: "Make a complaint" },
  { href: "/sitemap.xml", label: "Sitemap" },
] as const;

const badges = [
  "Licensed U.S. providers",
  "Discreet pharmacy fulfillment",
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <nav className={styles.legalNav} aria-label="Legal">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.badges}>
            {badges.map((badge) => (
              <span key={badge} className={styles.badge}>
                {badge}
              </span>
            ))}
            <div className={styles.rating}>
              <span className={styles.ratingStar} aria-hidden>
                ★
              </span>
              <div>
                <p className={styles.ratingLabel}>Excellence</p>
                <p className={styles.ratingMeta}>Member care standard</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.brandBlock}>
          <svg
            viewBox="0 0 1000 220"
            width="100%"
            className={styles.wordmarkSvg}
            aria-label={siteConfig.name}
            role="img"
          >
            <text
              x="50%"
              y="74%"
              textAnchor="middle"
              fill="#ffffff"
              textLength="960"
              lengthAdjust="spacingAndGlyphs"
              className={styles.wordmarkText}
            >
              patriot
            </text>
          </svg>
        </div>

        <div className={styles.fineprint}>
          <p>
            Copyright © {year} {siteConfig.name}. All rights reserved.{" "}
            {siteConfig.name} provides administrative and educational services
            connecting patients with licensed healthcare providers. Treatment
            eligibility is determined solely by licensed medical professionals.
            Results may vary and treatment is not guaranteed.
          </p>
          <p>
            Contact{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            {" · "}
            <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
