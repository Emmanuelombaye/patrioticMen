"use client";

import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/data/products";
import { Reveal, Stagger, StaggerItem, scaleIn } from "./motion";
import styles from "./Programmes.module.css";

export function Programmes() {
  const [lead, ...rest] = categories;
  const leadMeds = getProductsByCategory(lead.id);

  return (
    <section className={styles.section} id="programmes" aria-labelledby="programmes-heading">
      <div className={styles.inner}>
        <Reveal>
          <header className={styles.header}>
            <p className={styles.kicker}>Proven solutions</p>
            <h2 id="programmes-heading">Clinically-guided programmes</h2>
            <p className={styles.lede}>
              Tell us what you&apos;d like support with. We&apos;ll guide you through the rest.
            </p>
          </header>
        </Reveal>

        <div className={styles.bento}>
          <Reveal className={styles.lead}>
            <Link href={`/${lead.id}`} className={styles.leadCard}>
              <div className={styles.leadMedia}>
                <Image
                  src={lead.image}
                  alt=""
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className={styles.leadImage}
                  priority
                />
                <span className={styles.leadVeil} aria-hidden />
              </div>
              <div className={styles.leadCopy}>
                <p className={styles.label}>{lead.shortName}</p>
                <h3>{lead.headline}</h3>
                <p className={styles.tagline}>{lead.tagline}</p>
                <div className={styles.leadProducts} aria-hidden>
                  {leadMeds.slice(0, 2).map((product) => (
                    <div key={product.id} className={styles.leadProduct}>
                      <Image
                        src={product.image}
                        alt=""
                        width={88}
                        height={88}
                        className={styles.leadProductImage}
                      />
                    </div>
                  ))}
                </div>
                <span className={styles.cta}>Explore programme</span>
              </div>
            </Link>
          </Reveal>

          <Stagger className={styles.grid}>
            {rest.map((category) => {
              const meds = getProductsByCategory(category.id);
              return (
                <StaggerItem key={category.id} variants={scaleIn}>
                  <Link href={`/${category.id}`} className={styles.card}>
                    <div className={styles.media}>
                      <Image
                        src={category.image}
                        alt=""
                        fill
                        sizes="(max-width: 700px) 100vw, 40vw"
                        className={styles.image}
                      />
                      <span className={styles.veil} aria-hidden />
                      {meds[0] ? (
                        <div className={styles.cardProduct} aria-hidden>
                          <Image
                            src={meds[0].image}
                            alt=""
                            width={72}
                            height={72}
                            className={styles.cardProductImage}
                          />
                        </div>
                      ) : null}
                    </div>
                    <div className={styles.meta}>
                      <p className={styles.label}>{category.shortName}</p>
                      <h3>{category.headline}</h3>
                      <p className={styles.tagline}>{category.tagline}</p>
                      <span className={styles.cta}>Explore programme</span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
