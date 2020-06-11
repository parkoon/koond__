import React from 'react'
import Badge from '.'

export default {
  title: 'Badge',
  component: Badge,
}

export const Default = () => {
  return (
    <>
      <Badge text="한정수량" />
      <Badge text="10" style={{ background: '#ff7675' }} />
    </>
  )
}
export const Overflow = () => {
  return (
    <>
      <Badge text={100} overflowCount={10} style={{ background: '#ff7675' }} />
    </>
  )
}
