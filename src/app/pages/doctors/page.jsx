import DoctorsCard from '@/app/components/DoctorsCard/DoctorsCard'
import styles from './page.module.css'

export default function Doctors() {
  return (
      <section className={styles.doctorsGrid}>
          <div><DoctorsCard/></div>
      </section>
  )
}
