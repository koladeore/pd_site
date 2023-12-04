import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'
import CartProvider from "@/Providers/CartProvider";
import { Toaster } from 'react-hot-toast';
import Script from "next/script";

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
        <Script src="https://smtpjs.com/v3/smtp.js" />
        <CartProvider>
          <Toaster /> 
          <NavBar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
