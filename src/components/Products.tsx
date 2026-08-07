"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategory, products, type Product } from "@/data/products";
import { Magnetic, Reveal, Stagger, StaggerItem, scaleIn } from "./motion";
import styles from "./Products.module.css";

type ProductsProps = {
  items?: Product[];
  heading?: string;
  lede?: string;
  showHeader?: boolean;
  limit?: number;
};

export function Products({
  items = products,
  heading = "All treatments",
  lede = "Browse every physician-reviewed protocol—organized the way you actually choose care.",
  showHeader = true,
  limit,
}: ProductsProps) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={styles.section} id="treatments" aria-labelledby="treatments-heading">
      <div className={styles.orb} aria-hidden />
      <div className={styles.inner}>
        {showHeader ? (
          <Reveal>
            <header className={styles.header}>
              <p className={styles.kicker}>Treatments</p>
              <h2 id="treatments-heading">{heading}</h2>
              <p className={styles.lede}>{lede}</p>
            </header>
          </Reveal>
        ) : null}

        <Stagger className={styles.grid}>
          {list.map((product) => {
            const category = getCategory(product.categoryId);
            return (
              <StaggerItem key={product.id} variants={scaleIn}>
                <Link href={`/treatments/${product.id}`} className={styles.item}>
                  <div className={styles.media}>
                    <Image
                      src={product.image}
                      alt={`${product.name} product`}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className={styles.image}
                    />
                    <span className={styles.shine} aria-hidden />
                    <span className={styles.mediaVeil} aria-hidden />
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.category}>{category?.shortName ?? product.categoryId}</span>
                    <h3>{product.name}</h3>
                    <span className={styles.format}>{product.format}</span>
                    <span className={styles.ctaHint}>
                      Explore
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>

        {typeof limit === "number" ? (
          <Reveal className={styles.moreWrap}>
            <Magnetic>
              <Link href="/treatments" className={styles.more}>
                Explore all treatments
              </Link>
            </Magnetic>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
