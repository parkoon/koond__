import React, { useState } from 'react'

import * as Styled from './styled'
import * as I from './interface'

import Icon from '../../general/Icon'

function Password({ onChange, helperText, ...props }: I.InputProps) {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState('')

  console.log('helperText', helperText)

  const handleClick = () => {
    setVisible(prevState => !prevState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange(e.target.value)
  }

  return (
    <>
      <Styled.InputWrapper>
        <Styled.Input
          suffixIcon={true}
          value={value}
          onChange={handleChange}
          type={visible ? 'text' : 'password'}
          {...props}
        />
        <Styled.SuffixIconWrapper onClick={handleClick}>
          <Icon name={visible ? 'visible' : 'invisible'} />
        </Styled.SuffixIconWrapper>
      </Styled.InputWrapper>
      {helperText && <Styled.HelperText>{helperText}</Styled.HelperText>}
    </>
  )
}

Password.defaultProps = {
  htmlSize: 'default',
}

export default Password
