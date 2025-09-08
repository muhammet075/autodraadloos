import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/carplay-inbouwen.module.css";
import Pagehero from "@/components/pagehero";

export default function CarPlayLatenInbouwen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | CarPlay laten inbouwen</title>
        <meta name="description" content="Laat Apple CarPlay of Android Auto professioneel inbouwen in uw auto. Kies eenvoudig uw automerk zoals Mercedes-Benz, Audi, BMW, Volkswagen, Ford en meer."/>
        <meta name="keywords" content="CarPlay laten inbouwen, Android Auto installatie, Apple CarPlay auto, Mercedes-Benz, Audi, BMW, Volkswagen, Ford, AutoDraadloos"/>
        <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto laten inbouwen per automerk"/>
        <meta property="og:description" content="Ontdek de mogelijkheden om CarPlay of Android Auto te laten inbouwen voor uw automerk. AutoDraadloos installeert o.a. in Mercedes-Benz, Audi, BMW, Volkswagen, Ford en meer."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="CarPlay laten inbouwen"/>

      <div className={styles.carplay}>
        <center><Link href="/carplay-laten-inbouwen/mercedes-benz">Mercedes-Benz</Link></center>
      </div>
    </>
  );
}
