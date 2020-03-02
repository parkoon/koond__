import React from 'react'
import styled from 'styled-components'
import palette from '../../themes/palette'
import colorControler from '../../helpers/colorControler'

// Types
type ButtonType = 'primary' | 'dashed' | 'link'
type ButtonSize = 'large' | 'small' | 'default'

type Props = {
  children: React.ReactNode
  variant?: ButtonType
  size?: ButtonSize
  block?: boolean
  disabled?: boolean
}

// Constants
const BUTTON_PADDING_PER_SIZE = {
  default: '4px 15px',
  small: '0 7px',
  large: '6px 17px',
}

//   Function
const buttonBorder = ({ variant, disabled }: Props) => {
  if (disabled) return `1px solid ${palette.button.outline}`

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

const buttonBackground = ({ variant, disabled }: Props) => {
  if (disabled) return palette.button.disabled
  if (variant === 'primary') return palette.button.primary
  return palette.button.white
}

const buttonTextColor = ({ variant, disabled }: Props) => {
  if (variant === 'primary' && !disabled) return palette.button.white
  return palette.button.text
}

const buttonHoverBackground = ({ variant, disabled }: Props) => {
  if (variant !== 'primary' || disabled) return
  return colorControler(palette.button.primary, -20)
}

const buttonHoverColor = ({ variant }: Props) => {
  if (variant === 'primary') return
  return palette.button.primary
}

const buttonPadding = ({ size }: Props) => {
  return BUTTON_PADDING_PER_SIZE[size]
}

const buttonBlock = ({ block }: Props) => (block ? { display: 'block', width: '100%' } : { display: 'inline-flex' })
const buttonCursor = ({ disabled }: Props) => (disabled ? 'not-allowed' : 'cursor')
const CommonStyle = styled.button<Props>`
  position: relative;

  ${buttonBlock}
  
  padding: ${buttonPadding};
  line-height: 1.5;
  cursor: ${buttonCursor};


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
  block: false,
  disabled: false,
}

export default Button
