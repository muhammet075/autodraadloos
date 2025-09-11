import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/components/footer.module.css";
import Logo from "@/assets/logo/autodraadloos-rond-logo.svg";
import Altinweb from "@/assets/logo/altinweb-logo.svg";
import Instagram from "@/assets/icons/instagram2.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Tiktok from "@/assets/icons/tiktok.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";
import knopklokReviewLogo from "@/assets/img/knipklok-logo.png";
import Instagramfeed from "@/components/instagramfeed";

function Footer() {

  useEffect(() => {
    setInterval(()=>document.querySelectorAll('.eapp-cookie-consent-widget-container > a').forEach(el=>el.removeAttribute('style')),10);
  }, []);
  


  return (
    <>

      <Instagramfeed/>

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
                <li><Link href="https://www.tiktok.com/@autodraadloos/" target="_blank" title="TikTok"><Image src={Tiktok} alt="TikTok Logo"/></Link></li>
                <li><Link href="https://www.instagram.com/autodraadloos/" target="_blank" title="Instagram"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
                <li><Link href="https://www.facebook.com/autodraadloos/" target="_blank" title="Facebook"><Image src={Facebook} alt="Facebook Logo"/></Link></li>
                <li><Link href="https://api.whatsapp.com/send/?phone=31657836190" target="_blank" title="WhatsApp"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
              </ul>
            </li>
          </ul>

          <ul>
            <li><h2>Pagina's</h2></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/offerte">Offerte</Link></li>
            <li><Link href="/veelgestelde-vragen">Veelgestelde vragen</Link></li>
            <li><Link href="/carplay-laten-inbouwen">CarPlay laten inbouwen</Link></li>
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
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/a-klasse/">Mercedes-Benz A-Klasse CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/b-klasse/">Mercedes-Benz B-Klasse CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/c-klasse/">Mercedes-Benz C-Klasse CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/cla/">Mercedes-Benz CLA CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/glc/">Mercedes-Benz GLC CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/gla/">Mercedes-Benz GLA CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/e-klasse/">Mercedes-Benz E-Klasse CarPlay</Link></li>
            <li><Link href="/carplay-laten-inbouwen/mercedes-benz/v-klasse/">Mercedes-Benz V-Klasse CarPlay</Link></li>
          </ul>

          </div>
        </div>


        <div>
          <div>
            <p>Copyright &copy; 2024 - {new Date().getFullYear()} | AutoDraadloos</p>
            <span>Website ontwikkeling door <Link href="https://altinweb.nl/" target="_blank">Altinweb</Link> <Image src={Altinweb} alt="Logo van Altinweb"/></span>
          </div>
        </div>

        <Link target="_blank" href="https://api.whatsapp.com/send/?phone=31657836190" title="WhatsApp"><Image src={WhatsApp} alt="WhatsApp logo"/></Link>
        
      </footer>
      
      <div class="elfsight-app-efec9043-bcb6-4ceb-b208-fe40087e48bf" data-elfsight-app-lazy></div>

      <script src="https://elfsightcdn.com/platform.js" async></script>
    </>
  );
}

export default Footer;
