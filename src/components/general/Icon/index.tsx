import React from 'react'
import styled, { keyframes } from 'styled-components'

// Types
type Props = {
  name: string
  dangerouslySetInnerHTML?: any
  style?: React.CSSProperties
  spin?: boolean
  size?: number
}

const rotation = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const NormalIcon = styled.span<Props>`
  display: inline-block;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    stroke: currentColor;
  }
`

const SpinIcon = styled(NormalIcon)`
  animation: ${rotation} 1.5s infinite linear;
`

const Icon = ({ spin, ...props }: Props) => {
  const { name } = props
  const svg = require(`!raw-loader!./icons/${name}.svg`).default

  return (
    <>
      {spin ? (
        <SpinIcon {...props} dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <NormalIcon {...props} dangerouslySetInnerHTML={{ __html: svg }} />
      )}
    </>
  )
}

Icon.defaultProps = {
  size: 15,
}

export default Icon
