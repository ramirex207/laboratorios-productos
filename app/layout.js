import './globals.css'
import Navbar from '@components/Navbar';
import Providers from './Providers';


export const metadata = {
  title: 'VAMASOL',
  description: 'SPA para la gestion de inventarios para la empresa VAMASOL',
  icons:{
    icon:[
      '/favicon.ico?v=4'
    ],
    apple:[
      '/apple-touch-icon.png?v=4'
    ],
    shortcut:[
      '/apple-touch-icon.png'
    ]
  },
  manifest: '/site.webmanifest',
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
