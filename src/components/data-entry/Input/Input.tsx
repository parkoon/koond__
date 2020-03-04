import React, { useState } from 'react'
import Password from './Password'
import { InputWrapper, StyledInput, PrefixIconWrapper, SuffixIconWrapper } from './styled/style'

// Types
export type InputProps = {
  placeholder?: string
  htmlSize?: 'large' | 'defualt' | 'small'
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  onChange: (value: any) => void
}

function Input({ onChange, ...props }: InputProps) {
  const [value, setValue] = useState()
  const { prefixIcon, suffixIcon } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <InputWrapper>
      {prefixIcon && <PrefixIconWrapper>{prefixIcon}</PrefixIconWrapper>}
      {suffixIcon && <SuffixIconWrapper>{suffixIcon}</SuffixIconWrapper>}
      <StyledInput value={value} onChange={handleChange} {...props} />
    </InputWrapper>
  )
}

Input.defaultProps = {
  htmlSize: 'default',
}

export default Input
