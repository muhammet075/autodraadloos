import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    const el = document.querySelector(".footerinstagram");
    if (el) el.classList.add("displaynone");

    // Cleanup: verwijder de class bij unmount of route change
    return () => {
      if (el) el.classList.remove("displaynone");
    };
  }, [router.pathname]);

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | Portfolio</title>
        <meta name="description" content="Bekijk ons portfolio van klanten die Apple CarPlay, Android Auto en grotere schermen in hun auto hebben laten inbouwen. AutoDraadloos levert professionele installatie voor diverse automerken." />
        <meta name="keywords" content="Portfolio, Apple CarPlay installatie, Android Auto inbouwen, AutoDraadloos, autoradio, navigatie, autoscherm, klantenervaringen" />
        <meta property="og:title" content="AutoDraadloos.nl | Portfolio CarPlay & Android Auto" />
        <meta property="og:description" content="Ontdek hoe AutoDraadloos klanten heeft geholpen met Apple CarPlay, Android Auto en grotere schermen in hun auto. Bekijk ons portfolio en laat u inspireren." />
        <meta property="og:url" content="https://www.autodraadloos.nl/portfolio/"/>
        <meta property="og:type" content="website" />
      </Head>

      <Pagehero pagetitle="Portfolio" />

      <div className="portfolio">
        <h2>Onze tevreden klanten</h2>
        <p>Hieronder ziet u een selectie van klanten die u zijn voorgegaan. Wij van AutoDraadloos zijn trots dat we zoveel klanten hebben kunnen voorzien van een groter scherm, Apple CarPlay of Android Auto. Wilt u ook uw auto upgraden met een groter scherm of CarPlay/Android Auto op uw originele scherm? Vul dan ons <Link href="/offerte" title="Offerte formulier">offerteformulier</Link> in en ontvang een vrijblijvende offerte.</p>
        <div className="elfsight-app-13e60a33-4a17-48d9-88c2-871c5823d4e6" data-elfsight-app-lazy></div>
      </div>
    </>
  );
}
