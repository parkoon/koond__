import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../themes/palette'
import Paper from '../Paper'

const CARD_PADDING_SIZE = {
  small: { header: '12px', body: '12px' },
  default: { header: '16px 24px', body: '24px' },
}

const StyledImageCover = styled.div`
  & > * {
    display: block;
    width: 100%;
  }
`

type StyledCardBodyProps = {
  size?: 'small' | 'default'
}
const StyledCardBody = styled.div<StyledCardBodyProps>`
  padding: ${props => CARD_PADDING_SIZE[props.size].body};
`
type StyledCardHeaderProps = {
  size?: 'small' | 'default'
}
const StyledCardHeader = styled.div<StyledCardHeaderProps>`
  padding: ${props => CARD_PADDING_SIZE[props.size].header};
  border-bottom: 1px solid ${palette.outline};
`
const StyledCardTitle = styled.h2`
  margin: 0;
  font-size: 16px;
`

type CardProps = {
  children?: React.ReactNode
  style?: React.CSSProperties

  /** 카드에 사용 할 타이틀 */
  title?: string

  /** 카드 사이즈 */
  size?: 'small' | 'default'

  /** 카드에 사용할 이미지 */
  cover?: React.ReactNode

  /** 카드 그림자 정도 */
  evaluation?: number

  /** 카드 테두리 */
  outlined?: boolean

  /** 네모난 카드를 원하는가? */
  square?: boolean
}
function Card({ children, title, size, cover, evaluation, ...props }: CardProps) {
  evaluation = Math.max(0, Math.min(evaluation, 24))
  return (
    <Paper evaluation={evaluation} {...props}>
      {title && (
        <StyledCardHeader size={size}>
          <StyledCardTitle>{title}</StyledCardTitle>
        </StyledCardHeader>
      )}

      {cover && <StyledImageCover>{cover}</StyledImageCover>}

      <StyledCardBody size={size}>{children}</StyledCardBody>
    </Paper>
  )
}

Card.defaultProps = {
  size: 'default',
  evaluation: 0,
  outlined: true,
  square: false,
}

export default Card
