import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NewNav from './Components/NewNav'; 
import Footer from './Footer'; 

// Import the icon here 

import MinistryMaterial from './Components/MinistryMaterial'; 
import Head from 'next/head'


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
    <html lang="en">
    
    {/* Add in the Navbar here  */}
    {/* <NewNav/>  */}
    <Head>
    <title>
      Revival 
    </title>
    </Head>
      <body className={inter.className}>
      
      {children}
      
      <MinistryMaterial/> 
      
      
      
      </body>
      {/* Add in the footer here  */}
      {/* <Footer/>  */}
      
      
    </html>
  )
}
