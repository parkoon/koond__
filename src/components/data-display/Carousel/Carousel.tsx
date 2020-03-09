import React from 'react'
import styled from 'styled-components'

import CarouselItem from './CarouselItem'

const StyledCarouselWrapper = styled.div``

type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  return (
    <StyledCarouselWrapper>
      {Array.isArray(children) ? (
        children.map((child, index) => <CarouselItem key={index} child={child} />)
      ) : (
        <CarouselItem key={0} child={children} />
      )}
    </StyledCarouselWrapper>
  )
}

export default Carousel
