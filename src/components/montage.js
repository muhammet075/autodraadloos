import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/montage.module.css";
import montageImg from "@/assets/img/montageoplocatie.png";

function Montage() {

    useEffect(() => {
    }, []);


    return(      
        <div className={styles.montage}>  
            <div>
                <Image className={styles.montageimg} src={montageImg} alt="Montage op locatie door heel Nederland en België"/>
            </div>
            <div>
                <p>🇳🇱🇧🇪</p>
                <h2>Montage op locatie</h2>
                <h3>Door heel Nederland en België</h3>
            </div>
        </div>
    )
}
  
export default Montage;