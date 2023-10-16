import NavbarComponent from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Check Flight Status',
  description: 'Flight Status Tracker / Flight Tracking',
  robots:'nofollow, noindex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
