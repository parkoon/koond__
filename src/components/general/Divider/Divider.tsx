import React from 'react'
import styled from 'styled-components'
import palette from '../../../themes/palette'

const StyledDivider = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  box-sizing: border-box;
  border-bottom: ${props => (props.dashed ? `1px dashed ${palette.outline}` : `1px solid ${palette.outline}`)};
`

type DividerProps = {
  /**
   * 적용 할 스타일
   */
  style?: React.CSSProperties

  /**
   * dashed 여부
   */
  dashed?: boolean
}
function Divider({ ...props }: DividerProps) {
  return <StyledDivider {...props} />
}

Divider.defaultProps = {
  dashed: false,
}

export default Divider
