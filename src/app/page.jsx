
"use client";

import Button from './components/Button/Button'
import styles from './page.module.css'



export default function Home() {
  const title = 'The Giggle';

  return (
    <main className={styles.main}>
      <h1 className={styles.h2}>{ title }</h1>
      <Button text='Ver Ahora'></Button>
      <h3>
        Hello there!
      </h3>
      
    </main>
  )
}
