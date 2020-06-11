import React, { useState } from 'react'

import * as Styled from './styled'

import CheckboxGroup from './Group'

export type Option = {
  label: string
  value: string
}

export type CheckBoxProps = {
  /** 체크박스에 사용될 텍스트 */
  children?: React.ReactNode

  /** 체크되어 있는지 여부 */
  checked?: boolean

  /** 체크박스 이름 */
  name: string

  /** 체크박스 상단에 사용할 타이틀 */
  title?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CheckBoxGroupProps = {
  options: Option[]
  defaultValue: string[]
  title?: React.ReactNode
  onChange: (values: string[]) => void
}

function Checkbox({ children, onChange, checked, title, ...props }: CheckBoxProps) {
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
