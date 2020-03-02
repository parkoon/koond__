import React from 'react'
import styled from 'styled-components'
import palette from '../../themes/palette'
import colorControler from '../../helpers/colorControler'

// Type
type ButtonType = 'primary' | 'dashed' | 'link'
type ButtonSize = 'large' | 'small' | 'default'

type Props = {
  children: React.ReactNode
  variant?: ButtonType
  size?: ButtonSize
}

// Constant
const BUTTON_PADDING_PER_SIZE = {
  default: '4px 15px',
  small: '0 7px',
  large: '6px 17px',
}

//   Function
const buttonBorder = ({ variant }: Props) => {
  console.log(variant)
  switch (variant) {
    case 'primary':
      return `1px solid ${palette.button.primary}`
    case 'link':
      return 'none'
    case 'dashed':
      return `1px dashed ${palette.button.outline}`
    default:
      return `1px solid ${palette.button.outline}`
  }
}

const buttonBackground = ({ variant }: Props) => {
  if (variant === 'primary') return palette.button.primary
  return palette.button.white
}

const buttonTextColor = ({ variant }: Props) => {
  if (variant === 'primary') return palette.button.white
  return palette.button.text
}

const buttonHoverBackground = ({ variant }: Props) => {
  if (variant !== 'primary') return
  return colorControler(palette.button.primary, -20)
}

const buttonHoverColor = ({ variant }: Props) => {
  if (variant === 'primary') return
  return palette.button.primary
}

const buttonPadding = ({ size }: Props) => {
  return BUTTON_PADDING_PER_SIZE[size]
}

const CommonStyle = styled.button<Props>`
  position: relative;
  display: inline-flex;
  padding: ${buttonPadding};
  line-height: 1.5;
  cursor: pointer;

  background: ${buttonBackground};
  color: ${buttonTextColor};
  border: ${buttonBorder};

  transition: 0.2s;

  &:hover {
    background: ${buttonHoverBackground};
    color: ${buttonHoverColor};
    border-color: ${buttonHoverColor};
  }
`

const StyledButton = styled(CommonStyle)``

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>
}

Button.defaultProps = {
  variant: undefined,
  size: 'default',
}

export default Button
