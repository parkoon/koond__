import React from 'react'
import Switch from '.'

export default {
  title: 'Switch',
  component: Switch,
}

export const Default = () => {
  const handleChange = checked => {
    console.log(`switch to ${checked}`)
  }
  return (
    <>
      <Switch onChange={handleChange} />
    </>
  )
}
export const Size = () => {
  const handleChange = checked => {
    console.log(`switch to ${checked}`)
  }
  return (
    <>
      <Switch onChange={handleChange} />
      <br />
      <br />
      <Switch onChange={handleChange} size="small" />
    </>
  )
}
export const Checked = () => {
  const handleChange = checked => {
    console.log(`switch to ${checked}`)
  }
  return (
    <>
      <Switch onChange={handleChange} defaultChecked />
    </>
  )
}
