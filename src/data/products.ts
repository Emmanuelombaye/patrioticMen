export type Product = {
  id: string;
  name: string;
  category: string;
  format: string;
  image: string;
  tagline: string;
  summary: string;
  benefits: string[];
  idealFor: string[];
};

export const products: Product[] = [
  {
    id: "semaglutide",
    name: "Semaglutide",
    category: "Weight Loss",
    format: "2 mL Vial · Multiple doses",
    image: "/products/semaglutide.jpeg",
    tagline: "Clinically guided GLP-1 support for lasting fat loss.",
    summary:
      "A physician-reviewed GLP-1 protocol designed to help regulate appetite and support sustainable weight reduction when medically appropriate.",
    benefits: [
      "Appetite regulation support",
      "Physician-titrated dosing",
      "Discreet home delivery",
    ],
    idealFor: ["Weight management", "Metabolic support", "Long-term body composition goals"],
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    category: "Weight Loss",
    format: "2 mL Vial · Multiple doses",
    image: "/products/tirzepatide.jpeg",
    tagline: "Advanced dual-pathway weight loss when prescribed.",
    summary:
      "A next-generation option for men seeking stronger metabolic support under licensed clinical supervision.",
    benefits: [
      "Dual-pathway metabolic support",
      "Personalized titration",
      "Ongoing provider follow-up",
    ],
    idealFor: ["Stubborn weight loss", "Appetite control", "Body recomposition"],
  },
  {
    id: "enclomiphene",
    name: "Enclomiphene",
    category: "Hormones",
    format: "30 count · Multiple doses",
    image: "/products/enclomiphene.jpeg",
    tagline: "Fertility-conscious hormone optimization.",
    summary:
      "Supports the body’s own testosterone pathways without traditional TRT shutdown—ideal for men who want performance and fertility considered together.",
    benefits: [
      "Supports natural testosterone pathways",
      "Fertility-conscious approach",
      "Oral capsule convenience",
    ],
    idealFor: ["Low energy", "Hormone balance", "Men prioritizing fertility"],
  },
  {
    id: "testosterone",
    name: "Testosterone Cypionate",
    category: "Hormones",
    format: "5 mL Vial · Multiple doses",
    image: "/products/testosterone.jpeg",
    tagline: "Classic TRT. Modern clinical oversight.",
    summary:
      "Traditional testosterone replacement for clinically appropriate candidates, reviewed and monitored by licensed U.S. providers.",
    benefits: [
      "Established TRT protocol",
      "Provider-guided dosing",
      "Discreet fulfillment",
    ],
    idealFor: ["Confirmed low testosterone", "Strength & recovery", "Drive and vitality"],
  },
  {
    id: "tadalafil",
    name: "Tadalafil",
    category: "Sexual Health",
    format: "30 count · Multiple doses",
    image: "/products/tadalafil.jpeg",
    tagline: "Reliable readiness when it matters.",
    summary:
      "A trusted PDE5 option for erectile support with flexible daily or as-needed protocols determined by your provider.",
    benefits: [
      "Long-lasting window of effect",
      "Flexible dosing strategies",
      "Private online evaluation",
    ],
    idealFor: ["Erectile support", "Confidence", "Spontaneity"],
  },
  {
    id: "hair-regrowth",
    name: "Minoxidil · Finasteride · Retinoic Acid",
    category: "Hair Regrowth",
    format: "Topical Solution · Rx Only",
    image: "/products/hair-regrowth.jpeg",
    tagline: "A compounded topical built for denser-looking hair.",
    summary:
      "A prescription topical combining clinically recognized actives for men focused on hair density and scalp health.",
    benefits: [
      "Multi-active topical formula",
      "Targeted scalp application",
      "Physician-reviewed access",
    ],
    idealFor: ["Thinning hair", "Hairline support", "Daily grooming routines"],
  },
  {
    id: "nad",
    name: "NAD+",
    category: "Longevity",
    format: "5 mL Vial · Multiple doses",
    image: "/products/nad.jpeg",
    tagline: "Cellular energy support for high-output living.",
    summary:
      "NAD+ protocols aimed at supporting cellular energy, focus, and long-game recovery under clinical guidance.",
    benefits: [
      "Cellular energy support",
      "Longevity-focused protocol",
      "Provider oversight",
    ],
    idealFor: ["Energy & focus", "Recovery", "Longevity routines"],
  },
  {
    id: "sermorelin",
    name: "Sermorelin",
    category: "Recovery",
    format: "5 mL Vial · Multiple doses",
    image: "/products/sermorelin.jpeg",
    tagline: "Recovery signaling for sleep, lean mass, and repair.",
    summary:
      "A peptide protocol used to support growth-hormone pathways related to recovery, body composition, and restorative sleep.",
    benefits: [
      "Recovery-focused peptide",
      "Sleep & repair support",
      "Clinically supervised use",
    ],
    idealFor: ["Training recovery", "Sleep quality", "Lean mass goals"],
  },
  {
    id: "glutathione",
    name: "Glutathione",
    category: "Recovery",
    format: "5 mL Vial · Multiple doses",
    image: "/products/glutathione.jpeg",
    tagline: "Antioxidant recovery for clearer performance days.",
    summary:
      "An antioxidant recovery option often used to support detox pathways, skin clarity, and post-stress rebound.",
    benefits: [
      "Antioxidant support",
      "Recovery-oriented protocol",
      "Discreet vial fulfillment",
    ],
    idealFor: ["Oxidative stress support", "Recovery days", "Wellness stacks"],
  },
];

export const categories = [
  "Weight Loss",
  "Hormones",
  "Sexual Health",
  "Hair Regrowth",
  "Longevity",
  "Recovery",
] as const;

export function getProduct(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}
