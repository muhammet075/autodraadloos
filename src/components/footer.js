import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Logo from "@/assets/logo/autodraadloos-rond-logo.svg";
import Altinweb from "@/assets/logo/altinweb-logo.svg";
import Instagram from "@/assets/icons/instagram2.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import knopklokReviewLogo from "@/assets/img/knipklok-logo.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div>
          <div>
            <section>
              <h3>Geïnteresseerd in Apple CarPlay & Android Auto in uw auto?</h3>
              <div>
                <Link href="/offerte">Offerte aanvragen</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </section>
          </div>
        </div>
      </div>


      <div>
        <div>
        
        <ul>
          <li><Link href="/"><Image src={Logo} alt="Logo van AutoDraadloos.nl"/></Link></li>
          <li><b>E-Mail:</b> <Link href="mailto:info@autodraadloos.nl">info@autodraadloos.nl</Link></li>
          <li><b>Telefoon:</b> 06 57 83 61 90</li>
          <li><b>KVK:</b> Binnenkort beschikbaar</li>
          <li>
            <ul>
              <li><Link href="https://www.tiktok.com/@autodraadloos/" target="_blank"><Image src={Tiktok} alt="TikTok Logo"/></Link></li>
              <li><Link href="https://www.instagram.com/autodraadloos/" target="_blank"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
              <li><Link href="https://www.facebook.com/autodraadloos/" target="_blank"><Image src={Facebook} alt="Facebook Logo"/></Link></li>
              <li><Link href="https://api.whatsapp.com/send/?phone=31657836190" target="_blank"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
            </ul>
          </li>
        </ul>

        <ul>
          <li><h2>Pagina's</h2></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/offerte">Offerte</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <ul>
          <li><h2>Handige Links</h2></li>
          <li><Link href="/privacybeleid">Privacybeleid</Link></li>
          <li><Link href="/cookiebeleid">Cookiebeleid</Link></li>
          <li><Link href="/algemene-voorwaarden">Algemene Voorwaarden</Link></li>
          <li><Link target="_blank" href="/sitemap.xml">Sitemap</Link></li>
        </ul>

        <ul>
          <li><h2>Populaire automerken</h2></li>
          <li><Link href="/mercedes-benz-a-klasse-carplay">Mercedes-Benz A-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-b-klasse-carplay">Mercedes-Benz B-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-c-klasse-carplay">Mercedes-Benz C-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-cla-klasse-carplay">Mercedes-Benz CLA-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-glc-klasse-carplay">Mercedes-Benz GLC-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-gla-klasse-carplay">Mercedes-Benz GLA-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-e-klasse-carplay">Mercedes-Benz E-Klasse CarPlay</Link></li>
          <li><Link href="/mercedes-benz-v-klasse-carplay">Mercedes-Benz V-Klasse CarPlay</Link></li>
        </ul>

        </div>
      </div>


      <div>
        <div>
          <p>Copyright &copy; 2024 - {new Date().getFullYear()} | AutoDraadloos</p>
          <span>Website ontwikkeling door <Link href="https://altinweb.nl/" target="_blank">Altinweb</Link> <Image src={Altinweb} alt="Logo van Altinweb"/></span>
        </div>
      </div>

      <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31657836190"><Image src={WhatsApp} alt="WhatsApp logo"/></Link>
      
    </footer>
  );
}

export default Footer;
