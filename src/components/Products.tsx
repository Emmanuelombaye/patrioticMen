"use client";

import Image from "next/image";
import Link from "next/link";
import { products, type Product } from "@/data/products";
import { Reveal, Stagger, StaggerItem } from "./motion";
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
  heading = "Real solutions for real men.",
  lede = "Compounded protocols across weight loss, hormones, sexual health, recovery, and longevity—each labeled Rx Only and reviewed by licensed providers.",
  showHeader = true,
  limit,
}: ProductsProps) {
  const list = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={styles.section} id="treatments" aria-labelledby="treatments-heading">
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
          {list.map((product) => (
            <StaggerItem key={product.id}>
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
                </div>
                <div className={styles.meta}>
                  <span className={styles.category}>{product.category}</span>
                  <h3>{product.name}</h3>
                  <span className={styles.format}>{product.format}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {typeof limit === "number" ? (
          <Reveal className={styles.moreWrap}>
            <Link href="/treatments" className={styles.more}>
              Explore all treatments
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
