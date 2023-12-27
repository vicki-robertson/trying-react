
"use client";

import Button from './components/Button/Button'
import styles from './page.module.css'
import CarouselComponent from './components/Carousel/Carousel';


export default function Home() {
  const title = 'The Giggle';

  return (
    <main className={styles.main}>
        <CarouselComponent />
    </main>
  )
}
