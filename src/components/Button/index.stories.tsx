import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from './'

export default {
  title: 'General',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '안녕하세요 라고 보여주는 컴포넌트',
  },
}

const groupId = 'button-otps'

export const button = () => {
  // const big = boolean("big", false);
  // const name = text("name", "storybook");

  const label = 'variant'
  const options = ['default', 'contained', 'outlined']
  const defaultValue = 'default'
  const value = select(label, options, defaultValue, groupId)
  const rounded = boolean('rounded', false, groupId)
  const size = select('size', ['large', 'default', 'compressed', 'small'], 'default', groupId)

  const color = select('color', ['default', 'primary', 'secondary', 'success', 'failure'], 'default', groupId)

  const startIcon = text('startIcon', '')
  const endIcon = text('endIcon', '')
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button>Default</Button>
      <Button variant="link">Link</Button>
      <Button variant="dashed">Dashed</Button>

      <br />
      <br />

      <Button variant="primary" size="large">
        Large
      </Button>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary">Default</Button>

      <br />
      <br />

      <Button variant="primary" block>
        Default
      </Button>
    </>
  )
}

button.story = {
  name: 'Button',
}
