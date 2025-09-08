import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "@/assets/logo/autodraadloos-logo.svg";

function Header() {

    useEffect(() => {
    }, []);



    return(      
        <header className={styles.header}>  
            <div>   
                <Link href="/"><Image src={Logo} alt="Logo van AutoDraadloos.nl"/></Link>
            </div>
        </header>
    )
}
  
export default Header;