import React from 'react'
import styled from 'styled-components'
import { ambient, penumbra, umbra } from './evaluation'
import palette from '../../../themes/palette'

const EVALUATION_MAP = {
  0: '0px 0px 0px 0px',
  1: '0px 2px 1px -1px',
  2: '0px 3px 1px -2px',
  3: '0px 3px 3px -2px',
  4: '0px 2px 4px -1px',
  5: '0px 3px 5px -1px',
  6: '0px 3px 5px -1px',
  7: '0px 4px 5px -2px',
  8: '0px 5px 5px -3px',
  9: '0px 5px 6px -3px',
  10: '0px 6px 6px -3px',
  11: '0px 6px 7px -4px',
  12: '0px 7px 8px -4px',
  13: '0px 7px 8px -4px',
  14: '0px 7px 9px -4px',
  15: '0px 8px 9px -5px',
  16: '0px 8px 10px -5px',
  17: '0px 8px 11px -5px',
  18: '0px 9px 11px -5px',
  19: '0px 9px 12px -6px',
  20: '0px 10px 13px -6px',
  21: '0px 10px 13px -6px',
  22: '0px 10px 14px -6px',
  23: '0px 11px 14px -7px',
  24: '0px 11px 15px -7px',
}

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
  evaluation?: number
  outlined?: boolean
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
