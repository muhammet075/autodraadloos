import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/offerte.module.css";
import euFlag from "@/assets/icons/eu-flag.svg";
import keus1 from "@/assets/img/keus1.png";
import keus2 from "@/assets/img/keus2.png";  

export default function Offerte() {
  useEffect(() => {
  });




  let kentekenIngevuld = false
  let kentekenCorrect = false
  let invoerKenteken;
  let voertuigGegevens;
  let gekozenWens;

    function checkKenteken(e){
        const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
        e.target.value = value;
        document.querySelector("#kentekenmerk").innerHTML 

        document.querySelector(".kentekeninput").classList.remove("successtate");
        document.querySelector(".kentekeninput").classList.remove("errorstate");

        if(e.target.value.length === 6){
            kentekenIngevuld = true;
            console.log(kentekenIngevuld);
             
            invoerKenteken = e.target.value

            document.querySelector(".kentekenloadingstate").classList.remove("displaynone");

            zoekKenteken();

        } else if(e.target.value.length < 6){
            kentekenIngevuld = false;
            kentekenCorrect = false
            console.log(kentekenIngevuld);
        };
    };





async function zoekKenteken() {
    let kentekenUpperCase = invoerKenteken.toUpperCase();

      const kenteken =
        "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + kentekenUpperCase;

      const response = await fetch(kenteken);
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
        document.querySelector("#kentekenmerk").innerHTML = jsondata[0].merk + " " + jsondata[0].handelsbenaming + " (" + jsondata[0].datum_eerste_toelating.substring(0, 4) + ")";
        kentekenCorrect = true;

        voertuigGegevens = {
            merk: jsondata[0].merk,
            handelsbenaming: jsondata[0].handelsbenaming,
            kenteken: jsondata[0].kenteken,
            bouwjaar: jsondata[0].datum_eerste_toelating.substring(0, 4),
            carrosserie: jsondata[0].inrichting,
        };

        console.log(voertuigGegevens); 



    }, 2000);

  }



  function checkKeuze(e){
        document.querySelector(".stap2errorstate").innerHTML = "";

       if (e.target.id === "stap2-keus1"){
        document.querySelector("#stap2-keus1").classList.add("selected");
        document.querySelector("#stap2-keus2").classList.remove("selected");
        gekozenWens = "CarPlay op het originele scherm";
       } else if (e.target.id === "stap2-keus2"){
        document.querySelector("#stap2-keus2").classList.add("selected");
        document.querySelector("#stap2-keus1").classList.remove("selected");
        gekozenWens = "Nieuwe groter scherm met CarPlay";
       };
 };








  function volgendeStap1(){
    let kentekeninputfield = document.querySelector("#kentekeninputfield").value;
    if(kentekenCorrect === false || kentekeninputfield.length < 6){
        document.querySelector(".kentekeninput").classList.remove("successtate");
        document.querySelector(".kentekeninput").classList.add("errorstate");
        return;
    };
    document.querySelector(".stap1").classList.add("displaynone");
    document.querySelector(".stap2").classList.remove("displaynone");
    document.querySelector("#stap1-sign").classList.remove("activestap");
    document.querySelector("#stap2-sign").classList.add("activestap");
  };



    function volgendeStap2(){        
        if(!gekozenWens){
            document.querySelector(".stap2errorstate").innerHTML = "Maak een keuze om verder te gaan.";
            return;
        };

        document.querySelector(".stap2").classList.add("displaynone");
        document.querySelector(".stap3").classList.remove("displaynone");
        document.querySelector("#stap2-sign").classList.remove("activestap");
        document.querySelector("#stap3-sign").classList.add("activestap");
    }

  function vorigeStap1(){
    document.querySelector(".stap2").classList.add("displaynone");
    document.querySelector(".stap1").classList.remove("displaynone");
    document.querySelector("#stap2-sign").classList.remove("activestap");
    document.querySelector("#stap1-sign").classList.add("activestap");
};

function vorigeStap2(){
    document.querySelector(".stap3").classList.add("displaynone");
    document.querySelector(".stap2").classList.remove("displaynone");
    document.querySelector("#stap3-sign").classList.remove("activestap");
    document.querySelector("#stap2-sign").classList.add("activestap");
};

  return (
    <>
      <Head>
          <title>AutoDraadloos.nl | Offerte</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

    <div className={styles.offerte}>
        <div>





            {/* Start offerte header */}
            <div>
                <ul>
                    <li id="stap1-sign" className="activestap"><span>1</span> Kenteken</li>
                    <li id="stap2-sign"><span>2</span> Wensen</li>
                    <li id="stap3-sign"><span>3</span> Gegevens</li>
                    <li id="stap4-sign"><span>4</span> Afronden</li>
                </ul>
            </div>
            {/* End offerte header */}   

            {/* Start offerte content */}
            <div>

                <section className="stap1">
                    <h2>1. Voer uw kenteken in</h2>
                    <p>Vul hieronder het kenteken van uw voertuig in om te beginnen met de offerte. Als u een buitenlands kenteken heeft neem dan contact met ons op.</p>

                    <div className={`${styles.kenteken} kentekeninput`}>
                        <div><Image src={euFlag} alt="Europese unie vlag"/><p>NL</p></div>
                        <input type="text" id="kentekeninputfield" onChange={checkKenteken} maxLength={6}></input>
                        <p id="kentekenmerk"></p>
                    </div>

                    <div className={`${styles.kentekenloadingstate} kentekenloadingstate displaynone`}>
                        <span></span>
                        <p>Kenteken wordt gezocht...</p>
                    </div>

                    <button onClick={volgendeStap1} className={styles.volgendestap}>Volgende stap</button>
                </section>


                <section className="stap2 displaynone">
                    <h2>2. Wat zijn uw wensen?</h2>
                    <p>Wilt u Apple CarPlay & Android Auto op uw huidige originele scherm of wilt u een groter scherm met Apple CarPlay & Android Auto?</p>

                    <ul>
                        <li onClick={checkKeuze} className="stap2keus" id="stap2-keus1"><Image src={keus1}/><p>CarPlay op het originele scherm</p></li>
                        <li onClick={checkKeuze} className="stap2keus" id="stap2-keus2"><Image src={keus2}/><p>Nieuwe groter scherm met CarPlay</p></li>
                    </ul>

                    <p className="stap2errorstate"></p>


                    <button onClick={volgendeStap2} className={styles.volgendestap}>Volgende stap</button>
                    <button onClick={vorigeStap1} className={styles.vorigestap}>Vorige stap</button>
                </section>


                <section className="stap3 displaynone">
                    <h2>3. Wat zijn uw gegevens?</h2>
                    <p>Hier komen de gegevens</p>

                    <button onClick={vorigeStap2} className={styles.vorigestap}>Vorige stap</button>
                </section>




            </div>
            {/* End offerte content */}





        </div>
    </div>
    </>
  );
}
