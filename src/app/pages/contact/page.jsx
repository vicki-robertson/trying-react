import styles from './page.module.css'
import Button from '../../components/Button/Button'
import Image from 'next/image'
import SymbolsContact from '../../components/Symbols/SymbolsContact/SymbolsContact'

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <main className={styles.main}>
        <h2>Envia tu mensaje al doctor</h2>
        <div className={styles.symbols}>
          <SymbolsContact/>
        </div>
      </main>
      <form className={styles.formContainer}>
        <h3>Form goes here</h3>
        <Button text='Send'></Button>
      </form>
      
    </div>
  )
}