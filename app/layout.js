import './globals.css'
import Navbar from '@components/Navbar';
import Providers from './Providers';



export const metadata = {
  title: 'Laboratorios',
  description: 'Laboratorios',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    <body className=''>
      <Providers>
        
          <Navbar />
        
        <main className={"mt-20 h-screen"}>{children}</main>
      </Providers>
    </body>
  </html>
  )
}
