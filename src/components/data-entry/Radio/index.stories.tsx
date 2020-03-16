import React from 'react'
import { Radio } from './'

export default {
  title: 'Radio',
  component: Radio,
}

export const Default = () => {
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <Radio name="a" value={1} onChange={handleChange}>
        A
      </Radio>
      <br />
      <Radio name="a" value={2} onChange={handleChange}>
        B
      </Radio>
    </>
  )
}
