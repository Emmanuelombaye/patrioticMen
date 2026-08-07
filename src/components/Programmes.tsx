"use client";

import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/products";
import { Reveal, Stagger, StaggerItem, fadeUp } from "./motion";
import styles from "./Programmes.module.css";

export function Programmes() {
  return (
    <section className={styles.section} id="programmes" aria-labelledby="programmes-heading">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            <div>
              <p className={styles.kicker}>Proven solutions</p>
              <h2 id="programmes-heading">Clinically-guided programmes</h2>
              <p className={styles.lede}>
                Tell us what you&apos;d like support with. We&apos;ll guide you through the rest.
              </p>
            </div>
            <Link href="/treatments" className={styles.catalogLink}>
              View all treatments
              <span aria-hidden>→</span>
            </Link>
          </header>
        </Reveal>

        <Stagger className={styles.list}>
          {categories.map((category, index) => {
            const medCount = getProductsByCategory(category.id).length;
            const reverse = index % 2 === 1;
            const featured = index === 0;

            return (
              <StaggerItem key={category.id} variants={fadeUp}>
                <Link
                  href={`/${category.id}`}
                  className={[
                    styles.row,
                    reverse ? styles.rowReverse : "",
                    featured ? styles.rowFeatured : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.media}>
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      sizes={
                        featured
                          ? "(max-width: 900px) 100vw, 52vw"
                          : "(max-width: 900px) 100vw, 42vw"
                      }
                      className={styles.image}
                      priority={featured}
                    />
                    <span className={styles.veil} aria-hidden />
                    <span className={styles.index} aria-hidden>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className={styles.copy}>
                    <p className={styles.label}>{category.shortName}</p>
                    <h3>{category.headline}</h3>
                    <p className={styles.tagline}>{category.tagline}</p>
                    <p className={styles.meta}>
                      {medCount === 1 ? "1 treatment available" : `${medCount} treatments available`}
                    </p>
                    <span className={styles.cta}>
                      Explore programme
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
