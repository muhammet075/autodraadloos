import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/waarom.module.css";
import paarsCheckIco from "@/assets/icons/paarscheck.svg";
import geenIco from "@/assets/icons/geen.svg";

function Waarom() {

    useEffect(() => {
    }, []);



    return(      
        <div className={styles.waarom}>  

            <div>
                <h2>Waarom kiezen voor AutoDraadloos?</h2>
                <p>Wij zijn dé specialist in Apple CarPlay en Android Auto met de eerlijkste prijzen.</p>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li>Montage op locatie</li>
                    <li>Eelijkste prijzen</li>
                    <li>Goedkoopste prijzen</li>
                    <li>Binnen 24 uur afspraak</li>
                    <li>Dag en nacht bereikbaar</li>
                    <li>Pas na installatie betalen</li>
                    <li>Prijzen zijn altijd met montage</li>
                    <li>Duizend procent tevredenheidsgarantie!</li>
                </ul>
                <ul>
                    <li>Bij ons</li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                    <li><Image src={paarsCheckIco} alt="Check icoon"/></li>
                </ul>
                <ul>
                    <li>Anderen</li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                    <li><Image src={geenIco} alt="Geen icoon"/></li>
                </ul>
            </div>

            
        </div>
    )
}
  
export default Waarom;