import React from 'react'

import * as Styled from './styled'

import Dim from '../../general/Dim'

export type DrawerPlacement = 'left' | 'right'

export type DrawerProps = {
  children: React.ReactNode

  /** Drawer의 width size */
  size?: number

  /** Drawer 활성화 여부 */
  visible?: boolean

  /** Drawer 가 활성화 될 위치 */
  placement?: DrawerPlacement
  onClose?: () => void
}

function Drawer({ children, visible, onClose, ...props }: DrawerProps) {
  return (
    <>
      <Dim visible={visible} onClose={onClose} />
      <Styled.Drawer visible={visible} {...props}>
        {children}
      </Styled.Drawer>
    </>
  )
}

Drawer.defaultProps = {
  visible: false,
  placement: 'left',
  size: 300,
}

export default Drawer
