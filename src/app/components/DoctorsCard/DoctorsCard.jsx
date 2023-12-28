import styles from './DoctorsCard.module.css'
import Image from 'next/image';

import doctorsList from '../../../app/doctors.json'
import SmallButton from '../SmallButton/Button';


export default function DoctorsCard() {

  return (
    <>
      <h2 className={styles.title}>Doctors</h2>
      <div className={styles.doctorsCard}>
        {doctorsList.doctors.map((doctor) => (
          <div key={doctor.id}>
            <div className={styles.imageBox}>
              <Image
                src={doctor.image}
                width={314}
                height={460}
                alt='doctor'
                className={styles.doctorImage}
                />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.doctorName}>{doctor.doctor}</h3>
              <h4 className={styles.actorName}>{doctor.actor}</h4>
              <p className={styles.info}>{doctor.screen_time}</p>
              <div className={styles.buttonDoctors}>
                <SmallButton href="https://www.doctorwho.tv/">Ver más</SmallButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}