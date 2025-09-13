import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/voorbeelden.module.css";
import paarsCheckIco from "@/assets/icons/paarscheck.svg";
import geenIco from "@/assets/icons/geen.svg";


import img1 from "@/assets/voorbeelden/mercedes-cla-carplay.png";
import img2 from "@/assets/voorbeelden/ford-fiesta-carplay.png";
import img3 from "@/assets/voorbeelden/mercedes-cklasse-carplay.png";
import img4 from "@/assets/voorbeelden/mercedes-cklasse-carplay_1.png";
import img5 from "@/assets/voorbeelden/mercedes-glc-carplay_1.png";
import img6 from "@/assets/voorbeelden/mercedes-cklasse-carplay_2.png";
import img7 from "@/assets/voorbeelden/mercedes-gla-carplay.png";
import img8 from "@/assets/voorbeelden/nissan-qashqai-carplay.png";


function Voorbeelden() {

    useEffect(() => {
    }, []);


    const voorbeelden = [
        { merknaam: "Mercedes-Benz", modelnaam: "CLA", img: img1, link: "/carplay-laten-inbouwen/mercedes-benz/cla/" },
        { merknaam: "Ford", modelnaam: "Fiesta", img: img2, link: "/offerte" },
        { merknaam: "Mercedes-Benz", modelnaam: "C-Klasse", img: img3, link: "/carplay-laten-inbouwen/mercedes-benz/c-klasse/" },
        { merknaam: "Mercedes-Benz", modelnaam: "C-Klasse", img: img4, link: "/carplay-laten-inbouwen/mercedes-benz/c-klasse/" },
        { merknaam: "Mercedes-Benz", modelnaam: "GLC", img: img5, link: "/carplay-laten-inbouwen/mercedes-benz/glc/" },
        { merknaam: "Mercedes-Benz", modelnaam: "C-Klasse", img: img6, link: "/carplay-laten-inbouwen/mercedes-benz/c-klasse/" },
        { merknaam: "Mercedes-Benz", modelnaam: "GLA", img: img7, link: "/carplay-laten-inbouwen/mercedes-benz/gla/" },
        { merknaam: "Nissan", modelnaam: "Qashqai", img: img8, link: "/offerte" },
    ];




    return (
        <div className={styles.voorbeelden}>
            <h2>🚗 CarPlay voorbeelden</h2>

            <div>
            {voorbeelden.map((auto, index) => (
                <a href={auto.link} key={index}>
                    <div></div>
                    <Image src={auto.img} alt={`Apple CarPlay in een ${auto.merknaam} ${auto.modelnaam}`} />
                    <h3>{auto.merknaam} {auto.modelnaam}</h3>
                </a>
            ))}
            </div>

        </div>
    )

}
  
export default Voorbeelden;