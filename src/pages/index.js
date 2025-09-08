import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/home.module.css";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>AutoDraadloos.nl</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <div className={styles.home}>
        <h1>Nieuwe website in aanbouw</h1>
        <p>De nieuwe website van AutoDraadloos wordt gebouwd! Wilt u Apple CarPlay / Android Auto in uw voertuig?</p><br/>
        <p>Klik hieronder om een offerte voor uw voertuig te krijgen.</p>
        <Link href="/offerte">Offerte</Link>
      </div>
    </>
  );
}
