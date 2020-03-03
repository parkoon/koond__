import React from 'react'
import styled from 'styled-components'

// Types
type Props = {
  icon: string
  dangerouslySetInnerHTML?: any
  color?: string
}

const StyledIcon = styled.span<Props>`
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

const Icon = ({ icon, ...props }: Props) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`).default
  return <StyledIcon icon={icon} {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Icon
