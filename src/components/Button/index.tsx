import React from 'react'
import styled from 'styled-components'
import palette from '../../themes/palette'
import colorControler from '../../helpers/colorControler'
import Spin from '../Spin'
// Types
type ButtonType = 'primary' | 'dashed' | 'link' | 'default'
type ButtonSize = 'large' | 'small' | 'default'
type ButtonShape = 'round' | 'circle' | 'default'

type Props = {
  children: React.ReactNode
  variant?: ButtonType
  size?: ButtonSize
  block?: boolean
  disabled?: boolean
  loading?: boolean
  shape?: ButtonShape
}

// Constants
const BUTTON_PADDING_PER_SIZE = {
  default: '4px 15px',
  small: '0 7px',
  large: '6px 17px',
}
const BUTTON_RADIUS = {
  circle: '50%',
  round: '30px',
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

const buttonHoverBackground = ({ variant, disabled, loading }: Props) => {
  if (variant !== 'primary' || disabled || loading) return
  return colorControler(palette.button.primary, -20)
}

const buttonHoverColor = ({ variant, disabled, loading }: Props) => {
  if (variant === 'primary' || disabled || loading) return
  return palette.button.primary
}

const buttonPadding = ({ size }: Props) => {
  return BUTTON_PADDING_PER_SIZE[size]
}

const buttonBorderRadius = ({ shape }: Props) => {
  return BUTTON_RADIUS[shape]
}

const buttonBlock = ({ block }: Props) => (block ? { display: 'block', width: '100%' } : { display: 'inline-flex' })
const buttonCursor = ({ disabled }: Props) => (disabled ? 'not-allowed' : 'cursor')
const CommonStyle = styled.button<Props>`
  position: relative;

  ${buttonBlock}

  align-items: center;

  padding: ${buttonPadding};
  line-height: 1.5;
  cursor: ${buttonCursor};

  background: ${buttonBackground};
  color: ${buttonTextColor};
  border: ${buttonBorder};
  border-radius: ${buttonBorderRadius};

  transition: 0.2s;

  &:hover {
    background: ${buttonHoverBackground};
    color: ${buttonHoverColor};
    border-color: ${buttonHoverColor};
  }
`

const StyledButton = styled(CommonStyle)``

function Button({ children, ...props }: Props) {
  const { loading, disabled } = props
  return (
    <StyledButton {...props} disabled={loading || disabled}>
      {loading && <Spin style={{ marginRight: '12px' }} />}
      {children}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: undefined,
  size: 'default',
  block: false,
  disabled: false,
  loading: false,
}

export default Button
