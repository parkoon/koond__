import styled, { css } from 'styled-components'

import palette from '../../../themes/palette'

import { ChipProps, ChipVariant } from '../Chip'

export const ChipWrapper = styled.div<ChipProps & { clickable?: boolean; hasIcon?: boolean }>`
  position: relative;
  cursor: ${props => (props.clickable ? 'pointer' : 'default')};
  height: 32px;
  display: inline-flex;
  padding: 5px 15px;
  font-size: 14px;
  box-sizing: border-box;
  transition: 0.3s;
  align-items: center;
  white-space: nowrap;
  border-radius: 16px;
  justify-content: center;

  opacity: ${props => props.disabled && '0.5'};
  pointer-events: ${props => props.disabled && 'none'};


  /* Color prop에 따른 font color 및 border color 설정 */
  ${props =>
    props.color
      ? css`
          color: ${props.color};
          border: ${`1px solid ${props.color}`};
        `
      : css`
          color: ${palette.typography.default};
          border: 1px solid ${palette.outline};
        `}


  padding-right: ${props => props.hasIcon && '32px'};


  /* Filled component */
  ${props =>
    props.variant === 'fill' &&
    css`
      color: ${palette.white};
      border: none;
      background: ${props.color ? props.color : palette.primary};
    `}

  /* Clickable */
  ${props =>
    props.clickable &&
    css`
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 16px;
        transition: 0.3s;
        opacity: 0;
        background: ${palette.typography.default};
      }
      &:hover::after {
        opacity: 0.1;
      }
    `}
`

export const IconWrapper = styled.div<{ variant: ChipVariant }>`
  position: absolute;
  width: 12px;
  height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 12px;
  color: ${props => props.variant === 'fill' && '#fff'};
  right: 7px;
  transition: 0.3s;
`
