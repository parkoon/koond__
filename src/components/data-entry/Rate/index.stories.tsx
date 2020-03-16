import React from 'react'
import Rate from './'

export default {
  title: 'Rate',
  component: Rate,
}

export const Default = () => {
  const handleChange = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <Rate count={5} onChange={handleChange} />
    </>
  )
}
export const ReadOnly = () => {
  return (
    <>
      <Rate count={5} defaultValue={4} disabled />
    </>
  )
}
