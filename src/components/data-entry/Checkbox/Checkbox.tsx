import React, { useState } from 'react'
import styled from 'styled-components'
import CheckboxGroup from './Group'
import palette from '../../../themes/palette'

const CheckBoxText = styled.span`
  display: inline-block;
  cursor: pointer;
  margin-left: 5px;
  vertical-align: middle;
`
const CheckBoxIcon = styled.span`
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  width: 17px;
  height: 17px;
  border: 1px solid ${palette.outline};
  border-radius: 3px;
  transition: 0.1s ease;

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 6px;
    width: 4px;
    height: 10px;
    border-right: 2px solid ${palette.white};
    border-bottom: 2px solid ${palette.white};
    transform: rotate(45deg) scale(0);
    transition: 0.2s ease;
    transition-delay: 0.15;
    opacity: 0;
  }
`

const StyledCheckbox = styled.input`
  display: none;

  &:checked + span {
    border-color: transparent;
    background: ${palette.primary};
  }

  &:checked + span::after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`

// Types
type CheckBoxProps = {
  children?: React.ReactNode
  checked?: boolean
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ children, onChange, checked, ...props }: CheckBoxProps) {
  const [_checked, setChecked] = useState(checked)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prevState => !prevState)
    onChange(e)
  }
  return (
    <label>
      <StyledCheckbox type="checkbox" onChange={handleChange} checked={_checked} {...props} />
      <CheckBoxIcon />
      <CheckBoxText>{children}</CheckBoxText>
    </label>
  )
}

Checkbox.defaultProps = {
  checked: false,
}

Checkbox.Group = CheckboxGroup
export default Checkbox
