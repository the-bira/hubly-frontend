interface CustomInputProps {
  label: string
  type: string
  placeholder?: string
  value?: string
  marginLeft?: boolean
  marginRight?: boolean
}

export default function CustomInputForm(customInputProps: CustomInputProps) {

  const groupClass = `
  flex
  flex-col
  mb-4
  flex-grow
 ${customInputProps.marginLeft ? 'ml-4' : ''}
 ${customInputProps.marginRight ? 'mr-4' : ''}
`

  return (
    <div className={groupClass}>
      <label className='mb-1'> {customInputProps.label} </label>
      <input type={customInputProps.type} placeholder={customInputProps.placeholder} value={customInputProps.value} className='border rounded-lg p-2' />
    </div>
  )

}