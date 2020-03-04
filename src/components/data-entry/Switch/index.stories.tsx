import React from 'react'
import Switch from './'

export default {
  title: 'Data Entry',
  component: Switch,
}

export const _switch = () => {
  const handleChange = checked => {
    console.log(`switch to ${checked}`)
  }
  return (
    <>
      <Switch onChange={handleChange} />
    </>
  )
}
