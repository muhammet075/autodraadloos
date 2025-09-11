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
import glkImg from "@/assets/mercedes/mercedes-benz-glk.png";

export default function Glk() {
  useEffect(() => {
  });

  function maakAfspraak(){
    document.querySelector(".afspraakcontainer").classList.remove("displaynone");
  }

  const modellen = [
    {
        bouwjaren: "Bouwjaren: 2008 t/m 2015",
        naam: "GLK X204",
    },
  ];


  const images = [
  {
    original: "/mercedes/glk/x204-1.png",
    originalAlt: "Apple CarPlay W166 GLK",
    originalTitle: "Apple CarPlay W166 GLK",
    thumbnail: "/mercedes/glk/x204-1.png",
    thumbnailAlt: "Apple CarPlay W166 GLK",
    thumbnailTitle: "Apple CarPlay W166 GLK",
  },
];


function checkOpties(e) {
    const gekozenModel = e.target.value;

    const opties = {
        "GLK X204": [
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
            <title>Mercedes GLK Apple CarPlay / Android Auto inbouwen</title>
            <meta name="description" content="Laat Apple CarPlay & Android Auto professioneel inbouwen in uw Mercedes-Benz GLK bij AutoDraadloos.nl. Snelle installatie, kwaliteit gegarandeerd."/>
            <meta name="keywords" content="Mercedes-Benz GLK, W169, W176, W177, CarPlay, Android Auto, auto installatie, AutoDraadloos, autoradio, scherm"/>
            <meta property="og:title" content="AutoDraadloos.nl | CarPlay & Android Auto voor Mercedes-Benz GLK"/>
            <meta property="og:description" content="Professionele installatie van Apple CarPlay & Android Auto voor uw Mercedes-Benz GLK bij AutoDraadloos.nl. Vraag direct een offerte aan."/>
            <meta property="og:url" content="https://www.autodraadloos.nl/carplay-laten-inbouwen/mercedes-benz/glk/"/>
            <meta property="og:type" content="website"/>
        </Head>


      <Pagehero pagetitle="GLK"/>

      <div className={styles.productpagina}>

        <div>

            <div className={styles.productfotos}>
                <ImageGallery items={images} showPlayButton={false}/>
            </div>

            <div className={styles.productgegevens}>
                <h2>Apple CarPlay & Android Auto voor de GLK</h2>

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
                    <h2>Apple CarPlay en Android Auto voor de GLK X204</h2>
                    <p>Wilt u uw Mercedes-Benz GLK X204 upgraden met Apple CarPlay en Android Auto? Zo kunt u uw smartphone eenvoudig gebruiken via het originele scherm van uw auto.</p>
                    <p>U kunt tijdens het rijden makkelijk navigeren, muziek afspelen en berichten bekijken, terwijl alle originele functies van uw GLK intact blijven.</p>
                    <h3>CarPlay installeren op het originele scherm</h3>
                    <p>Onze specialisten bouwen Apple CarPlay en Android Auto direct in op het originele scherm van uw GLK X204. Het menu, de achteruitrijcamera en andere functies blijven volledig beschikbaar.</p>
                    <p>De installatie is snel en professioneel, inclusief draadloze Bluetooth-verbinding en een extra USB-aansluiting voor kabelgebruik.</p>
                </section>
                <section>
                    <Image src={glkImg} alt="Mercedes-Benz GLK X204" title="GLK X204"/>
                </section>
            </div>

            <div>
                <section>
                    <h2>Groot Android scherm voor uw GLK X204</h2>
                    <p>Wilt u een groter en moderner scherm in uw Mercedes GLK X204? Wij kunnen een luxe Android-scherm inbouwen dat volledig werkt met Apple CarPlay en Android Auto.</p>
                    <p>Het grotere scherm geeft een overzichtelijk display en toegang tot apps zoals YouTube, Netflix en NPO, terwijl alle originele functies behouden blijven.</p>
                    <h3>GLK X204 groter scherm installeren</h3>
                    <p>Onze monteurs installeren het scherm vakkundig, zodat het direct samenwerkt met uw bestaande systeem. Zo geniet u van een moderne en veilige rijervaring.</p>
                    <p>Extra opties zoals het koppelen van een dashcam zijn mogelijk, waarbij de beelden direct op het nieuwe scherm bekeken kunnen worden.</p>
                </section>
                <section>
                    <img src="/carplay-screenshot.png" alt="Screenshot van Apple CarPlay"/>
                </section>
            </div>
        </div>


        <Waarom/>
        <Diensten/>
        
    </>
  );
}
