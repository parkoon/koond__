import React, { useState } from 'react'
import styled from 'styled-components'

const StyledDrawer = styled.div<DrawerProps>`
  position: fixed;
  top: 0;
  right: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
  height: 100%;
  width: ${({ size }) => `${size}px`};
  background: tomato;
  z-index: 9999;
  transition: 0.3s;
`

const Dim = styled.div<DimProps>`
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
type DimProps = {
  visible: boolean
}

type DrawerProps = {
  children: React.ReactNode
  size: number
  visible?: boolean
}
function Drawer({ children, ...props }: DrawerProps) {
  const { visible } = props
  return (
    <>
      <Dim visible={visible} />
      <StyledDrawer {...props}>{children}</StyledDrawer>
    </>
  )
}

Drawer.defaultProps = {
  visible: false,
}

export default Drawer
