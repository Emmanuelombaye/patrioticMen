"use client";

import { usePathname } from "next/navigation";
import { WhyPatriot } from "./WhyPatriot";

/** Trust hub before footer — skip conversion/legal pages to avoid noise. */
export function SiteTrust() {
  const pathname = usePathname();
  const hide =
    pathname === "/start" ||
    pathname.startsWith("/legal") ||
    pathname.startsWith("/treatments/");

  if (hide) return null;
  return <WhyPatriot />;
}
