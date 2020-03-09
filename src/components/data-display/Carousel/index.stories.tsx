import React from 'react'
import Carousel from './index'
export default {
  title: 'Data Display',
  component: Carousel,
}

const items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
  },
]

export const carousel = () => {
  return (
    <>
      <Carousel>
        {items.map(item => (
          <>
            <div>
              <h2>{item.name}</h2>
              <p>item.desctription</p>
            </div>
          </>
        ))}
      </Carousel>
    </>
  )
}
