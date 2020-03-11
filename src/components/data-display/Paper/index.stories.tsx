import React from 'react'
import Paper from './'

export default {
  title: 'Data Display',
  component: Paper,
}

export const paper = () => {
  return (
    <>
      <Paper style={{ width: '128px', height: '128px' }} outlined></Paper>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={4} outlined></Paper>
      <Paper style={{ width: '128px', height: '128px' }} evaluation={7} square></Paper>
    </>
  )
}
