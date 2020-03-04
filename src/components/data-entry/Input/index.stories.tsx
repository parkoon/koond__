import React from 'react'
import Input from './'
import Icon from '../../general/Icon'

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
      <Input.Password onChange={value => console.log(value)} />
      <Input.Password onChange={value => console.log(value)} htmlSize="large" />
      <Input.Password onChange={value => console.log(value)} htmlSize="small" />
    </>
  )
}
