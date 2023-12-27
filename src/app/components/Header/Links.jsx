import Link from "next/link";
import styles from "./Links.module.css"

export default function Links() {
  return (
    <div className={styles.links}>
        <Link href='../../pages/about-doctors'>Conoce a</Link>
        <Link href='../../pages/doctors'>Doctores</Link>
        <Link href='../../pages/contact'>Contacto</Link>
    </div>
  );
}