import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/instagramfeed.module.css";
import instagramLogo from "@/assets/icons/instagram.svg";

function Instagramfeed() {

    useEffect(() => {
    }, []);



    return(      
        <div className={`${styles.instagramfeed} footerinstagram`}>
            <div>
                <span><h2>Volg ons op Instagram</h2><Link href="https://www.instagram.com/autodraadloos" target="_blank" title="Instagram"><Image src={instagramLogo} alt="Instagram logo"/></Link></span>
                <div class="elfsight-app-13e60a33-4a17-48d9-88c2-871c5823d4e6" data-elfsight-app-lazy></div>
            </div>
        </div>
    )
}
  
export default Instagramfeed;