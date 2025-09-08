import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/vragen.module.css";
import Pagehero from "@/components/pagehero";

export default function veelgesteldeVragen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | Veelgestelde vragen</title>
        <meta name="description" content="Bekijk de veelgestelde vragen over het laten inbouwen van Apple CarPlay en Android Auto in uw auto. AutoDraadloos geeft heldere antwoorden en advies."/>
        <meta name="keywords" content="Veelgestelde vragen, Apple CarPlay installatie, Android Auto inbouwen, AutoDraadloos, auto multimedia, autoradio, navigatie, autoscherm"/>
        <meta property="og:title" content="AutoDraadloos.nl | FAQ over CarPlay & Android Auto inbouwen"/>
        <meta property="og:description" content="Heeft u vragen over Apple CarPlay of Android Auto installatie? Lees de veelgestelde vragen of neem contact op met AutoDraadloos voor persoonlijk advies."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/veelgestelde-vragen"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Veelgestelde vragen"/>

      <div className={styles.vragen}>
      </div>
    </>
  );
}
