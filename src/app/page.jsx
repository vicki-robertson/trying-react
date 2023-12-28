
"use client"

import styles from './page.module.css'
import CarouselComponent from './components/Carousel/Carousel';



export default function Home() {

  return (
      <section className={styles.mainSection}>
          <CarouselComponent/>
      </section>
  )
}
