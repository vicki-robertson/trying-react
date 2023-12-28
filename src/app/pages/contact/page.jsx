import styles from './page.module.css'
import Button from '../../components/Button/Button'
import Image from 'next/image'
import SymbolsContact from '../../components/Symbols/SymbolsContact/SymbolsContact'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <aside className={styles.leftSection}>
        <h2>Envia tu mensaje al Doctor</h2>
        <div className={styles.symbols}>
          <SymbolsContact/>
        </div>
      </aside>
      <section className={styles.rightSection} >
        <form className={styles.formContainer}>
          <h3>Form goes here</h3>
          <Button text='Send'></Button>
        </form>
      </section>
    </div>
  )
}