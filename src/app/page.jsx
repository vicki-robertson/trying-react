
"use client";

import Button from './components/Button/Button'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>The Giggle</h2>
      <Button text='Ver Ahora'></Button>
      <h1 className="text-3xl font-bold">
        Hello world!
      </h1>   
    </main>
  )
}
