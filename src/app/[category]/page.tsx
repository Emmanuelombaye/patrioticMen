import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StartCTA } from "@/components/StartCTA";
import { TrustpilotBanner } from "@/components/TrustpilotBanner";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  categories,
  getCategory,
  getProductsByCategory,
  type CategoryId,
} from "@/data/products";
import styles from "./category.module.css";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) return { title: "Programme" };

  const title = `${category.name} programme`;
  const description = category.summary;
  const path = `/${category.id}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Patriot Men's Health`,
      description,
      url: path,
      type: "website",
      images: [
        {
          url: category.image,
          alt: `${category.name} programme`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Patriot Men's Health`,
      description,
      images: [category.image],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: id } = await params;
  const category = getCategory(id);
  if (!category) notFound();

  const meds = getProductsByCategory(category.id as CategoryId);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Reveal className={styles.heroCopy}>
            <p className={styles.kicker}>{category.shortName}</p>
            <h1>{category.headline}</h1>
            <p className={styles.lede}>{category.summary}</p>
            <div className={styles.heroActions}>
              <Link href="/start" className={styles.primary}>
                Start free evaluation
              </Link>
              <a href="#medications" className={styles.secondary}>
                View medications
              </a>
            </div>
            <p className={styles.accent}>{category.accent}</p>
          </Reveal>

          <Reveal className={styles.heroMedia} delay={0.08}>
            <Image
              src={category.image}
              alt={`${category.name} programme`}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.heroImage}
            />
          </Reveal>
        </div>
      </section>

      <section className={styles.included}>
        <div className={styles.wrap}>
          <Reveal>
            <h2>What&apos;s built into every programme</h2>
          </Reveal>
          <Stagger className={styles.includedGrid}>
            {category.whatsIncluded.map((item) => (
              <StaggerItem key={item.title} className={styles.includedItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <TrustpilotBanner />

      <section className={styles.meds} id="medications">
        <div className={styles.wrap}>
          <Reveal>
            <header className={styles.medsHeader}>
              <p className={styles.kicker}>Medication options</p>
              <h2>Not every treatment looks the same</h2>
              <p>
                Your clinician will recommend the right option based on your history,
                goals, and clinical suitability.
              </p>
            </header>
          </Reveal>

          <Stagger className={styles.medsGrid}>
            {meds.map((product) => (
              <StaggerItem key={product.id}>
                <Link href={`/treatments/${product.id}`} className={styles.medCard}>
                  <div className={styles.medMedia}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className={styles.medImage}
                    />
                    <span className={styles.medStudio} aria-hidden />
                  </div>
                  <div className={styles.medMeta}>
                    <h3>{product.name}</h3>
                    <p className={styles.medTagline}>{product.tagline}</p>
                    <ul className={styles.medBenefits}>
                      {product.benefits.slice(0, 3).map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                    <div className={styles.medFooter}>
                      <span className={styles.medCta}>
                        View details
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
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
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.wrap}>
          <Reveal>
            <header className={styles.medsHeader}>
              <p className={styles.kicker}>How the programme works</p>
              <h2>From intake to ongoing support</h2>
            </header>
          </Reveal>
          <Stagger className={styles.stepsGrid}>
            {category.steps.map((step, index) => (
              <StaggerItem key={step.title} className={styles.step}>
                <span className={styles.stepNum}>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={styles.science}>
        <div className={styles.wrap}>
          <Reveal>
            <header className={styles.medsHeader}>
              <p className={styles.kicker}>The science</p>
              <h2>What you should understand</h2>
            </header>
          </Reveal>
          <Stagger className={styles.scienceGrid}>
            {category.science.map((item) => (
              <StaggerItem key={item.title} className={styles.scienceItem}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className={styles.faqs}>
        <div className={styles.wrapNarrow}>
          <Reveal>
            <header className={styles.medsHeader}>
              <p className={styles.kicker}>FAQs</p>
              <h2>Your questions answered</h2>
            </header>
          </Reveal>
          <div className={styles.faqList}>
            {category.faqs.map((faq) => (
              <Reveal key={faq.q} className={styles.faqItem}>
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StartCTA />
    </>
  );
}
