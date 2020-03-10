import React from 'react'
import styled from 'styled-components'

type StyledCarouselItemWrapperProps = {
  active: boolean
  slideWidth: number
}
const StyledCarouselItemWrapper = styled.li<StyledCarouselItemWrapperProps>`
  display: inline-block;
  width: ${props => props.slideWidth}px;
`

type CarouselItemProps = {
  child: React.ReactNode
  active?: boolean
  slideWidth: number
}
export default function CarouselItem({ child, ...props }: CarouselItemProps) {
  return <StyledCarouselItemWrapper {...props}>{child}</StyledCarouselItemWrapper>
}

CarouselItem.defaultProps = {
  active: true,
}
