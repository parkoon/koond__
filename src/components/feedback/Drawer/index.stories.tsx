import React, { useState } from 'react'
import Drawer from './Drawer'
import Button from '../../general/Button'

export default {
  title: 'Feedback',
  component: Drawer,
}

export function drawer() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(prevState => !prevState)
  }

  const hideDrawer = () => {
    setVisible(false)
  }
  return (
    <>
      <Button onClick={showDrawer}>Open</Button>
      <Drawer visible={visible} size={300} onClose={hideDrawer} placement="left">
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
      </Drawer>
    </>
  )
}
