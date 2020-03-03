import React from 'react'
import styled from 'styled-components'

// Types
type Props = {
  name: string
  dangerouslySetInnerHTML?: any
  style?: React.CSSProperties
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

const Icon = ({ name, ...props }: Props) => {
  const svg = require(`!raw-loader!./icons/${name}.svg`).default
  return <StyledIcon name={name} {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

export default Icon
