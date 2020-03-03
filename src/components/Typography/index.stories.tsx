import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Typography from './'

export default {
  title: 'General',
  component: Typography,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '안녕하세요 라고 보여주는 컴포넌트',
  },
}

export const typography = () => {
  return (
    <>
      <Typography.Text />
      <br />
      <br />
      <Typography.Paragraph />
      <br />
      <br />
      <Typography.Title />
    </>
  )
}
