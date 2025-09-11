import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Pagehero from "@/components/pagehero";
import styles from "@/styles/offerte.module.css";
import euFlag from "@/assets/icons/eu-flag.svg";
import keus1 from "@/assets/img/keus1.png";
import keus2 from "@/assets/img/keus2.png";
import greenCheck from "@/assets/icons/green-check.svg";
import emailjs from "@emailjs/browser";


export default function Offerte() {
useEffect(() => {
    Object.keys(sessionStorage).forEach(key => {
        if (key !== "offerteVerzonden") {
            sessionStorage.removeItem(key);
        }
    });

    if (sessionStorage.getItem("offerteVerzonden") === "true") {
        document.querySelector(".stap1").classList.add("displaynone");
        document.querySelector(".stap2").classList.add("displaynone");
        document.querySelector(".stap3").classList.add("displaynone");
        document.querySelector(".stap4").classList.remove("displaynone");
        document.querySelector("#stap1-sign").classList.remove("activestap");
        document.querySelector("#stap2-sign").classList.remove("activestap");
        document.querySelector("#stap3-sign").classList.remove("activestap");
        document.querySelector("#stap4-sign").classList.add("activestap");
        document.querySelector(".offerteloadingstate").classList.add("displaynone");
        document.querySelector(".offerteafgerondstate").classList.remove("displaynone");    
    };

}, []);


  function checkKenteken(e) {
    const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
    e.target.value = value;

    document.querySelector("#kentekenmerk").innerHTML = "";
    document.querySelector(".kentekeninput").classList.remove("successtate");
    document.querySelector(".kentekeninput").classList.remove("errorstate");

    if (e.target.value.length === 6) {
      e.target.blur();
      sessionStorage.setItem("kentekenIngevuld", "true");
      sessionStorage.setItem("invoerKenteken", value);
      document.querySelector(".kentekenloadingstate").classList.remove("displaynone");
      zoekKenteken();
    } else {
      sessionStorage.setItem("kentekenIngevuld", "false");
      sessionStorage.setItem("kentekenCorrect", "false");
    };
  };

  async function zoekKenteken() {
    let invoerKenteken = sessionStorage.getItem("invoerKenteken");
    let kentekenUpperCase = invoerKenteken.toUpperCase();

    const url = "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + kentekenUpperCase;
    const response = await fetch(url);
    const jsondata = await response.json();

    if (jsondata.length === 0) {
      setTimeout(() => {
        document.querySelector(".kentekenloadingstate").classList.add("displaynone");
        document.querySelector(".kentekeninput").classList.add("errorstate");
      }, 2000);
      return;
    };

    setTimeout(() => {
      document.querySelector(".kentekenloadingstate").classList.add("displaynone");
      document.querySelector(".kentekeninput").classList.add("successtate");
      document.querySelector("#kentekenmerk").innerHTML =
        jsondata[0].merk + " " + jsondata[0].handelsbenaming + " (" + jsondata[0].datum_eerste_toelating.substring(0, 4) + ")";

      sessionStorage.setItem("kentekenCorrect", "true");
      sessionStorage.setItem(
        "voertuigGegevens",
        JSON.stringify({
          merk: jsondata[0].merk,
          handelsbenaming: jsondata[0].handelsbenaming,
          kenteken: jsondata[0].kenteken,
          bouwjaar: jsondata[0].datum_eerste_toelating.substring(0, 4),
          carrosserie: jsondata[0].inrichting,
        })
      );
    }, 2000);
  };

  function checkKeuze(e) {
    document.querySelector(".stap2errorstate").innerHTML = "";
    if (e.target.id === "stap2-keus1") {
      document.querySelector("#stap2-keus1").classList.add("selected");
      document.querySelector("#stap2-keus2").classList.remove("selected");
      sessionStorage.setItem("gekozenWens", "CarPlay op het originele scherm");
    } else if (e.target.id === "stap2-keus2") {
      document.querySelector("#stap2-keus2").classList.add("selected");
      document.querySelector("#stap2-keus1").classList.remove("selected");
      sessionStorage.setItem("gekozenWens", "Nieuwe groter scherm met CarPlay");
    };
  };

  function checkStap3(e) {
    e.target.classList.remove("empty");
    document.querySelector(".emptystatemessage").innerHTML = "";
    let p = document.querySelector(".stap3");
    if ([...p.children].every((el) => el.classList.contains("empty"))) {
      p.querySelectorAll(".empty").forEach((el) => el.classList.remove("empty"));
    };
  };

  function volgendeStap1() {
    let kentekenCorrect = sessionStorage.getItem("kentekenCorrect") === "true";
    let kentekeninputfield = document.querySelector("#kentekeninputfield").value;

    if (!kentekenCorrect || kentekeninputfield.length < 6) {
      document.querySelector(".kentekeninput").classList.remove("successtate");
      document.querySelector(".kentekeninput").classList.add("errorstate");
      return;
    };

    document.querySelector(".stap1").classList.add("displaynone");
    document.querySelector(".stap2").classList.remove("displaynone");
    document.querySelector("#stap1-sign").classList.remove("activestap");
    document.querySelector("#stap2-sign").classList.add("activestap");
  };

  function volgendeStap2() {
    let gekozenWens = sessionStorage.getItem("gekozenWens");
    if (!gekozenWens) {
      document.querySelector(".stap2errorstate").innerHTML = "Maak een keuze om verder te gaan.";
      return;
    };

    document.querySelector(".stap2").classList.add("displaynone");
    document.querySelector(".stap3").classList.remove("displaynone");
    document.querySelector("#stap2-sign").classList.remove("activestap");
    document.querySelector("#stap3-sign").classList.add("activestap");
  };

  function volgendeStap3() {
    document.querySelector(".emptystatemessage").innerHTML = "";
    let naam = document.querySelector("#naaminput");
    let email = document.querySelector("#emailinput");
    let tel = document.querySelector("#telefoonninput");
    let woonplaats = document.querySelector("#woonplaatsinput");
    let spam = document.querySelector("#antispaminput");

    let velden = [naam, email, tel, woonplaats, spam];
    let fout = false;

    velden.forEach((v) => {
      if (!v.value.trim()) {
        v.classList.add("empty");
        fout = true;
      } else {
        v.classList.remove("empty");
      }
    });

    if (fout) return (document.querySelector(".emptystatemessage").innerHTML = "Vul alle verplichte velden in.");
    if (!/\S+@\S+\.\S+/.test(email.value))
      return (email.classList.add("empty"), (document.querySelector(".emptystatemessage").innerHTML = "Vul een geldig e-mailadres in."));
    if (spam.value !== "5")
      return (spam.classList.add("empty"), (document.querySelector(".emptystatemessage").innerHTML = "Antispam is onjuist."));

    let montageoplocatie = document.querySelector("#montageoplocatie").checked;
    let toelichting = document.querySelector("#toelichtinginput").value;

    let voertuigGegevens = JSON.parse(sessionStorage.getItem("voertuigGegevens") || "{}");
    let gekozenWens = sessionStorage.getItem("gekozenWens");

    let offerteGegevens = {
      voertuig: voertuigGegevens,
      wens: gekozenWens,
      naam: naam.value,
      email: email.value,
      tel: tel.value,
      woonplaats: woonplaats.value,
      montageoplocatie: montageoplocatie,
      toelichting: toelichting,
    };

    sessionStorage.setItem("offerteGegevens", JSON.stringify(offerteGegevens));
    console.log("Offerte gegevens opgeslagen:", offerteGegevens);

    document.querySelector(".stap3").classList.add("displaynone");
    document.querySelector(".stap4").classList.remove("displaynone");
    document.querySelector("#stap3-sign").classList.remove("activestap");
    document.querySelector("#stap4-sign").classList.add("activestap");

    setTimeout(() => {
        document.querySelector(".offerteloadingstate").classList.add("displaynone");
        document.querySelector(".offerteafgerondstate").classList.remove("displaynone");
        emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE,"template_09xualb", offerteGegevens, process.env.NEXT_PUBLIC_EMAILJS_API_KEY);
        sessionStorage.setItem("offerteVerzonden", "true");
    }, 3000);
  };

  function vorigeStap1() {
    document.querySelector(".stap2").classList.add("displaynone");
    document.querySelector(".stap1").classList.remove("displaynone");
    document.querySelector("#stap2-sign").classList.remove("activestap");
    document.querySelector("#stap1-sign").classList.add("activestap");
  };


  function vorigeStap2() {
    document.querySelector(".stap3").classList.add("displaynone");
    document.querySelector(".stap2").classList.remove("displaynone");
    document.querySelector("#stap3-sign").classList.remove("activestap");
    document.querySelector("#stap2-sign").classList.add("activestap");
  };

  return (
    <>
      <Head>
        <title>AutoDraadloos.nl | Offerte</title>
        <meta name="description" content="Vraag eenvoudig een offerte aan voor Apple CarPlay & Android Auto installatie bij AutoDraadloos"/>
        <meta name="keywords" content="Apple CarPlay, Android Auto, auto, installatie, offerte, AutoDraadloos"/>
        <meta property="og:title" content="AutoDraadloos.nl | Offerte"/>
        <meta property="og:description" content="Vraag eenvoudig een offerte aan voor Apple CarPlay & Android Auto installatie bij AutoDraadloos."/>
        <meta property="og:url" content="https://www.autodraadloos.nl/offerte/"/>
        <meta property="og:type" content="website"/>
      </Head>

      <Pagehero pagetitle="Offerte"/>

      <div className={styles.offerte}>
        <div>
          <div>
            <div>
              <ul>
                <li id="stap1-sign" className="activestap"><span>1</span> Kenteken</li>
                <li id="stap2-sign"><span>2</span> Wensen</li>
                <li id="stap3-sign"><span>3</span> Gegevens</li>
                <li id="stap4-sign"><span>4</span> Afronding</li>
              </ul>
            </div>

            <div>
              <section className="stap1">
                <h2>1. Voer uw kenteken in</h2>
                <p>Vul hieronder het kenteken van uw voertuig in om te beginnen met de offerte. Als u een buitenlands kenteken heeft neem dan contact met ons op via de <Link target="_blank" href="/contact">contact</Link> pagina.</p>

                <div className={`${styles.kenteken} kentekeninput`}>
                  <div><Image src={euFlag} alt="Europese unie vlag" /><p>NL</p></div>
                  <input type="text" placeholder="XX000X" id="kentekeninputfield" onChange={checkKenteken} maxLength={6}></input>
                  <p id="kentekenmerk"></p>
                </div>

                <div className={`${styles.kentekenloadingstate} kentekenloadingstate displaynone`}>
                  <span></span>
                  <p>Kenteken wordt gezocht...</p>
                </div>

                <div className={styles.volgendebuttons}>
                  <button onClick={volgendeStap1} className={styles.volgendestap}>Volgende stap</button>
                </div>
              </section>

              <section className="stap2 displaynone">
                <h2>2. Wat zijn uw wensen?</h2>
                <p>Wilt u Apple CarPlay & Android Auto op uw huidige originele scherm of wilt u een groter scherm met Apple CarPlay & Android Auto?</p>

                <ul>
                  <li onClick={checkKeuze} className="stap2keus" id="stap2-keus1"><Image src={keus1} alt="Keuze 1" /><p>CarPlay op het originele scherm</p></li>
                  <li onClick={checkKeuze} className="stap2keus" id="stap2-keus2"><Image src={keus2} alt="Keuze 2" /><p>Nieuwe groter scherm met CarPlay</p></li>
                </ul>

                <p className="stap2errorstate"></p>

                <div className={styles.volgendebuttons}>
                  <button onClick={volgendeStap2} className={styles.volgendestap}>Volgende stap</button>
                  <button onClick={vorigeStap1} className={styles.vorigestap}>Vorige</button>
                </div>
              </section>

              <section className="stap3 displaynone">
                <h2>3. Wat zijn uw gegevens?</h2>
                <p>Voer uw gegevens in.</p>

                <div>
                  <section>
                    <input onChange={checkStap3} type="text" id="naaminput" placeholder="Naam*"></input>
                    <input onChange={checkStap3} type="email" id="emailinput" placeholder="E-mailadres*"></input>
                  </section>

                  <section>
                    <input onChange={checkStap3} type="tel" id="telefoonninput" placeholder="Telefoonnummer*"></input>
                    <input onChange={checkStap3} type="text" id="woonplaatsinput" placeholder="Woonplaats*"></input>
                  </section>

                  <section>
                    <input onChange={checkStap3} id="montageoplocatie" type="checkbox"></input><label htmlFor="montageoplocatie">Ik wil graag montage op locatie.</label>
                  </section>

                  <section>
                    <p>Optioneel: Toelichting over de werkzaamheden</p>
                    <textarea onChange={checkStap3} id="toelichtinginput" placeholder="Eventuele opmerkingen of vragen." maxLength={300}></textarea>
                  </section>

                  <section>
                    <p>Anti spam*</p>
                    <input onChange={checkStap3} type="text" id="antispaminput" placeholder="Wat is 3+2?"></input>
                  </section>
                  <p className="emptystatemessage"></p>
                </div>

                <div className={styles.volgendebuttons}>
                  <button onClick={volgendeStap3} className={styles.volgendestap}>Versturen</button>
                  <button onClick={vorigeStap2} className={styles.vorigestap}>Vorige</button>
                </div>
              </section>

            
            <section className="stap4 displaynone">
                <h2>4. Offerte aanvraag verzonden</h2>

                <div className="offerteloadingstate">
                  <span></span>
                  <p>Uw offerte verzoek wordt verstuurd...</p>
                </div>

                <div className="offerteafgerondstate displaynone">
                    <span><Image src={greenCheck} alt="Succes icoon"/> <p>Uw aanvraag is met succes verzonden!</p></span>
                    <p>Hartelijk dank voor uw offerteaanvraag. U ontvangt binnen 24 uur een reactie van ons.<br/><br/> Heeft u in de tussentijd vragen? Neem dan gerust contact met ons op via onze <Link target="_blank" href="/contact">contactpagina</Link>.</p>
                </div>

            </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
