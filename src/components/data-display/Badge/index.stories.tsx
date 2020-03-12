import React from 'react'
import Badge from '.'

export default {
  title: 'Data Display',
  component: Badge,
}

export const badge = () => {
  return (
    <>
      <Badge text="한정수량" />

      <Badge text={0} />
      <Badge text={2} />
      <Badge text={20} style={{ background: '#ff7675' }} />
      <Badge text={100} overflowCount={10} style={{ background: '#ff7675' }} />
    </>
  )
}
