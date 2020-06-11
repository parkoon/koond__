import React from 'react'

import * as Styled from './styled'

export type TooltipPlacement = 'top' | 'left' | 'bottom' | 'right'

export type TooltipProps = {
  /** Tooltip에 사용될 컴포넌트 */
  children: React.ReactNode

  /** Tooltip에 표시 할 타이틀명 */
  title: string

  /** Tooltip의위치 'top' | 'left' | 'bottom' | 'right'*/
  placement: TooltipPlacement
}

function Tooltip({ children, placement, title }: TooltipProps) {
  return (
    <Styled.TooltipWrapper className={placement} title={title}>
      {children}
    </Styled.TooltipWrapper>
  )
}

Tooltip.defaultProps = {
  placement: 'bottom',
}

export default Tooltip
