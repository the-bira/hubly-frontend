"use client"

interface ProgressData {
  index: number
  title: string
  description: string
}

interface ProgressProps {
  currentStep: number
  steps: ProgressData[]
}

export function Progress({ currentStep, steps }: ProgressProps) {
  return (
    <div className='max-w-screen-lg mx-auto'>
      <ol role='list' className='flex w-full justify-between'>
        {steps.map((step: ProgressData, index: number) => (
          <li key={step.title} className='flex'>
            {currentStep > index ? (
              <div className='flex w-52 flex-col border-l-0 border-sky-600 py-2 pl-4 transition-colors border-l-0 border-t-4 pb-0 pl-0 pt-4'>
                <span className='text-sm font-medium text-sky-600 transition-colors '>
                  {step.index}
                </span>
                <span className='text-sm font-medium'>{step.title}</span>
              </div>
            ) : currentStep === index ? (
              <div
                className='flex w-52 flex-col border-l-0 border-sky-600 py-2 pl-4 border-l-0 border-t-4 pb-0 pl-0 pt-4'
                aria-current='step'
              >
                <span className='text-sm font-medium text-sky-600'>
                  {step.index}
                </span>
                <span className='text-sm font-medium'>{step.title}</span>
              </div>
            ) : (
              <div className='flex w-52 flex-col border-l-0 border-gray-200 py-2 pl-4 transition-colors border-l-0 border-t-4 pb-0 pl-0 pt-4'>
                <span className='text-sm font -medium text-gray-500 transition-colors'>
                  {step.index}
                </span>
                <span className='text-sm font-medium text-gray-500'>{step.title}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}