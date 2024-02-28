//----> Assets
import '../styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google'

//----> Components
import { Footer } from '../components/static'
import { ToastContainer } from 'react-toastify';

//----> Configs
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lautaro Silverii',
  description: '🔍 Portfolio donde se encuentra toda la información con respecto a mi trayectoria como programador y donde muestro mis habilidades como tal.  😁'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="shortcut icon" href="/logo-light.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
