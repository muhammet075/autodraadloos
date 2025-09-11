import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/autocategorie/productpagina.module.css";
import Pagehero from "@/components/pagehero";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import greenCheck from "@/assets/icons/greencheck.svg";
import betalingIco from "@/assets/icons/betaling.svg";
import garantieIco from "@/assets/icons/garantie.svg";
import montagebijuIco from "@/assets/icons/montagebiju.svg";
import draadloosIco from "@/assets/icons/draadloos.svg";
import whatsappIco from "@/assets/icons/whatsapp.svg";
import offerteIco from "@/assets/icons/offerte.svg";
import mailIco from "@/assets/icons/mail.svg";
import closeIco from "@/assets/icons/close.svg";
import Diensten from "@/components/diensten";
import Waarom from "@/components/waarom";

export default function BKlasse() {
  useEffect(() => {
  });

  function maakAfspraak(){
    document.querySelector(".afspraakcontainer").classList.remove("displaynone");
  }

  const modellen = [
    {
        bouwjaren: "Bouwjaren: 2004 t/m 2012",
        naam: "B-Klasse W169",
    },
    {
        bouwjaren: "Bouwjaren: 2012 t/m 2018",
        naam: "B-Klasse W176",
    },
    {
        bouwjaren: "Bouwjaren: 2018 t/m heden",
        naam: "B-Klasse W177"
    }
  ];


  const images = [
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-1.png",
    originalAlt: "Apple CarPlay in een CLA",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-1.png",
    thumbnailAlt: "Apple CarPlay in een CLA",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-2.png",
    originalAlt: "Apple CarPlay in een GLA",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-2.png",
    thumbnailAlt: "Apple CarPlay in een GLA",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-3.png",
    originalAlt: "Apple CarPlay in een A-Klasse",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-3.png",
    thumbnailAlt: "Apple CarPlay in een A-Klasse",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-4.png",
    originalAlt: "Groter scherm met Apple CarPlay in een A-Klasse",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-4.png",
    thumbnailAlt: "Groter scherm met Apple CarPlay in een A-Klasse",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-5.png",
    originalAlt: "Apple CarPlay in een GLA",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-5.png",
    thumbnailAlt: "Apple CarPlay in een GLA",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-6.png",
    originalAlt: "Apple CarPlay in een A-Klasse",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-6.png",
    thumbnailAlt: "Apple CarPlay in een A-Klasse",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-7.png",
    originalAlt: "Apple CarPlay in een CLA",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-7.png",
    thumbnailAlt: "Apple CarPlay in een CLA",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-8.png",
    originalAlt: "Apple CarPlay uitleg",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-8.png",
    thumbnailAlt: "Apple CarPlay uitleg",
    thumbnailTitle: "Apple CarPlay",
    },
    {
    original: "/mercedes/a-b-cla-gla-klasse/carplay-9.png",
    originalAlt: "Apple CarPlay uitleg",
    originalTitle: "Apple CarPlay",
    thumbnail: "/mercedes/a-b-cla-gla-klasse/carplay-9.png",
    thumbnailAlt: "Apple CarPlay uitleg",
    thumbnailTitle: "Apple CarPlay",
    },
];



function checkOpties(e) {
    const gekozenModel = e.target.value;

    const opties = {
        "B-Klasse W169": [
            { 
                tekst: "Nieuwe groter scherm + Apple CarPlay en Android Auto", 
                prijs: "€ 450,-" 
            }
        ],

        "B-Klasse W176": [
            { 
                tekst: "Apple CarPlay en Android Auto op het originele scherm", 
                prijs: "€ 300,-" 
            },
            { 
                tekst: "Nieuwe groter scherm + Apple CarPlay en Android Auto", 
                prijs: "Vanaf € 800,-" 
            }
        ],

        "B-Klasse W177": [
            { 
                tekst: "Apple CarPlay en Android Auto op het originele scherm", 
                prijs: "€ 500,-" 
            }
        ]
    };

    document.querySelector(".beschibaarheidtitel").classList.remove("displaynone");
    document.querySelectorAll(".beschikbareoptie1, .beschikbareoptie2")
    .forEach((el, i) => {
        const o = (opties[gekozenModel] || [])[i];
        el.classList.toggle("displaynone", !o);
        if (o) el.querySelectorAll("p")[0].textContent = o.tekst,
            el.querySelectorAll("p")[1].textContent = o.prijs;
    });
};


  
  return (
    <>
        <Head>
            <title>Mercedes B-Klasse Apple CarPlay / Android Auto inbouwen</title>
            <meta name="description" content="Laat Apple CarPlay & Android Auto professioneel inbouwen in uw Mercedes-Benz B-Klasse bij AutoDraadloos.nl. Snelle installatie, kwaliteit gegarandeerd."/>
            <meta name="keywords" content="Mercedes-Benz B-Klasse, W169, W176, W177, CarPlay, Android Auto, auto installatie, AutoDraadloos, autoradio, scherm"/>
            <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz B-Klasse"/>
            <meta property="og:description" content="Professionele installatie van Apple CarPlay & Android Auto voor uw Mercedes-Benz B-Klasse bij AutoDraadloos.nl. Vraag direct een offerte aan."/>
            <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/b-klasse/"/>
            <meta property="og:type" content="website"/>
        </Head>


      <Pagehero pagetitle="B-Klasse"/>

      <div className={styles.productpagina}>

        <div>

            <div className={styles.productfotos}>
                <ImageGallery items={images} showPlayButton={false}/>
            </div>

            <div className={styles.productgegevens}>
                <h2>Apple CarPlay & Android Auto voor de B-Klasse</h2>

                <ul>
                    <li><Image src={greenCheck} alt="Check icoon"/>Vakkundig montage</li>
                    <li><Image src={greenCheck} alt="Check icoon"/>Draadloos verbinden</li>
                    <li><Image src={greenCheck} alt="Check icoon"/>Prijzen zijn inclusief montage</li>
                    <li><Image src={greenCheck} alt="Check icoon"/>Montage voor jouw deur mogelijk</li>
                    <li><Image src={greenCheck} alt="Check icoon"/>Gratis omruil en geld terug garantie</li>
                    <li><Image src={greenCheck} alt="Check icoon"/>Originele functies blijven beschikbaar</li>
                </ul>

                <div className={styles.producticons}>
                    <Image src={draadloosIco} alt="Draadloos verbinden"/>
                    <Image src={montagebijuIco} alt="Montage mogelijk bij u"/>
                    <Image src={garantieIco} alt="Garantie inbegrepen"/>
                    <Image src={betalingIco} alt="Betalen na installatie"/>
                </div>

                <select onChange={checkOpties} defaultValue="">
                    <option value="" disabled>Selecteer een model...</option>
                    {modellen.map((model, index) => (
                        <option key={index} value={model.naam}>
                        {model.naam} ({model.bouwjaren})
                        </option>
                    ))}
                </select>

                <div className={styles.prijzen}>
                    <p className="beschibaarheidtitel displaynone">Beschikbaar voor uw gekozen model:</p>

                    <div className="beschikbareoptie1 displaynone">
                        <span>Optie 1:</span>
                        <p></p><p></p>
                    </div>

                    <div className="beschikbareoptie2 displaynone">
                        <span>Optie 2:</span>
                        <p></p><p></p>
                    </div>
                </div>

                <button onClick={maakAfspraak}>Maak afspraak</button>

            </div>
        </div>    

      </div>

        <div className={`${styles.afspraak} afspraakcontainer displaynone`} onClick={e => e.target === e.currentTarget && e.currentTarget.classList.toggle("displaynone")}>
            <Image src={closeIco} alt="Sluiten icoon"/>
            <div>
                <h2>Hoe wilt u ons bereiken?</h2>
                <ul>
                <li>
                    <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31657836190" title="WhatsApp">
                    <Image src={whatsappIco} alt="Logo van WhatsApp" /> WhatsApp
                    </Link>
                </li>
                <li>
                    <Link target="_blank" href="mailto:info@autodraadloos.nl" title="E-Mail">
                    <Image src={mailIco} alt="Mail icoon" /> E-Mail
                    </Link>
                </li>
                <li>
                    <Link target="_blank" href="/offerte" title="Offerte formulier">
                    <Image src={offerteIco} alt="Offerte icoon" /> Offerte formulier
                    </Link>
                </li>
                </ul>
                <section>
                    <p>U kunt ons ook bellen op:</p>
                    <p>06 57 83 61 90</p>
                </section>
            </div>
        </div>

        <Diensten/>
        <Waarom/>
        
    </>
  );
}
