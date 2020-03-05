/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react'
import Drawer from './Drawer'
import Button from '../../general/Button'
import { Radio } from '../../data-entry/Radio'

export default {
  title: 'Feedback',
  component: Drawer,
}

export function drawer() {
  const [visible, setVisible] = useState(false)
  const [placement, setPlacement] = useState('left')

  const showDrawer = () => {
    setVisible(prevState => !prevState)
  }

  const hideDrawer = () => {
    setVisible(false)
  }

  const handleRadioChange = e => {
    setPlacement(e.target.value)
  }
  return (
    <>
      <div>
        <Radio name="pos" value="left" onChange={handleRadioChange} checked>
          left
        </Radio>
        <Radio name="pos" value="right" onChange={handleRadioChange}>
          right
        </Radio>
      </div>
      <Button onClick={showDrawer}>Open</Button>
      <Drawer visible={visible} size={300} onClose={hideDrawer} placement={placement}>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
        <p>Some contents here....</p>
      </Drawer>
    </>
  )
}
