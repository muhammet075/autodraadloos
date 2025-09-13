import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/homehero.module.css";
import euFlag from "@/assets/icons/eu-flag.svg";
import closeIco from "@/assets/icons/close.svg";
import zoekIco from "@/assets/icons/next-white.svg";
import checkIco from "@/assets/icons/greencheck.svg";
import appleCarlayLogo from "@/assets/icons/apple-carplay-logo.svg";
import androidAutoLogo from "@/assets/icons/android-auto-logo.svg";

function Homehero() {
    

    useEffect(() => {
        const heroFoto = document.querySelector("#homehero-auto");

        const mercedesModels = [
            "mercedes-benz-cls.png",
            "mercedes-benz-a-klasse.png",
            "mercedes-benz-cla.png",
            "mercedes-benz-gla.png",
            "mercedes-benz-glc.png",
            "mercedes-benz-c-klasse.png"
        ];

        const randomIndex = Math.floor(Math.random() * mercedesModels.length);
        heroFoto.src = "/homepage-autos/" + mercedesModels[randomIndex];
    }, []);


    async function checkKenteken(e){
        const kentekenPlaat = document.querySelector(".kentekenplaat");
            
            kentekenPlaat.classList.remove("errorstate");
            document.querySelector("#popuploadingstate").classList.remove("displaynone");   
            document.querySelector("#popupbericht").innerHTML = "U wordt doorverwezen naar de juiste pagina.";
            document.querySelector("#popuplink").classList.add("displaynone");

            let value = e.target.value.replace(/[^a-zA-Z0-9]/g, "");
            e.target.value = value;

        if (value.length === 6){
            
            e.target.blur();

            kentekenPlaat.classList.add("notouch");
            document.querySelector(".kentekenloadingstate").classList.remove("displaynone");
            


            value = value.toUpperCase();

            const url = "https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=" + value;
            const response = await fetch(url);
            const jsondata = await response.json();
            const kentekenData = jsondata[0];
            
            //geen juiste kenteken ingevuld
            if (jsondata.length === 0){
                setTimeout(() => {
                    kentekenPlaat.classList.add("errorstate");
                    kentekenPlaat.classList.remove("notouch");
                    document.querySelector(".kentekenloadingstate").classList.add("displaynone");
                }, 700);
                return;
            };

            console.log(kentekenData)

            setTimeout(() => {
                kentekenPlaat.classList.remove("notouch");
                document.querySelector(".kentekenpopup").classList.remove("displaynone");
                document.querySelector(".kentekenloadingstate").classList.add("displaynone");
            }, 300);

            document.querySelector("#automerk").innerHTML = kentekenData.merk
            document.querySelector("#automodel").innerHTML = kentekenData.handelsbenaming

            if (kentekenData.merk === "MERCEDES-BENZ") {
                const handelsbenaming = kentekenData.handelsbenaming?.toUpperCase() || "";
                const eersteDeel = handelsbenaming.split(" ")[0]; // bv. "C" of "CLA"

                const routes = {
                    "A": "/carplay-laten-inbouwen/mercedes-benz/a-klasse/",
                    "B": "/carplay-laten-inbouwen/mercedes-benz/b-klasse/",
                    "C": "/carplay-laten-inbouwen/mercedes-benz/c-klasse/",
                    "E": "/carplay-laten-inbouwen/mercedes-benz/e-klasse/",
                    "S": "/carplay-laten-inbouwen/mercedes-benz/s-klasse/",
                    "CLA": "/carplay-laten-inbouwen/mercedes-benz/cla/",
                    "CLS": "/carplay-laten-inbouwen/mercedes-benz/cls/",
                    "GLA": "/carplay-laten-inbouwen/mercedes-benz/gla/",
                    "GLC": "/carplay-laten-inbouwen/mercedes-benz/glc/",
                    "GLE": "/carplay-laten-inbouwen/mercedes-benz/gle/",
                    "GLK": "/carplay-laten-inbouwen/mercedes-benz/glk/",
                    "GLS": "/carplay-laten-inbouwen/mercedes-benz/gls/",
                    "SPRINTER": "/carplay-laten-inbouwen/mercedes-benz/sprinter/",
                    "V": "/carplay-laten-inbouwen/mercedes-benz/v-klasse/",
                    "VITO": "/carplay-laten-inbouwen/mercedes-benz/vito/",
                };

                const targetUrl = routes[eersteDeel];

                            
                setTimeout(() => {
                    if (targetUrl) {
                        window.location.href = targetUrl;
                    } else {
                        window.location.href = "/carplay-laten-inbouwen/mercedes-benz/";
                    }
                }, 3000);

            } else{
                let merk = kentekenData.merk;
                let formattedMerk = merk.charAt(0).toUpperCase() + merk.slice(1).toLowerCase();

                document.querySelector("#popuploadingstate").classList.add("displaynone");
                document.querySelector("#popupbericht").innerHTML = "De productpagina voor uw " + formattedMerk + " is momenteel nog in ontwikkeling. U kunt echter nu alvast een vrijblijvende offerte aanvragen.";
                document.querySelector("#popuplink").classList.remove("displaynone");
            }
        };
    };


    return(      
        <div className={styles.hero}>  
            <div>
                
                <div className={styles.herotop}>
                    <section>
                        <h1>Apple CarPlay en Android Auto laten inbouwen<span>.</span></h1>
                        <h2>Ontdek de mogelijkheden om Apple CarPlay en Android Auto in uw auto te laten installeren</h2>
                        <div>
                            <section>
                                <Image src={appleCarlayLogo} alt="Logo van Apple CarPlay"/>
                                <h3>Apple<br/> CarPlay</h3>
                            </section>
                            <section>
                                <Image src={androidAutoLogo} alt="Logo van Android Auto"/>
                                <h3>Android<br/> Auto</h3>
                            </section>
                        </div>
                    </section>
                    <section>
                        <img id="homehero-auto" src="/carplay-laten-inbouwen/mercedes-benz/a-klasse.png" alt="Mercedes-Benz auto"/>
                    </section>
                </div>

                <div className={styles.sterkepunten}>
                    <ul>
                        <li><Image src={checkIco} alt="Check icoon"/>Draadloos verbinden</li>
                        <li><Image src={checkIco} alt="Check icoon"/>Prijzen inclusief montage</li>
                        <li><Image src={checkIco} alt="Check icoon"/>Montage op locatie</li>
                        <li><Image src={checkIco} alt="Check icoon"/>Altijd garantie inbegrepen</li>
                        <li><Image src={checkIco} alt="Check icoon"/>Binnen 24 uur afspraak</li>
                    </ul>
                </div>

                <div className={styles.kenteken}>
                    <section>
                        <p>Vul uw kentekenplaat in en begin met zoeken:</p>
                        <div className={`${styles.kentekeninput} kentekenplaat`}>
                            <div><Image src={euFlag} alt="Europese unie vlag" /><p>NL</p></div>
                            <input type="text" id="kentekeninputfield" placeholder="XX000X" onChange={checkKenteken} maxLength={6}></input>
                            <div className="kentekenloadingstate displaynone"><span></span></div>
                        </div>
                    </section>
                    <section>
                        <div><span></span><p>Of</p><span></span></div>
                        <Link href="/carplay-laten-inbouwen" title="Zoeken">Zoek handmatig<Image src={zoekIco} alt="Navigeren icoon"/></Link>
                    </section>
                </div>
                

            </div>

             <div className={`${styles.popup} kentekenpopup displaynone`} onClick={e => e.target === e.currentTarget && e.currentTarget.classList.toggle("displaynone")}> 
                <Image src={closeIco} alt="Sluit icoon"/>
                <div>
                    <p>Auto gevonden ✅</p>
                    <p id="automerk"></p>
                    <p id="automodel"></p>
                    <span id="popuploadingstate"></span>
                    <p id="popupbericht">U wordt doorverwezen naar de juiste pagina.</p>
                    <Link id="popuplink" className="displaynone" href="/offerte">Offerte aanvragen</Link>
                </div>
            </div>
        </div>
    )
}
  
export default Homehero;