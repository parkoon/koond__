import React from 'react'
import Select from './Select'

export default {
  title: 'Select',
  component: Select,
}

const options = [
  {
    name: 'A',
    value: 'A',
  },
  {
    name: 'B',
    value: 'B',
  },
  {
    name: 'C',
    value: 'C',
  },
]

export const Default = () => {
  const handleChange = value => {
    console.log('value...', value)
  }
  return (
    <>
      <Select options={options} onChange={handleChange} defaultValue="A" />
    </>
  )
}
