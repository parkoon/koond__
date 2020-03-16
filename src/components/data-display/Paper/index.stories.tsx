import React from 'react'
import Paper from './'

export default {
  title: 'Paper',
  component: Paper,
}

export const Default = () => {
  return (
    <>
      <Paper style={{ width: '128px', height: '128px' }}></Paper>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={4}></Paper>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={7}></Paper>
    </>
  )
}
export const Outlined = () => {
  return (
    <>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={4} outlined></Paper>
    </>
  )
}
export const Square = () => {
  return (
    <>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={7} square></Paper>
    </>
  )
}
