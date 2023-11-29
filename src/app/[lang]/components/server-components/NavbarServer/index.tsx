import Link from 'next/link';
import Logo from '../../client-components/Logo';
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import dynamic from 'next/dynamic';


interface NavbarProps {
  lang: Locale
}

const CustomNavLink = dynamic(() => import('../../client-components/CustomNavLink').then(module => module.default), {
  ssr: false
})

export default async function Navbar(props: NavbarProps) {

  const { lang } = props
  const page = await getDictionary(lang)

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between font-mont'>
      <nav>
        <CustomNavLink href={`/${lang}`} title={page.navbar.home} className="mr-4" />
        <CustomNavLink href={`/${lang}/about`} title={page.navbar.about} className="mx-4" />
        <CustomNavLink href={`/${lang}/projects`} title={page.navbar.projects} className="mx-4" />
        <CustomNavLink href={`/${lang}/contact`} title={page.navbar.contact} className="ml-4" />
      </nav>

      <nav>


      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}