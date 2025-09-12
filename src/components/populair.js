import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import styles from "@/styles/components/populair.module.css";
import verderIco from "@/assets/icons/next-white.svg";
import aKlasseImg from "@/assets/mercedes/mercedes-benz-a-klasse.png";
import bKlasseImg from "@/assets/mercedes/mercedes-benz-b-klasse.png";
import claImg from "@/assets/mercedes/mercedes-benz-cla.png";
import cKlasseImg from "@/assets/mercedes/mercedes-benz-c-klasse.png";
import glcImg from "@/assets/mercedes/mercedes-benz-glc.png";
import glaImg from "@/assets/mercedes/mercedes-benz-gla.png";


import mercedesBenzLogo from "@/assets/automerken/mercedes-benz.svg";

function Populair() {

    useEffect(() => {
    }, []);

    const merken = [
        {
            merk: "Mercedes-Benz",
            model: "A-Klasse",
            link: "/carplay-laten-inbouwen/mercedes-benz/a-klasse/",
            logo: mercedesBenzLogo,
            afbeelding: aKlasseImg,
        },
        {
            merk: "Mercedes-Benz",
            model: "B-Klasse",
            link: "/carplay-laten-inbouwen/mercedes-benz/a-klasse/",
            logo: mercedesBenzLogo,
            afbeelding: bKlasseImg,
        },
        {
            merk: "Mercedes-Benz",
            model: "CLA",
            link: "/carplay-laten-inbouwen/mercedes-benz/cla/",
            logo: mercedesBenzLogo,
            afbeelding: claImg,
        },
        {
            merk: "Mercedes-Benz",
            model: "C-Klasse",
            link: "/carplay-laten-inbouwen/mercedes-benz/c-klasse/",
            logo: mercedesBenzLogo,
            afbeelding: cKlasseImg,
        },
        {
            merk: "Mercedes-Benz",
            model: "GLC",
            link: "/carplay-laten-inbouwen/mercedes-benz/glc/",
            logo: mercedesBenzLogo,
            afbeelding: glcImg,
        },
        {
            merk: "Mercedes-Benz",
            model: "GLA",
            link: "/carplay-laten-inbouwen/mercedes-benz/gla/",
            logo: mercedesBenzLogo,
            afbeelding: glaImg,
        },
    ];


    return (      
        <div className={styles.populair}>  
            <h2>Populaire merken en modellen</h2>

            <div>
                {merken.map((item, index) => (
                    <Link href={item.link} key={index}>
                        <Image src={item.logo} alt={`${item.merk} logo`} className={styles.logo} />
                        <Image src={item.afbeelding} alt={`${item.merk} ${item.model}`}/>
                        <h3>{item.merk} {item.model}</h3>
                    </Link>
                ))}
            </div>
            <div>
                <Link href="/carplay-laten-inbouwen/" title="Bekijk alle merken">Bekijk alle merken<Image src={verderIco} alt="Verder icoon"/></Link>
            </div>

        </div>
    )
}
  
export default Populair;