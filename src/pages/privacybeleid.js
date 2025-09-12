import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";

export default function Privacybeleid() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
        <title>Privacybeleid | AutoDraadloos.nl</title>
        <meta name="description" content="Lees het privacybeleid van AutoDraadloos. Wij leggen uit hoe wij omgaan met uw gegevens bij de installatie van Apple CarPlay en Android Auto, en hoe wij uw privacy beschermen."/>
        <meta name="keywords" content="privacybeleid, AutoDraadloos, persoonsgegevens, privacy, Apple CarPlay, Android Auto"/>
        <meta property="og:title" content="Privacybeleid | AutoDraadloos.nl"/>
        <meta property="og:description" content="Ontdek hoe AutoDraadloos omgaat met uw persoonsgegevens. Transparant en veilig bij installatie van Apple CarPlay en Android Auto."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/privacybeleid"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Privacybeleid"/>

      <div className="privacybeleid">
        <p>Wordt aan gewerkt...</p>
      </div>
    </>
  );
}
