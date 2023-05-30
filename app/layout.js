import '../styles/globals.css'
import { Andada_Pro } from 'next/font/google'

const Andada = Andada_Pro({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Andada.className}>{children}</body>
    </html>
  )
}
