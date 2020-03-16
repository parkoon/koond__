import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Icon from '.'

export default {
  title: 'Icon',
  component: Icon,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '아이콘을 보여주는 컴포넌트',
  },
}

export const Default = () => {
  return (
    <>
      <Icon name="no-data" /> <br />
      <Icon name="search" /> <br />
      <Icon name="cancel" /> <br />
    </>
  )
}
export const Spin = () => {
  return <Icon name="star" spin />
}
