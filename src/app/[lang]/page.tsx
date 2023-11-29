import { Locale } from '@/i18n.config';
import MultiStepServer from './components/server-components/MultiStepServer';

interface HomeProps {
  params: {
    lang: Locale
  }
}
export default function Home({ params: { lang } }: HomeProps) {
  return (
    <MultiStepServer lang={lang} />
  )
}
