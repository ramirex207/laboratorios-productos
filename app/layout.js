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
    <body className='min-h-screen flex flex-col'>
      <Providers>
        
          <Navbar />
        
        <main className='flex-1'>{children}</main>
      </Providers>
    </body>
  </html>
  )
}
