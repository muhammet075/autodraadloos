import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/pagehero.module.css";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function Pagehero({ pagetitle }) {
  const router = useRouter();
  const segments = router.asPath.split("/").filter(Boolean);

  let path = "";
  const breadcrumbs = [
    <li key="home"><Link href="/">Home</Link></li>,
    ...segments.map((seg, i) => {
      path += `/${seg}`;
      if (i === segments.length - 1) {
        return <li key={seg}>{capitalize(seg)}</li>;
      }
      return (
        <li key={seg}>
          <Link href={path}>{capitalize(seg)}</Link>
        </li>
      );
    }),
  ];

  return (
    <div className={`${styles.pagehero} pagehero-${slugify(pagetitle)}`}>
      <div>
        <div>
          <section>
            <h1>{pagetitle}</h1>
            <ul className="breadcrumbs">
              {breadcrumbs}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Pagehero;
