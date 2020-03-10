import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import CarouselItem from './CarouselItem'
import Indicator from './Indicator'

type CarouselItemWrapperProps = {
  active: number
  slideWidth: number
  totalWidth: number
}
const CarouselItemWrapper = styled.ul<CarouselItemWrapperProps>`
  margin: 0;
  padding: 0;
  list-style: none;

  transition: 0.5s;
  overflow: auto;

  width: ${props => props.totalWidth}px;
  transform: ${props => `translateX(${props.active * -props.slideWidth}px)`};
`

const StyledCarouselWrapper = styled.div`
  position: relative;
`

const StyledSlideTrack = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  const [active, setActive] = useState(0)

  const [slideWidth, setSlideWidth] = useState(window.innerWidth)

  const slideCount = React.Children.count(children)

  const totalSlideWidth = slideWidth * slideCount

  const slideWrapperRef = useRef(null)

  const handleChange = (value: number) => {
    setActive(value)
  }

  const handleResize = () => {
    setSlideWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('reisze', handleResize)
    }
  }, [])

  return (
    <StyledCarouselWrapper>
      <StyledSlideTrack>
        <CarouselItemWrapper active={active} ref={slideWrapperRef} totalWidth={totalSlideWidth} slideWidth={slideWidth}>
          {Array.isArray(children) ? (
            children.map((child, index) => <CarouselItem key={index} child={child} slideWidth={slideWidth} />)
          ) : (
            <CarouselItem key={0} child={children} slideWidth={slideWidth} />
          )}
        </CarouselItemWrapper>
      </StyledSlideTrack>
      <Indicator onChange={handleChange} active={active} count={slideCount} />
    </StyledCarouselWrapper>
  )
}

export default Carousel
