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
      <Input placeholder="large size" htmlSize="large" />
      <Input placeholder="small size" htmlSize="small" />
      <Input placeholder="defualt size" icon={<Icon name="search" />} />
    </>
  )
}
