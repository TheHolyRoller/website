import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NewNav from './Components/NewNav'; 
import Footer from './footer/Footer'; 

<<<<<<< HEAD
require('dotenv').config();
=======
// require('dotenv').config();
>>>>>>> 56e2ad2 (testing)




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Revival',
  description: 'Sharing the Light of God`s Word',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo-light.png',
        href: '/images/logo-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/logo-dark.png',
        href: '/images/logo-dark.png',
      },
    ],
  },  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" style={{background: '#161822'}} >
    
    <NewNav/> 

      <body className={inter.className}>
      
      {children}
      
      </body>
      <Footer/> 
      
      
    </html>
  )
}
