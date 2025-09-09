import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/autocategorie/productpagina.module.css";
import Pagehero from "@/components/pagehero";
import mercedesLogo from "@/assets/automerken/mercedes-benz.svg";
import aKlasseImg from "@/assets/mercedes/mercedes-benz-a-klasse.png";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export default function AKlasse() {
  useEffect(() => {
  });

  const modellen = [
    {
        bouwjaren: "Bouwjaren: 2004 t/m 2012",
        naam: "A-Klasse W169",
    },
    {
        bouwjaren: "Bouwjaren: 2012 t/m 2018",
        naam: "A-Klasse W176",
    },
    {
        bouwjaren: "Bouwjaren: 2018 t/m heden",
        naam: "A-Klasse W177"
    }
  ];


  const images = [
  {
    original: "/mercedes/a-klasse/3.png",
    originalAlt: "yok",
    originalTitle: "",
    thumbnail: "/mercedes/a-klasse/3.png",
    thumbnailAlt: "",
    thumbnailTitle: "",
  },
    {
    original: "/mercedes/a-klasse/w176-groiterscherm.jpeg",
    originalAlt: "yok",
    originalTitle: "",
    thumbnail: "/mercedes/a-klasse/w176-groiterscherm.jpeg",
    thumbnailAlt: "",
    thumbnailTitle: "",
  },
  {
    original: "/mercedes/a-klasse/2.png",
    originalAlt: "yok",
    originalTitle: "",
    thumbnail: "/mercedes/a-klasse/2.png",
    thumbnailAlt: "",
    thumbnailTitle: "",
  },
  {
    original: "/mercedes/a-klasse/1.png",
    originalAlt: "yok",
    originalTitle: "",
    thumbnail: "/mercedes/a-klasse/1.png",
    thumbnailAlt: "",
    thumbnailTitle: "",
  },
  {
    original: "/mercedes/a-klasse/4.PNG",
    originalAlt: "yok",
    originalTitle: "",
    thumbnail: "/mercedes/a-klasse/4.PNG",
    thumbnailAlt: "",
    thumbnailTitle: "",
  },
];

  
  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | Mercedes-Benz A-Klasse CarPlay</title>
        <meta name="description" content=""/>
        <meta name="keywords" content=""/>
        <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz"/>
        <meta property="og:description" content=""/>
        <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/a-klasse/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="A-Klasse"/>

      <div className={styles.productpagina}>

        <div>

            <div className={styles.productfotos}>
                <ImageGallery items={images} />
            </div>

            <div className={styles.productgegevens}>
                <h2>Apple CarPlay & Android Auto voor de A-Klasse</h2>

                <ul>
                    <li>De beste kwaliteit</li>
                    <li>Vakkundig montage</li>
                    <li>Draadloos verbinden</li>
                    <li>Montage voor jouw deur mogelijk</li>
                    <li>Orignele functies blijven beschikbaar</li>
                    <li>Half jaar lang gratis omruil en/of geld terug garantie!</li>
                </ul>

                <select defaultValue="">
                    <option value="" disabled>
                        Selecteer een model...
                    </option>
                    {modellen.map((model, index) => (
                        <option key={index} value={model.naam}>
                        {model.naam} ({model.bouwjaren})
                        </option>
                    ))}
                </select>

            </div>
        </div>    

      </div>
    </>
  );
}
