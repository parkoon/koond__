import React from 'react'
import Form from './Form'
import FormItem from './FormItem'
import Input from '../Input'
import Button from '../Button'

const { Password } = Input

export default {
  title: 'Form',
  component: Form,
}

export const Default = () => {
  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormItem
          name="id"
          label="아이디"
          rules={[
            {
              required: true,
              message: '아이디를 입력해주세요',
            },
            {
              len: 10,
              message: '10자 이내로 입력해주세요.',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem
          name="password"
          label="패스워드"
          rules={[
            {
              required: true,
              message: '패스워드를 입력해주세요',
            },
            {
              pattern: new RegExp(/^[A-Za-z0-9]{6,12}$/),
              message: '숫자와 문자 포함 형태의 6~12자리 이내의 암호를 입력해주세요.',
            },
          ]}
        >
          <Password />
        </FormItem>
        <FormItem
          name="nickname"
          label="닉네임"
          rules={[
            {
              required: true,
              message: '닉네임을 입력해주세요',
            },
            {
              min: 1,
              max: 15,
              message: '1자에서 15자 이내로 입력해주세요.',
            },
          ]}
        >
          <Input />
        </FormItem>
        <FormItem>
          <Button variant="primary">Primary</Button>
        </FormItem>
      </Form>
    </>
  )
}
