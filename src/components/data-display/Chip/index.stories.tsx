import React from 'react'
import Chip from '.'
import Icon from '../../general/Icon'

export default {
  title: 'Data Display',
}

export const chip = () => {
  const hanleDelete = () => {}
  return (
    <>
      <Chip title="Basic" />
      <Chip title="Basic" variant="fill" color="#16a085" />
      <Chip title="Basic" variant="fill" color="red" onDelete={hanleDelete} />
      <Chip title="Disabled" disabled />
      <Chip title="Deletable" onDelete={hanleDelete} />
      <Chip title="Deletablezzzzzaskdjfaldjlkaj" onDelete={hanleDelete} deleteIcon={<Icon name="search" size={10} />} />
      <Chip title="Basic" variant="fill" deleteIcon={<Icon name="arrow-right" size={10} />} />
      <Chip title="Deletable" onDelete={hanleDelete} />
    </>
  )
}
