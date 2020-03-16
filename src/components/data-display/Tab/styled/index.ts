import styled, { css } from 'styled-components'

import * as I from '../interface'

import palette from '../../../../themes/palette'

const arrowDown = `
width: 0;
height: 0;
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 8px solid ${palette.primary};
`
const arrowRight = `
width: 0;
height: 0;
border-top: 5px solid transparent;
border-bottom: 5px solid transparent;
border-left: 8px solid ${palette.primary};
`

const headerPosition = ({ placement }: I.TabsProps) => {
  switch (placement) {
    case 'left':
      return `
        float: left;
        display: flex;
        flex-direction: column;
      `

    default:
      return ``
  }
}
const headerSize = ({ placement }: I.TabsProps) => {
  switch (placement) {
    case 'left':
      return `
        max-width: 200px;
        width: 22%;
        height: 100%;

      `

    default:
      return `
        width: auto;
        height: auto;
      `
  }
}
const bodyWidthAndPosition = ({ placement }: I.TabsProps) => {
  switch (placement) {
    case 'left':
      return `
        min-width: 78%;
        float: left;
      `

    default:
      return `
        width: auto;
        float: auto;
      `
  }
}
const bodyPadding = ({ placement }: I.TabsProps) => {
  switch (placement) {
    case 'left':
      return `
        padding: 0px 27px;
      `

    default:
      return `
        padding: 0px 12px;
      `
  }
}

const pointerPlacement = ({ placement }: I.TabsProps) => {
  switch (placement) {
    case 'left':
      return `
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -20px;
          display: none;
          ${arrowRight}
        }
      `
    default:
      return ``
  }
}

export const Tabs = styled.div`
  width: 100%;
  height: 300px;
  &::after {
    content: '';
    display: table;
    clear: both;
  }
`

export const TabLabel = styled.label<I.TabsProps>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  box-sizing: border-box;
  /* margin-right: 35px; */
  margin-right: 7px;
  padding: 12px 12px;
  transition: color 0.3s;
  text-align: center;

  /* Type에 따른 font color */
  ${props =>
    props.type === 'card'
      ? css`
          color: ${palette.white};
        `
      : css`
          color: ${palette.typography.default};
          &:hover {
            color: ${palette.primary};
          }
        `}

  font-weight: 400;

  &.active {
    font-weight: 600;
  }

  /* Type에 따른 선택 효과  */
  ${props =>
    props.type === 'card'
      ? css`
          &::after {
            content: '';
            position: absolute;
            bottom: -8px;
            right: 24px;
            display: none;
            ${arrowDown}
          }

          &.active::after {
            display: block;
          }
        `
      : css`
          &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: ${palette.primary};
            transition: 0.3s;
          }
          &.active::after {
            width: 100%;
          }
        `}

    /* Placemet에 따른 선택 효과 위치 */
    ${pointerPlacement}
`
export const TabsHeader = styled.div<I.TabsProps>`
  position: relative;
  box-sizing: border-box;
  /* Type에 따른 Background 색상 */
  ${props =>
    props.type === 'card'
      ? css`
          background: ${palette.primary};
          color: ${palette.white};
        `
      : css``} 
  border-bottom: 1px solid ${palette.outline};

  /* Placement에 따른 Tab 메뉴 방향 */
  ${headerPosition}

  /* Placement에 따른 width & height */
  ${headerSize}

`
export const TabsBody = styled.div<I.TabsProps>`

  height: 100%;
  overflow: auto;

  box-sizing: border-box;
  /* Placement에 따른 body padding */
  ${bodyPadding}

  /*  Placement에 따른 body position & width */
  ${bodyWidthAndPosition}
`
export const TabContent = styled.div<{ selected: boolean }>`
  display: ${props => (props.selected ? 'block' : 'none')};
`

export const InvisibleInput = styled.input.attrs({ type: 'radio', name: 'Tabs' })`
  display: none;
`
