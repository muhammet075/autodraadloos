import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/header.module.css";
import Logo from "@/assets/logo/autodraadloos-logo.svg";
import hamburgerIco from "@/assets/icons/hamburger.svg";
import closeIco from "@/assets/icons/close.svg";
import homeIco from "@/assets/icons/home.svg";

function Header() {

    useEffect(() => {
    }, []);


    function openHamburger(){
        document.querySelector(".navmenu").classList.remove("displaynonemobile");
        document.querySelector(".navmenu > ul").classList.remove("closehamburger");
        document.querySelector(".navmenu > ul").classList.add("openhamburger");
    };

    function closeHamburger(){
        document.querySelector(".navmenu > ul").classList.remove("openhamburger");
        document.querySelector(".navmenu > ul").classList.add("closehamburger");
        
        setTimeout(() => {
        document.querySelector(".navmenu").classList.add("displaynonemobile");
        }, 200);    
    };



    return(      
        <header className={styles.header}>  
            <div>   
                <Link href="/"><Image src={Logo} alt="Logo van AutoDraadloos.nl"/></Link>

                <button onClick={openHamburger}><Image src={hamburgerIco} alt="Menu icoon"/></button>

                <nav className="navmenu displaynonemobile">
                    <ul>
                        <li><Link onClick={closeHamburger} href="/">Home</Link></li>
                        <li><Link onClick={closeHamburger} href="/carplay-laten-inbouwen">CarPlay laten inbouwen</Link></li>
                        <li><Link onClick={closeHamburger} href="/veelgestelde-vragen">Veelgestelde vragen</Link></li>
                        <li><Link onClick={closeHamburger} href="/portfolio">Portfolio</Link></li>
                        <li><Link onClick={closeHamburger} href="/contact">Contact</Link></li>
                        <li><Link onClick={closeHamburger} href="/offerte">Offerte</Link></li>
                    </ul>
                    <div onClick={closeHamburger}><Image src={closeIco} alt="Sluiten icoon"/></div>
                </nav>

            </div>
        </header>
    )
}
  
export default Header;