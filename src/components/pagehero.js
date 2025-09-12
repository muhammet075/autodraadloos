import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/components/pagehero.module.css";

const BRAND_TOKENS = new Set([
  "mercedes",
  "benz",
  "bmw",
  "audi",
  "volkswagen",
  "vw",
  "porsche",
  "tesla",
  "ford",
  "toyota",
  "honda",
  "nissan",
  "kia",
  "hyundai",
  "opel",
  "seat",
  "skoda",
  "mini",
  "smart",
  "maybach",
]);

const SPECIAL_CASES = {
  carplay: "CarPlay",
  iphone: "iPhone",
  ipad: "iPad",
  ebay: "eBay",
};

function capitalizeWord(word) {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
}

function humanizeSegment(seg) {
  const decoded = decodeURIComponent(seg || "");
  const noExt = decoded.replace(/\.(html|php|asp|aspx)$/i, "");
  const parts = noExt.split("-");

  const mapped = parts.map((p) => {
    const lower = p.toLowerCase();
    if (SPECIAL_CASES[lower]) return SPECIAL_CASES[lower];
    return capitalizeWord(p);
  });

  if (parts.length === 1) return mapped[0] || "";

  if (parts.length === 2) {
    const [p0, p1] = parts.map((p) => p.toLowerCase());

    if (BRAND_TOKENS.has(p0) || BRAND_TOKENS.has(p1)) {
      return mapped.join("-");
    }

    if (p0.length === 1) {
      return mapped.join("-");
    }

    return mapped.join(" ");
  }

  return mapped.join(" ");
}

function slugify(str = "") {
  return String(str)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default function Pagehero({ pagetitle }) {
  const router = useRouter();

  const pathname = router.asPath.split(/[?#]/)[0];
  const segments = pathname.split("/").filter(Boolean);

  let path = "";
  const breadcrumbs = [
    <li key="home">
      <Link href="/">Home</Link>
    </li>,
    ...segments.map((seg, i) => {
      path += `/${seg}`;

      const isLast = i === segments.length - 1;
      const label = isLast && pagetitle ? pagetitle : humanizeSegment(seg);

      if (isLast) {
        return (
          <li key={`${seg}-${i}`} aria-current="page">
            {label}
          </li>
        );
      }

      return (
        <li key={`${seg}-${i}`}>
          <Link href={path}>{label}</Link>
        </li>
      );
    }),
  ];

  const title = pagetitle || (segments.length ? humanizeSegment(segments[segments.length - 1]) : "Home");

  return (
    <div className={`${styles.pagehero} pagehero-${slugify(title)}`}>
      <div>
        <div>
          <section>
            <h1>{title}</h1>
            <ul className="breadcrumbs">{breadcrumbs}</ul>
          </section>
        </div>
      </div>
    </div>
  );
}