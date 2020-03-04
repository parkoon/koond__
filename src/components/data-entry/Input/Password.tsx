import React, { useState } from 'react'
import { InputProps } from './Input'
import Icon from '../../general/Icon'
import { SuffixIconWrapper, InputWrapper, StyledInput } from './styled/style'

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
    <InputWrapper>
      <StyledInput
        suffixIcon={true}
        value={value}
        onChange={handleChange}
        type={visible ? 'text' : 'password'}
        {...props}
      />

      <SuffixIconWrapper onClick={handleClick}>
        <Icon name={visible ? 'visible' : 'invisible'} />
      </SuffixIconWrapper>
    </InputWrapper>
  )
}

Password.defaultProps = {
  htmlSize: 'default',
}

export default Password
