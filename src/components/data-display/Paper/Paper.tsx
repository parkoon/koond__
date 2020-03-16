import React from 'react'
import styled from 'styled-components'
import { ambient, penumbra, umbra } from './evaluation'
import palette from '../../../themes/palette'

const StyledPaper = styled.div<PaperProps>`
  display: inline-block;
  position: relative;

  border: ${props => (props.outlined ? `1px solid ${palette.outline}` : 'none')};

  border-radius: ${props => (props.square ? '0px' : '15px')};

  box-shadow: ${props =>
    `${umbra[props.evaluation]} rgba(0, 0, 0, 0.2), ${penumbra[props.evaluation]} rgba(0, 0, 0, 0.14), ${
      ambient[props.evaluation]
    } rgba(0, 0, 0, 0.12)`};
`

type PaperProps = {
  children?: React.ReactNode
  style?: React.CSSProperties

  /** 그림자의 정도 */
  evaluation?: number

  /** 테두리 여부 */
  outlined?: boolean

  /** 사각형으로 표현 할 것인가 */
  square?: boolean
}

function Paper({ children, evaluation, ...props }: PaperProps) {
  /**
   * 0 <= evaluation <= 24
   */
  evaluation = Math.max(0, Math.min(evaluation, 24))

  console.log(evaluation)
  return (
    <StyledPaper evaluation={evaluation} {...props}>
      {children}
    </StyledPaper>
  )
}

Paper.defaultProps = {
  evaluation: 0,
  outlined: false,
  square: false,
}

export default Paper
