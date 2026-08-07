import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/products";
import { media } from "@/data/media";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src={media.brand.logo}
            alt="Patriot Men's Health"
            width={220}
            height={80}
            className={styles.logo}
            style={{ width: "min(220px, 70%)", height: "auto" }}
          />
          <p>
            Modern men&apos;s health guided by licensed U.S. providers.
            Discreet shipping nationwide.
          </p>
        </div>

        <div className={styles.cols}>
          <div>
            <h2>What we treat</h2>
            {categories.map((category) => (
              <Link key={category.id} href={`/${category.id}`}>
                {category.shortName}
              </Link>
            ))}
          </div>
          <div>
            <h2>Navigate</h2>
            <Link href="/treatments">All treatments</Link>
            <Link href="/how-it-works">How it works</Link>
            <Link href="/safety">Patient safety</Link>
            <Link href="/guides">Advice & guides</Link>
            <Link href="/about">About</Link>
            <Link href="/start">Get started</Link>
          </div>
          <div>
            <h2>Contact</h2>
            <a href="mailto:jeff@patriotmensclinic.com">jeff@patriotmensclinic.com</a>
            <a href="tel:+16024321616">+1 (602) 432-1616</a>
          </div>
        </div>
      </div>

      <div className={styles.legal}>
        <p>
          Patriot Men&apos;s Health provides administrative and educational
          services connecting patients with licensed healthcare providers.
          Treatment eligibility is determined solely by licensed medical
          professionals. Results may vary and treatment is not guaranteed.
        </p>
        <p>© {new Date().getFullYear()} Patriot Men&apos;s Health. All rights reserved.</p>
      </div>
    </footer>
  );
}
