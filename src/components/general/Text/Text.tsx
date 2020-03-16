import React, { ReactNode } from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'
import Title from './Title'

// Types
type Props = {
  children: ReactNode

  /**
   * Text의 타입을 설정합니다. warning | danger
   */
  type?: 'warning' | 'danger'

  /**
   * Text의 underline 여부를 설정합니다.
   */
  underline?: boolean

  /**
   * Text의 delete 여부를 설정합니다.
   */
  deleted?: boolean

  /**
   * Textd의 강조 여부를 설정합니다.
   */
  strong?: boolean

  /**
   * Text의 사이즈를 설정합니다.
   */
  size?: 'small' | 'large' | 'default'

  /**
   * Text의 색상을 설정합니다.
   */
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
  underline: false,
  deleted: false,
  strong: false,
}

Text.Title = Title

export default Text
