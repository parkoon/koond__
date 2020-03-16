import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledBadgeWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 22px;
  height: 22px;
  background: ${palette.primary};
  border-radius: 11px;
  color: #fff;
  font-size: 12px;
  padding: 0px 6px;
  box-sizing: border-box;
`
type BadgeType = {
  text: number | string
  style?: React.CSSProperties

  /** 최대로 표현 할 숫자 (그 이상은 + 로 표시) */
  overflowCount?: number
}
function Badge({ text, overflowCount, ...props }: BadgeType) {
  if ((text as number) > overflowCount) text = `${overflowCount}+`

  return <StyledBadgeWrapper {...props}>{text}</StyledBadgeWrapper>
}

export default Badge
