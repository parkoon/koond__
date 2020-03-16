import React, { useState } from 'react'
import Modal from '.'
import Button from '../../general/Button'
import Switch from '../../data-entry/Switch'
import styled from 'styled-components'

export default {
  title: 'Modal',
  component: Modal,
  parameters: {},
}

const SwitchWrapper = styled.div`
  z-index: 9999;
  position: absolute;
  top: 15px;
  left: 15px;
`

export const Default = () => {
  const [visible, setVisible] = useState(false)

  const handleChange = checked => {
    setVisible(checked)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <SwitchWrapper>
        <Switch onChange={handleChange} />
      </SwitchWrapper>
      <Modal onClose={handleClose} visible={visible}>
        <h3>Incididunt cillum</h3>
        <p>
          Ipsum duis non deserunt nostrud anim ipsum deserunt id ea ea quis id. Aliqua cupidatat eiusmod eiusmod nisi
          est dolor cupidatat excepteur cupidatat. Aliquip amet occaecat adipisicing cillum mollit sunt nulla dolor
          labore velit ut ullamco. Dolor in sunt exercitation eu nulla fugiat ex labore sunt quis qui in excepteur
          ullamco. Ut non deserunt non minim officia cillum dolore.
        </p>
      </Modal>
    </>
  )
}

export const Actions = () => {
  const [visible, setVisible] = useState(false)

  const handleChange = checked => {
    setVisible(checked)
  }

  const handleClose = () => {
    setVisible(false)
  }

  return (
    <>
      <SwitchWrapper>
        <Switch onChange={handleChange} />
      </SwitchWrapper>
      <Modal
        onClose={handleClose}
        visible={visible}
        actions={[
          <Button shape="round" variant="primary">
            Action 1
          </Button>,
          <Button shape="round">Action 2</Button>,
        ]}
      >
        <h3>Incididunt cillum</h3>
        <p>
          Ipsum duis non deserunt nostrud anim ipsum deserunt id ea ea quis id. Aliqua cupidatat eiusmod eiusmod nisi
          est dolor cupidatat excepteur cupidatat. Aliquip amet occaecat adipisicing cillum mollit sunt nulla dolor
          labore velit ut ullamco. Dolor in sunt exercitation eu nulla fugiat ex labore sunt quis qui in excepteur
          ullamco. Ut non deserunt non minim officia cillum dolore.
        </p>
      </Modal>
    </>
  )
}
