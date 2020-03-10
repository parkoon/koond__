import React from 'react'
import Carousel from './index'
export default {
  title: 'Data Display',
  component: Carousel,
}

const items = [
  {
    name: 'Carousel #1',
    description: 'This is description #1',
  },
  {
    name: 'Carousel #2',
    description: 'This is description #2',
  },
  {
    name: 'Carousel #3',
    description: 'This is description #3',
  },
  {
    name: 'Carousel #4',
    description: 'This is description #4',
  },
]

export const carousel = () => {
  return (
    <>
      <Carousel>
        {items.map(item => (
          <>
            <div style={{ background: 'tomato', color: 'white' }}>
              <h2>{item.name}</h2>
              <p>item.desctription</p>
            </div>
          </>
        ))}
      </Carousel>
    </>
  )
}
