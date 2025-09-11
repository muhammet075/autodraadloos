import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/diensten.module.css";

function Diensten() {

    useEffect(() => {
    }, []);



    return(      
        <div className={styles.diensten}>  
            <div>
                 <h2>Wat kan AutoDraadloos realisteren?</h2>

                 <div>
                    <section>
                        <img src="/mercedes/a-b-cla-gla-klasse/carplay-1.png" alt="Apple CarPlay op het originele scherm van een Mercedes-Benz CLA"/>
                    </section>                    <section>
                        <h3>Apple CarPlay en Android Auto op het originele scherm inbouwen.</h3>
                        <p>Heeft u een <Link href="/carplay-laten-inbouwen/mercedes-benz/" target="_blank" title="Mercedes-Benz">Mercedes-Benz</Link>, BMW, Audi, Volkswagen, Ford of een ander automerk met een scherm zonder <b>Apple CarPlay</b> of <b>Android Auto</b>? Wij kunnen dit eenvoudig voor u <b>installeren</b> / <b>inbouwen</b> op het originele scherm van uw auto.</p>
                        <p>Na de <b>installatie</b> beschikt u over volledige toegang tot <b>Apple CarPlay</b> en <b>Android Auto</b>. U kunt draadloos verbinden via Bluetooth, als extra kunnen wij een extra USB-aansluiting inbouwen, zodat u als extra ook met een kabel kunt verbinden.</p>
                        <p>Wat onze oplossing uniek maakt, is dat alle bestaande <b>functies</b> beschikbaar blijven. Denk hierbij aan uw huidige menu, de <b>chteruitrijcamera</b> en andere originele systemen van uw auto.</p>
                        <p>Bovendien kunnen wij de <b>installatie</b> en <b>montage</b> ook bij u op <b>locatie</b> uitvoeren.</p>
                    </section>
                 </div>

                 <div>
                    <span></span><p>En</p><span></span>
                 </div>


                 <div>
                    <section>
                        <img src="/groterscherm.png" alt="Vergelijking van klein en groot autoscherm met Apple CarPlay"/>
                    </section>                    
                    <section>
                        <h3>Originele kleine scherm vervangen door een groter scherm met CarPlay</h3>
                        <p>Heeft u een klein scherm in uw auto zonder <b>Apple CarPlay</b> of <b>Android Auto</b>? Wilt u uw auto moderner maken? Wij kunnen een groter en luxer <b>scherm inbouwen</b>. Op dit nieuwe scherm kunt u <b>Apple CarPlay</b> en <b>Android Auto</b> gebruiken.</p>
                        <p>Met dit <b>grote scherm</b> kunt u ook apps downloaden, zoals YouTube, Netflix en tv-apps zoals NPO. Alle originele functies van uw auto blijven gewoon werken, zoals de achteruitrijcamera. Het <b>koppelen</b> gaat makkelijk en <b>draadloos via Bluetooth</b>.</p>
                        <p>Wilt u extra opties? Dan kunnen wij ook een <b>dashcam aansluiten</b>. De beelden kunt u dan direct zien op het nieuwe scherm. Er is veel mogelijk met deze <b>upgrade</b>.</p>
                    </section>
                 </div>
                 
                 
            </div>
        </div>
    )
}
  
export default Diensten;