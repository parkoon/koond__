import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Pagination from '.'

export default {
  title: 'Navigation',
  component: Pagination,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '안녕하세요 라고 보여주는 컴포넌트',
  },
}

export const pagination = () => {
  const onChange = (page: number) => {}
  return (
    <>
      <Pagination total={500} limit={10} neighbours={1} onChange={onChange} />
      <br />
      <Pagination total={500} limit={10} neighbours={1} outline onChange={onChange} />
    </>
  )
}
