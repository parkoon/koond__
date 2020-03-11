import React from 'react'
import Badge from '.'

export default {
  title: 'Data Display',
  component: Badge,
}

export const badge = () => {
  return (
    <>
      <Badge count={0} showZero={false} />
      <Badge count={2} />
      <Badge count={20} style={{ background: '#ff7675' }} />
      <Badge count={100} overflowCount={10} style={{ background: '#ff7675' }} />
    </>
  )
}
