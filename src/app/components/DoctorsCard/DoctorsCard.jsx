import styles from './DoctorsCard.module.css'
import Image from 'next/image';

import doctorsList from '../../../app/doctors.json'
import SmallButton from '../SmallButton/Button';


export default function DoctorsCard() {

  return (
    <>
      <h2 className={styles.title}>Doctors</h2>
      <article className={styles.doctorsCard}>
        {doctorsList.doctors.map((doctor) => (
          <div key={doctor.id}>
            <figure className={styles.imageBox}>
              <Image
                src={doctor.image}
                width={314}
                height={460}
                alt='doctor'
                className={styles.doctorImage}
                />
            </figure>
            <section className={styles.infoBox}>
              <div className={styles.textBox}>
                <h3 className={styles.doctorName}>{doctor.doctor}</h3>
                <h4 className={styles.actorName}>{doctor.actor}</h4>
                <p className={styles.screenTime}>{doctor.screen_time}</p>
              </div>
              <div className={styles.buttonDoctors}>
                <SmallButton href="https://www.doctorwho.tv/">Ver más</SmallButton>
              </div>
            </section>
          </div>
        ))}
      </article>
    </>
  );
}