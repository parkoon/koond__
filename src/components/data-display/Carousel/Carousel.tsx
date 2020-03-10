import React, { useState } from 'react'
import styled from 'styled-components'

import CarouselItem from './CarouselItem'
import palette from '../../../themes/palette'

type CarouselItemWrapperProps = {
  active: number
}
const CarouselItemWrapper = styled.ul<CarouselItemWrapperProps>`
    
  display: flex;
  background: red;

  margin: 0;
  padding: 0;
  list-style: none;

  transition: .3s;

  /* transform: translateX(-100px); */
  transform: ${props => `translateX(${props.active * -180}px)`}
  }};
`

const StyledCarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const StyledIndicatorWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
const StyledIndicator = styled.input.attrs({ type: 'radio', name: 'carousel' })`
  /* width: 0;
  height: 0;
  opacity: 0; */

  &:checked + label {
    width: 32px;
    background: ${palette.primary};
  }
`

const StyledIndicatorLabel = styled.label`
  display: inline-block;
  width: 24px;
  height: 4px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.3);
  cursor: hover;
  margin-right: 12px;
  transition: 0.2s;
`

const StyledTrack = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(0, 0, 0, 0.2);
  overflow: hidden;
`

type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(Number(e.target.value))
  }

  return (
    <StyledCarouselWrapper>
      <StyledTrack>
        <CarouselItemWrapper active={active}>
          {Array.isArray(children) ? (
            children.map((child, index) => <CarouselItem key={index} child={child} active={true} />)
          ) : (
            <CarouselItem key={0} child={children} active={true} />
          )}
        </CarouselItemWrapper>
      </StyledTrack>

      <StyledIndicatorWrapper>
        <ul>
          <li>
            <StyledIndicator id={'1'} value={0} onChange={handleChange} />
            <StyledIndicatorLabel htmlFor={'1'} />
          </li>
          <li>
            <StyledIndicator id={'2'} value={1} onChange={handleChange} />
            <StyledIndicatorLabel htmlFor={'2'} />
          </li>

          <li>
            <StyledIndicator id={'3'} value={2} onChange={handleChange} />
            <StyledIndicatorLabel htmlFor={'3'} />
          </li>
          <li>
            <StyledIndicator id={'4'} value={3} onChange={handleChange} />
            <StyledIndicatorLabel htmlFor={'4'} />
          </li>
        </ul>
      </StyledIndicatorWrapper>
    </StyledCarouselWrapper>
  )
}

export default Carousel
