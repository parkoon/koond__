import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Text from './index'

const { Title } = Text

export default {
  title: 'Text',
  component: Text,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '텍스트를 표현할 수 있는 컴포넌트',
  },
}

export const Detault = () => {
  return (
    <>
      <Text>Default</Text>
    </>
  )
}

export const Color = () => {
  return (
    <>
      <Text type="warning">Warning</Text>
      <br />
      <Text type="danger">Danger</Text>
    </>
  )
}

export const Size = () => {
  return (
    <>
      <Text size="small">Small</Text>
      <br />
      <Text>Default</Text>
      <br />
      <Text size="large">Large</Text>
    </>
  )
}

export const Decoration = () => {
  return (
    <>
      <Text underline>Underline</Text>
      <br />
      <Text deleted>Deleted</Text>
      <br />
      <Text strong>Strong</Text>
    </>
  )
}

export const _Title = () => {
  return (
    <>
      <Title>h1. parkoon design</Title>
      <Title level={2}>h2. parkoon design</Title>
      <Title level={3}>h3. parkoon design</Title>
      <Title level={4}>h4. parkoon design</Title>
    </>
  )
}
