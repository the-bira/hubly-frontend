import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import MultiStepClient from '../../client-components/MultiStepClient';

interface MultiStepServerProps {
  lang: Locale
}

export default async function MultiStepServer(props: MultiStepServerProps) {

  const { lang } = props
  const { personalDataForm } = await getDictionary(lang)

  return (
    <div className='max-w-screen-lg mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow '>
      <MultiStepClient
        personalDataForm={personalDataForm}
        professionalDataForm={personalDataForm}
        educationDataForm={personalDataForm}
        skillsDataForm={personalDataForm} />
    </div>
  )

}