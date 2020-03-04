import React, { useState } from 'react'
import Input, { InputProps } from './Input'
import styled from 'styled-components'
import palette from '../../../themes/palette'
import Icon from '../../general/Icon'

// Constants
const INPUT_SIZE = {
  default: '4px',
  large: '7px',
  small: '2px',
}

// Functions
const inputSize = ({ htmlSize }: InputProps) => `${INPUT_SIZE[htmlSize]} 11px`

const StyledPasswordInput = styled.input`
  padding: ${inputSize};
  padding-left: ${({ icon }) => icon && '27px'};
  color: ${palette.typography.default};
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid ${palette.outline};
  border-radius: 2px;
  outline: none;

  transition: 0.3s;

  &:focus {
    border-color: ${palette.primary};
    box-shadow: 0 0 0 2px ${palette.shadow};
  }

  &:hover {
    border-color: ${palette.primary};
  }

  &::placeholder {
    color: ${palette.outline};
  }
`

const PasswordInputWrapper = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
`

const IconWrapper = styled.span`
  display: flex;
  position: absolute;
  top: 50%;
  right: 7px;
  transform: translateY(-50%);
  color: ${palette.typography.grayscale[2]};
  padding: 4px;
`

function Password({ onChange, ...props }: InputProps) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState()

  const handleClick = () => {
    setVisible(prevState => !prevState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <PasswordInputWrapper>
      <StyledPasswordInput value={value} onChange={handleChange} type={visible ? 'text' : 'password'} {...props} />

      <IconWrapper onClick={handleClick}>
        <Icon name={visible ? 'visible' : 'invisible'} />
      </IconWrapper>
    </PasswordInputWrapper>
  )
}

Password.defaultProps = {
  htmlSize: 'default',
}

export default Password
