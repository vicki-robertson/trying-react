import styles from './page.module.css'
import Button from '../components/Button/Button'

export default function Contact() {
  return (
    <main className={styles.main}>
        <div>contact</div>
        
        <Button text='Send'></Button>
    </main>
  )
}