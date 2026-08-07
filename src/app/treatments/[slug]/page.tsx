import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { getCategory, getProduct, products } from "@/data/products";
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

  const category = getCategory(product.categoryId);
  const related = products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
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
          {category ? (
            <Link href={`/${category.id}`} className={styles.kicker}>
              {category.shortName}
            </Link>
          ) : (
            <p className={styles.kicker}>{product.categoryId}</p>
          )}
          <h1>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>
          <p className={styles.format}>{product.format} · Rx Only</p>
          <p className={styles.summary}>{product.summary}</p>
          <div className={styles.actions}>
            <Link href="/start" className={styles.primary}>
              Start evaluation
            </Link>
            {category ? (
              <Link href={`/${category.id}`} className={styles.secondary}>
                View programme
              </Link>
            ) : null}
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

      <section className={styles.info}>
        <div className={styles.infoInner}>
          <Reveal>
            <h2>How it works</h2>
            <p>{product.howItWorks}</p>
          </Reveal>

          <div className={styles.whoGrid}>
            <Reveal>
              <h3>Who it&apos;s for</h3>
              <ul>
                {product.whoItsFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <h3>Who it&apos;s not for</h3>
              <ul>
                {product.whoItsNotFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className={styles.faqBlock}>
            <Reveal>
              <h2>FAQs</h2>
            </Reveal>
            {product.faqs.map((faq) => (
              <Reveal key={faq.q} className={styles.faqItem}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className={styles.related}>
          <Reveal>
            <h2>Related in {category?.shortName ?? "this programme"}</h2>
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
                      sizes="160px"
                      className={styles.relatedImage}
                    />
                  </div>
                  <div>
                    <p>{category?.shortName}</p>
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
