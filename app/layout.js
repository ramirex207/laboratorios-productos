import './globals.css'
import Navbar from '@components/Navbar';
import Providers from './Providers';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className=''>
      <Providers>
        
          <Navbar />
        
        <main className={"mt-20 h-screen"}>{children}</main>
      </Providers>
    </body>
  </html>
  )
}
