import styles from './SearchBar.module.css'
import Image from 'next/image'

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
        <Image className={styles.searchIcon}
          src="/icons/material-symbols-light_search.svg"
          width={24}
          height={24}
          alt="Search icon"
        />
    </div>
  )
}