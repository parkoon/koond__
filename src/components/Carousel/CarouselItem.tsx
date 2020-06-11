import React from 'react'
import styled, { css } from 'styled-components'

type StyledCarouselItemWrapperProps = {
  active?: boolean
  slideWidth: number
  effect: effect
}
const StyledCarouselItemWrapper = styled.li<StyledCarouselItemWrapperProps>`
  display: ${props => (props.active ? 'inline-block' : 'none')};
  width: ${props => props.slideWidth}px;

  ${props =>
    props.effect === 'fade' &&
    css`
      width: 100%;
    `}
`

type effect = 'slide' | 'fade'

type CarouselItemProps = {
  child: React.ReactNode
  active?: boolean
  slideWidth: number
  effect: effect
}
export default function CarouselItem({ child, ...props }: CarouselItemProps) {
  return <StyledCarouselItemWrapper {...props}>{child}</StyledCarouselItemWrapper>
}

CarouselItem.defaultProps = {
  active: true,
}
