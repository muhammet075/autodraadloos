import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/components/footerswiper.module.css";

import betalenIco from "@/assets/icons/betalen.svg";
import locatieIco from "@/assets/icons/locatie.svg";
import adviesIco from "@/assets/icons/advies.svg";

function Footerswiper() {
  useEffect(() => {
    const swiper = new Swiper(".footerswiper", {
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10, loop: true },
        900: { slidesPerView: 3, spaceBetween: 25 },
      },
      autoplay: { delay: 4000 },
      pagination: { el: ".swiper-pagination3", clickable: false },
    });
  }, []);

  return (
    <>
      <div className={`${styles.footerswiper} footerswiper`}>
        <div className={`${styles.footerblocks} swiper-wrapper`}>
          <div className="swiper-slide">
            <Image src={betalenIco} alt="Betalen icoon" />
            <h2>Betaal pas na montage</h2>
            <p>Wij monteren, u betaalt na de montage</p>
          </div>

          <div className="swiper-slide">
            <Image src={locatieIco} alt="Locatie icoon" />
            <h2>Montage op locatie</h2>
            <p>Wij zijn door heel Nederland en België actief</p>
          </div>

          <div className="swiper-slide">
            <Image src={adviesIco} alt="Advies icoon" />
            <h2>Persoonlijk advies</h2>
            <p>Wij vertellen wat er allemaal mogelijk is voor uw auto</p>
          </div>
        </div>
      </div>

      <div className={`${styles.footerswiperindicators} swiper-pagination swiper-pagination3`}></div>
    </>
  );
}

export default Footerswiper;
