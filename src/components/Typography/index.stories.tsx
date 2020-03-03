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
      <Typography.Text>Pakoon</Typography.Text>
      <br />
      <Typography.Text type="warning">Pakoon</Typography.Text>
      <br />
      <Typography.Text type="danger">Pakoon</Typography.Text>
      <br />
      <Typography.Text size="large" type="warning">
        Pakoon(large)
      </Typography.Text>
      <br />
      <Typography.Text size="small" type="danger">
        Pakoon(small)
      </Typography.Text>
      <br />
      <Typography.Text underline>Pakoon</Typography.Text>
      <br />
      <Typography.Text deleted>Pakoon</Typography.Text>
      <br />
      <Typography.Text strong>Pakoon</Typography.Text>
      <br />
      <br />
      <Typography.Title>h1. parkoon design</Typography.Title>
      <Typography.Title level={2}>h2. parkoon design</Typography.Title>
      <Typography.Title level={3}>h3. parkoon design</Typography.Title>
      <Typography.Title level={4}>h4. parkoon design</Typography.Title>
    </>
  )
}
