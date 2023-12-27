import Image from "next/image"
import styles from "./Logo.module.css"

export default function Logo() {
  return (
    <div className={styles.logoImg}>
      <Image
          src="/logos/logo.png"
          alt='Doctor Who logo'
          height={190}
          width={185}
      />
    </div>
  )
}
        
        