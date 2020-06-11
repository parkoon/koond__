import React from 'react'

import * as Styled from './styled'

import Icon from '../Icon'

export type ChipVariant = 'outlined' | 'fill'

export type ChipProps = {
  /** Chip 컴포넌트에 쓰일 단어 */
  title: string

  /** 비활성화 여부 */
  disabled?: boolean
  onClick?: () => void
  onDelete?: () => void

  /** 덮어 쓸 스타일 */
  style?: React.CSSProperties

  /** Chip 종류 'outlined' | 'fill'*/
  variant?: ChipVariant

  /** Delete icon */
  deleteIcon?: React.ReactNode

  /** 색상 */
  color?: string
}

function Chip({ onDelete, onClick, deleteIcon, ...props }: ChipProps) {
  const { title, variant } = props

  /**
   * 클릭 가능한 컴포넌트 인지 확인
   */
  let clickEvent = onDelete || onClick
  let clickable = typeof clickEvent === 'function' || false

  /**
   * 아이콘 여부 확인
   * deleteIcon이 없다면, 기본 아이콘 제공
   */
  let hasIcon = typeof onDelete === 'function' || !!deleteIcon
  deleteIcon = deleteIcon || <Icon name="cancel" size={9} />

  return (
    <Styled.ChipWrapper onClick={clickEvent} clickable={clickable} {...props} hasIcon={hasIcon}>
      {title}
      {hasIcon && <Styled.IconWrapper variant={variant}> {deleteIcon}</Styled.IconWrapper>}
    </Styled.ChipWrapper>
  )
}

Chip.defaultProps = {
  variant: 'outlined',
  disabled: false,
}

export default Chip
