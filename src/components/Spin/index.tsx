import React from 'react'
import styled, { keyframes } from 'styled-components'

// Types
type Props = {
  style?: React.CSSProperties
}

const rotation = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const spinMove = keyframes`
    to {
        opacity: 1;
    }
`

const StyledSpinWrapper = styled.span`
  position: relative;
  display: inline-block;
  /* transform: rotate(45deg); */
  /* animation: ${rotation} 2s 1s infinite linear alternate; */
  animation: ${rotation}  1.5s infinite linear ;
  i {
    position: absolute;
    width: .4rem;
    height: .4rem;
    transform: scale(0.75);
    transform-origin: 50% 50%;
    background-color: #f1c40f;
    border-radius: 100%;
    opacity: 0.7;
    animation: ${spinMove} 1s infinite linear alternate;

    &:nth-child(1) {
      top: 0;
      left: 0;
    }

    &:nth-child(2) {
      top: 0;
      right: 0;
    }

    &:nth-child(3) {
      bottom: 0;
      left: 0;
    }

    &:nth-child(4) {
      bottom: 0;
      right: 0;
    }
  }
`

function Spin({ ...props }: Props) {
  return (
    <StyledSpinWrapper {...props}>
      <i />
      <i />
      <i />
      <i />
    </StyledSpinWrapper>
  )
}

export default Spin
