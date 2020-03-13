import React from 'react'

import * as Styled from './styled'
import * as I from './interface'

import Icon from '../../general/Icon'

function Chip({ onDelete, onClick, deleteIcon, ...props }: I.ChipProps) {
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
  variant: 'default',
}

export default Chip
