import React from 'react'
import styled from 'styled-components'

type StyledCarouselItemWrapperProps = {
  active: boolean
}
const StyledCarouselItemWrapper = styled.li<StyledCarouselItemWrapperProps>`
  /* display: ${props => (props.active ? 'inline-block' : 'none')}; */
`

type CarouselItemProps = {
  child: React.ReactNode
  active: boolean
}
export default function CarouselItem({ child, active }: CarouselItemProps) {
  return <StyledCarouselItemWrapper active={active}>{child}</StyledCarouselItemWrapper>
}
