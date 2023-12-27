import doctors from '@/app/doctors.json'
import Link from "next/link";
import { useParams } from 'next/navigation';

export default function DoctorsCard() {
    const { id } = useParams()
    const { data } = useFetch(urlDetail)
    console.log({ data })
  
    return (
    
    
    <main>
      {doctors.map((doctor) => (
        <Link key={doctor.id} href={`/${doctor.id}`}>
          <img src={doctor.img} alt="this is an image" />
        </Link>
      ))}
    </main>
  )
}