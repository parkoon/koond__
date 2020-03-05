import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../../themes/palette'

const drawerPosition = ({ placement, visible, size }: DrawerStyleProps) => `${placement}:${visible ? 0 : `-${size}px`}`

const StyledDrawer = styled.div<DrawerStyleProps>`
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

const Dim = styled.div<DimStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  background-color: rgba(0, 0, 0, 0.45);
  transition: 0.3s;
  z-index: -1;
`
type DimStyleProps = {
  visible: boolean
}
type DrawerStyleProps = {
  size: number
  visible?: boolean
  placement: 'left' | 'right'
}

type DrawerProps = {
  children: React.ReactNode
  size: number
  visible?: boolean
  placement: 'left' | 'right'
  onClose: () => void
}
function Drawer({ children, visible, onClose, ...props }: DrawerProps) {
  return (
    <>
      <Dim visible={visible} onClick={onClose} />
      <StyledDrawer visible={visible} {...props}>
        {children}
      </StyledDrawer>
    </>
  )
}

Drawer.defaultProps = {
  visible: false,
  placement: 'left',
}

export default Drawer
