import React from 'react'
import { Input, Password } from './'
import Icon from '../../general/Icon'
import Textarea from './Textarea'

export default {
  title: 'Data Entry',
  component: Input,
}

export const input = () => {
  return (
    <>
      <Input onChange={value => console.log(value)} placeholder="large size" htmlSize="large" />
      <Input onChange={value => console.log(value)} placeholder="small size" htmlSize="small" />
      <Input onChange={value => console.log(value)} placeholder="defualt size" prefixIcon={<Icon name="search" />} />
      <Input onChange={value => console.log(value)} placeholder="defualt size" suffixIcon={<Icon name="search" />} />
      <Password onChange={value => console.log(value)} />
      <Password onChange={value => console.log(value)} htmlSize="large" />
      <Password onChange={value => console.log(value)} htmlSize="small" />

      <Textarea rows={2} />
    </>
  )
}
