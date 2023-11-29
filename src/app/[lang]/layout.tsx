import type { Metadata } from 'next'
import '../globals.css'
import { Montserrat } from 'next/font/google'
import { Locale, i18n } from '@/i18n.config'
import Navbar from './components/server-components/NavbarServer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Hubly - Hub of Developers',
  description: 'Hub of Developers',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} >
      <body className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}>
        <Navbar lang={params.lang}></Navbar>
        <main className='mt-10'>{children}</main>
      </body>
    </html>
  )
}
