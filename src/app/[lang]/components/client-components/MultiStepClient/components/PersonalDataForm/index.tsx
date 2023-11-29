"use client"
import CustomInputForm from '../../../../server-components/CustomInputForm'

interface PersonalDataPageProps {
  form?: PersonalDataForm
  page: any
}

interface PersonalDataForm {
  fullName?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  country?: string
  postalCode?: string
  linkedin?: string
  github?: string
}

export default function PersonalDataForm(personalDataProps: PersonalDataPageProps) {

  return (
    <div className='max-w-screen-lg mx-auto'>

      <h2 className='w-full flex justify-center font-medium text-2xl font-mont text-dark mb-8'>{personalDataProps.page.title}</h2>

      <CustomInputForm label={personalDataProps.page.fullName} type="text" value={personalDataProps?.form?.fullName} />
      <div className="flex">
        <CustomInputForm label={personalDataProps.page.email} marginRight type="email" value={personalDataProps?.form?.email} />
        <CustomInputForm label={personalDataProps.page.phone} marginLeft type="tel" value={personalDataProps?.form?.phone} />
      </div>

      <CustomInputForm label={personalDataProps.page.address} type="text" value={personalDataProps?.form?.address} />

      <div className="flex">
        <CustomInputForm label={personalDataProps.page.city} marginRight type="text" value={personalDataProps?.form?.city} />
        <CustomInputForm label={personalDataProps.page.country} marginLeft marginRight type="text" value={personalDataProps?.form?.country} />
        <CustomInputForm label={personalDataProps.page.postalCode} type="text" marginLeft value={personalDataProps?.form?.postalCode} />
      </div>

      <CustomInputForm label={personalDataProps.page.linkedin} type="text" value={personalDataProps?.form?.linkedin} />
      <CustomInputForm label={personalDataProps.page.github} type="text" value={personalDataProps?.form?.github} />
    </div>
  )

}