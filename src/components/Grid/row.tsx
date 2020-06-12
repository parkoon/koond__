import * as React from 'react'
import styled, { css } from 'styled-components'
import { tuple } from '../__utils/type'
import { ColValueType } from './Col'
import { BREAKPOINTS } from './breakpoints'

const justifyValues = tuple('flex-start', 'flex-end', 'center', 'space-around', 'space-between')
type justifyEnum = typeof justifyValues[number]
const alignValues = tuple('flex-start', 'flex-end', 'center', 'baseline', 'stretch')
type alignEnum = typeof alignValues[number]

export interface GutterObjectType {
  xs: ColValueType
  sm: ColValueType
  md: ColValueType
  lg: ColValueType
}
type GutterArrayType = [ColValueType | GutterObjectType, ColValueType | GutterObjectType]
export type Gutter = ColValueType | GutterObjectType
export interface RowProps {
  /** Horizontal align items*/
  justify?: justifyEnum
  /** Vertical align items */
  align?: alignEnum
  /** space between columns */
  gutter?: Gutter
  /** Cols for your layout  */
  children: React.ReactNode
  /** React.CSSProperties  */
  style?: React.CSSProperties
}

export const Row = ({ gutter, children, ...props }: RowProps) => {
  return (
    <StyledRow gutter={gutter} {...props}>
      {React.Children.map(children, (child: any) => {
        return gutter ? React.cloneElement(child, { gutter }) : child
      })}
    </StyledRow>
  )
}

const StyledRow = styled.div<RowProps>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => (props.justify ? props.justify : 'flex-start')};
  align-items: ${props => (props.align ? props.align : 'center')};
`

export const applyGutter = (gutter: Gutter, screenWidth: string, isRow: boolean = false) => {
  if (typeof gutter === 'number') {
    return css`
      margin: ${gutter}px;
    `
  }
  return applyScreenBasedGutter(gutter, screenWidth, isRow)
}

export const applyScreenBasedGutter = (gutter: GutterObjectType, screenWidth: string, isRow: boolean = false) => {
  switch (screenWidth) {
    // Mobile first approach
    case 'sm':
      const { sm = 0 } = gutter
      return css`
        margin: ${sm}px;
      `
    case 'md':
      const { md = 0 } = gutter
      return css`
        margin: ${md}px;
      `
    case 'xs':
      const { lg = 0 } = gutter
      return css`
        margin: ${lg}px;
      `
    default:
      const { xs = 0 } = gutter
      return css`
        margin: ${xs}px;
      `
  }
}
export default Row
