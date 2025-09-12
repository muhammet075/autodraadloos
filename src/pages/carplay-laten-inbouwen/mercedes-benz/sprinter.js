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
import sprinterImg from "@/assets/mercedes/mercedes-benz-sprinter.png";
import Montage from "@/components/montage";

export default function Sprinter() {
  useEffect(() => {
  });

  function maakAfspraak(){
    document.querySelector(".afspraakcontainer").classList.remove("displaynone");
  }

  const modellen = [
    {
        bouwjaren: "Bouwjaren: 2006 t/m 2018",
        naam: "Sprinter NCV3",
    },
  ];


  const images = [
  {
    original: "/mercedes/sprinter/sprinter-1.png",
    originalAlt: "Apple CarPlay Mercedes-Benz Sprinter",
    originalTitle: "Apple CarPlay Mercedes-Benz Sprinter",
    thumbnail: "/mercedes/sprinter/sprinter-1.png",
    thumbnailAlt: "Apple CarPlay Mercedes-Benz Sprinter",
    thumbnailTitle: "Apple CarPlay Mercedes-Benz Sprinter",
  },
];


function checkOpties(e) {
    const gekozenModel = e.target.value;

    const opties = {
        "Sprinter NCV3": [
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
            <title>Mercedes Sprinter Apple CarPlay / Android Auto inbouwen</title>
            <meta name="description" content="Laat Apple CarPlay & Android Auto professioneel inbouwen in uw Mercedes-Benz Sprinter bij AutoDraadloos.nl. Snelle installatie, kwaliteit gegarandeerd."/>
            <meta name="keywords" content="Mercedes-Benz Sprinter, W169, W176, W177, CarPlay, Android Auto, auto installatie, AutoDraadloos, autoradio, scherm"/>
            <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz Sprinter"/>
            <meta property="og:description" content="Professionele installatie van Apple CarPlay & Android Auto voor uw Mercedes-Benz Sprinter bij AutoDraadloos.nl. Vraag direct een offerte aan."/>
            <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/sprinter/"/>
            <meta property="og:type" content="website"/>
        </Head>


      <Pagehero pagetitle="Sprinter"/>

      <div className={styles.productpagina}>

        <div>

            <div className={styles.productfotos}>
                <ImageGallery items={images} showPlayButton={false}/>
            </div>

            <div className={styles.productgegevens}>
                <h2>Apple CarPlay & Android Auto voor de Sprinter</h2>

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
                    <h2>Apple CarPlay en Android Auto voor de Mercedes-Benz Sprinter NCV3</h2>
                    <p>Wilt u uw Mercedes-Benz Sprinter upgraden met Apple CarPlay en Android Auto? Zo kunt u uw smartphone eenvoudig gebruiken via het originele scherm van uw bus.</p>
                    <p>U kunt tijdens het rijden makkelijk navigeren, muziek luisteren en berichten bekijken, terwijl alle originele functies van uw Sprinter behouden blijven.</p>
                    <h3>CarPlay installeren op het originele scherm</h3>
                    <p>Onze specialisten bouwen Apple CarPlay en Android Auto direct in op het originele scherm van uw Sprinter. Het menu, achteruitrijcamera en andere functies blijven volledig beschikbaar.</p>
                    <p>De installatie gebeurt snel en professioneel, inclusief draadloze Bluetooth-verbinding en een extra USB-aansluiting voor kabelgebruik.</p>
                </section>
                <section>
                    <Image src={sprinterImg} alt="Mercedes-Benz Sprinter" title="Sprinter"/>
                </section>
            </div>

            <div>
                <section>
                    <h2>Groot Android scherm voor uw Sprinter NCV3</h2>
                    <p>Wilt u een groter en moderner scherm in uw Mercedes Sprinter? Wij kunnen een luxe Android-scherm inbouwen dat volledig compatibel is met Apple CarPlay en Android Auto.</p>
                    <p>Het scherm geeft een overzichtelijk display en toegang tot apps zoals YouTube, Netflix en NPO, terwijl alle originele functies behouden blijven.</p>
                    <h3>Installatie van het grotere scherm in Sprinter</h3>
                    <p>Onze monteurs installeren het scherm vakkundig, zodat het perfect werkt met uw bestaande systeem. Zo geniet u van een moderne en comfortabele rijervaring.</p>
                    <p>Extra opties zoals een dashcam aansluiten zijn mogelijk, waarbij de beelden direct op het nieuwe scherm bekeken kunnen worden.</p>
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
