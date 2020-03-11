import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../themes/palette'
import Typography from '../../general/Typography'

const CARD_PADDING_SIZE = {
  small: { header: '12px', body: '12px' },
  default: { header: '16px 24px', body: '24px' },
}

type StyledCardWrapperProps = {
  shadow?: boolean
}

const StyledCardWrapper = styled.div<StyledCardWrapperProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${palette.grayscale[0]};
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  position: relative;
  background: #fff;
  border-radius: 2px;
  transition: all 0.3s;

  ${props =>
    props.shadow
      ? css`
          box-shadow: 0 2px 6px 0 ${palette.shadow};
        `
      : css`
          border: 1px solid ${palette.outline};
        `}

  width: 300px;
`

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
// const StyledMetaTitle = styled.h3`
//   overflow: hidden;
//   font-weight: 500;
//   font-size: 16px;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   margin-top: 0;
//   margin-bottom: 7px;
// `

// const StyledMetaDescription = styled.p`
//   margin: 0;
//   color: ${palette.grayscale[2]};
// `
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
  title?: string
  size?: 'small' | 'default'
  shadow?: boolean
  cover?: React.ReactNode
}
function Card({ children, title, size, cover, shadow, ...props }: CardProps) {
  return (
    <StyledCardWrapper shadow={shadow} {...props}>
      {title && (
        <StyledCardHeader size={size}>
          <StyledCardTitle>{title}</StyledCardTitle>
        </StyledCardHeader>
      )}

      {cover && <StyledImageCover>{cover}</StyledImageCover>}

      <StyledCardBody size={size}>{children}</StyledCardBody>
    </StyledCardWrapper>
  )
}

Card.defaultProps = {
  size: 'default',
  shadow: false,
}

export default Card
