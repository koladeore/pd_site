import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import { AppProvider } from '../context/AppContext'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'David Makanjuola',
  description: 'David Makanjuola website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  )
}
