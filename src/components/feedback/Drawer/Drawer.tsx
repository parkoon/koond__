import React from 'react'

import * as I from './interface'
import * as Styled from './styled'

import Dim from '../../general/Dim'

function Drawer({ children, visible, onClose, ...props }: I.DrawerProps) {
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
}

export default Drawer
