import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/contact.module.css";
import Pagehero from "@/components/pagehero";

export default function Contact() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | Contact</title>
        <meta name="description" content="Neem contact op met AutoDraadloos voor professionele installatie van Apple CarPlay en Android Auto in uw auto. Vraag vrijblijvend informatie of een offerte aan."/>
        <meta name="keywords" content="Contact, Apple CarPlay installatie, Android Auto inbouwen, AutoDraadloos, auto multimedia, autoradio, navigatie, autoscherm"/>
        <meta property="og:title" content="AutoDraadloos.nl | Contact & Offerte aanvragen"/>
        <meta property="og:description" content="Wilt u Apple CarPlay of Android Auto laten inbouwen? Neem contact op met AutoDraadloos voor advies, vragen of een vrijblijvende offerte."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/contact/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Contact"/>

      <div className={styles.contact}>
      </div>
    </>
  );
}
