import React from 'react'
import { withKnobs, boolean, text, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Button from '../Button'
import Icon from '../Icon'

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '버튼이 필요할 때 사용하는 컴포넌트',
  },
}
export const Default = () => {
  return (
    <>
      <Button>Default</Button>
    </>
  )
}

export const Variant = () => {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <br />
      <br />
      <Button variant="link" href="https://naver.com">
        Link
      </Button>
      <br />
      <br />
      <Button variant="dashed">Dashed</Button>
    </>
  )
}

export const Size = () => {
  return (
    <>
      <Button variant="primary" size="small">
        Small
      </Button>
      <br />
      <br />
      <Button variant="primary">Default</Button>
      <br />
      <br />
      <Button variant="primary" size="large">
        Large
      </Button>
    </>
  )
}

export const Block = () => {
  return (
    <Button variant="primary" block>
      Primary
    </Button>
  )
}

export const Shape = () => {
  return (
    <>
      <Button variant="primary">D</Button>
      <br />
      <br />
      <Button variant="primary" shape="circle">
        C
      </Button>
      <br />
      <br />
      <Button variant="primary" shape="round">
        R
      </Button>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
      <Button variant="primary" disabled>
        Primary(disabled)
      </Button>
      <br />
      <br />
      <Button variant="dashed" disabled>
        Dashed(disabled)
      </Button>
      <br />
      <br />
      <Button disabled>Default(disabled)</Button>
    </>
  )
}

export const _Icon = () => {
  return (
    <>
      <Button variant="primary" icon={<Icon name="search" />}>
        Primary
      </Button>
      <Button variant="primary" shape="circle" icon={<Icon name="search" />} />
      <Button shape="circle" icon={<Icon name="search" />} />
      <Button variant="dashed" icon={<Icon name="search" />}>
        Search
      </Button>
    </>
  )
}

export const Submit = () => {
  const handleSumbit = () => {
    alert('submitted!')
  }
  return (
    <>
      <Button htmlType="submit" onClick={handleSumbit}>
        Submit
      </Button>
    </>
  )
}
