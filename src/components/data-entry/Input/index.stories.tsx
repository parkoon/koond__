import React from 'react'
import Input from './Input'

export default {
  title: 'Data Entry',
  component: Input,
}

export const input = () => {
  return (
    <>
      <Input placeholder="Basic usage" size="large" />
    </>
  )
}
