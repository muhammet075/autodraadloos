import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/pages/carplay-inbouwen.module.css";
import Pagehero from "@/components/pagehero";
import mercedesBenzLogo from "@/assets/automerken/mercedes-benz.svg"
import bmwLogo from "@/assets/automerken/bmw.svg"
import audiLogo from "@/assets/automerken/audi.svg"
import volkswagenLogo from "@/assets/automerken/volkswagen.svg"
import volvoLogo from "@/assets/automerken/volvo.svg"
import seatLogo from "@/assets/automerken/seat.svg"
import skodaLogo from "@/assets/automerken/skoda.svg"
import fordLogo from "@/assets/automerken/ford.svg"
import fiatLogo from "@/assets/automerken/fiat.svg"
import toyotaLogo from "@/assets/automerken/toyota.svg"
import citroenLogo from "@/assets/automerken/citroen.svg"
import renaultLogo from "@/assets/automerken/renault.svg"
import peugeotLogo from "@/assets/automerken/peugeot.svg"
import nissanLogo from "@/assets/automerken/nissan.svg"
import opelLogo from "@/assets/automerken/opel.svg"
import hyundaiLogo from "@/assets/automerken/hyundai.svg"
import kiaLogo from "@/assets/automerken/kia.svg"
import hondaLogo from "@/assets/automerken/honda.svg"
import daciaLogo from "@/assets/automerken/dacia.svg"
import alfaRomeoLogo from "@/assets/automerken/alfa-romeo.svg"
import saabLogo from "@/assets/automerken/saab.svg"
import suzukiLogo from "@/assets/automerken/suzuki.svg"
import mazdaLogo from "@/assets/automerken/mazda.svg"
import mitsubishiLogo from "@/assets/automerken/mitsubishi.svg"


export default function CarPlayLatenInbouwen() {
  useEffect(() => {
  });

const autoMerken = [
  { name: "Mercedes-Benz", slug: "mercedes-benz", logo: mercedesBenzLogo },
  { name: "BMW", slug: "wordt-aan-gewerkt", logo: bmwLogo },
  { name: "Audi", slug: "wordt-aan-gewerkt", logo: audiLogo },
  { name: "Volkswagen", slug: "wordt-aan-gewerkt", logo: volkswagenLogo },
  { name: "Opel", slug: "wordt-aan-gewerkt", logo: opelLogo },
  { name: "Seat", slug: "wordt-aan-gewerkt", logo: seatLogo },
  { name: "Skoda", slug: "wordt-aan-gewerkt", logo: skodaLogo },
  { name: "Toyota", slug: "wordt-aan-gewerkt", logo: toyotaLogo },
  { name: "Volvo", slug: "wordt-aan-gewerkt", logo: volvoLogo },
  { name: "Ford", slug: "wordt-aan-gewerkt", logo: fordLogo },
  { name: "Fiat", slug: "wordt-aan-gewerkt", logo: fiatLogo },
  { name: "Citroën", slug: "wordt-aan-gewerkt", logo: citroenLogo },
  { name: "Renault", slug: "wordt-aan-gewerkt", logo: renaultLogo },
  { name: "Peugeot", slug: "wordt-aan-gewerkt", logo: peugeotLogo },
  { name: "Kia", slug: "wordt-aan-gewerkt", logo: kiaLogo },
  { name: "Nissan", slug: "wordt-aan-gewerkt", logo: nissanLogo },
  { name: "Hyundai", slug: "wordt-aan-gewerkt", logo: hyundaiLogo },
  { name: "Honda", slug: "wordt-aan-gewerkt", logo: hondaLogo },
  { name: "Dacia", slug: "wordt-aan-gewerkt", logo: daciaLogo },
  { name: "Suzuki", slug: "wordt-aan-gewerkt", logo: suzukiLogo },
  { name: "Mazda", slug: "wordt-aan-gewerkt", logo: mazdaLogo },
  { name: "Mitsubishi", slug: "wordt-aan-gewerkt", logo: mitsubishiLogo },
  { name: "Alfa Romeo", slug: "wordt-aan-gewerkt", logo: alfaRomeoLogo },
  { name: "Saab", slug: "wordt-aan-gewerkt", logo: saabLogo },
];

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

        <div>
          <h2>Kies het merk van uw auto</h2>
        </div>


        <div>
          {autoMerken.map((brand) => (
            <Link
              key={brand.slug}
              href={`/carplay-laten-inbouwen/${brand.slug}/`}
            >
              <Image src={brand.logo} alt={`Logo van ${brand.name}`} />
              <h3>{brand.name}</h3>
            </Link>
          ))}
        </div>
            
        
      </div>
    </>
  );
}
