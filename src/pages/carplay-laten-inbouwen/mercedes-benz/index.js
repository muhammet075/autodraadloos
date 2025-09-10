import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/autocategorie/autocategorie.module.css";
import Pagehero from "@/components/pagehero";
import mercedesLogo from "@/assets/automerken/mercedes-benz.svg";
import aKlasseImg from "@/assets/mercedes/mercedes-benz-a-klasse.png";
import bKlasseImg from "@/assets/mercedes/mercedes-benz-b-klasse.png";
import cKlasseImg from "@/assets/mercedes/mercedes-benz-c-klasse.png";
import eKlasseImg from "@/assets/mercedes/mercedes-benz-e-klasse.png";
import claImg from "@/assets/mercedes/mercedes-benz-cla.png";
import clsImg from "@/assets/mercedes/mercedes-benz-cls.png";
import glaImg from "@/assets/mercedes/mercedes-benz-gla.png";
import glcImg from "@/assets/mercedes/mercedes-benz-glc.png";
import gleImg from "@/assets/mercedes/mercedes-benz-gle.png";
import glkImg from "@/assets/mercedes/mercedes-benz-glk.png";
import glsImg from "@/assets/mercedes/mercedes-benz-gls.png";
import sKlasseImg from "@/assets/mercedes/mercedes-benz-s-klasse.png";
import sprinterImg from "@/assets/mercedes/mercedes-benz-sprinter.png";
import vKlasseImg from "@/assets/mercedes/mercedes-benz-v-klasse.png";
import vitoImg from "@/assets/mercedes/mercedes-benz-vito.png";


export default function MercedesBenz() {
  useEffect(() => {
  });

  const mercedesModellen = [
  { name: "A-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/a-klasse", image: aKlasseImg },
  { name: "B-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/b-klasse", image: bKlasseImg },
  { name: "C-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/c-klasse", image: cKlasseImg },
  { name: "E-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/e-klasse", image: eKlasseImg },
  { name: "CLA", slug: "/carplay-laten-inbouwen/mercedes-benz/cla", image: claImg },
  { name: "CLS", slug: "/carplay-laten-inbouwen/mercedes-benz/cls", image: clsImg },
  { name: "GLA", slug: "/carplay-laten-inbouwen/mercedes-benz/gla", image: glaImg },
  { name: "GLC", slug: "/carplay-laten-inbouwen/mercedes-benz/glc", image: glcImg },
  { name: "GLE", slug: "/carplay-laten-inbouwen/mercedes-benz/gle", image: gleImg },
  { name: "GLK", slug: "/carplay-laten-inbouwen/mercedes-benz/glk", image: glkImg },
  { name: "GLS", slug: "/carplay-laten-inbouwen/mercedes-benz/gls", image: glsImg },
  { name: "S-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/s-klasse", image: sKlasseImg },
  { name: "Sprinter", slug: "/carplay-laten-inbouwen/mercedes-benz/sprinter", image: sprinterImg },
  { name: "V-Klasse", slug: "/carplay-laten-inbouwen/mercedes-benz/v-klasse", image: vKlasseImg },
  { name: "Vito", slug: "/carplay-laten-inbouwen/mercedes-benz/vito", image: vitoImg },
];


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
        
        <div>
          <section>
            <Image src={mercedesLogo} alt="Logo van Mercedes-Benz"/>
          </section>
          <section className={styles.seo}>
            <h2>Kies uw uitvoering</h2>
            <p>Wil je <b>Apple CarPlay</b> en <b>Android Auto</b> in je <b>Mercedes-Benz</b> met een <b>groter scherm</b>? Zo kun je makkelijk bellen, muziek luisteren en navigeren. Kies hieronder je <b>Mercedes-Benz</b> uitvoering en maak je rit handiger.</p>
          </section>
        </div>
        
        <div>
          {mercedesModellen.map((model) => (
            <Link key={model.slug} href={`/${model.slug}`} title={`Mercedes-Benz ${model.name}`}>
              <Image src={model.image} alt={`Mercedes-Benz ${model.name}`}/>
              <h3 className="mt-2 text-center">{model.name}</h3>
            </Link>
          ))}
        </div>

        <div className={styles.seo}>
          <h2>Mercedes-Benz Apple CarPlay en Android Auto</h2>
          <p>Bij AutoDraadloos kan je <b>Mercedes-Benz</b> eenvoudig worden uitgerust met <b>Apple CarPlay</b> en <b>Android Auto</b>. Of je nu je originele scherm wilt behouden of liever een <b>groter scherm</b> met <b>CarPlay</b> wilt laten inbouwen, wij regelen het allemaal vakkundig en veilig. Zo kan je vanaf nu draadloos je telefoon verbinden of via een USB-kabel (USB-kabel is extra, u kunt altijd draadloos verbinden) navigeren, muziek luisteren en bellen, zonder dat je last hebt van ingewikkelde instellingen.</p>

          <h3>Voor welke Mercedes-Benz modellen?</h3>
          <p>We werken met vrijwel alle <b>Mercedes-Benz</b> modellen van de laatste jaren. Denk aan de populaire <b>C-Klasse</b> en <b>E-Klasse</b>, maar ook aan luxe modellen zoals <b>S-Klasse</b>, <b>CLS-Klasse</b> en <b>SLK-Klasse</b>. Natuurlijk horen ook de compacte <b>A-Klasse</b> en <b>B-Klasse</b>, de stijlvolle <b>CLA-Klasse</b> en <b>GLA-Klasse</b>, en de grotere modellen zoals <b>GLS-Klasse</b>, <b>GLE-Klasse</b> en <b>G-Klasse</b> erbij. Voor elk model hebben wij een passende oplossing, zodat <b>Apple CarPlay</b> en <b>Android Auto</b> altijd optimaal werken.</p>

          <h3>Welke systemen ondersteunen we?</h3>
          <p>Onze service is beschikbaar voor <b>NTG 4.0</b>, <b>NTG 4.5</b>, <b>NTG 4.7</b> en <b>NTG 5.0</b> systemen, waardoor vrijwel alle <b>Mercedes-Benz</b> modellen van 2006 tot en met 2019 kunnen worden voorzien van <b>Apple CarPlay</b> en <b>Android Auto</b>. Afhankelijk van het type en model van je auto kunnen we de functies direct activeren op het originele scherm of een compacte <b>CarPlay</b>-box installeren. Deze box is discreet, neemt geen ruimte in, het wordt verstopt en zorgt ervoor dat alles snel en soepel werkt.</p>

          <h2>Hoe werkt montage en activatie?</h2>
          <p>De <b>montage</b> van <b>Apple CarPlay</b> en <b>Android Auto</b> doen wij altijd professioneel en met aandacht voor jouw auto. Onze compacte <b>CarPlay</b>-box wordt netjes ingebouwd en kan zowel draadloos via Bluetooth als met een USB-kabel worden aangesloten. Na de installatie werkt alles direct, en kan je meteen je favoriete apps gebruiken zoals navigatie, muziek, bellen en berichten. Zo blijft het dashboard van je <b>Mercedes-Benz</b> netjes en origineel, terwijl je alle moderne functies hebt.</p>

          <h3>Garantie en service</h3>
          <p>We staan achter onze service. Daarom krijg je bij AutoDraadloos altijd 6 maanden geld-terug-garantie en een gratis omruilgarantie als er onverhoopt iets niet helemaal goed zou werken. Zo weet je zeker dat je investering veilig is en dat je zonder zorgen van je nieuwe functies kan genieten. Onze monteurs zorgen ervoor dat alles perfect werkt en dat je auto weer helemaal in orde is.</p>

          <h3>Montage bij jou in de buurt op locatie</h3>
          <p>We komen door heel Nederland en België bij je langs voor <b>montage</b>, zodat je niet naar ons toe hoeft te rijden. De monteurs komen bij je thuis of op je werk en bouwen alles netjes in. Voor de reiskosten geldt een kleine meerprijs voor de brandstof, maar verder betaal je geen extra moeite. Zo kan je comfortabel blijven terwijl wij jouw <b>Mercedes-Benz</b> voorzien van de modernste functies zoals <b>Apple CarPlay</b> en <b>Android Auto</b>.</p>
        </div>

      </div>
    </>
  );
}
