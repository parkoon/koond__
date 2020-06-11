import React, { useState } from 'react'

import * as Styled from './styled'
import Textarea from './Textarea'
import Password from './Password'

type commonProps = {
  placeholder?: string
  defaultValue?: string
  error?: boolean
  helperText?: string

  onChange?: (value: any) => void
}
export type InputProps = commonProps & {
  htmlSize?: 'large' | 'defualt' | 'small'
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
}

export type TextareaProps = commonProps & {
  rows?: number
}

function Input({ onChange, helperText, ...props }: InputProps) {
  const [value, setValue] = useState()
  const { prefixIcon, suffixIcon } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <>
      <Styled.InputWrapper>
        {prefixIcon && <Styled.PrefixIconWrapper>{prefixIcon}</Styled.PrefixIconWrapper>}
        {suffixIcon && <Styled.SuffixIconWrapper>{suffixIcon}</Styled.SuffixIconWrapper>}
        <Styled.Input value={value} onChange={handleChange} {...props} />
      </Styled.InputWrapper>
      {helperText && <Styled.HelperText>{helperText}</Styled.HelperText>}
    </>
  )
}

Input.defaultProps = {
  htmlSize: 'default',
}

Input.Textarea = Textarea
Input.Password = Password

export default Input
