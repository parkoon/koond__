import React from 'react'

import * as Styled from './styled'
import * as I from './interface'
import Dim from '../../general/Dim'
import Icon from '../../general/Icon'

function Modal({ visible, children, actions, onClose }: I.ModalProps) {
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
}

export default Modal
