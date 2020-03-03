import React from 'react'
import Checkbox from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'Data Entry',
  component: Checkbox,
  decorators: [withKnobs],
}

export const checkbox = () => {
  const handleChange = e => {
    console.log(e.target.checked)
  }
  return (
    <>
      <Checkbox onChange={handleChange}>약관에 동의합니다.</Checkbox>
    </>
  )
}
