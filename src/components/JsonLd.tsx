import { siteConfig } from "@/lib/seo";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo.jpeg`,
    image: `${siteConfig.url}/brand/mark.jpeg`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    medicalSpecialty: [
      "Endocrinology",
      "Obesity Medicine",
      "Urology",
      "Dermatology",
    ],
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/logo.jpeg`,
      },
    },
    potentialAction: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/start`,
      actionPlatform: [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
