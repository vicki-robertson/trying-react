import './globals.css'
import { Lato, Montserrat } from 'next/font/google'
    
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
  description: 'Conoce más sobre el mundo de Doctor Who',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${lato.variable} ${montserrat.variable}`}>
      <body>
        <header></header>
        <h1>My App</h1>
        {children}
        <footer></footer>
      </body>
    </html>
  )
}
