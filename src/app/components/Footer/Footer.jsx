import styles from "./Footer.module.css"
import SocialMedia from "../SocialMedia/SocialMedia";


export default function Footer() {
  return (
      <footer className={styles.footer}>
        <SocialMedia className={styles.socialFooter}/>
      </footer>
  );
}