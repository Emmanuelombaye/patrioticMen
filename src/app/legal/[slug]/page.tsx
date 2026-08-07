import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/seo";
import styles from "../../shared.module.css";

const pages = {
  terms: {
    title: "Terms & conditions",
    description: `Terms governing use of ${siteConfig.name} digital services and care coordination.`,
    body: [
      `${siteConfig.name} provides administrative and educational services that connect patients with licensed healthcare providers. We do not practice medicine as a website.`,
      "By using this site, you agree to provide accurate information, use the service lawfully, and understand that eligibility for treatment is determined solely by licensed clinicians.",
      "Content on this website is for information only and is not a substitute for professional medical advice, diagnosis, or treatment.",
    ],
  },
  privacy: {
    title: "Privacy notice",
    description: `How ${siteConfig.name} handles personal and health-related information.`,
    body: [
      "We collect information you submit during evaluation and account communications so licensed providers can review eligibility and coordinate care.",
      "We use industry-standard safeguards and share information only as needed with licensed clinicians, pharmacy partners, and service providers supporting fulfillment.",
      `For privacy questions, contact ${siteConfig.email}.`,
    ],
  },
  cookies: {
    title: "Cookie policy",
    description: `How ${siteConfig.name} uses cookies and similar technologies.`,
    body: [
      "We use essential cookies to operate the site securely and remember basic preferences.",
      "Analytics cookies may be used to understand site performance and improve patient experience. You can control non-essential cookies through your browser settings.",
    ],
  },
  complaint: {
    title: "Make a complaint",
    description: `How to raise a concern with ${siteConfig.name}.`,
    body: [
      "If something did not meet the standard you expected, we want to know.",
      `Email ${siteConfig.email} or call ${siteConfig.phoneDisplay} with your name, the issue, and any relevant dates so we can investigate promptly.`,
      "Clinical decisions remain with licensed providers. We will help coordinate the right next step for service, fulfillment, or clinical follow-up.",
    ],
  },
} as const;

type PageKey = keyof typeof pages;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug as PageKey];
  if (!page) return { title: "Legal" };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/legal/${slug}` },
  };
}

export default async function LegalPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pages[slug as PageKey];
  if (!page) notFound();

  return (
    <>
      <PageHero kicker="Legal" title={page.title} lede={page.description} />
      <section className={styles.section}>
        <div className={`${styles.inner} ${styles.legalProse}`}>
          {page.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link href="/" className={styles.textLink}>
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
