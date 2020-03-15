import styled from 'styled-components'
import * as I from '../interface'
import palette from '../../../../themes/palette'

const drawerPosition = ({ placement, visible, size }: I.DrawerProps): string =>
  `${placement}:${visible ? 0 : `-${size}px`}`

export const Drawer = styled.div<I.DrawerProps>`
  position: fixed;
  top: 0;
  ${drawerPosition};
  height: 100%;
  width: ${({ size }) => `${size}px`};
  background: ${palette.white};
  z-index: 9999;
  transition: 0.3s;
  padding: 24px;
  box-sizing: border-box;
`
