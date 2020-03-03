import React from 'react'
import styled, { keyframes } from 'styled-components'

// Types
type Props = {
  name: string
  dangerouslySetInnerHTML?: any
  style?: React.CSSProperties
  spin?: boolean
}

const rotation = keyframes`
    to {
        transform: rotate(360deg)
    }
`

const spinAnimation = ({ spin }: Props) => spin && `${rotation} 1.5s infinite linear `

const NormalIcon = styled.span<Props>`
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;

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

export default Icon
