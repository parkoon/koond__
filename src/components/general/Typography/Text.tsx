import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

// Types
type Props = {
  children: React.ReactNode
  type?: 'warning' | 'danger'
  underline?: boolean
  deleted?: boolean
  strong?: boolean
  size?: 'small' | 'large' | 'default'
  color?: string
}
// Constants
const FONT_SIZE = {
  small: '14px',
  default: '16px',
  large: '18px',
}

// Functions
const fontColor = ({ type, color }: Props) => (color ? color : palette.typography[type])
const textDecoration = ({ underline, deleted }: Props) => (underline ? 'underline' : deleted ? 'line-through' : '')
const fontSize = ({ size }: Props) => FONT_SIZE[size]
// Styled
const StyledText = styled.span`
  color: ${fontColor};
  text-decoration: ${textDecoration};
  font-weight: ${({ strong }: Props) => strong && 600};
  font-size: ${fontSize};
`

function Text({ children, ...props }: Props) {
  return <StyledText {...props}>{children}</StyledText>
}

Text.defaultProps = {
  type: 'default',
  size: 'default',
}

export default Text
