interface ProfessionalDataPageProps {
  form?: ProfessionalDataForm
  page: any
}

interface ProfessionalDataForm {
  company?: string
  position?: string
  description?: string
}

export default function ProfessionalDataForm(professionalDataProps: ProfessionalDataPageProps) {

  const { page } = professionalDataProps

  return (
    <div>Professional Data Form</div>
  )
}

