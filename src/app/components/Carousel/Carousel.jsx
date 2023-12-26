import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Carousel.module.css';
import Image from 'next/image';
import Button from '../Button/Button';

const CarouselComponent = () => {
  return (
    <Carousel showArrows={true}>
      <div>
        <h1 className={styles.legend}>The Giggle</h1>
        <Button>Ver Ahora</Button>
        <Image 
            src="/carousel/carousel-1.jpeg"
            alt="Carousel 1"
            height={833}
            width={1726}
        />
        
        
      </div>
      <div>
        <Image
            src="/carousel/carousel-2.jpeg"
            alt="Carousel 2"
            height={833}
            width={1726}
        />
        <p className={styles.legend}>Alons-y</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;