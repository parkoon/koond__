import React, { useState } from 'react'

import * as Styled from './styled'
import * as I from './interface'

import CheckboxGroup from './Group'

function Checkbox({ children, onChange, checked, title, ...props }: I.CheckBoxProps) {
  console.log('children', children)
  const [_checked, setChecked] = useState(checked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prevState => !prevState)
    onChange(e)
  }
  return (
    <>
      {title && <Styled.CheckBoxTitle>{title}</Styled.CheckBoxTitle>}
      <label>
        <Styled.Checkbox type="checkbox" onChange={handleChange} checked={_checked} {...props} />
        <Styled.CheckBoxIcon />
        <Styled.CheckBoxText>{children}</Styled.CheckBoxText>
      </label>
    </>
  )
}

Checkbox.defaultProps = {
  checked: false,
}

Checkbox.Group = CheckboxGroup

export default Checkbox
