import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/autocategorie/autocategorie.module.css";
import Pagehero from "@/components/pagehero";

export default function MercedesBenz() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | CarPlay laten inbouwen in Mercedes-Benz</title>
        <meta name="description" content="Laat Apple CarPlay of Android Auto professioneel inbouwen in uw Mercedes-Benz. AutoDraadloos verzorgt de installatie in diverse Mercedes-modellen met perfecte integratie."/>
        <meta name="keywords" content="Mercedes-Benz CarPlay, Mercedes CarPlay laten inbouwen, Mercedes Android Auto, CarPlay installatie Mercedes, AutoDraadloos"/>
        <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz"/>
        <meta property="og:description" content="Professionele installatie van Apple CarPlay en Android Auto in Mercedes-Benz. Geschikt voor diverse modellen, van A-Klasse tot S-Klasse. Vraag direct informatie of een offerte aan."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Mercedes-Benz"/>

      <div className={styles.autocategorie}>
        <p>test</p>
      </div>
    </>
  );
}
