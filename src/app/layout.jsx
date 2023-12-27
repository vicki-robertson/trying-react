// import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
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
      <body className={`${lato.variable} ${montserrat.variable}`}>
          <Header/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}