import styles from "./Footer.module.css"
import SocialMedia from "../SocialMedia/SocialMedia";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className={styles.footer}>
        <div className={styles.smallLogo}>
          <Image
            src="/logos/logo-cadena.png"
            alt='Doctor Who cog Logo'
            height={38}
            width={38}
          />
        </div>
        <div className={styles.socialFooter}>
          <SocialMedia />
        </div>
      </footer>
  );
}