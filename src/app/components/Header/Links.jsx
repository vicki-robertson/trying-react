import Link from "next/link";
import styles from "./Links.module.css"

export default function Links() {
  return (
    <div className={styles.links}>
        <Link href='/about-doctors'>Conoce a</Link>
        <Link href='/doctors'>Doctores</Link>
        <Link href='/contact'>Contacto</Link>
    </div>
  );
}