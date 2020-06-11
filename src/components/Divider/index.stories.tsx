import React from 'react'
import Divider from '.'

export default {
  title: 'Divider',
  component: Divider,
  parameters: {
    componentSubtitle: '블럭 간 선을 나눌 때 사용하는 컴포넌트',
  },
}

export const Default = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider />
    </>
  )
}

export const Dashed = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider dashed />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae
        sunt a te dicta? Refert tamen, quo modo.
      </p>
      <Divider dashed />
    </>
  )
}
