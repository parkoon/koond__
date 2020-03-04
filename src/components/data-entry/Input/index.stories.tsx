import React from 'react'
import Input from './Input'
import Icon from '../../general/Icon'

export default {
  title: 'Data Entry',
  component: Input,
}

export const input = () => {
  return (
    <>
      <Input placeholder="Basic usage" size="large" />
      <Input placeholder="Basic usage" icon={<Icon name="search" />} />
    </>
  )
}
