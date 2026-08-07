/** Site-wide SEO + social defaults. */
export const siteConfig = {
  name: "Patriot Men's Health",
  shortName: "Patriot",
  tagline: "Reclaim Your Edge",
  description:
    "Physician-guided men's health for weight loss, hormones, sexual wellness, hair regrowth, and longevity—reviewed by licensed U.S. providers and shipped discreetly nationwide.",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://patriotmensclinic.com",
  locale: "en_US",
  email: "jeff@patriotmensclinic.com",
  phone: "+16024321616",
  phoneDisplay: "+1 (602) 432-1616",
  keywords: [
    "men's health",
    "telehealth for men",
    "weight loss medication",
    "semaglutide",
    "tirzepatide",
    "testosterone therapy",
    "enclomiphene",
    "ED treatment",
    "tadalafil",
    "hair regrowth",
    "NAD+",
    "sermorelin",
    "longevity",
    "physician guided care",
    "Patriot Men's Health",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url;
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
