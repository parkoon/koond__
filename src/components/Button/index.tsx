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
  children?: React.ReactNode

  /** 보여주고 싶은 이름 */
  variant?: ButtonType
  size?: ButtonSize
  block?: boolean
  disabled?: boolean
  loading?: boolean
  shape?: ButtonShape
  icon?: React.ReactNode
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
  switch (variant) {
    case 'primary':
      if (disabled) return `1px solid ${palette.button.outline}`
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

const buttonPadding = ({ size, children }: Props) => {
  console.log('children', children)
  if (!children[1]) return '7px'
  return BUTTON_PADDING_PER_SIZE[size]
}

const buttonBorderRadius = ({ shape }: Props) => {
  return BUTTON_RADIUS[shape]
}

const buttonBlock = ({ block }: Props) => (block ? { display: 'block', width: '100%' } : { display: 'inline-flex' })
const buttonCursor = ({ disabled }: Props) => (disabled ? 'not-allowed' : 'pointer')
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

  .icon {
    display: flex;
    /* margin-right: 12px; */
  }
`

const StyledButton = styled(CommonStyle)``
const Space = styled.span`
  margin: 0 3px;
`

function Button({ children, ...props }: Props) {
  const { loading, disabled, icon } = props
  const hasIconWithText = icon && children

  // 아이콘이 있는 경우
  // childrendl 없는 경우

  return (
    <StyledButton {...props} disabled={loading || disabled}>
      {icon}
      {/* {loading && <Spin />} */}
      {hasIconWithText && <Space />}
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
