import React, { useEffect } from "react";
import styles from "../styles/Carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <img src="/images/villa_pool_2.jpg" alt="Carousel image 1" />
        </div>
        <div className={styles.embla__slide}>
          <img src="/images/villa_pool_2.jpg" alt="Carousel image 2" />
        </div>
        <div className={styles.embla__slide}>
          <img src="/images/villa_pool_2.jpg" alt="Carousel image 3" />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
