import React from 'react'
import Input from './'
import Icon from '../../general/Icon'

const { Textarea, Password } = Input

export default {
  title: 'Data Entry',
  component: Input,
}

export const input = () => {
  return (
    <>
      <h4>Error</h4>
      <Input
        onChange={value => console.log(value)}
        placeholder="아이디를 입력해주세요."
        error
        helperText="아이디가 틀렸습니다."
      />
      <br />
      <br />
      <Password
        onChange={value => console.log(value)}
        placeholder="비밀번호를 입력해주세요"
        error
        helperText="비밀번호가 틀렸습니다"
      />

      <h4>Size</h4>
      <Input onChange={value => console.log(value)} placeholder="small size" htmlSize="small" />
      <Input
        onChange={value => console.log(value)}
        placeholder="large size"
        htmlSize="large"
        prefixIcon={<Icon name="search" />}
      />
      <Input onChange={value => console.log(value)} placeholder="defualt size" suffixIcon={<Icon name="search" />} />

      <Password onChange={value => console.log(value)} htmlSize="large" />
      <Password onChange={value => console.log(value)} htmlSize="small" />

      <h4>Textarea (error)</h4>
      <Textarea
        rows={2}
        onChange={value => console.log(value)}
        placeholder="This is a textarea"
        error
        helperText="값을 입력해주세요"
      />
    </>
  )
}
