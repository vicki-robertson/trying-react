import styles from "./Header.module.css"

// components
import Links from "./Links";
import SocialMedia from "../SocialMedia/SocialMedia";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.links}><Links /></div>
          <div className={styles.logo}><Logo /></div>
          <div className={styles.searchBar}><SearchBar /></div>
          <div className={styles.socialContainer}><SocialMedia /></div>
        </div>
      </header>
  );
}
