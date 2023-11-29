"use client"

import { useState } from 'react'
import PersonalDataForm from './components/PersonalDataForm'
import { Progress } from './components/Progress'


interface MultiStepFormProps {
  personalDataForm: any
  professionalDataForm: any
  educationDataForm: any
  skillsDataForm: any
}

export default function MultiStepClient(props: MultiStepFormProps) {

  const { personalDataForm, professionalDataForm, educationDataForm, skillsDataForm } = props
  const steps = [
    <PersonalDataForm key="personal-data" page={personalDataForm} />,
    <PersonalDataForm key="personal-data-2" page={professionalDataForm} />,
    <PersonalDataForm key="personal-data-3" page={educationDataForm} />,
    <PersonalDataForm key="personal-data-4" page={skillsDataForm} />,
  ]

  const progressSteps = [
    {
      index: 1,
      title: 'Personal Data',
      description: 'Enter your personal data',
    },
    {
      index: 2,
      title: 'Professional Data',
      description: 'Enter your professional data',
    },
    {
      index: 3,
      title: 'Education Data',
      description: 'Enter your education data',
    },
    {
      index: 4,
      title: 'Skills',
      description: 'Enter your skills',
    }
  ]

  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(step => step + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(step => step - 1)
    }
  }

  return (
    <section className='max-w-screen-lg mx-auto'>

      <div className='mb-10'>
        <Progress
          currentStep={currentStep}
          steps={progressSteps}
        />
      </div>
      {{ ...steps[currentStep] }}

      <div className='flex justify-between'>
        <button
          disabled={currentStep === 0}
          onClick={prevStep}
          className='bg-gray-600 text-white p-2 rounded-lg w-32'
        >
          Voltar
        </button>
        <button
          onClick={nextStep}
          className='transition ease-in delay-500 text-white bg-gradient-to-br from-purple-600 to-blue-500  hover:from-purple-500 hover:to-blue-400 focus:ring-4 duration-150 shadow-lg p-2 rounded-lg w-32'
        >
          Avançar
        </button>
      </div>
    </section>
  )
}

