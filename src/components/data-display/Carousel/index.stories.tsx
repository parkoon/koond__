import React, { useState } from 'react'
import Carousel from './index'
import styled from 'styled-components'
import { Radio } from '../../data-entry/Radio'
export default {
  title: 'Data Display',
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

type Effect = 'slide' | 'fade'
export const _Carousel = () => {
  const [effect, setEffect] = useState<Effect>('slide')

  const handleEffectChange = e => {
    setEffect(e.target.value)
  }

  return (
    <>
      <Radio name="carouselradio" value="slide" onChange={handleEffectChange} checked={effect === 'slide'}>
        slide
      </Radio>
      <Radio name="carouselradio" value="fade" onChange={handleEffectChange} checked={effect === 'fade'}>
        fade
      </Radio>

      <Carousel effect={effect}>
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
