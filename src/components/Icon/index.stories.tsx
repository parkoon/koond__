import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from './'
import Icon from '../Icon'

export default {
  title: 'General',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '안녕하세요 라고 보여주는 컴포넌트',
  },
}

export const icon = () => {
  return (
    <>
      <Icon name="search" />
      <br />
      <br />
      <Icon name="search" spin />
    </>
  )
}
