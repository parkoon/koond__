import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Pagination from './index'

export default {
  title: 'Pagination',
  decorators: [withKnobs],
  component: Pagination,
  parameters: {
    componentSubtitle: '페이지를 처리하는 컴포넌트',
  },
}

export const Default = () => {
  const onChange = (page: number) => {
    // Do something...
  }
  return (
    <>
      <Pagination total={500} limit={10} neighbours={1} onChange={onChange} />
    </>
  )
}

export const Outlined = () => {
  const onChange = (page: number) => {
    // Do something...
  }
  return (
    <>
      <Pagination total={500} limit={10} neighbours={1} outlined onChange={onChange} />
    </>
  )
}
