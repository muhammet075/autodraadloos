import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/pagehero.module.css";

function Pagehero({ pagetitle }) {
  return (
    <div className={`${styles.pagehero} pagehero-${pagetitle.toLowerCase()}`}>
      <div>
        <div>
          <section>
            <h1>{pagetitle}</h1>
            <ul className="breadcrumbs">
              <li><Link href="/">Home</Link></li>
              <li><Link href={`/${pagetitle.toLowerCase()}`}>{pagetitle}</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Pagehero;
