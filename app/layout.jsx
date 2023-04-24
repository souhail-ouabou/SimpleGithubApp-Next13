import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  weight:['400','700'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Shlo App',
  description: 'Next js Crash course',
  keywords:'web development , css, next, html'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         <Header />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
