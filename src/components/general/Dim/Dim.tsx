import React from 'react'

import * as Styled from './styled'

type DimProps = {
  /**
   * Dim 영역 활성화 여부
   */
  visible?: boolean

  /**
   * Dim 영역 클릭 시 발생하는 이벤트
   */
  onClose?: () => void
}

function Dim({ visible, onClose }: DimProps) {
  return <Styled.Dim visible={visible} onClick={onClose} />
}

Dim.defaultProps = {
  visible: false,
}
export default Dim
