import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/home.module.css";
import Homehero from "@/components/homehero.js";

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

      <Homehero/>

      <div className={styles.home}>
      </div>
    </>
  );
}
