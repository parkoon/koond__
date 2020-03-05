import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const StyledDrawer = styled.div<DrawerStyleProps>`
  position: fixed;
  top: 0;
  right: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
  height: 100%;
  width: ${({ size }) => `${size}px`};
  background: tomato;
  z-index: 9999;
  transition: 0.3s;
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
}

type DrawerProps = {
  children: React.ReactNode
  size: number
  visible?: boolean
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
}

export default Drawer
