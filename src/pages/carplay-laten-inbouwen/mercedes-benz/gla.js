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
import glaImg from "@/assets/mercedes/mercedes-benz-gla.png";
import Montage from "@/components/montage";

export default function Gla() {
  useEffect(() => {
  });

  function maakAfspraak(){
    document.querySelector(".afspraakcontainer").classList.remove("displaynone");
  }

  const modellen = [
    {
        bouwjaren: "Bouwjaren: 2014 t/m 2020",
        naam: "GLA X156",
    },

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
        "GLA X156": [
            { 
                tekst: "Apple CarPlay en Android Auto op het originele scherm", 
                prijs: "€ 300,-" 
            },
            { 
                tekst: "Nieuwe groter scherm + Apple CarPlay en Android Auto", 
                prijs: "Vanaf € 800,-" 
            }
        ],
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
            <title>Mercedes GLA Apple CarPlay / Android Auto inbouwen</title>
            <meta name="description" content="Laat Apple CarPlay & Android Auto professioneel inbouwen in uw Mercedes-Benz GLA bij AutoDraadloos.nl. Snelle installatie, kwaliteit gegarandeerd."/>
            <meta name="keywords" content="Mercedes-Benz GLA, W169, W176, W177, CarPlay, Android Auto, auto installatie, AutoDraadloos, autoradio, scherm"/>
            <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz GLA"/>
            <meta property="og:description" content="Professionele installatie van Apple CarPlay & Android Auto voor uw Mercedes-Benz GLA bij AutoDraadloos.nl. Vraag direct een offerte aan."/>
            <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/gla/"/>
            <meta property="og:type" content="website"/>
        </Head>


      <Pagehero pagetitle="GLA"/>

      <div className={styles.productpagina}>

        <div>

            <div className={styles.productfotos}>
                <ImageGallery items={images} showPlayButton={false}/>
            </div>

            <div className={styles.productgegevens}>
                <h2>Apple CarPlay & Android Auto voor de GLA</h2>

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

        <div className={styles.seo}>
            <div>
                <section>
                    <h2>Apple CarPlay en Android Auto upgrade voor de GLA X156</h2>
                    <p>Wilt u uw Mercedes-Benz GLA X156 voorzien van Apple CarPlay en Android Auto? Met deze upgrade gebruikt u uw smartphone eenvoudig via het originele scherm van uw auto.</p>
                    <p>Zo kunt u veilig navigeren, muziek afspelen en berichten ontvangen terwijl u rijdt, zonder dat de originele functies van uw GLA verloren gaan.</p>
                    <h3>CarPlay inbouwen op het originele scherm</h3>
                    <p>Onze monteurs installeren Apple CarPlay en Android Auto direct op het originele scherm van uw GLA X156. Uw menu, achteruitrijcamera en overige functies blijven volledig beschikbaar.</p>
                    <p>De installatie gebeurt snel en vakkundig, inclusief draadloze Bluetooth-verbinding en een optionele USB-aansluiting voor kabelgebruik.</p>
                </section>
                <section>
                    <Image src={glaImg} alt="Mercedes-Benz GLA X156" title="GLA X156"/>
                </section>
            </div>

            <div>
                <section>
                    <h2>Groot Android scherm upgrade voor uw GLA X156</h2>
                    <p>Wilt u een moderner en groter scherm in uw Mercedes GLA X156? Wij bouwen een luxe Android-scherm in dat volledig werkt met Apple CarPlay en Android Auto.</p>
                    <p>Het grotere scherm geeft een duidelijk overzicht en toegang tot apps zoals YouTube, Netflix en NPO, terwijl alle originele functies behouden blijven.</p>
                    <h3>Installatie van het grotere scherm in GLA X156</h3>
                    <p>Onze specialisten installeren het scherm professioneel, zodat alles direct werkt met uw bestaande systeem. Zo geniet u van een moderne en comfortabele rijervaring.</p>
                    <p>Extra opties zoals het koppelen van een dashcam zijn mogelijk, waarbij de beelden direct op het nieuwe scherm bekeken kunnen worden.</p>
                </section>
                <section>
                    <img src="/carplay-screenshot.png" alt="Screenshot van Apple CarPlay"/>
                </section>
            </div>
        </div>

        <Waarom/>
        <Diensten/>
        <Montage/>

    </>
  );
}
