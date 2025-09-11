import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/pages/vragen.module.css";
import Pagehero from "@/components/pagehero";

export default function veelgesteldeVragen() {
  useEffect(() => {
  });

    function toggleAccordion(e) {
        const faqAnswer = e.currentTarget.nextElementSibling;
        const arrow = e.currentTarget.querySelector('span:first-child');
            if (!faqAnswer) {
            return;
        }
    
        const isOpen = faqAnswer.classList.contains("opencollapse");
        const allAnswers = document.querySelectorAll(".opencollapse");
        const allButtons = document.querySelectorAll(".goldbtn");
        const allArrows = document.querySelectorAll(".goldarrow");
    
        allAnswers.forEach((answer) => {
            answer.classList.add("removecollapse");
            answer.classList.remove("opencollapse");
        });
    
        allButtons.forEach((button) => {
            button.classList.remove("goldbtn");
        });
    
        allArrows.forEach((a) => {
            a.classList.remove("goldarrow");
            a.classList.remove("rotatearrow");
            a.classList.remove("rotatearrowback");
        });
    
        if (!isOpen) {
            e.currentTarget.classList.add("goldbtn");
            arrow.classList.add("goldarrow", "rotatearrow");
    
            faqAnswer.classList.remove("removecollapse");
            faqAnswer.classList.add("opencollapse");
        } else {
            e.currentTarget.classList.remove("goldbtn");
            arrow.classList.remove("goldarrow", "rotatearrow");
            arrow.classList.add("rotatearrowback");
    
            faqAnswer.classList.add("removecollapse");
            faqAnswer.classList.remove("opencollapse");
        };
    };

  return (
    <>
      <Head>
        <title>Veelgestelde vragen over Apple CarPlay en Android Auto</title>
        <meta name="description" content="Bekijk de veelgestelde vragen over het laten inbouwen van Apple CarPlay en Android Auto in uw auto. AutoDraadloos geeft heldere antwoorden en advies."/>
        <meta name="keywords" content="Veelgestelde vragen, Apple CarPlay installatie, Android Auto inbouwen, AutoDraadloos, auto multimedia, autoradio, navigatie, autoscherm"/>
        <meta property="og:title" content="AutoDraadloos.nl | FAQ over CarPlay & Android Auto inbouwen"/>
        <meta property="og:description" content="Heeft u vragen over Apple CarPlay of Android Auto installatie? Lees de veelgestelde vragen of neem contact op met AutoDraadloos voor persoonlijk advies."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/veelgestelde-vragen"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Veelgestelde vragen"/>

      <div className={styles.faq}>
            <div>
                <div>
                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq2">Hoelang duurt de installatie van CarPlay?</span></button>
                    <div className="accordion">
                      <p id="faq3">
                        De <b>installatie</b> van <b>Apple CarPlay</b> en/of <b>Android Auto</b> duurt meestal tussen een half uur en 3 uur, afhankelijk van je auto en of je een <b>groter scherm</b> wilt laten inbouwen. Wil je direct een installatie inplannen? Vraag dan <Link href="/offerte">hier een offerte</Link> aan.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq4">Kan CarPlay op mijn originele scherm?</span></button>
                    <div className="accordion">
                      <p id="faq5">
                        Ja, we kunnen <b>Apple CarPlay</b> en/of <b>Android Auto</b> direct op je originele scherm inbouwen, mits je auto een scherm heeft, zodat alles netjes en origineel blijft. Bekijk ook onze CarPlay <Link href="/carplay-laten-inbouwen">categoriepagina</Link> voor alle modellen.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq6">Wat is een CarPlay-box en kan ik die laten plaatsen?</span></button>
                    <div className="accordion">
                      <p id="faq7">
                        De <b>CarPlay-box</b> is een compacte module die we in je auto plaatsen. Zo krijg je draadloos <b>Apple CarPlay</b> of <b>Android Auto</b> op je scherm, ook als je auto standaard geen CarPlay ondersteunt. Wil je weten hoe dit bij jouw auto werkt? <Link href="/contact">Neem contact met ons op</Link>.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq8">Ondersteunt mijn auto dit systeem?</span></button>
                    <div className="accordion">
                      <p id="faq9">
                        Wij ondersteunen vrijwel alle merken en modellen, zowel oudere als nieuwere auto's. We checken altijd welk systeem jouw auto heeft en welke opties mogelijk zijn voor <b>Apple CarPlay</b>, <b>Android Auto</b> of een <b>CarPlay-box</b>. Bekijk <Link href="/carplay-laten-inbouwen">onze CarPlay pagina</Link> om te zien of jouw model erbij zit.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq10">Kan ik ook een groter scherm laten inbouwen?</span></button>
                    <div className="accordion">
                      <p id="faq11">
                        Ja, we kunnen een <b>groter scherm</b> inbouwen voor een luxere look en betere CarPlay ervaring. Alles wordt netjes gemonteerd en werkt direct. Meer info vind je op de CarPlay <Link href="/carplay-laten-inbouwen">categoriepagina</Link>.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq12">Hoe werkt de montage?</span></button>
                    <div className="accordion">
                      <p id="faq13">
                        Onze monteurs bouwen alles professioneel in, zowel op locatie bij jou thuis als bij ons in de werkplaats. De <b>montage</b> is veilig en er wordt niks kapot gemaakt. Wil je direct een afspraak maken? <Link href="/offerte">Vraag hier een offerte aan</Link>.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq14">Krijg ik garantie?</span></button>
                    <div className="accordion">
                      <p id="faq15">
                        Ja, bij AutoDraadloos krijg je garantie op de installatie en de CarPlay-functies. Ook is er een gratis omruilgarantie als er iets niet werkt.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq16">Kan dit bij mij thuis of in België?</span></button>
                    <div className="accordion">
                      <p id="faq17">
                        Ja, wij komen door heel Nederland en België langs. Voor de reiskosten rekenen we een kleine meerprijs, maar verder kun je lekker thuis blijven terwijl wij alles installeren. Neem <Link href="/contact">hier contact</Link> op voor een afspraak.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq18">Werkt alles draadloos of met kabel?</span></button>
                    <div className="accordion">
                      <p id="faq19">
                        Je kunt kiezen voor draadloos via Bluetooth of een verbinding via USB. Beide opties ondersteunen volledig <b>Apple CarPlay</b> en <b>Android Auto</b>.
                      </p>
                    </div>
                  </section>

                  <section>
                    <button onClick={toggleAccordion}><span></span> <span id="faq20">Kan ik meerdere functies tegelijk gebruiken?</span></button>
                    <div className="accordion">
                      <p id="faq21">
                        Ja, je kunt navigeren, bellen en muziek luisteren tegelijk via <b>Apple CarPlay</b> of <b>Android Auto</b>. Alles werkt zoals in een nieuwe auto. Bekijk ook <Link href="/portfolio">onze projecten</Link> voor voorbeelden.
                      </p>
                    </div>
                  </section>
                </div>
            </div>
      </div>
    </>
  );
}
