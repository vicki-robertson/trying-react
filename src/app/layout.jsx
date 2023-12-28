// import 'bootstrap/dist/css/bootstrap.css';
import styles from './globals.css'
import { Lato, Montserrat } from 'next/font/google'

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
    
const lato = Lato({ 
  weight: '700',
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap', 
})
  
const montserrat = Montserrat({
  weight: ['400', '600'],
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})

export const metadata = {
  title: 'Doctor Who',
  description: 'El mundo de Doctor Who',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`{styles.container} ${lato.variable} ${montserrat.variable}`}>
          <Header className={styles.header} />
          <main className={styles.main}>
            {children}
          </main>
          <Footer className={styles.footer} />
      </body>
    </html>
  )
}