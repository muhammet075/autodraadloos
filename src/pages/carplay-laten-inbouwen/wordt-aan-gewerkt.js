import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/pages/carplay-inbouwen.module.css";
import Pagehero from "@/components/pagehero";

export default function WordtAanGewerkt() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | CarPlay & Android Auto inbouwen</title>
        <meta name="description" content="Deze pagina voor uw automerk wordt nog ontwikkeld. Wilt u alvast Apple CarPlay of Android Auto laten inbouwen? Vraag een offerte aan." />
        <meta name="keywords" content="CarPlay laten inbouwen, Android Auto installatie, Apple CarPlay auto, Mercedes-Benz, Audi, BMW, Volkswagen, Ford, AutoDraadloos" />
        <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto inbouwen per automerk" />
        <meta property="og:description" content="Deze pagina voor uw automerk wordt nog ontwikkeld. Ontdek alvast de mogelijkheden om Apple CarPlay of Android Auto in te laten bouwen." />
        <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/wordt-aan-gewerkt/"/>
        <meta property="og:type" content="website" />
      </Head>

      <Pagehero pagetitle="Wordt aan gewerkt" />

      <div className={styles.carplay}>
        <div>
          <h2>Deze pagina is nog in ontwikkeling</h2>
          <p>De pagina voor uw gekozen automerk wordt momenteel opgebouwd. Wilt u alvast een groter scherm, Apple CarPlay of Android Auto in uw voertuig laten inbouwen?</p><br/>
          <p>Vul dan ons offerteformulier in via de onderstaande knop.</p>
          <Link className={styles.knop} href="/offerte" title="Offerte aanvragen">Offerte aanvragen</Link>
        </div>
      </div>
    </>
  );
}
