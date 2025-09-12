import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";

export default function Cookiebeleid() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Cookiebeleid | AutoDraadloos.nl</title>
        <meta name="description" content="Lees het cookiebeleid van AutoDraadloos. Wij leggen uit welke cookies wij gebruiken, waarom we dat doen en hoe u uw cookie-instellingen kunt beheren."/>
        <meta name="keywords" content="cookiebeleid, AutoDraadloos, cookies, privacy, website cookies, Apple CarPlay, Android Auto"/>
        <meta property="og:title" content="Cookiebeleid | AutoDraadloos.nl"/>
        <meta property="og:description" content="Ontdek hoe AutoDraadloos cookies gebruikt om uw ervaring te verbeteren en hoe u uw cookievoorkeuren kunt aanpassen."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/cookiebeleid"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Cookiebeleid"/>

      <div className="cookiebeleid">
        <p>Wordt aan gewerkt...</p>
      </div>
    </>
  );
}
