import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";

export default function AlgemeneVoorwaarden() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Algemene voorwaarden | AutoDraadloos.nl</title>
        <meta name="description" content="Lees de algemene voorwaarden van AutoDraadloos. Hier vindt u alle afspraken, rechten en plichten rondom de installatie van Apple CarPlay en Android Auto."/>
        <meta name="keywords" content="algemene voorwaarden, AutoDraadloos, voorwaarden, installatie, Apple CarPlay, Android Auto"/>
        <meta property="og:title" content="Algemene Voorwaarden | AutoDraadloos.nl"/>
        <meta property="og:description" content="Bekijk de algemene voorwaarden van AutoDraadloos. Transparant en duidelijk over onze diensten en installaties van Apple CarPlay en Android Auto."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/algemene-voorwaarden"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Algemene voorwaarden"/>

      <div className="algemenevoorwaarden">
        <p>Wordt aan gewerkt...</p>
      </div>
    </>
  );
}
