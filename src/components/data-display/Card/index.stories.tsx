import React from 'react'
import Card from '.'

export default {
  title: 'Data Display',
  component: Card,
}

export const card = () => {
  return (
    <>
      <Card title="Card title">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        title="Card title"
        size="small"
        shadow
        style={{ width: '200px' }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  )
}
