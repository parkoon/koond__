import React from 'react'
import Carousel from './index'
import styled from 'styled-components'
export default {
  title: 'Carousel',
  component: Carousel,
}

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 320px;
  background: #1abc9c;
  overflow: hidden;
  color: #fff;
`

export const Slide = () => {
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
  return (
    <>
      <Carousel effect="slide">
        {items.map(item => (
          <>
            <StyledItem>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </StyledItem>
          </>
        ))}
      </Carousel>
    </>
  )
}
export const Fade = () => {
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
  return (
    <>
      <Carousel effect="fade">
        {items.map(item => (
          <>
            <StyledItem>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </StyledItem>
          </>
        ))}
      </Carousel>
    </>
  )
}
