import React from 'react'
import { Radio } from './'

export default {
  title: 'Data Entry',
  component: Radio,
}

export const radio = () => {
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <Radio name="a" value={1} onChange={handleChange} checked>
        A
      </Radio>
      <Radio name="a" value={2} onChange={handleChange}>
        B
      </Radio>
    </>
  )
}
