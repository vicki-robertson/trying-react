import styles from "./Header.module.css"
import Links from "./Links";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Links/>
        <Image
          src="/logos/logo.png"
          alt='Doctor Who logo'
          height={190}
          width={185}
        />
        <h2>hello</h2>
      </header>
    </> 
  );
}
