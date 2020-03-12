import React from 'react'
import Currency from './Currency'

export default {
  title: 'Data Display',
  component: Currency,
}

export const currency = () => {
  return (
    <>
      <Currency won={121212121212} suffix="원" />
      <br />
      <br />
      <Currency
        won={<span style={{ fontSize: '20px', fontWeight: 'bold' }}>121212121212</span>}
        prefix="월"
        suffix="원"
      />
      <br />
      <br />
      <Currency won={121212121212} suffix="원" negative />
    </>
  )
}
