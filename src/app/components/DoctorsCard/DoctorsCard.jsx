import styles from './DoctorsCard.module.css'
import Image from 'next/image';

import doctorsList from '../../../app/doctors.json'
import Button from '../SmallButton/Button';

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
                />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.doctorName}>{doctor.doctor}</h3>
              <h4 className={styles.actorName}>{doctor.actor}</h4>
              <p className={styles.info}>{doctor.screen_time}</p>
              <div className={styles.buttonDoctors}>
                <Button text='Ver más' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// export default DoctorsCard;

// "use client"

// import doctors from '@/app/doctors.json'
// import Link from "next/link";
// // import { useParams } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// import useFetch from '@/app/doctors.json';
// import { withRouter } from 'next/router';
// import styles from './DoctorsCard.module.css';
// import Button from '../Button/Button';

// export default function DoctorsCard({ router }) {
//   const { id } = router.query;

//   const { data } = useFetch('@/app/doctors.json');
//   console.log({ data });

// // export default function DoctorsCard() {
// //     const { id } = useParams(id)
// //     const { data } = useFetch('@/app/doctors.json')
// //     console.log({ data })
  
//     return (
    
    
//     <main>
//       {doctors.map((doctor) => (
//         <Link key={doctor.id} href={`/${doctor.id}`}>
//           <img src={doctor.img} alt="this is an image" />
//         </Link>
//       ))}
//     </main>
//   )
// }


// // const Doctors = () => {
// //   const [doctors, setDoctors] = useState([]);
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch('/doctors.json');
// //         const data = await response.json();
// //         setDoctors(data.doctors);
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };
// //     fetchData();
// //   }, []);
// //   return (
// //     <main className={styles['doctors__container']}>
// //       <h1 className={styles['doctors__title']}>Doctores</h1>
// //       <ul className={styles['doctors__list']}>
// //         {doctors.map((doctor) => (
// //           <li key={doctor.id} className={styles['doctors__item']} width={314}>
// //             <img
// //               src={doctor.image}
// //               alt={doctor.doctor}
// //               width={314}
// //               height={459.17}
// //               className={styles['doctors__image']}
// //             />
// //             <p className={styles['doctors__doctor-name']}>{doctor.doctor}</p>
// //             <p className={styles['doctors__actor-name']}>{doctor.actor}</p>
// //             <p className={styles['doctors__screen-time']}>{doctor.screen_time}</p>
// //              <Button text="Ver más" link="https://www.doctorwho.tv/" />
// //           </li>
// //         ))}
// //       </ul>
// //     </main>
// //   );
// // };