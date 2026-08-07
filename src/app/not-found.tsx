import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "grid",
        placeItems: "center",
        padding: "6rem 1.25rem 4rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "28rem" }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--brand-red)",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 6vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "0.85rem",
          }}
        >
          Page not found
        </h1>
        <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
          That route doesn&apos;t exist. Head back to programmes or start an evaluation.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "3rem",
              padding: "0 1.2rem",
              background: "var(--brand-red)",
              color: "var(--brand-white)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Go home
          </Link>
          <Link
            href="/treatments"
            style={{
              display: "inline-flex",
              alignItems: "center",
              minHeight: "3rem",
              padding: "0 1.2rem",
              borderBottom: "1px solid rgba(238,242,248,0.35)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Browse treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
