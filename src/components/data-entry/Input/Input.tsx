import React, { useState } from 'react'

import * as I from './interface'
import * as Styled from './styled'

function Input({ onChange, ...props }: I.InputProps) {
  const [value, setValue] = useState()
  const { prefixIcon, suffixIcon } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <Styled.InputWrapper>
      {prefixIcon && <Styled.PrefixIconWrapper>{prefixIcon}</Styled.PrefixIconWrapper>}
      {suffixIcon && <Styled.SuffixIconWrapper>{suffixIcon}</Styled.SuffixIconWrapper>}
      <Styled.Input value={value} onChange={handleChange} {...props} />
    </Styled.InputWrapper>
  )
}

Input.defaultProps = {
  htmlSize: 'default',
}

export default Input
