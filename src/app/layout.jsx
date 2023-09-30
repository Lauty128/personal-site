//----> Assets
import '../styles/index.scss'
import { Inter } from 'next/font/google'

//----> Components
import { Footer } from '../components/static'

//----> Configs
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio of Lautaro Silverii'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
