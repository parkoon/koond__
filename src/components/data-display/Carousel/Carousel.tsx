import React, { useState } from 'react'
import styled from 'styled-components'

import CarouselItem from './CarouselItem'
import palette from '../../../themes/palette'

const StyledCarouselWrapper = styled.div``
const StyledIndicatorWrapper = styled.div`
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

type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.value,', e.target.value)
    setActive(Number(e.target.value))
  }

  return (
    <StyledCarouselWrapper>
      {Array.isArray(children) ? (
        children.map((child, index) => <CarouselItem key={index} child={child} active={active === index} />)
      ) : (
        <CarouselItem key={0} child={children} active={true} />
      )}

      <StyledIndicatorWrapper>
        <ul>
          <li>
            <StyledIndicator id={'1'} value={0} onChange={handleChange} checked={active === 0} />
            <StyledIndicatorLabel htmlFor={'1'} />
          </li>
          <li>
            <StyledIndicator id={'2'} value={1} onChange={handleChange} checked={active === 1} />
            <StyledIndicatorLabel htmlFor={'2'} />
          </li>

          <li>
            <StyledIndicator id={'3'} value={2} onChange={handleChange} checked={active === 2} />
            <StyledIndicatorLabel htmlFor={'3'} />
          </li>
          <li>
            <StyledIndicator id={'4'} value={3} onChange={handleChange} checked={active === 3} />
            <StyledIndicatorLabel htmlFor={'4'} />
          </li>
        </ul>
      </StyledIndicatorWrapper>
    </StyledCarouselWrapper>
  )
}

export default Carousel
