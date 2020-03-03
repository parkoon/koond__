import React from 'react'
import styled, { css } from 'styled-components'
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
  href?: string
}

// Constants
const BUTTON_PADDING_PER_SIZE = {
  default: '5px 16px',
  small: '0 7px',
  large: '7px 18px',
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

const styles = css`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  ${buttonBlock}

  align-items: center;

  padding: ${buttonPadding};
  /* line-height: 1.5; */
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
/**
 * Dummy Link
 * 나중에 next link 또는 react router link 로 변경하여 사용
 */
const DummyLink = ({ ...props }) => <a {...props}></a>

const AnchorButton = styled(DummyLink)<Props>`
  ${styles}
`

const NoramlButton = styled.button<Props>`
  ${styles}
`
const Space = styled.span`
  margin: 0 3px;
`

function Button({ children, ...props }: Props) {
  const { loading, disabled, icon, href, variant } = props

  /**
   * Text 와 Icon 이 같이 있는지 여부
   */
  const hasIconWithText = icon && children

  /**
   * 버튼 disabled 여부
   */
  const isDisabled = loading || disabled

  /**
   * Link Button ?
   */
  const isAnchorButton = variant === 'link' || href

  return (
    <>
      {isAnchorButton ? (
        <AnchorButton {...props}>{children}</AnchorButton>
      ) : (
        <NoramlButton {...props} disabled={isDisabled}>
          {icon}
          {/* 아이콘 있는 경우 여백 추가 */}
          {hasIconWithText && <Space />}
          {children}
        </NoramlButton>
      )}
    </>
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
