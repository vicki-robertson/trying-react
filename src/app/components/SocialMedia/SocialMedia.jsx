import styles from './SocialMedia.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function SocialMedia() {
  return (
    <div className={styles.socialContainer}>
          <Link className={ styles.socialLinks } href="https://www.facebook.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/facebook.svg"
                width={24}
                height={24}
                alt="Facebook link"
              />
          </Link>
          
          <Link className={ styles.socialLinks } href="https://www.instagram.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/mdi_instagram.svg"
                width={24}
                height={24}
                alt="Instagram link"
              />
          </Link>

          <Link className={ styles.socialLinks } href="https://www.twitter.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/simple-icons_x.svg"
                width={24}
                height={24}
                alt="X (Twitter) link"
              />
          </Link>

          <Link className={ styles.socialLinks } href="https://www.tiktok.com/" target="_blank"> 
              <Image className={styles.icon}
                src="/icons/ic_baseline-tiktok.svg"
                width={24}
                height={24}
                alt="Tiktok link"
              />
          </Link>
    </div>
  )
}