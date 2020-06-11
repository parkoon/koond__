import React from 'react'
import Currency from './Currency'

export default {
  title: 'Currency',
  component: Currency,
}

export const Default = () => {
  return (
    <>
      <Currency won={1923000} suffix="원" />
    </>
  )
}
export const CustomizedWon = () => {
  return (
    <>
      <Currency won={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>1923000</span>} prefix="월" suffix="원" />
    </>
  )
}
export const Negative = () => {
  return (
    <>
      <Currency won={1923000} suffix="원" negative />
    </>
  )
}
