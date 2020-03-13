import React from 'react'

import * as Styled from './styled'
import * as I from './interface'

function Tooltip({ children, placement, title }: I.TooltipProps) {
  return (
    <Styled.TooltipWrapper className={placement} title={title}>
      {children}
    </Styled.TooltipWrapper>
  )
}

Tooltip.defaultProps = {
  title: 'need title prop',
  placement: 'bottom',
}

export default Tooltip
