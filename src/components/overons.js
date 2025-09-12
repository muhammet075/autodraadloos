import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/overons.module.css";
import carplayImg from "@/assets/img/w205-dubbelscherm-carplay.png";
import verderIco from "@/assets/icons/next-white.svg";

function Overons() {

    useEffect(() => {
    }, []);


    return(      
        <div className={styles.overons}>  
            <section>
                <h2>Apple CarPlay en Android Auto</h2>
                <p>Bij AutoDraadloos maken we elke auto klaar voor moderne multimedia. Of je nu een Audi, BMW, Mercedes, Volkswagen of een ander merk rijdt, wij installeren Apple CarPlay en Android Auto zodat je eenvoudig je smartphone kunt verbinden en direct apps zoals navigatie, muziek, bellen en berichten gebruikt.</p>
                <p>Daarnaast kunnen we ook een groter scherm of een compacte CarPlay-box inbouwen, netjes geïntegreerd in je interieur. Onze systemen werken soepel, zien er stijlvol uit en worden altijd professioneel gemonteerd, zodat je veilig en comfortabel van alle functies onderweg kunt genieten.</p>
                <Link href="/offerte" title="Ontdek mogelijkheden">Ontdek mogelijkheden<Image src={verderIco} alt="Verder icoon"/></Link>
            </section>
            <section>
                <Image src={carplayImg} alt="Dubbele scherm met CarPlay in een C-Klasse"/>
            </section>
        </div>
    )
}
  
export default Overons;