import React from 'react'
import styled, { css } from 'styled-components'

const commonStyle = css<DrawerStyleProps>`
  position: fixed;
  top: 0;
  height: 100%;
  width: ${({ size }) => `${size}px`};
  background: tomato;
  z-index: 9999;
  transition: 0.3s;
`

const StyledRightDrawer = styled.div<DrawerStyleProps>`
  ${commonStyle}
  right: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
`

const StyledLeftDrawer = styled.div<DrawerStyleProps>`
  ${commonStyle}
  left: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
`

const StyledTopDrawer = styled.div<DrawerStyleProps>`
  ${commonStyle}
  top: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
`

const StyledBottomDrawer = styled.div<DrawerStyleProps>`
  ${commonStyle}
  bottom: ${({ visible, size }) => (visible ? '0' : `-${size}px`)};
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
  placement: 'top' | 'bottom' | 'left' | 'right'
  onClose: () => void
}
function Drawer({ children, visible, onClose, placement, ...props }: DrawerProps) {
  console.log(placement)

  const renderDrawer = () => {
    switch (placement) {
      case 'top':
        return (
          <StyledTopDrawer visible={visible} {...props}>
            {children}
          </StyledTopDrawer>
        )
      case 'bottom':
        return (
          <StyledBottomDrawer visible={visible} {...props}>
            {children}
          </StyledBottomDrawer>
        )

      case 'left':
        return (
          <StyledLeftDrawer visible={visible} {...props}>
            {children}
          </StyledLeftDrawer>
        )

      case 'right':
        return (
          <StyledRightDrawer visible={visible} {...props}>
            {children}
          </StyledRightDrawer>
        )
      default:
        return (
          <StyledLeftDrawer visible={visible} {...props}>
            {children}
          </StyledLeftDrawer>
        )
    }
  }

  return (
    <>
      <Dim visible={visible} onClick={onClose} />
      {renderDrawer()}
    </>
  )
}

Drawer.defaultProps = {
  visible: false,
  placement: 'left',
}

export default Drawer
