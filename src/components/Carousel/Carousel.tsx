import React, { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'

import CarouselItem from './CarouselItem'
import Indicator from './Indicator'

type CarouselItemWrapperProps = {
  active: number
  slideWidth?: number
  totalWidth?: number
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
type StyledFadeWrapper = {
  fade: boolean
}

const StyledFadeWrapper = styled.div<StyledFadeWrapper>`
  position: relative;
  transition: 0.4s ease;
  opacity: ${props => (props.fade ? 0 : 1)};

  /* &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transition: .4s ease;

    background: ${props => (props.fade ? `rgba(0,0,0,.9)` : `rgba(0,0,0,0.0)`)};
  } */
`
const StyledSlideTrack = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

type CarouselProps = {
  children: React.ReactNode

  /** 효과 */
  effect?: 'slide' | 'fade'
}

let _timer = null
function Carousel({ children, effect }: CarouselProps) {
  const [active, setActive] = useState(0)
  const [fade, setFade] = useState(false)
  const [slideWidth, setSlideWidth] = useState(window.innerWidth)

  const slideWrapperRef = useRef(null)

  const slideCount = React.Children.count(children)
  const totalSlideWidth = slideWidth * slideCount

  const handleChange = useCallback(
    (value: number) => {
      setFade(true)

      if (effect === 'fade') if (_timer) clearTimeout(_timer)
      _timer = setTimeout(
        () => {
          setActive(value)
        },
        effect === 'fade' ? 400 : 1
      )
    },
    [effect]
  )

  const handleResize = () => {
    setSlideWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('reisze', handleResize)
    }
  }, [handleResize])

  useEffect(() => {
    setFade(false)
  }, [active])

  return (
    <StyledCarouselWrapper>
      {effect === 'slide' ? (
        <StyledSlideTrack>
          <CarouselItemWrapper
            active={active}
            ref={slideWrapperRef}
            totalWidth={totalSlideWidth}
            slideWidth={slideWidth}
          >
            {Array.isArray(children) ? (
              children.map((child, index) => (
                <CarouselItem key={index} child={child} slideWidth={slideWidth} effect={effect} />
              ))
            ) : (
              <CarouselItem key={0} child={children} slideWidth={slideWidth} effect={effect} />
            )}
          </CarouselItemWrapper>
        </StyledSlideTrack>
      ) : (
        <StyledFadeWrapper fade={fade}>
          <CarouselItemWrapper active={active} ref={slideWrapperRef}>
            {Array.isArray(children) ? (
              children.map((child, index) => (
                <CarouselItem
                  active={active === index}
                  key={index}
                  child={child}
                  slideWidth={slideWidth}
                  effect={effect}
                />
              ))
            ) : (
              <CarouselItem key={0} child={children} slideWidth={slideWidth} effect={effect} />
            )}
          </CarouselItemWrapper>
        </StyledFadeWrapper>
      )}

      <Indicator onChange={handleChange} active={active} count={slideCount} />
    </StyledCarouselWrapper>
  )
}

Carousel.defaultProps = {
  effect: 'slide',
}

export default Carousel
