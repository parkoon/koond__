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
  const [active, setAtice] = useState(0)

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
            <StyledIndicator id={'1'} />
            <StyledIndicatorLabel htmlFor={'1'} />
          </li>
          <li>
            <StyledIndicator id={'2'} />
            <StyledIndicatorLabel htmlFor={'2'} />
          </li>

          <li>
            <StyledIndicator id={'3'} />
            <StyledIndicatorLabel htmlFor={'3'} />
          </li>
          <li>
            <StyledIndicator id={'4'} />
            <StyledIndicatorLabel htmlFor={'4'} />
          </li>
        </ul>
      </StyledIndicatorWrapper>
    </StyledCarouselWrapper>
  )
}

export default Carousel
