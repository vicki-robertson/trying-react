import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

const CarouselComponent = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        dynamicHeight={true}
        className={styles.carouselBox}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div className={styles.slide}>
          <Image
            src="/carousel/carousel-1.jpeg"
            alt="Carousel 1"
            layout="intrinsic"
            width={1726}
            height={833}
            objectFit="cover"
          />

          <div className={styles.overlayContent}>
            <h1 className={styles.legend}>The Giggle</h1>
            <div className={styles.buttonCarousel}>
              <Button text='Ver Ahora' />
            </div>
          </div>
        </div>

        <div className={styles.slide}>
          <Image
            src="/carousel/carousel-2.jpeg"
            alt="Carousel 2"
            layout="intrinsic"
            width={1726}
            height={833}
            objectFit="cover"
          />
          <div className={styles.overlayContent}>
            <h1 className={styles.legend}>Allons-y</h1>
            <div className={styles.buttonCarousel}>
              <Button text='Ver Ahora' />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;