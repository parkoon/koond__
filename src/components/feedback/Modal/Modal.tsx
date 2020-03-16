import React from 'react'

import * as Styled from './styled'
import Dim from '../../general/Dim'
import Icon from '../../general/Icon'

type ModalProps = {
  /**
   * 닫기 기능
   */
  onClose?: React.MouseEventHandler<HTMLElement>
  /**
   * 하단에 추가 할 Action 버튼으로 React Node를 배열로 전달
   */
  actions?: React.ReactNode[]
  children: React.ReactNode

  /**
   * 모달 창 활성화 여부
   */
  visible?: boolean
}

function Modal({ visible, children, actions, onClose }: ModalProps) {
  const hasClose = typeof onClose === 'function'
  const hasActions = actions.length > 0

  return (
    <>
      <Dim visible={visible} />

      <Styled.ModalWrapper visible={visible}>
        <Styled.Modal>
          {hasClose && (
            <Styled.ModalClose onClick={onClose}>
              <Icon name="cancel" size={12} />
            </Styled.ModalClose>
          )}

          <Styled.ModalBody>{children}</Styled.ModalBody>

          {hasActions && <Styled.ModalFooter>{actions}</Styled.ModalFooter>}
        </Styled.Modal>
      </Styled.ModalWrapper>
    </>
  )
}

Modal.defaultProps = {
  visible: false,
  actions: [],
  onClose: () => {},
}

export default Modal
