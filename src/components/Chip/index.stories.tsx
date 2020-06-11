import React from 'react'
import Chip from '.'
import Icon from '../Icon'

export default {
  title: 'Chip',
  component: Chip,
}

export const Default = () => {
  return (
    <>
      <Chip title="Basic" />
    </>
  )
}

export const Fill = () => {
  return (
    <>
      <Chip title="Basic" variant="fill" color="#16a085" />
    </>
  )
}

export const Delete = () => {
  const handleDelete = () => {
    alert('deleted')
    // Do something...
  }
  return (
    <>
      <Chip title="Basic" variant="fill" color="red" onDelete={handleDelete} />
    </>
  )
}
export const WithIcon = () => {
  return (
    <>
      <Chip title="Icon" deleteIcon={<Icon name="search" size={10} />} />
    </>
  )
}
