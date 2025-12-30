import type { Metadata } from 'next'
import { Inter, Poppins, Work_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/layout/CookieBanner'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
})

const workSans = Work_Sans({ 
  subsets: ['latin'], 
  variable: '--font-work-sans',
  weight: ['300', '400', '500', '600'],
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: 'Film LED & Smartfilm Opacifiant | Solutions High-Tech Premium',
    template: '%s | Film LED & Smartfilm'
  },
  description: 'Solutions premium de film LED et smartfilm opacifiant pour professionnels et particuliers. Expertise technique, installation professionnelle et accompagnement de A à Z.',
  keywords: ['film LED', 'smartfilm opacifiant', 'vitrine LED', 'verre intelligent', 'domotique', 'architecture moderne'],
  authors: [{ name: 'Film LED & Smartfilm' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://film-led-smartfilm.com',
    siteName: 'Film LED & Smartfilm',
    title: 'Film LED & Smartfilm Opacifiant | Solutions High-Tech Premium',
    description: 'Solutions premium de film LED et smartfilm opacifiant pour professionnels et particuliers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Film LED & Smartfilm Opacifiant | Solutions High-Tech Premium',
    description: 'Solutions premium de film LED et smartfilm opacifiant pour professionnels et particuliers.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} ${workSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://film-led-smartfilm.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

