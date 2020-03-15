import React from 'react'

import * as Styled from './styled'
import * as I from './interface'

function Dim({ visible, onClose }: I.DimProps) {
  return <Styled.Dim visible={visible} onClick={onClose} />
}

Dim.defaultProps = {
  visible: false,
}
export default Dim
