
"use client";

import Button from './components/Button/Button'
import styles from './page.module.css'
import CarouselComponent from './components/Carousel/Carousel';


export default function Home() {
  const title = 'The Giggle';

  return (
    <main className={styles.main}>
      <div className={styles.textBox}>
        <h1 className={styles.h2}>{ title }</h1>
        <Button text='Ver Ahora'></Button>
      </div>
      <div className={styles.carouselContainer}>
        <CarouselComponent />
      </div>
    </main>
  )
}
