"use client";

import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/data/products";
import { Reveal } from "./motion";
import styles from "./FeaturedPromo.module.css";

export function FeaturedPromo() {
  const meds = getProductsByCategory("weight-loss").slice(0, 2);

  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <div className={styles.stage}>
        <div className={styles.backdrop}>
          <Image
            src="/programmes/weight-loss.png"
            alt=""
            fill
            sizes="100vw"
            className={styles.backdropImage}
            priority={false}
          />
          <span className={styles.backdropVeil} aria-hidden />
        </div>

        <div className={styles.inner}>
          <Reveal className={styles.copy}>
            <p className={styles.kicker}>Weight loss programme</p>
            <h2 id="featured-heading">More ways to lose weight</h2>
            <p>
              Semaglutide and Tirzepatide—physician review, discreet delivery,
              and support through the hard weeks.
            </p>
            <Link href="/weight-loss" className={styles.cta}>
              Explore weight loss
            </Link>
          </Reveal>

          <Reveal className={styles.vials} delay={0.1}>
            {meds.map((product, index) => (
              <Link
                key={product.id}
                href={`/treatments/${product.id}`}
                className={`${styles.vial} ${index === 1 ? styles.vialSecondary : ""}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 700px) 42vw, 220px"
                  className={styles.vialImage}
                />
                <span className={styles.vialName}>{product.name}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
