import Image from "next/image"

export default function Logo() {
  return (
    <Image
        src="/logos/logo.png"
        alt='Doctor Who logo'
        height={190}
        width={185}
    />
  )
}
        
        