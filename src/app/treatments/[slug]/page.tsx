import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import styles from "./product.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Treatment" };
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <article className={styles.page}>
      <div className={styles.hero}>
        <Reveal className={styles.media}>
          <Image
            src={product.image}
            alt={`${product.name} product`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 48vw"
            className={styles.image}
          />
        </Reveal>

        <Reveal className={styles.copy} delay={0.08}>
          <p className={styles.kicker}>{product.category}</p>
          <h1>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.format}>{product.format} · Rx Only</p>
          <p className={styles.summary}>{product.summary}</p>
          <div className={styles.actions}>
            <Link href="/start" className={styles.primary}>
              Start evaluation
            </Link>
            <Link href="/treatments" className={styles.secondary}>
              All treatments
            </Link>
          </div>
        </Reveal>
      </div>

      <div className={styles.details}>
        <Stagger className={styles.panels}>
          <StaggerItem className={styles.panel}>
            <h2>Benefits</h2>
            <ul>
              {product.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </StaggerItem>
          <StaggerItem className={styles.panel}>
            <h2>Ideal for</h2>
            <ul>
              {product.idealFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </StaggerItem>
        </Stagger>
      </div>

      {related.length > 0 ? (
        <section className={styles.related}>
          <Reveal>
            <h2>Related in {product.category}</h2>
          </Reveal>
          <Stagger className={styles.relatedGrid}>
            {related.map((item) => (
              <StaggerItem key={item.id}>
                <Link href={`/treatments/${item.id}`} className={styles.relatedItem}>
                  <div className={styles.relatedMedia}>
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                      className={styles.relatedImage}
                    />
                  </div>
                  <div>
                    <p>{item.category}</p>
                    <h3>{item.name}</h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </section>
      ) : null}
    </article>
  );
}
