import React from 'react'
import styled from 'styled-components'

const StyledCarouselItemWrapper = styled.div`
  display: ${props => (props.active ? 'inline-block' : 'none')};
`

type CarouselItemProps = {
  child: React.ReactNode
  active: boolean
}
export default function CarouselItem({ child, active }: CarouselItemProps) {
  return <StyledCarouselItemWrapper active={active}>{child}</StyledCarouselItemWrapper>
}
