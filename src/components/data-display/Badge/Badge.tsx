import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledBadgeWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  height: 20px;
  background: ${palette.primary};
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  padding: 0px 6px;
  box-sizing: border-box;
`
type BadgeType = {
  count: number | string
  style?: React.CSSProperties
  overflowCount?: number
}
function Badge({ count, overflowCount, ...props }: BadgeType) {
  if (count > overflowCount) count = `${overflowCount}+`

  return <StyledBadgeWrapper {...props}>{count}</StyledBadgeWrapper>
}

export default Badge
