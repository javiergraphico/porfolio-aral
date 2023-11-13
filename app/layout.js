import { Bebas_Neue, Poppins } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DarkMode from '@/components/DarkMode'

const Bebas = Bebas_Neue({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Porfolio-Aral',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Bebas.variable} ${poppins.variable}`}>
      <body>
        <DarkMode />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}