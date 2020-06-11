import React from 'react'
import Card from '.'

export default {
  title: 'Card',
  component: Card,
}

export const Default = () => {
  return (
    <>
      <Card title="Card title" style={{ width: '300px' }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
export const Square = () => {
  return (
    <>
      <Card title="Card title" style={{ width: '300px' }} square>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
export const Evaluation = () => {
  return (
    <>
      <Card title="Card title" style={{ width: '300px' }} square evaluation={1}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
export const Cover = () => {
  return (
    <>
      <Card
        size="small"
        outlined
        square
        style={{ width: '300px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <h4>Lorem</h4>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
