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
        <title>AutoDraadloos.nl | Apple CarPlay & Android Auto</title>
        <meta name="description" content="AutoDraadloos biedt professionele installatie van Apple CarPlay & Android Auto voor uw auto. Vraag direct informatie of een offerte aan."/>
        <meta name="keywords" content="Apple CarPlay, Android Auto, auto installatie, AutoDraadloos, navigatie, autoradio, autoscherm, scherm"/>
        <meta property="og:title" content="AutoDraadloos.nl | Apple CarPlay & Android Auto Installatie"/>
        <meta property="og:description" content="AutoDraadloos biedt professionele installatie van Apple CarPlay & Android Auto voor uw auto. Vraag direct informatie of een offerte aan."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/"/>
        <meta property="og:type" content="website"/>
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
